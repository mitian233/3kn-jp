<script setup lang="ts">
import { ref } from "vue";

// 页面标题和元数据
useHead({
  title: "加载屏幕演示 - 3kn.jp",
  meta: [
    { name: "description", content: "展示各种加载屏幕组件的使用方法和效果" },
  ],
});

// 控制状态
const showBasicLoader = ref(false);
const showFullScreenLoader = ref(false);
const currentLoaderType = ref<
  "pulse" | "spinner" | "dots" | "wave" | "progress"
>("pulse");
const customText = ref("加载中...");
const customColor = ref("#ff8899");
const loaderProgress = ref(0);

// 加载器类型选项
const loaderTypes = [
  { value: "pulse", label: "脉冲动画" },
  { value: "spinner", label: "旋转动画" },
  { value: "dots", label: "点点动画" },
  { value: "wave", label: "波浪动画" },
  { value: "progress", label: "进度条" },
];

// 预设颜色
const presetColors = [
  "#ff8899",
  "#4285f4",
  "#34a853",
  "#fbbc05",
  "#ea4335",
  "#9c27b0",
  "#ff9800",
  "#795548",
  "#607d8b",
  "#e91e63",
];

// 演示函数
const showBasicLoaderDemo = () => {
  showBasicLoader.value = true;
  setTimeout(() => {
    showBasicLoader.value = false;
  }, 3000);
};

const showFullScreenLoaderDemo = () => {
  showFullScreenLoader.value = true;
  loaderProgress.value = 0;

  // 模拟进度更新
  const interval = setInterval(() => {
    loaderProgress.value += 10;
    if (loaderProgress.value >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        showFullScreenLoader.value = false;
        loaderProgress.value = 0;
      }, 500);
    }
  }, 300);
};

const onFullScreenComplete = () => {
  console.log("全屏加载完成!");
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">加载屏幕组件演示</h1>
        <p class="text-xl text-gray-600">展示各种美观的加载动画效果</p>
      </div>

      <!-- 基础加载组件演示 -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          基础加载组件 (LoadingScreen)
        </h2>

        <!-- 控制面板 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <!-- 动画类型选择 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              动画类型
            </label>
            <select
              v-model="currentLoaderType"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option
                v-for="type in loaderTypes"
                :key="type.value"
                :value="type.value"
              >
                {{ type.label }}
              </option>
            </select>
          </div>

          <!-- 自定义文本 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              加载文本
            </label>
            <input
              v-model="customText"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="输入加载文本..."
            />
          </div>

          <!-- 颜色选择 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              主题颜色
            </label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="color in presetColors"
                :key="color"
                :class="[
                  'w-8 h-8 rounded-full border-2 transition-all',
                  customColor === color
                    ? 'border-gray-800 scale-110'
                    : 'border-gray-300',
                ]"
                :style="{ backgroundColor: color }"
                @click="customColor = color"
              ></button>
            </div>
          </div>
        </div>

        <!-- 预览区域 -->
        <div class="relative">
          <div
            class="bg-gray-100 rounded-lg p-8 mb-4 min-h-[200px] flex items-center justify-center"
          >
            <LoadingScreen
              :type="currentLoaderType"
              :text="customText"
              :color="customColor"
              :overlay="false"
              size="lg"
            />
          </div>

          <!-- 操作按钮 -->
          <div class="flex justify-center gap-4">
            <button
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              @click="showBasicLoaderDemo"
            >
              显示遮罩加载效果
            </button>
          </div>
        </div>

        <!-- 代码示例 -->
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">使用代码:</h3>
          <div
            class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto"
          >
            <pre><code>&lt;LoadingScreen
  type="{{ currentLoaderType }}"
  text="{{ customText }}"
  color="{{ customColor }}"
  size="lg"
  :overlay="true"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- 全屏加载组件演示 -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          全屏加载组件 (FullScreenLoader)
        </h2>

        <div class="text-center">
          <p class="text-gray-600 mb-6">
            全屏加载组件提供了更丰富的视觉效果，包括品牌展示、进度条和背景动画。
          </p>

          <button
            class="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
            @click="showFullScreenLoaderDemo"
          >
            演示全屏加载效果
          </button>
        </div>

        <!-- 特性说明 -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">主要特性</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 全屏覆盖设计</li>
              <li>• 品牌标识展示</li>
              <li>• 实时进度显示</li>
              <li>• 背景动画效果</li>
              <li>• 响应式适配</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">自定义选项</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• 品牌文本和Logo</li>
              <li>• 主题颜色配置</li>
              <li>• 背景色自定义</li>
              <li>• 最小显示时长</li>
              <li>• 完成回调事件</li>
            </ul>
          </div>
        </div>

        <!-- 代码示例 -->
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">使用代码:</h3>
          <div
            class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto"
          >
            <pre><code>&lt;FullScreenLoader
  :show="showLoader"
  brand-text="3kn.jp"
  subtitle="正在加载精彩内容..."
  color="#ff8899"
  :progress="currentProgress"
  :minimum-duration="1000"
  @complete="onLoadComplete"
/&
gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- 使用说明 -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">使用说明</h2>

        <div class="prose max-w-none">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">
            LoadingScreen 组件
          </h3>
          <p class="text-gray-600 mb-4">
            适用于页面内的局部加载场景，支持多种动画类型和自定义配置。
          </p>

          <h4 class="font-medium text-gray-800 mb-2">主要属性:</h4>
          <ul class="text-sm text-gray-600 mb-6 space-y-1">
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">type</code> - 动画类型
              ('pulse' | 'spinner' | 'dots' | 'wave' | 'progress')
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">text</code> - 显示文本
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">color</code> -
              主题颜色
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">size</code> - 尺寸大小
              ('sm' | 'md' | 'lg')
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">overlay</code> -
              是否显示遮罩层
            </li>
          </ul>

          <h3 class="text-lg font-semibold text-gray-800 mb-3">
            FullScreenLoader 组件
          </h3>
          <p class="text-gray-600 mb-4">
            适用于应用启动、页面切换等需要全屏加载的场景。
          </p>

          <h4 class="font-medium text-gray-800 mb-2">主要属性:</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">show</code> -
              控制显示/隐藏
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">brandText</code> -
              品牌文本
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">subtitle</code> -
              副标题文本
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">progress</code> -
              进度值 (0-100)
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">logoUrl</code> -
              Logo图片地址
            </li>
            <li>
              <code class="bg-gray-100 px-2 py-1 rounded">minimumDuration</code>
              - 最小显示时长(ms)
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 基础加载器遮罩 -->
    <Transition name="fade">
      <div v-if="showBasicLoader" class="fixed inset-0 z-50">
        <LoadingScreen
          :type="currentLoaderType"
          :text="customText"
          :color="customColor"
          size="lg"
        />
      </div>
    </Transition>

    <!-- 全屏加载器 -->
    <FullScreenLoader
      :show="showFullScreenLoader"
      brand-text="3kn.jp"
      subtitle="正在加载演示内容..."
      :color="customColor"
      :progress="loaderProgress"
      @complete="onFullScreenComplete"
    />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

code {
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.875rem;
}

pre {
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>
