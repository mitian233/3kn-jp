<script setup lang="ts">
import { Sun, Moon, Monitor } from "@lucide/vue";
import { useTheme, type ThemeMode } from "~/composables/useTheme";

const { theme, setTheme } = useTheme();

const themeSequence: ThemeMode[] = ["light", "dark", "system"];

const themeLabels: Record<ThemeMode, string> = {
  light: "浅色模式",
  dark: "深色模式",
  system: "跟随系统",
};

const currentLabel = computed(() => themeLabels[theme.value]);

const cycleTheme = (event: MouseEvent) => {
  const currentIndex = themeSequence.indexOf(theme.value);
  const nextIndex = (currentIndex + 1) % themeSequence.length;
  setTheme(themeSequence[nextIndex] as ThemeMode, event);
};
</script>

<template>
  <button
    class="theme-toggle w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:cursor-pointer"
    :title="currentLabel"
    @click="cycleTheme"
  >
    <Sun v-if="theme === 'light'" :size="20" :stroke-width="1.5" />
    <Moon v-else-if="theme === 'dark'" :size="20" :stroke-width="1.5" />
    <Monitor v-else :size="20" :stroke-width="1.5" />
  </button>
</template>

<style scoped>
.theme-toggle {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--text);
  box-shadow:
    0 1px 2px rgba(var(--bg-rgb), 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.theme-toggle:hover {
  background-color: color-mix(
    in srgb,
    var(--bg-secondary) 88%,
    var(--text) 12%
  );
  border-color: color-mix(in srgb, var(--border) 65%, var(--text) 35%);
}

:global([data-theme="dark"]) .theme-toggle {
  background-color: color-mix(in srgb, var(--bg) 82%, white 18%);
  border-color: color-mix(in srgb, var(--border) 55%, white 45%);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

:global([data-theme="dark"]) .theme-toggle:hover {
  background-color: color-mix(in srgb, var(--bg) 74%, white 26%);
  border-color: color-mix(in srgb, var(--border) 35%, white 65%);
}
</style>
