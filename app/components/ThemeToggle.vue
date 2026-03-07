<script setup lang="ts">
import { Sun, Moon, Monitor } from "lucide-vue-next";
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
  setTheme(themeSequence[nextIndex], event);
};
</script>

<template>
  <button
    class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
    style="
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      color: var(--text);
    "
    :title="currentLabel"
    @click="cycleTheme"
  >
    <Sun v-if="theme === 'light'" :size="20" :stroke-width="1.5" />
    <Moon v-else-if="theme === 'dark'" :size="20" :stroke-width="1.5" />
    <Monitor v-else :size="20" :stroke-width="1.5" />
  </button>
</template>
