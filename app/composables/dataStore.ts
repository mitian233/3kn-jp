export const useShowMenuButtonState = () =>
  useState("showMenuButton", () => true);
export const useShowMenuState = () => useState("showMenu", () => false);
export const useMenuAnimationState = () =>
  useState("menuAnimation", () => true);
export const useBgBlackState = () => useState("bgBlack", () => false);
export const useLoadingIndicatorState = () =>
  useState("loadingIndicator", () => false);
export const useThemeState = () =>
  useState<"light" | "dark" | "system">("theme", () => "system");
