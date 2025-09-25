<script setup lang="ts">
interface Props {
  type?: "pulse" | "spinner" | "dots" | "wave" | "progress";
  text?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  overlay?: boolean;
  backgroundColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "pulse",
  text: "加载中...",
  color: "#ff8899",
  size: "md",
  overlay: true,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
});

// 使用 props 进行响应式处理
const { type, text, color, size, overlay, backgroundColor } = toRefs(props);

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

const textSizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};
</script>

<template>
  <div
    class="loading-screen"
    :class="{ 'loading-overlay': overlay }"
    :style="{ backgroundColor: overlay ? backgroundColor : 'transparent' }"
  >
    <div class="loading-container">
      <!-- Pulse Animation -->
      <div
        v-if="type === 'pulse'"
        class="loading-pulse"
        :class="sizeClasses[size]"
      >
        <div class="pulse-dot" :style="{ backgroundColor: color }"></div>
        <div class="pulse-dot" :style="{ backgroundColor: color }"></div>
        <div class="pulse-dot" :style="{ backgroundColor: color }"></div>
      </div>

      <!-- Spinner Animation -->
      <div
        v-else-if="type === 'spinner'"
        class="loading-spinner"
        :class="sizeClasses[size]"
      >
        <div class="spinner-ring" :style="{ borderTopColor: color }"></div>
      </div>

      <!-- Dots Animation -->
      <div v-else-if="type === 'dots'" class="loading-dots">
        <div class="dot" :style="{ backgroundColor: color }"></div>
        <div class="dot" :style="{ backgroundColor: color }"></div>
        <div class="dot" :style="{ backgroundColor: color }"></div>
      </div>

      <!-- Wave Animation -->
      <div v-else-if="type === 'wave'" class="loading-wave">
        <div class="wave-bar" :style="{ backgroundColor: color }"></div>
        <div class="wave-bar" :style="{ backgroundColor: color }"></div>
        <div class="wave-bar" :style="{ backgroundColor: color }"></div>
        <div class="wave-bar" :style="{ backgroundColor: color }"></div>
        <div class="wave-bar" :style="{ backgroundColor: color }"></div>
      </div>

      <!-- Progress Bar -->
      <div v-else-if="type === 'progress'" class="loading-progress">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ backgroundColor: color }"></div>
        </div>
      </div>

      <!-- Loading Text -->
      <p
        v-if="text"
        class="loading-text"
        :class="textSizeClasses[size]"
        :style="{ color }"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  backdrop-filter: blur(2px);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* Pulse Animation */
.loading-pulse {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.pulse-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  animation: pulse 1.4s ease-in-out infinite both;
}

.pulse-dot:nth-child(1) {
  animation-delay: -0.32s;
}
.pulse-dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes pulse {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

/* Spinner Animation */
.loading-spinner {
  position: relative;
}

.spinner-ring {
  width: 100%;
  height: 100%;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #ff8899;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Dots Animation */
.loading-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite both;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}
.dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

/* Wave Animation */
.loading-wave {
  display: flex;
  gap: 0.25rem;
  align-items: end;
}

.wave-bar {
  width: 0.25rem;
  height: 2rem;
  animation: wave 1.2s ease-in-out infinite;
}

.wave-bar:nth-child(1) {
  animation-delay: 0s;
}
.wave-bar:nth-child(2) {
  animation-delay: 0.1s;
}
.wave-bar:nth-child(3) {
  animation-delay: 0.2s;
}
.wave-bar:nth-child(4) {
  animation-delay: 0.3s;
}
.wave-bar:nth-child(5) {
  animation-delay: 0.4s;
}

@keyframes wave {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

/* Progress Bar */
.loading-progress {
  width: 12rem;
}

.progress-bar {
  width: 100%;
  height: 0.25rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.125rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0%;
  border-radius: 0.125rem;
  animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
  0% {
    width: 0%;
    margin-left: 0%;
  }
  50% {
    width: 75%;
    margin-left: 12.5%;
  }
  100% {
    width: 0%;
    margin-left: 100%;
  }
}

/* Loading Text */
.loading-text {
  margin: 0;
  font-weight: 500;
  animation: textFade 2s ease-in-out infinite;
}

@keyframes textFade {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 640px) {
  .loading-container {
    gap: 0.75rem;
  }

  .loading-progress {
    width: 10rem;
  }
}
</style>
