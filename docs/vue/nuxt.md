---
sidebar: auto
---

# nuxt

## 基础知识

### 自动导入

1. 在 nuxt 中部分文件夹下的文件和组合式函数时无需显式的导入的

   - vue 中的组合式函数无需显式的导入即可使用，nuxt 会自动导入

   - nuxt 中的组合式函数页无需显式的导入

   - composables 文件夹下的文件抛出的属性、方法也无需显式的导入，能在页面中直接使用。

     ```js
     // composables/test.js
     export const fun = () => {
       console.log("fun test");
     };

     export const str = "composables-str";
     ```

   - components 文件夹下面的组件无需显式的导入，能在页面中直接使用

     如果组件的父级是 components，那么可以直接使用组件名，如果组件的父级文件夹不直接是 component 而是嵌套了一层，那么组件名会默认加上其父级文件夹的名称，在页面中使用也得加上其父文件夹的名称。

     ```html
     <!-- 组件位置 components/compon/children-com.vue -->
     <div>
       <ComponChildrenCom />
     </div>
     ```

   - utils 文件夹下的工具函数等页无需显式的导入，能在页面中直接使用

     ```js
     // utils/deep.js
     export const deepClone = (obj) => {
       return structuredClone(obj);
     };
     ```

2. 显式的导入属性、方法组合式函数和也可以从`#imports`中导入

   ```typescript
   import { deepClone, fun, ref, computed } from "#imports";
   ```

3. 显示的导入组件可以从`#components`中导入

   ```js
   import { ChildrenCom } from "#components";
   ```

4. 禁用自动导入

   在 nuxt.config.ts 文件中写入

   ```js
   export default defineNuxtConfig({
     // 禁用属性方法，组合式函数的自动导入
     imports: {
       autoImport: false,
     },
     // 禁用组件的自动导入
     components: {
       dirs: [],
     },
   });
   ```

5. 第三方包也可以配置自动导入

   配置 lodash 的方法 cloneDeep 自动导入，配置之后即可在页面中直接使用 cloneDeep 方法

   ```js
   export default defineNuxtConfig({
     imports: {
       presets: [
         {
           from: "lodash",
           imports: ["cloneDeep"],
         },
       ],
     },
   });
   ```

### 组件

1. 在 components 文件的下面的组件会自动导入，无需显示的导入即可使用

2. 组件虽然在 components 文件夹下面，但是嵌套的文件夹，那么使用组件的时候，组件的名称前面要加上其父级文件夹的名称

3. 动态组件需要先导入组件，可以从`#components`或者`resolveComponent`中先导入组件。

   ```html
   <script setup lang="ts">
     import { SomeComponent } from "#components";
     const MyButton = resolveComponent("MyButton");
   </script>

   <template>
     <component :is="clickable ? MyButton : 'div'" />
     <component :is="SomeComponent" />
   </template>
   ```

4. 动态导入组件，在组件名称前面加入`Lazy`，并`v-if`加延迟加载组件，可以减少 js 包的体积。

   ```html
   <!-- 组件原名称 ChildrenCom -->
   <LazyChildrenCom v-if="show" />
   ```

5. 增加自定义文件夹的自动导入

   ```js
   export default defineNuxtConfig({
     components: [
       // ~/calendar-module/components/event/Update.vue => <EventUpdate />
       { path: '~/calendar-module/components' },
   })
   ```

6. 客户端组件，如组件只在客户端渲染，而不在服务度渲染，可以为组件添加`.client`后缀。使用的时候则不需要添加其后缀。

   ```html
   <!--  组件 compnents/children-com.client.vue  -->
   <template>
     <ChildrenCom />
   </template>
   ```

7. 服务度组件，添加`.server`后缀，使用方式同上。

8. `<ClientOnly>`组件，被该组件包裹的内容则只会在**客户端**渲染，在他里面的`fallback`插槽里的内容则可以在服务端渲染。

   ```html
   <ClientOnly fallbackTag="span">
     <!-- 此组件仅在客户端渲染 -->
     <Comments />
     <template #fallback>
       <!-- 这将在服务器端渲染 -->
       <p>Loading comments...</p>
     </template>
   </ClientOnly>
   ```

9. `<DevOnly>` 组件，只会在**开发**环境进行渲染。

10. `<NuxtClientFallback>` 组件，如果里面的组件在`SSR(服务端渲染)`中触发错误，则会在客户端进行渲染。

### `layouts`布局

通过在`app.vue`中配置`<NuxtLayout>`启用布局。在项目的根目录下面添加一个`layouts`的文件夹，并创建一个`default.vue`的布局，此时如果已经配置了`<NuxtLayout>`，那么这个`default.vue`的内容将会呈现在所有页面中。

注意：`layouts`文件夹下的布局文件中必须要有插槽，不然所有页面的内容都会被替换为布局文件的内容。

- 指定某个页面使用指定的`layouts`布局，在页面中写入

  ```js
  definePageMeta({
    layout: "top-menu",
  });

  或者
  <NuxtLayout name="top-menu">
  	<div>home</div>
  </NuxtLayout>
  ```

- 动态更改`layouts`布局，借助`setPageLayout`函数

  ```js
  setTimeout(() => {
    setPageLayout("top-menu");
  }, 1000);
  ```

- 当前页面禁用`layouts`布局

  ```js
  definePageMeta({
    layout: false,
  });
  ```

### 路由

1. `pages`文件夹下的`.vue`、`.js`、`.jsx`、`.mjs`、`.ts` 或 `.tsx`文件 nuxt 都会为他们创建路由。特殊的`index`会默认创建为`/`的路由

2. 全匹配路由，跳转任意路由都会跳转到这个路由上

   > pages/[...slug].vue

3. 嵌套路由，如果文件的父级不直接是`pages`文件夹，那么生成的路由地址前就有其父级的文件夹名称。

   ```js
   如文件的位置为 pages/home/home.vue
   跳转就需要 router.push("/home/home")
   ```

4. 路由跳转，除了使用`vue-router`的跳转方式外，在 nuxt 中还提供了`navigateTo`的跳转方式，无需引用，使用方式和`vue-router`一样可以携带参数。但是使用时最好在前面加上`return`或者`await`。

   ```js
   function navigate() {
     return navigateTo({
       path: "/search",
       query: {
         name: "zs",
       },
     });
   }
   ```

5. 页面元数据，可以使用`definePageMeta`为每个页面创建元数据，并通过`route`访问它。

   ```js
   definePageMeta({
     title: "我的主页",
   });

   console.log(route.meta.title); // 我的主页
   ```

### 插件

1. 类似于 vue 创建插件一样，在根目录下面创建`plugins`文件夹，里面顶层的文件才会被自动扫描为插件，如果文件夹的父级不直接是`plugins`那么则需要手动注册插件。

   ```js
   // nuxt.config.ts
   export default defineNuxtConfig({
     // 注册baz和foz插件
     plugins: ["~/plugins/bar/baz", "~/plugins/bar/foz"],
   });
   ```

2. vue 自定义指令

   ```js
   export default defineNuxtPlugin((nuxtApp) => {
     nuxtApp.vueApp.directive("focus", {
       mounted(el) {
         el.focus();
       },
       getSSRProps(binding, vnode) {
         // 你可以在这里提供SSR特定的props
         return {};
       },
     });
   });
   ```

## 内置组件

### \<ClientOnly> 客户端渲染

默认插槽中的内容将会在客户端渲染，`fallback`插槽的东西将在服务端渲染，也就是这个页面刚回来的时候会显示`fallback`插槽面面的内容，在客户端内容渲染完毕后将会替换掉服务端渲染的内容

```html
<ClientOnly>
  <template #fallback>
    <p>这将在服务器端渲染</p>
  </template>

  <p>这将在客户端渲染</p>
</ClientOnly>
```

### \<NuxtClientFallback> 客户端渲染

实验性功能，暂不使用

### \<NuxtPage> 等价于\<RouterView>

是基于`RouterView`的封装。

1. 组件属性

   - name：告诉 `RouterView` 在匹配的路由记录的组件选项中使用对应名称渲染组件

   - route：已解析所有组件的路由位置

   - pageKey：控制何时重新渲染 `NuxtPage` 组件

     ```html
     <!--  组件在挂载时只会渲染一次 -->
     <NuxtPage page-key="static" />

     <!-- 任意路由及参数发生变化时就渲染 -->
     <NuxtPage :page-key="route => route.fullPath" />
     ```

     ```js
     // 也可在任意页面传入
     <script setup lang="ts">
     definePageMeta({
       key: route => route.fullPath
     })
     </script>
     ```

2. 获取组件实例

   一定要通过`pageRef`获取

   ```js
   <script setup lang="ts">
   const page = ref()

   onMounted(() => {
     console.log(page.value.pageRef)
   })
   </script>

   <template>
     <NuxtPage ref="page" />
   </template>
   ```

3. 自定义属性

   往`NuxtPage `添加的自定义属性会传递到每一个子路由页面中，模板上通过`$attrs`，script 中通过`useAttrs()`即可获取对应的自定义属性

   ```html
   <NuxtPage foo="foo数据"></NuxtPage>

   <!--  读取数据，在任意子页面中 -->
   <div>{{ $attrs.foo }}</div>
   ```

### \<NuxtLayout> 布局组件

`layout`布局组件，一般嵌套在`NuxtPage`组件的外层，给所有页面加上默认布局。

1. 组件属性

   - name：指定要渲染的 layout 布局组件，如果没有指定则默认使用`layouts`文件夹下的`default`组件。

     ```html
     <!--  指定使用layouts文件夹下的common组件布局 -->
     <NuxtLayout name="common">
       <NuxtPage></NuxtPage>
     </NuxtLayout>
     ```

2. 自定义属性

   往`NuxtLayout`添加的自定义属性会传递到对应的布局文件中，在布局文件中模板上通过`$attrs`，script 中通过`useAttrs()`即可获取对应的自定义属性。

   ```html
   <!-- 传递自定义属性 -->
   <NuxtLayout title="我是一个自定义布局">
     <NuxtPage></NuxtPage>
   </NuxtLayout>

   <!-- 在default组件中获取传递过来的值 -->
   <div>{{ $attrs.title }}</div>
   ```

3. 获取组件实例

   一定要通过`layoutRef`获取

   ```js
   <script setup lang="ts">
   const layout = ref()

   onMounted(() => {
     console.log(layout.value.layoutRef)
   })
   </script>

   <template>
     <NuxtLayout ref="layout" />
   </template>
   ```

### \<NuxtLink> 等价于\<RouterLink>

- `to`：任意 URL 或 Vue Router 的 路由位置对象
- `href`：`to` 的别名。如果与 `to` 一起使用，将忽略 `href`
- `target`：链接上要应用的 `target` 属性值
- `rel`：链接上要应用的 `rel` 属性值。对于外部链接，默认为 `"noopener noreferrer"`
- `noRel`：如果设置为 `true`，链接将不会添加 `rel` 属性
- `activeClass`：应用于活动链接的类。与 Vue Router 的 `active-class` 属性 在内部链接上的工作方式相同。默认为 Vue Router 的默认值 (`"router-link-active"`)
- `exactActiveClass`：应用于精确活动链接的类。与 Vue Router 的 `exact-active-class` 属性在内部链接上的工作方式相同。默认为 Vue Router 的默认值 (`"router-link-exact-active"`)
- `replace`：与 Vue Router 的 `replace` 属性在内部链接上的工作方式相同
- `ariaCurrentValue`：应用于精确活动链接的 `aria-current` 属性值。与 Vue Router 的 `aria-current-value` 属性 在内部链接上的工作方式相同
- `external`：强制将链接视为外部链接 (`true`) 或内部链接 (`false`)。这对处理边缘情况很有帮助
- `prefetch` 和 **noPrefetch**：是否为进入视口的链接启用预加载资源
- `prefetchedClass`：应用于已预加载链接的类
- `custom`：是否将 `<NuxtLink>` 的内容包装在 `<a>` 元素中。它允许完全控制链接的渲染方式和点击时的导航工作。与 Vue Router 的 `custom` 属性的工作方式相同

### \<NuxtLoadingIndicator /> 进度条

1. [使用方式](https://nuxt.com.cn/docs/api/components/nuxt-loading-indicator)，好像不能正确的显示

   ```html
   <NuxtLayout>
     <div>
       <NuxtLoadingIndicator />
       <!-- 在这里 -->
       <NuxtPage />
     </div>
   </NuxtLayout>
   ```

2. 支持的属性

   - `color`: 进度条的颜色。可以设置为 `false` 来关闭显式的颜色样式。
   - `height`: 进度条的高度，以像素为单位（默认为 `3`）。
   - `duration`: 进度条的持续时间，以毫秒为单位（默认为 `2000`）。
   - `throttle`: 进度条出现和隐藏的节流时间，以毫秒为单位（默认为 `200`）

3. 阅读源码后得到的使用方式

   ```js
   <template>
     <div>
       <NuxtLayout>
         <NuxtLoadingIndicator ref="loadingIndicator"></NuxtLoadingIndicator>
         <button @click="showLoadingIndicator">按钮</button>
         <NuxtPage></NuxtPage>
       </NuxtLayout>
     </div>
   </template>

   <script setup lang="ts">
   const loadingIndicator = ref()

   function showLoadingIndicator() {
     // 开启进度条
     loadingIndicator.value.start()
     setTimeout(() => {
       // 关闭进度条
       loadingIndicator.value.finish()
     }, 10000)
   }
   </script>
   ```

### \<NuxtErrorBoundary> 捕获客户端错误

组件用于处理在其默认插槽中发生的客户端错误

`<NuxtErrorBoundary>`在底层使用了 Vue 的 onErrorCaptured 钩子。

- @error：当组件的默认插槽抛出错误时触发的事件。

  ```vue
  <template>
    <NuxtErrorBoundary @error="logSomeError">
      <!-- ... -->
    </NuxtErrorBoundary>
  </template>
  ```

### \<NuxtIsland> 渲染静态组件

实验性组件，用于渲染一个没有任何客户端 JS 的非交互式组件。

### \<Teleport> 传送

将插槽里面的内容传递到`to`指定的 dom 节点下面

```html
<template>
  <Teleport to="body">
      <p>来自模态框的问候！</p>
    </div>
  </Teleport>
</template>
```

## composables Api

### useAppConfig()

读取根目录下`app.config.ts`的配置项。

```js
const appConfig = useAppConfig()
console.log(appConfig)
```

