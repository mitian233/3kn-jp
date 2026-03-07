import { useThemeState } from "./dataStore";

export type ThemeMode = "light" | "dark" | "system";

const getSystemTheme = (): "light" | "dark" => {
  if (import.meta.client) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

const getStoredTheme = (): ThemeMode => {
  if (import.meta.client) {
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    if (stored && ["light", "dark", "system"].includes(stored)) {
      return stored;
    }
  }
  return "system";
};

export const useTheme = () => {
  const themeState = useThemeState();
  const actualTheme = ref<"light" | "dark">("light");

  const applyTheme = (theme: "light" | "dark") => {
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

      const transition = (document as any).startViewTransition(async () => {
        applyTheme(newActual);
        actualTheme.value = newActual;
        await nextTick();
      });

      transition.ready.then(() => {
        const clipPath = [
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

      transition.finished.then(() => {
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
        .addEventListener("change", (e) => {
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
