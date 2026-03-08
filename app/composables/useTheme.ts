import { useThemeState } from "./dataStore";

export type ThemeMode = "light" | "dark" | "system";
type ResolvedThemeMode = Exclude<ThemeMode, "system">;

type ThemeChangeEvent = MediaQueryListEvent;

type DocumentWithOptionalViewTransition = Document & {
  startViewTransition?: (
    updateCallback: () => Promise<void> | void,
  ) => ViewTransition;
};

const THEME_MODES: readonly ThemeMode[] = ["light", "dark", "system"];

const isThemeMode = (value: string | null): value is ThemeMode =>
  value !== null && THEME_MODES.includes(value as ThemeMode);

const getSystemTheme = (): ResolvedThemeMode => {
  if (import.meta.client) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

const getStoredTheme = (): ThemeMode => {
  if (import.meta.client) {
    const stored = localStorage.getItem("theme");
    if (isThemeMode(stored)) {
      return stored;
    }
  }
  return "system";
};

export const useTheme = () => {
  const themeState = useThemeState();
  const actualTheme = ref<ResolvedThemeMode>("light");

  const applyTheme = (theme: ResolvedThemeMode) => {
    if (import.meta.client) {
      const html = document.documentElement;
      html.setAttribute("data-theme", theme);
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  };

  const toggleThemeWithTransition = async (
    newTheme: ThemeMode,
    event?: MouseEvent,
  ) => {
    const oldActual = actualTheme.value;
    const newActual = newTheme === "system" ? getSystemTheme() : newTheme;

    themeState.value = newTheme;
    if (import.meta.client) {
      localStorage.setItem("theme", newTheme);
    }

    if (oldActual === newActual) {
      applyTheme(newActual);
      return;
    }

    if (import.meta.client && "startViewTransition" in document) {
      const x = event?.clientX ?? window.innerWidth / 2;
      const y = event?.clientY ?? window.innerHeight / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      // 在 transition 开始前设置方向标记类
      const html = document.documentElement;
      const transitionClass =
        newActual === "dark" ? "transition-to-dark" : "transition-to-light";
      html.classList.add(transitionClass);

      const transitionDocument = document as DocumentWithOptionalViewTransition;
      const transition = transitionDocument.startViewTransition?.(async () => {
        applyTheme(newActual);
        actualTheme.value = newActual;
        await nextTick();
      });

      transition?.ready.then(() => {
        const clipPath: [string, string] = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        document.documentElement.animate(
          {
            clipPath:
              newActual === "dark" ? clipPath : [clipPath[1], clipPath[0]],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement:
              newActual === "dark"
                ? "::view-transition-new(root)"
                : "::view-transition-old(root)",
          },
        );
      });

      transition?.finished.finally(() => {
        html.classList.remove(transitionClass);
      });
    } else {
      applyTheme(newActual);
      actualTheme.value = newActual;
    }
  };

  const initTheme = () => {
    if (import.meta.client) {
      const stored = getStoredTheme();
      themeState.value = stored;
      const actual = stored === "system" ? getSystemTheme() : stored;
      actualTheme.value = actual;
      applyTheme(actual);

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e: ThemeChangeEvent) => {
          if (themeState.value === "system") {
            const newActual = e.matches ? "dark" : "light";
            actualTheme.value = newActual;
            applyTheme(newActual);
          }
        });
    }
  };

  return {
    theme: themeState,
    actualTheme,
    setTheme: toggleThemeWithTransition,
    initTheme,
  };
};
