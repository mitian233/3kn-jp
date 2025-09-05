<script setup lang="ts">
interface Props {
  show?: boolean;
  brandText?: string;
  subtitle?: string;
  color?: string;
  backgroundColor?: string;
  logoUrl?: string;
  progress?: number;
  minimumDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  show: true,
  brandText: "3kn.jp",
  subtitle: "正在加载...",
  color: "#ff8899",
  backgroundColor: "#ffffff",
  logoUrl: "",
  progress: -1,
  minimumDuration: 1000,
});

const emit = defineEmits<{
  complete: [];
}>();

const isVisible = ref(props.show);
const currentProgress = ref(0);
const startTime = ref(0);

// 监听 show 属性变化
watch(
  () => props.show,
  (newValue) => {
    if (newValue) {
      showLoader();
    } else {
      hideLoader();
    }
  },
);

// 进度条动画
watch(
  () => props.progress,
  (newValue) => {
    if (newValue >= 0 && newValue <= 100) {
      currentProgress.value = newValue;
    }
  },
);

const showLoader = () => {
  isVisible.value = true;
  startTime.value = Date.now();

  // 如果没有提供具体进度，使用模拟进度
  if (props.progress < 0) {
    simulateProgress();
  }
};

const hideLoader = () => {
  const elapsed = Date.now() - startTime.value;
  const remaining = Math.max(0, props.minimumDuration - elapsed);

  setTimeout(() => {
    isVisible.value = false;
    emit("complete");
  }, remaining);
};

const simulateProgress = () => {
  const interval = setInterval(() => {
    if (currentProgress.value < 90) {
      currentProgress.value += Math.random() * 15;
    } else if (currentProgress.value < 100 && !props.show) {
      currentProgress.value = 100;
      clearInterval(interval);
    }
  }, 150);
};

onMounted(() => {
  if (props.show) {
    showLoader();
  }
});
</script>

<template>
  <Transition name="loader-fade">
    <div
      v-if="isVisible"
      class="fullscreen-loader"
      :style="{ backgroundColor }"
    >
      <!-- 背景装饰 -->
      <div class="loader-background">
        <div class="floating-shapes">
          <div
            v-for="i in 6"
            :key="i"
            class="shape"
            :class="`shape-${i}`"
            :style="{ borderColor: color + '20' }"
          ></div>
        </div>
      </div>

      <!-- 主要内容 -->
      <div class="loader-content">
        <!-- Logo 区域 -->
        <div class="logo-section">
          <div v-if="logoUrl" class="logo-image">
            <img :src="logoUrl" :alt="brandText" />
          </div>
          <div v-else class="logo-text">
            <h1 :style="{ color }">{{ brandText }}</h1>
          </div>
        </div>

        <!-- 加载动画 -->
        <div class="loading-animation">
          <!-- 脉冲圆环 -->
          <div class="pulse-rings">
            <div
              v-for="i in 3"
              :key="i"
              class="pulse-ring"
              :class="`ring-${i}`"
              :style="{ borderColor: color }"
            ></div>
          </div>

          <!-- 中心点 -->
          <div class="center-dot" :style="{ backgroundColor: color }"></div>
        </div>

        <!-- 进度条 -->
        <div class="progress-section">
          <div class="progress-bar-container">
            <div class="progress-bar-bg"></div>
            <div
              class="progress-bar-fill"
              :style="{
                backgroundColor: color,
                width: `${currentProgress}%`,
              }"
            ></div>
          </div>
          <div class="progress-text" :style="{ color }">
            {{ Math.round(currentProgress) }}%
          </div>
        </div>

        <!-- 副标题 -->
        <div class="subtitle-section">
          <p class="subtitle" :style="{ color: color + 'AA' }">
            {{ subtitle }}
          </p>
        </div>
      </div>

      <!-- 底部品牌信息 -->
      <div class="footer-section">
        <div class="brand-info" :style="{ color: color + '80' }">
          <span>Powered by 3kn.jp</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fullscreen-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
}

.loader-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border: 2px solid;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 40px;
  height: 40px;
  top: 20%;
  right: 15%;
  animation-delay: 1s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 20%;
  animation-delay: 2s;
}

.shape-4 {
  width: 50px;
  height: 50px;
  bottom: 30%;
  right: 10%;
  animation-delay: 3s;
}

.shape-5 {
  width: 30px;
  height: 30px;
  top: 50%;
  left: 5%;
  animation-delay: 4s;
}

.shape-6 {
  width: 70px;
  height: 70px;
  top: 60%;
  right: 25%;
  animation-delay: 5s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.6;
  }
}

.loader-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.logo-section {
  text-align: center;
}

.logo-image img {
  max-width: 120px;
  max-height: 120px;
  object-fit: contain;
}

.logo-text h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.loading-animation {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pulse-rings {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.pulse-ring {
  position: absolute;
  border: 2px solid;
  border-radius: 50%;
  animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

.ring-1 {
  width: 60px;
  height: 60px;
  top: 30px;
  left: 30px;
  animation-delay: 0s;
}

.ring-2 {
  width: 80px;
  height: 80px;
  top: 20px;
  left: 20px;
  animation-delay: 0.5s;
}

.ring-3 {
  width: 100px;
  height: 100px;
  top: 10px;
  left: 10px;
  animation-delay: 1s;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.33);
    opacity: 1;
  }
  80%,
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.center-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: center-pulse 2s ease-in-out infinite;
}

@keyframes center-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.progress-section {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.progress-bar-container {
  position: relative;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
}

.progress-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 3px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 136, 153, 0.5);
}

.progress-text {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.subtitle-section {
  text-align: center;
}

.subtitle {
  font-size: 1rem;
  margin: 0;
  animation: subtitle-fade 3s ease-in-out infinite;
}

@keyframes subtitle-fade {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.footer-section {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.brand-info {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* 过渡动画 */
.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: all 0.5s ease;
}

.loader-fade-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.loader-fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .logo-text h1 {
    font-size: 2.5rem;
  }

  .loading-animation {
    width: 100px;
    height: 100px;
  }

  .ring-1 {
    width: 50px;
    height: 50px;
    top: 25px;
    left: 25px;
  }

  .ring-2 {
    width: 70px;
    height: 70px;
    top: 15px;
    left: 15px;
  }

  .ring-3 {
    width: 90px;
    height: 90px;
    top: 5px;
    left: 5px;
  }

  .progress-section {
    width: 250px;
  }

  .loader-content {
    gap: 1.5rem;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .logo-text h1 {
    font-size: 2rem;
  }

  .progress-section {
    width: 200px;
  }

  .shape {
    display: none;
  }
}
</style>
