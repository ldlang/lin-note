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
const appConfig = useAppConfig();
console.log(appConfig);
```

### useAsyncData()

同步的发起请求，会阻碍路由的跳转，如果将`lazy`设为`true`则不会阻碍页面，useAsyncData 会将 fetch 的得到的数据包装为响应式数据。参数说明参照`useFetch`

```js
const { data, pending, error, refresh } = await useAsyncData("mountains", () =>
  $fetch("https://api.nuxtjs.dev/mountains")
);
```

### useFetch()

等同于`useAsyncData`和`$fetch`组合的语法糖。

**完整使用示例**

```js
const { data, pending, error, refresh } = await useFetch<IData>('/first', {
  method: 'get',
  query: {id = 5}，
  params: {id = 5},
  body: {id = 5},
  headers: '请求头',
  baseURL: 'http://127.0.0.1:3001',
  // useAsyncData支持配置开始
  key: 'first',
  server: true,
  lazy: true,
  immediate: false,
  default: () => {
    slogan: 'slogan'
  },
  transform: () => {},
  pick: ['slogan'],
  watch: [page],
  deep: true,
  // useAsyncData支持配置结束
  onRequest({ request, options }) {
    // 设置请求头
  },
  onRequestError({ request, options, error }) {
    // 处理请求错误
  },
  onResponse({ request, response, options }) {
    // 处理响应数据
  },
  onResponseError({ request, response, options }) {
    // 处理响应错误
  }
})
```

1. 配置参数说明
   - `method`：请求方法。
   - `query`：使用 ufo 将查询搜索参数添加到 URL。
   - `params`：`query`的别名。
   - `body`：请求体 - 自动转换为字符串（如果传递的是对象）。
   - `headers`：请求头。
   - `baseURL`：请求的基本 URL。
   - `key`：一个唯一的键，用于确保数据获取可以在请求之间正确去重。如果未提供，将根据使用`useAsyncData`的静态代码位置生成。
   - `server`：是否在服务器上获取数据（默认为`true`）。
   - `lazy`：是否在加载路由后解析异步函数，而不是阻止客户端导航（默认为`false`）。
   - `immediate`：如果设置为`false`，将阻止立即发出请求（默认为`true`）。
   - `default`：一个工厂函数，用于设置`data`的默认值，在异步函数解析之前使用 - 与`lazy: true`或`immediate: false`选项一起使用。
   - `transform`：在解析后可以用于更改`handler`函数结果的函数。
   - `pick`：仅从`handler`函数结果中选择指定的键。
   - `watch`：监听一组响应式源，并在它们发生变化时自动刷新获取的结果。默认情况下，会监听 fetch 选项和 URL。您可以通过使用`watch: false`来完全忽略响应式源。结合`immediate: false`，可以实现完全手动的`useFetch`。
   - `deep`：以深层 ref 对象的形式返回数据（默认为`true`）。可以将其设置为`false`，以在浅层 ref 对象中返回数据，如果您的数据不需要深层响应，则可以提高性能。
2. 返回值说明
   - `data`：传入的异步函数的结果。
   - `pending`：一个布尔值，指示数据是否仍在获取中。
   - `refresh`/`execute`：一个可以用于刷新`handler`函数返回的数据的函数(调用刷新接口)。
   - `error`：如果数据获取失败，则为错误对象。
   - `status`：表示数据请求的状态的字符串（"idle"、"pending"、"success"、"error"）。

### useLazyAsyncData

默认情况下，`useAsyncData`会阻塞导航，直到其异步处理程序解析完成。`useLazyAsyncData`在`useAsyncData`周围提供了一个包装器，通过将`lazy`选项设置为`true`，在处理程序解析之前触发导航。

### useLazyFetch

默认情况下，`useFetch`在其异步处理程序解析之前会阻止导航。`useLazyFetch`提供了一个包装器，将`useFetch`包装起来，通过将`lazy`选项设置为`true`来在处理程序解析之前触发导航。

### useError

该可组合函数返回正在处理的全局 Nuxt 错误，并且在客户端和服务器上都可用。

```js
const error = useError();
```

### useHead

单个页面的头部属性。

**完整使用示例**

```js
useHead({
  title: "category",
  titleTemplate: "category11",
  base: { target: "_blank" },
  meta: [
    {
      name: "keywords",
      content: "category22",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "/dist/css/bootstrap.min.css",
    },
  ],
  style: ["*{color: red;}"],
  script: ["Script"],
  noscript: ["没有脚本"],
  htmlAttrs: { lang: "en" },
  bodyAttrs: { class: "body-class" },
});
```

**参数说明**

- title: 设置页面 title 标签里面的内容
- titleTemplate: 设置页面 title 标签里面的内容，支持函数返回值形式
- base: 设置 base 标签的属性
- link: 设置 link 标签的属性
- meta: 设置 meta 标签的属性
- style: 设置 style 标签的内容
- script: 设置 script 标签的内容
- noscript: 设置 noscript 标签的内容
- htmlAttrs: 设置 html 标签标签的属性
- bodyAttrs: 设置 body 标签标签的属性

### useHeadSafe

`useHeadSafe` 组合函数是对 `useHead`组合函数的包装，它限制了输入值只能是安全的。

### useHydration

服务器端设置数据并在客户端接收数据，设置的数据只能在客户端读取，服务端无法读取。

1. 设置数据

   ```js
   useHydration(
     "HydrationKey",
     () => {
       return "我是服务端发送的数据";
     },
     (val) => {}
   );
   ```

2. 读取数据

   ```js
   const nuxtApp = useNuxtApp();
   nuxtApp.payload.HydrationKey; // 我是服务端发送的数据，在服务端则为undefined
   ```

3. 参数说明

   - key：在你的 Nuxt 应用程序中标识数据的唯一键
   - get：返回初始数据的函数
   - set：在客户端接收数据的函数

### useNuxtData

读取请求通过`key`存储的值。

```js
const { data: res } = await useFetch<IData>('/api/index', {
  key: 'index',
})

useNuxtData('index') // 得到index这个key请求的结果，是缓存的结果，并不会重新请求
```

### useRequestEvent

函数来访问传入的请求事件，只能在服务端使用。

```js
// 获取底层请求事件
const event = useRequestEvent()
```

### useRequestHeaders

访问传入请求的头部信息。

```js
// 获取所有请求头信息
const headers = useRequestHeaders()

// 仅获取 cookie 请求头信息
const headers = useRequestHeaders(['cookie'])
```

### useRequestURL

访问传入的请求URL，[参数说明](https://developer.mozilla.org/zh-CN/docs/Web/API/URL#instance_properties)。

```js
const url = useRequestURL()
```

### useRuntimeConfig

访问`nuxt.config.ts`的`runtimeConfig`配置信息

```js
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // 私有密钥仅在服务器端可用
    apiSecret: '123',

    // 对客户端暴露的公共密钥
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  }
})

// 任意文件中
const config = useRuntimeConfig()
```

### useSeoMeta

设置seo优化标题等，支持响应式数据，超过100多项配置，不罗列。

```js
useSeoMeta({
  title: '我的神奇网站',
  description: '这是我的神奇网站，让我告诉你关于它的一切。',
  keywords: '神奇, 网站'
})

// 或者
const title = ref('我的标题')
useSeoMeta({
  title,
  description: () => `描述：${title.value}`
})
```

### useServerSeoMeta

等价于useSeoMeta，只是不支持响应式数据。

### useState

等同于pinia中的state，是一个全局共享的状态

```js
// 存储一个值
const count = useState('counter', () => Math.round(Math.random() * 100))

// 在任何页面读取值
const count = useState('counter')
console.log(count.value)
```

