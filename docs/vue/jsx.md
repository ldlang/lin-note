---
sidebar: auto
---

# jsx

## 1、如何使用

1. 安装[`@vue/babel-plugin-jsx`](https://github.com/vuejs/jsx-next)插件

   ```bash
   pnpm install @vue/babel-plugin-jsx -D
   ```

2. 在`vite.config.ts`中加入插件

   ```typescript
   import { defineConfig } from "vite";
   import vueJsx from "@vitejs/plugin-vue-jsx";

   export default defineConfig({
     plugins: [vueJsx()],
   });
   ```

3. 在`tsconfig.json`加入如下配置

   ```json
   {
     "compilerOptions": {
       "jsx": "preserve",
       "jsxImportSource": "vue"
     }
   }
   ```

## 2、语法

1. 所有的`js`表达式都要放在`{}`，包括注释

   ```tsx
   {
     /* 我是注释 */
   }

   {
     arr.map((item) => <div>{item}</div>);
   }
   ```

2. 必须要有根标签，也可以是空的根标签

   ```tsx
   return () => (
     <>
       {props.isShow ? <div>{props.msg}</div> : <div>我是空</div>}
       <ElButton type="warning" onClick={showMsg}>
         按钮
       </ElButton>
     </>
   );
   ```

3. 使用`ref`创建的响应式数据不会自动解包

   ```tsx
   import { defineComponent } from "vue";

   export const Child = defineComponent({
     name: "Child",
     setup() {
       const count = ref(1);
       return () => (
         <>
           <div>{count.value}</div>
         </>
       );
     },
   });
   ```

4. 1

## 3、vue 不支持的命令等价实现方式

### v-if

```tsx
// v-if
{
  props.isShow && <div>{props.msg}</div>;
}

// v-if, v-else
{
  props.isShow ? <div>{props.msg}</div> : <div>我是空</div>;
}
```

### v-for

```tsx
{
  arr.map((item, index) => (
    <div key={index} title={`${index}`}>
      {item}
    </div>
  ));
}
```

### v-on

`on` + 事件名，小驼峰的形式组起来，后面接`js`表达式或者事件名

```tsx
setup() {
    const showMsg = () => {
        ElMessage.success("This is a message.");
    };

    return () => (
        <ElButton type="warning" onClick={showMsg}>
            按钮
        </ElButton>
    );
},
```

事件修饰符

- 方式一

  `on` + 事件名 + 事件修饰符，小驼峰的形式组起来

  ```tsx
  // .once
  <ElButton type="warning" onClickOnce={showMsg}>
      按钮
  </ElButton>

  // .capture
  <ElButton type="warning" onClickCapture={showMsg}>
      按钮
  </ElButton>
  ```

- 方式二

  使用`withModifiers`函数

  ```tsx
  <ElButton type="warning" onClick={withModifiers(showMsg, ["stop"])}>
      按钮
  </ElButton>

  // 也可以支持多个修饰符
  <ElButton type="warning" onClick={withModifiers(showMsg, ["stop",'self'])}>
      按钮
  </ElButton>
  ```

## 4、vue 支持命令示例

### v-model

```tsx
// search 组件
import { ElButton } from "element-plus";
import { defineComponent, withModifiers } from "vue";

export const Search = defineComponent({
  name: "Search",
  props: {
    value: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const change = () => {
      emit("update:value", "9");
    };

    return () => <div onClick={change}>我是搜索组件</div>;
  },
});

// child 组件
export const Child = defineComponent({
  name: "Child",
  setup(props) {
    const modelVal = ref("1");

    watch(
      () => modelVal.value,
      (val) => {
        console.log("双向绑定", val);
      }
    );
    return () => (
      <>
        <Search v-model:value={modelVal.value}></Search>
      </>
    );
  },
});
```

### v-show

```tsx
<div v-show={false}> show </div>
```

### v-html

```tsx
<div v-html={`<div>99999</div>`}></div>
```

## 5、插槽

### 匿名插槽

```tsx
import { defineComponent } from "vue";

export const Child = defineComponent({
  name: "Child",
  props: {
    msg: {
      type: String,
    },
  },
  setup(props, { slots }) {
    return () => (
      <>
        {/* 默认插槽传递过来的会放到这里 */}
        <div>{slots.default?.()}</div>
      </>
    );
  },
});
```

带默认值写法

```tsx
<div>{slots.default ? slots.default() : <div>默认插槽没有被使用</div>}</div>
```

### 具名插槽

```tsx
// footer 插槽
<div>{slots.footer?.()}</div>

// 带默认值的 footer 插槽
<div>
    {slots.footer ? slots.footer() : <div>footer插槽没有被使用</div>}
</div>
```

### 作用域插槽

给函数传的值就是向外抛出的值

```tsx
// 默认插槽传值
<div>{slots.default?.({ msg: "我是默认插槽的消息" })}</div>

// 具名插槽传值
<div>{slots.footer?.({ msg: "我是footer插槽的消息" })}</div>
```

## 6、函数式组件

函数式组件接受的参数和`setup`接受的参数一致

> setup( props, { attrs, emit, slots, expose } )
>
> - attrs 父组件传过来的值，没有声明接收就放在 attrs 里面
> - emit 分发自定义事件的函数，等于$emit
> - slots 收到的插槽内容，等于$slots
> - expose 暴露的属性和方法

```tsx
import { SetupContext } from "vue";

// props参数的类型
type funProps = {
  msg: string;
};

// 自定义事件的类型
type funEmit = {
  change: [val: string];
};

// funComponent 接受的参数就是 setup 所接受的参数
const funComponent = (
  props: funProps,
  { emit, slots }: SetupContext<funEmit>
) => {
  return (
    <>
      <div>我是函数式组件</div>
      <div>{props.msg}</div>
      <div onClick={() => emit("change", "自定义事件的值")}>抛出自定义事件</div>
      <div>{slots.default?.()}</div>
    </>
  );
};
```
