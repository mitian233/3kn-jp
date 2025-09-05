# 加载屏幕组件使用说明

本项目提供了两个高质量的加载屏幕组件，用于提升用户体验：

## 组件列表

### 1. LoadingScreen.vue - 基础加载组件
适用于页面内的局部加载场景，支持多种动画类型和自定义配置。

### 2. FullScreenLoader.vue - 全屏加载组件
适用于应用启动、页面切换等需要全屏加载的场景，提供品牌展示和丰富的视觉效果。

## LoadingScreen 组件

### 基本用法

```vue
<template>
  <LoadingScreen
    type="pulse"
    text="加载中..."
    color="#ff8899"
    size="md"
    :overlay="true"
  />
</template>
```

### 属性配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'pulse' \| 'spinner' \| 'dots' \| 'wave' \| 'progress'` | `'pulse'` | 动画类型 |
| `text` | `string` | `'加载中...'` | 显示文本 |
| `color` | `string` | `'#ff8899'` | 主题颜色 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 组件尺寸 |
| `overlay` | `boolean` | `true` | 是否显示遮罩层 |
| `backgroundColor` | `string` | `'rgba(255, 255, 255, 0.9)'` | 背景颜色 |

### 动画类型说明

- **pulse**: 脉冲动画，三个点依次闪烁
- **spinner**: 旋转圆环动画
- **dots**: 弹跳点动画
- **wave**: 波浪条形动画
- **progress**: 进度条动画

### 使用示例

```vue
<script setup>
const showLoader = ref(false)

const startLoading = () => {
  showLoader.value = true
  // 模拟异步操作
  setTimeout(() => {
    showLoader.value = false
  }, 3000)
}
</script>

<template>
  <div>
    <button @click="startLoading">开始加载</button>

    <!-- 遮罩层加载 -->
    <LoadingScreen
      v-if="showLoader"
      type="spinner"
      text="正在处理请求..."
      color="#4285f4"
      size="lg"
    />

    <!-- 页面内加载 -->
    <div class="content-area">
      <LoadingScreen
        type="wave"
        text="内容加载中"
        color="#34a853"
        :overlay="false"
      />
    </div>
  </div>
</template>
```

## FullScreenLoader 组件

### 基本用法

```vue
<template>
  <FullScreenLoader
    :show="showLoader"
    brand-text="3kn.jp"
    subtitle="正在加载精彩内容..."
    color="#ff8899"
    :progress="currentProgress"
    @complete="onLoadComplete"
  />
</template>
```

### 属性配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `show` | `boolean` | `true` | 控制显示/隐藏 |
| `brandText` | `string` | `'3kn.jp'` | 品牌文本 |
| `subtitle` | `string` | `'正在加载...'` | 副标题文本 |
| `color` | `string` | `'#ff8899'` | 主题颜色 |
| `backgroundColor` | `string` | `'#ffffff'` | 背景颜色 |
| `logoUrl` | `string` | `''` | Logo图片地址 |
| `progress` | `number` | `-1` | 进度值 (0-100)，-1为自动模拟进度 |
| `minimumDuration` | `number` | `1000` | 最小显示时长(毫秒) |

### 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `complete` | 加载完成时触发 | 无 |

### 使用示例

```vue
<script setup>
const showFullLoader = ref(false)
const loadProgress = ref(0)

const startFullScreenLoading = () => {
  showFullLoader.value = true
  loadProgress.value = 0

  // 模拟进度更新
  const interval = setInterval(() => {
    loadProgress.value += 10
    if (loadProgress.value >= 100) {
      clearInterval(interval)
      showFullLoader.value = false
    }
  }, 200)
}

const onLoadingComplete = () => {
  console.log('加载完成!')
  // 执行后续操作
}
</script>

<template>
  <div>
    <button @click="startFullScreenLoading">
      启动全屏加载
    </button>

    <FullScreenLoader
      :show="showFullLoader"
      brand-text="我的应用"
      subtitle="正在初始化应用..."
      color="#9c27b0"
      background-color="#f5f5f5"
      :progress="loadProgress"
      :minimum-duration="2000"
      @complete="onLoadingComplete"
    />
  </div>
</template>
```

## 高级用法

### 自定义Logo

```vue
<template>
  <FullScreenLoader
    :show="showLoader"
    brand-text="My Brand"
    logo-url="/assets/logo.png"
    subtitle="Loading awesome content..."
  />
</template>
```

### 动态主题切换

```vue
<script setup>
const themes = {
  blue: { color: '#4285f4', bg: '#f8f9ff' },
  green: { color: '#34a853', bg: '#f0fff4' },
  red: { color: '#ea4335', bg: '#fff5f5' }
}

const currentTheme = ref('blue')
</script>

<template>
  <LoadingScreen
    type="spinner"
    :color="themes[currentTheme].color"
    :background-color="themes[currentTheme].bg"
  />
</template>
```

### 条件加载

```vue
<script setup>
const { pending, data } = await useLazyFetch('/api/data')
</script>

<template>
  <div>
    <LoadingScreen
      v-if="pending"
      type="dots"
      text="正在获取数据..."
      color="#ff8899"
    />

    <div v-else>
      <!-- 数据内容 -->
      {{ data }}
    </div>
  </div>
</template>
```

## 样式自定义

### CSS 变量覆盖

```css
/* 在你的组件或全局样式中 */
.custom-loader {
  --loader-color: #your-color;
  --loader-bg: #your-background;
  --loader-size: 60px;
}
```

### 响应式设计

组件已内置响应式设计，在移动设备上会自动调整尺寸和布局。

## 性能优化建议

1. **按需导入**: 只在需要的页面导入组件
2. **条件渲染**: 使用 `v-if` 而不是 `v-show` 来控制显示
3. **合理设置最小时长**: 避免闪烁效果，提升用户体验
4. **及时清理**: 确保在组件销毁时清理定时器和事件监听器

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 常见问题

### Q: 如何在 Nuxt.js 中使用？
A: 组件会自动注册，直接在模板中使用即可。

### Q: 可以同时显示多个加载器吗？
A: 不建议同时显示多个全屏加载器，但可以在不同区域显示多个基础加载器。

### Q: 如何自定义动画效果？
A: 可以通过覆盖组件的 CSS 类来自定义动画，或者修改组件源码添加新的动画类型。

### Q: 加载器不显示怎么办？
A: 检查 z-index 层级，确保没有被其他元素遮挡。

## 更新日志

### v1.0.0 (2024-01-XX)
- ✨ 新增 LoadingScreen 基础组件
- ✨ 新增 FullScreenLoader 全屏组件
- 🎨 支持多种动画效果
- 📱 响应式设计支持
- 🎯 TypeScript 支持

---

有任何问题或建议，请访问 [3kn.jp](https://3kn.jp) 或提交 Issue。
