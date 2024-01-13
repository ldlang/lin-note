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

## API
