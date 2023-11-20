---
sidebar: auto
---

## API 不在 script 内写入 setup 的方式

### setup

1. setup 的两种返回值

   - 返回一个对象

     对象里面的属性和方法能够直接在模板中使用。

     ```js
     setup() {
         let name = '张三'
         function sayName(){
             alert(name)
         }
         //最后必须把属性和方法抛出去页面上才能使用
         return{
             name,
             sayName
         }
     }
     ```

   - 返回一个渲染函数

     ```js
     import { h } from "vue"; // 必须引入这个
     export default {
       setup() {
         return () => h("div", "哈哈哈");
       },
     };
     ```

2. setup 接收的参数

   - props

     在子组件中声明接收父组件传过来的 msg，此时 setup 里面就可以使用 props 接收到的值，并且接收到的值是一个被包装过得响应式数据

     ```js
     props:['msg'],
         setup(props){
         console.log(props.msg);
     }
     ```

   - content

     上下文对象 content，content 中有三个值，分别是 attrs、emit 和 slots

     参数说明：

     - attrs 父组件传过来的值，没有声明接收就放在 attr 里面
     - emit 分发自定义事件的函数，等于$emit
     - slots 收到的插槽内容，等于$slots

     ```js
     setup(props,content){
         console.log(content);
     }
     ```

3. setup 注意点

   - setup 前不能写 async
   - 最好不要和 vue2 中的写法混写，如果出现同名属性则以 setup 中的为主
   - setup 的执行时机在 beforeCreate 之前，且 this 是 undefined
   - setup 函数接收两个参数，分别的 props，content

### emit

自定义事件，子组件给父组件传递数据

- 在父组件中接收数据

  ```js
  <HelloWorld @hello="hello"></HelloWorld>
  setup() {
      function hello(e) { //使用子组件抛出的hello事件
          console.log('接收来自于子组件的值',e);
      }
      return{
          hello
      }
  }
  ```

- 在子组件中传递数据

  ```js
  <div @click="test">给父亲传值</div>

  // 必须声明要抛出的事件
  emits:['hello'],
  setup(props,context){
      function test(){
          // 必须通过context里面的emit才能抛出值
          context.emit('hello','我是儿子的值')
      }
      return{
          test
      }
  }
  ```

### ref 函数

给数据添加响应式，通过 ref 包装成一个引用对象

1. 处理简单的数据类型

   原理：**Object.defineProperty**

   ```js
   import { ref } from 'vue'
   setup() {
       let name = ref('张三') // 包装为一个引用对象，数据才是一个响应式的数据
       name.value = '李四'  // 想要引用和修改值必须得使用.value才行
       return{
           name
       }
   }
   ```

2. 处理复杂数据类型

   原理：**Proxy**

   ```js
   import { ref } from 'vue'
   setup() {
       let person = ref({
           age:15,
           name:'张三',
           obj:{
               sex:'男'
           }
       })
       person.value.name // 张三
       // 只需要第一层使用.value,后面不管藏的多深都不需要写.value
       person.value.obj.sex // 男
       return{
           person
       }
   }
   ```

3. ref 函数注意事项

   - 在 script 中使用被 ref 包装的值，必须使用.value(如：name.value)读取和修改这个值才是响应式的
   - 在 template 中使用值则可以直接使用，不需要加.value
   - 复杂的数据类型只需要第一层使用.value
   - 如果将 ref 包装过得值一整个的赋值给另一个属性，那么他两个都是响应式对象，会同时改变

### reactive 函数

能将一个复杂数据类型处理为响应式的代理对象，原理就是 Proxy 函数

1. 基本使用

   ```js
   import { reactive } from "vue";

   export default {
     setup() {
       // 创建一个复杂的响应式数据
       let person = reactive({
         age: 15,
         name: "张三",
       });
     },
   };
   ```

2. 注意事项

   - 处理完的对象不需要像 ref 处理的那样需要通过.value 的形式去拿，可以直接使用

   - 不能处理基本的数据类型，只能处理复杂数据类型，基本类型无法添加响应式

   - reactive 定义的数组或对象不能整个赋值，那样会丢失响应式

     ```js
     let list = reactive([])
     list = records  // 直接给整个属性赋值，那么list就失去响应式了

     解决方式一	 直接添加到里面去，而不是赋值
     list.push(...records)
     Object.assign(list, records)

     方式二  给深层次的属性赋值
     let list = reactive({
         newList:[]
     })

     list.newList = records
     ```

### computed 计算属性函数

1. 简单形式

   类似于一个有返回值的函数

   ```js
   import { computed } from 'vue';

   let name = computed(()=>{
       return '张三'
   }
   ```

2. 复杂形式

   当 name 被赋值的时候就会走到 set，val 就是 name 被赋的值

   ```js
   import { computed } from "vue";

   let name = computed({
     get() {
       return "张三";
     },
     set(val) {
       name = val;
     },
   });
   ```

### watch 函数

watch 是个函数，接收三个参数，第一个是需要被监视的值，第二个是一个回调函数，第三个是 watch 的配置项

1. .监视 ref 的属性，只监视一个值

   - 如果 ref 定义的是个复杂的数据类型就需要加.value,或者开启深度监视也行，简单类型就不需要
   - 复杂类型的新旧值是一样的，因为本质上是借助了 reactive 函数

   ```js
   import { watch, ref } from "vue";

   let count = ref(1);

   watch(count, (newVal, oldVal) => {
     console.log(newVal, oldVal);
   });
   ```

2. 监视 ref 的多个值，可以配置一个数组

   只要有一个值变了，回调函数就会触发

   ```js
   import { watch, ref } from "vue";

   let count = ref(1);
   let num = ref(2);

   watch([count, num], (newVal, oldVal) => {
     console.log(newVal, oldVal);
   });
   ```

3. 监视 reactive 定义值的所有属性

   - 无法得到正确 oldVal 的值，newVal,oldVal 的值是一样的，且无法解决
   - 默认就开启了深度监视，且无法关闭

   ```js
   import { watch, reactive } from "vue";

   let person = reactive({
     age: 15,
   });
   watch(person, (newVal, oldVal) => {
     // 新旧值是一样的
     console.log(newVal, oldVal);
   });
   ```

4. 监视 reactive 定义值的某一个属性

   - 被监视的值必须放在一个函数的返回值里面，此时的 newVal,oldVal 就是正确的
   - 同时监听两个值，就把两个值通过函数返回值的形式，放在一个数组里面

   ```js
   // 监听一个值
   import { watch, reactive } from "vue";

   let person = reactive({
     age: 15,
     name: "张三",
   });

   // 监听两个值
   watch(
     () => person.age,
     (newVal, oldVal) => {
       console.log(newVal, oldVal);
     }
   );
   ```

5. 监视 reactive 定义值的某一个属性里的所有属性

   此时又必须开启深度监视才生效

   ```js
   import { watch,reactive } from 'vue';

   let person = reactive({
       age:15,
       obj：{
       	name：'张三'
   	}
   })

   // 必须开启深度监视才生效
   watch(()=>person.obj,(newVal,oldVal)=>{
       console.log(newVal,oldVal);
   },{deep:true})
   ```

6. watch 会返回一个函数，如果调用这个函数，那么这个监听也就停止了

   ```js
   import { watch, ref } from "vue";

   const count = ref(5);
   const stop = watch(count, (val) => {
     console.log("count", val);
   });

   // 关闭监听
   stop();
   ```

### watchEffect 监视函数

接收一个回调函数，所有的逻辑写在回调函数里面，只要回到函数里面的任意一个值发生改变，回调函数里面的所有逻辑都有走一遍，会返回一个函数，如果调用这个函数，那么监听就被停止了。

```js
import { reactive, watchEffect } from "vue";

let count = reactive({
  age: 15,
});
const stop = watchEffect(() => {
  console.log(count.age);
});

// 关闭监听
stop();
```

### 生命周期

在 setup 里面，也就是组合式 api，必须引入才能使用，如果选项式的生命周期和组合式的生命周期同时写，那么同名的生命周期组合式的先执行，组合式生命是一个函数，接收一个回到函数，所有的逻辑写在回调函数里面。

```js
setup外面			   setup里面

beforeCreate		setup()
created				setup()
beforeMount			onBeforeMount
mounted				onMounted
beforeUpdate		onBeforeUpdate
updated				onUpdated
beforeUnmount		onBeforeUnmount			对比v2发生了改变
unmounted			onUnmounted				对比v2发生了改变
```

### hook 函数

创建一个 js 文件，将需要用到组合式 api 全部引入进来，就可以直接写逻辑，就相当于在一个函数里面写逻辑，最后把外部需要的属性或者方法交出去，让外部调用，相对于在一个文件中属性，只不过是多了一个抛出和引入的过程，但是两个页面的属性并不互通，需要通过再引入这个 hook 函数的时候将值传进去，里面就能正常使用这个值。

- 一个 hook 的基本书写

  ```js
  import { reactive, onMounted, onBeforeUnmount } from "vue";
  export default function () {
    let count = reactive({
      x: 0,
      y: 0,
    });

    function point(res) {
      count.x = res.pageX;
      count.y = res.pageY;
    }

    onMounted(() => {
      window.addEventListener("click", point);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("click", point);
    });
    return count; // 如果这个hook用到的值，再其他地方也要用就要return出去
  }

  或者;
  // data是外部传递过来的属性
  export function usePoint(data) {
    const msg = "msg";
    return {
      msg,
    };
  }
  ```

- 在页面中使用

  ```js
  // 不传递参数的形式
  import usePoint from '../hooks/usePoint'

  setup(){
      let count = usePoint() // 引用交出来的值
      return{
          count
      }
  }

  // 传递参数的形式
  import usePoint from '../hooks/usePoint'

  setup(){
      let msg = usePoint('data') // 引用交出来的值
      return {
          msg
      }
  }
  ```

### toRef

将原来复杂属性的某一个值单独拿出来，赋在一个新的值上，直接这样做这个新的值和原来的值是没有关系的，新的值改变了，原来的值并不会发生改变，如果使用 toRef 去获取原来的值，并赋值给这个新值，那么他们之间有任一一个值改变，另一个值也会改变。接收两个参数，第一个是要被转换值的父级，第一个是他的 key 或者下标，一次只能处理一个值。

**注意：** 里面所有的值都是经过 ref 包装的值，在 setup 中读取需要.value 才能拿到值

- 数组使用 toRef

  ```js
  let arr = reactive([5, 6]);
  let x = toRef(arr, 0);
  ```

- 对象使用 toRef

  ```js
  let count = reactive({ x: 1 });
  let num = toRef(count, "x");
  ```

- 深层次的对象使用 ref

  ```js
  let count = reactive({
    x: 1,
    y: 1,
    obj: {
      name: "张三",
    },
  });
  let name = toRef(count.obj, "name");
  ```

### toRefs

效果和 toRef 一致，区别是 toRefs 只接收一个参数，就是要被转换的数据。推荐使用的方式是将一个值用于解构赋值，这样得到的值依然是响应式的，或者在 setup 最后 return 值的时候，结合拓展运算符+ toRefs 的方式交出去值，这样就不能直接读取第一层的值，并且是响应式的。

**注意：**

- 是将每一个值每一个属性包裹为一个 ref 对象，所以使用.value 并不是在第一层使用，而是在某一个属性之后.value
- 这个被转换的数据不管是对象，还是数组只有第一层会被包装成 ref 引用对象，深层次的依然是一个 reactive 对象，且和原数据保持着连接关系。
- 测试发现，被 toRefs 转换的深层侧的对象即使是在 template 中都要使用 .value 才能正确读取值

```js
import { toRefs, reactive, toRef } from 'vue'

const obj = reactive({
  x: 1,
  obj2: {
    a: {
      c: 5
    }
  }
})

const datat = toRefs(obj)

// 读取x的值
datat.x.value

// 读取c的值
datat.obj2.value.a.c

// 在template上读取x和c的值
<div>新值：{{ datat.x }} {{ datat.obj2.value.a.c }}</div>
```

### toValue

直接读取一个 ref 属性的值，只要用这个函数包裹，则不需要在通过 .value 的形式去读取值，两者是的等同的

```js
import { ref, toValue } from "vue";

const str = ref(5);

// 正常情况下读取值
str.value; // 5

// 使用 toValue 读取值
toValue(str); // 5
```

### unref

直接读取 ref 属性的值，不需要 .value ，类似于 toValue，函数里面的逻辑 `val = isRef(val) ? val.value : val ` 只不过是进行了封装

### shallowRef （shallow：浅的）

处理基本数据类似和 ref 效果一致，处理复杂数据类型就无法添加响应式，因为他不去求助与 reactive

**使用场景：** 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换

### shallowReactive

数据只有第一层有响应式，深层次的没有响应式

**使用场景：** 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化

### readonly

将一个数据变为只读的，不能修改，不仅仅是视图不更新，是在 js 部分都不能更改这个数据。

**使用场景：** 两个页面共用一个数据，一个页面不允许改，可以将其 readonly，防止修改

### shallowReadonly

将一个数据变第一层变为只读的，深层次的不受影响。

### toRaw （raw：未经处理的，原始的）

将一个有 reactive 定义的响应式对象，变为普通的对象

### markRaw

将一个对象标记为永远不能成为响应式的对象

**使用场景：**

- 一个数据有些用于响应式，有些只是单纯的展示，就可以使用 markRaw 将其变为普通的数据。
- 一个数据里面的有些属性需要被第三方类库去处理，比如时间转换啥的，这种数据就应该用，markRaw 去处理，不然非常浪费性能

### customRef

自定义一个 ref

**注意：**

- customRef 接收一个函数，里面有两个参数，第一个参数放 get 里，用于追踪返回值的变化，让 vue 认为这个值是有用的。第二个参数放在 set 里，通知 vue 去重新解析模板，两个参数都是函数。
- customRef 接收的函数必须放回一个对象，get 和 set 写在对象里面

```js
import { customRef } from "vue";

let str = myRef("字符串");

function myRef(val) {
  return customRef((track, trigger) => {
    return {
      get() {
        //	用于追踪返回值的变化，让vue认为这个值是有用的
        track();
        return val;
      },
      set(newVal) {
        val = newVal;
        // 通知vue去重新解析模板
        trigger();
      },
    };
  });
}
```

### provide 和 inject

跨层级传递参数

**使用场景：**

- 父组件直接给孙组件传递或者孙孙组件传递数据
- 父组件中有一个默认插槽，而子组件并没有直接放到父组件中，而是在使用是通过插槽的方式传递进来的，就可以使用给其传递数据

在父组件中使用 provide 传递数据

```js
import { ref,provide } from 'vue';

setup() {
    let str = ref('字符串')
    provide('str',str)
}
```

在子组件，孙组件里面 inject 接收数据

```js
import { inject } from 'vue';

setup(){
    let str1 = inject('str')
    console.log(str1);//字符串
}
```

### effectScope

创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。如果在 effectScope 作用域内的计算属性和侦听器，如果关闭了这个作用域，那么所有的计算属性和侦听器都不会再运转。对于 watch 来说，就是调用了他的返回函数，关闭了监听。

```js
import { effectScope, ref, watchEffect, watch } from "vue";

const i = ref(5);
const scope = effectScope();

// 创建 effectScope 作用域
scope.run(() => {
  watchEffect(() => {
    console.log("watchEffect", i.value);
  });

  watch(i, () => {
    console.log("wathc", i.value);
  });
});

setInterval(() => {
  ++i.value;
}, 1000);

// 关闭 effectScope 作用域，里面所有的监听都会被停止
const stop = () => {
  scope.stop();
};
```

### getCurrentScope

如果有的话，返回当前活跃的 effect 作用域，如果没有则返回 undefined

```js
import { getCurrentScope } from "vue";

getCurrentScope(); // undefined 或者 EffectScope
```

### onScopeDispose()

在当前活跃的 effect 作用域上注册一个处理回调函数。当相关的 effect 作用域停止时会调用这个回调函数。

这个方法可以作为可复用的组合式函数中 `onUnmounted` 的替代品，它并不与组件耦合，因为每一个 Vue 组件的 `setup()` 函数也是在一个 effect 作用域中调用的。

### isRef

检查一个值是否为一个 ref 对象

### isReactive

检查一个对象是否是由 reactive 创建的响应式代理

### isReadonly

检查一个对象是否是由 readonly 创建的只读代理

### isProxy

检查一个对象是否是由 reactive 或者 readonly 方法创建的代理

## 新增标签

### teleport

传送标签，可以将一个标签传送到节点下面，并作为该节点的子级。to 可以直接写标签名，或者选择器，如 to="#content"、 to=".content"。将标签传送到 body 下面，作为 body 下面直接的子级，无论这个标签之前嵌套的多深，他只有一个父级就是 body。

```html
<teleport to="body">
  <div>我是传送的内容</div>
</teleport>
```

### defineAsyncComponent

异步组件，不用等这个组件加载好，页面才全部展示，这个组件引入得慢也不影响其他组件的展示。

```js
import { defineAsyncComponent } from "vue";
const HelloWorld = defineAsyncComponent(() => import("./HelloWorld.vue"));
```

### Suspense

有两个插槽，先去展示 default 插槽里面的内容，如果里面内容展示失败了，就会展示 fallback 里面的内容

```html
<template>
  <Suspense>
    <template v-slot:default>
      <-- 默认展示这个组件 -->
      <son />
    </template>
    <template v-slot:fallback>
      <h3>加载中.....</h3>
    </template>
  </Suspense>
</template>
```

## vue 身上的 Api 变更

| 2.x 全局 API（`Vue`）    | 3.x 实例 API (`app`)                     |
| ------------------------ | ---------------------------------------- |
| Vue.config.xxxx          | app.config.xxxx                          |
| Vue.config.productionTip | 移除                                     |
| Vue.component            | app.component 注册全局组件               |
| Vue.directive            | app.directive 注册全局指令               |
| Vue.mixin                | app.mixin 注册全局混入                   |
| Vue.use                  | app.use 使用插件                         |
| Vue.prototype            | app.config.globalProperties 挂载全局属性 |

## API 在 script 内写入 setup 的方式

### setup

直接在 script 标签中写入 setup，所有的属性和方法都无需手动 return 出去，都能在模板上直接使用。

```js
// 不论是方法还是属性都能直接在模板上使用
<script setup>
    import { reactive } from 'vue'

    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }
</script>
```

### nextTick

等待下一次 DOM 更新刷新，将要在下次 dom 更新时执行的逻辑放入 nextTick 的回调函数里面，区别于 v2 的是可以加将 nextTick 作为 promise 使用阻塞后面的代码执行。

```js
import { nextTick } from "vue";

nextTick(() => {
  // 执行下次dom更新时执行的逻辑
});

// 或者
await nextTick();
// 执行下次dom更新时执行的逻辑
```

### 获取组件的实例 dom

1. 使用必须 ref 函数，并且组件标签身上的 ref 必须和 js 中的 ref 赋值的变量名一致。

   ```js
   <HelloWorld ref="hello"></HelloWorld>;

   import HelloWorld from "./components/HelloWorld.vue";
   import { ref, onMounted } from "vue";

   // 变量必须和上面标签上ref的一致
   let hello = ref(null);

   onMounted(() => {
     hello.value; // 组件实例
   });
   ```

2. 区别为 v2 的是 setup 是封闭的，在外部是无法直接获取组件内部的属性和方法的，必须有组件内部抛出，外部才能使用

   子组件必须把方法交出去 defineExpose

   ```js
   import { ref } from "vue";
   let str = ref("字符串");
   function open(params) {
     return "你好";
   }
   // 交出open方法和str属性
   defineExpose({
     open,
     str,
   });
   ```

   在父组件中获取

   - 方式一

     通过组件实例获取

     ```js
     import { ref, onMounted } from "vue";
     let hello = ref(null);

     onMounted(() => {
       hello.value.open(); // 通过组件实例就能拿到子组件交出来的open方法
       hello.value.str; // 子组件交出来的属性
     });
     ```

   - 方式二

     通过 getCurrentInstance 的 proxy

     ```js
     import { ref, onMounted, getCurrentInstance } from "vue";
     const { proxy } = getCurrentInstance();
     let hello = ref(null);

     onMounted(() => {
       proxy.$refs["hello"].open(); // 也能拿到子组件交出来的open方法
       proxy.$refs["hello"].str; // 子组件交出来的属性
     });
     ```

### 组件的引入

在 setup 的语法糖内组件无需在 components 挂载，即可使用。

```js
<HelloWorld ref="hello"></HelloWorld>;
import HelloWorld from "./components/HelloWorld.vue";
```

### defineProps

父子之间传值，等价于 v2 的 props，defineProps 无需引入直接使用，主要注意的是在 js 中使用传递过来的值，必须使用一个变量接收，再从这个变量中将值读取出来，而在模板上使用则可以直接读取传递的值，无需从变量上读取。

在父组件中给子组件传入参数

```html
<HelloWorld title="标题"></HelloWorld>
```

在子组件中接收

- 普通接收

  ```js
  import { defineProps } from "vue";

  let props = defineProps(["title"]);

  // 必须从变量上读取，不能直接读取title
  console.log(props.title); // 标题
  ```

- 指定类型

  ```js
  let props = defineProps({
    title: String,
  });
  console.log(props.title);
  ```

- 指定类型指定默认值

  ```js
  let props = defineProps({
    title: {
      type: String,
      default: "哈哈",
    },
  });

  console.log(props.title);
  ```

### defineEmits

抛出自定义事件，等价于 v2 的$emit，但是在 js 中抛出，抛出之前必须使用 defineEmits 提前定义要抛出的自定义事件。无需引入直接使用。

- 借助 defineEmits 抛出自定义事件

  在子组件中抛出自定义事件，组件名 Hello-world

  ```js
  <div @click="onBtn">我是子组件</div>

  import { defineEmits } from 'vue';  // 可以不引入

  const emit = defineEmits(['onBtn']) // 指定要抛出的事件

  function onBtn(){
      emit('onBtn','传递的值') // 抛出事件名，后面是传递的值
  }
  ```

  在父组件中接收自定义事件

  ```js
  <HelloWorld @on-btn="onBtn"></HelloWorld>

  import HelloWorld from './components/HelloWorld.vue'

  function onBtn(e){
      console.log(e,'接收值'); // e为子组件抛出的值
  }
  ```

- 在模板中直接抛出，则无需借助 definePeops

  在子组件中 组件名 my-login

  ```html
  抛出自定义onClick事件，并协带携带 哈哈 参数
  <button @click="$emit('onClick','哈哈')">my login</button>
  ```

  在父组件中

  ```js
  <myLogin @onClick="onClick"></myLogin>

  import myLogin from '@/views/my-login.vue'

  const onClick = (e) => {
  	console.log('我被点击了',e); // 接收子组件抛出的事件以及参数
  }
  ```

### defineExpose

由于 setup 是默认关闭的，所以外部无法只能拿到 setup 内部声明的属性和方法，必须借助 defineExpose 将属性和方法将值抛出去，外部才能拿到，不同于 v2 拿到组件的实例，就能拿到组件内部所有的方法和属性。无需引入直接使用。

1. 在子组件中抛出属性和方法，在父组件中拿到

   在子组件中通过 defineExpose 交出方法和属性

   ```js
   import { ref } from 'vue';
   let str = ref('字符串')
   function open(params) {
       return '你好'
   }
   defineExpose({
       open，// 交出方法
       str	// 交出属性
   })

   等同于，上面只不过是简写，因此这里也可以重写抛出去的属性名
   defineExpose({
       open: open,
       s: str // 将 str 重命名为 s,
   })
   ```

   在父组件中通过子组件的实例就可以拿到子组件交出来的方法和属性

   ```js
   <HelloWorld ref="hello"></HelloWorld>;

   import { ref, onMounted } from "vue";
   let hello = ref(null);

   onMounted(() => {
     hello.value.open(); // 就能拿到子组件交出来的open方法
     hello.value.str; // 子组件交出来的属性
   });
   ```

2. 父组件抛出属性和方法在子组件中拿到就必须同时借助 **$parent** 和 **defineExpose**

   在父组件中抛出属性和方法

   ```js
   defineExpose({
     newSize,
     page,
   });
   ```

   在子组件中接收

   ```js
   // 参数必须叫$parent
   <button @click="sizeBtn($parent)">按钮</button>

   const sizeBtn =(e)=>{
       // e就是父组件的实例，e就有父亲身上交出来的属性和方法
       console.log(e);
   }
   ```

### defineOptions

声明这个组件的一些配置。比如声明组件 name 属性、 inheritAttrs（是否支持透传）属性

```js
defineOptions({
  name: "Foo",
  inheritAttrs: false, // 禁止透传
});
```

### defineSlots()

于为 IDE 提供插槽名称和 props 类型检查的类型提示。它还返回 slots 对象，该对象等同于在 setup 上下文中暴露或由 useSlots() 返回的 slots 对象。

```typescript
<script setup lang="ts">
const slots = defineSlots<{
  default(props: { msg: string }): any
}>()
</script>
```

### useAttrs 和 $attrs

如果父组件给子组件传递的属性和方法没有被 defineProps 声明接收，那么父组件传递过来的就会被保存在 useAttrs（在 js 中使用）和$attrs（只能在模板中使用）上。useAttrs 等价于 setupContext.slots。

在父组件中传递属性和方法

```js
<childTemp @onChild="onChild" msg1="msg1" msg2="msg2" />
```

在子组件中的 js 中

```js
import { useAttrs } from "vue";
const attrs = useAttrs();

console.log(attrs); //  msg1: "msg1", msg2: "msg2"
```

在子组件的模板中

```html
<div @click="onChildClick($parent)">子组件</div>
{{ $attrs }} 编译后的结果 { "msg1": "msg1", "msg2": "msg2" }
```

$attrs 小技巧，同时给标签绑定父组件传递过来的所有属性

```js
<div v-bind="$attrs">子组件</div>

编译后的结果
<div msg1="msg1" msg2="msg2" />子组件</div>
```

### useSlots() 和 $slots

如果在子组件中定义的某个插槽被父组件使用了，那么就可以从 useSlots() 或 $slots 拿到父组件在插槽中传递的虚拟 dom。

### 动态组件

通过**component**配合**is**属性来判断要展示的属性，**is**上绑定的值就是要展示组件引入的名字或者是组件的**name**，最好使用 shallowRef 去绑定属性，不然会有警告。

```js
<component :is="componentName"></component>
<button @click="btn">修改</button>

import HelloWorld from './components/HelloWorld.vue'
import son from './components/son.vue'
import { shallowRef } from 'vue'

// 页面上渲染的组件，取决于componentName的值
let componentName = shallowRef(HelloWorld)
const btn = ()=>{
    componentName.value = son
}
```

### 全局组件

全局组件注册

```js
import MyComponent from "./App.vue";
app.component("MyComponent", MyComponent);
```

### 全局异步组件

全局异步组件注册

```js
app.component(
  "MyComponent",
  defineAsyncComponent(() => import("./components/MyComponent.vue"))
);
```

### v-model 的扩展

在同一个组件中能写多个 v-model 实现多个值的双向绑定，在组件上写 v-model="page"，就是给子组件传递了一个 page 属性，同时接收了一个 update:page 的事件

1. 不使用 v-model 实现数据的双向绑定，其实下面的 v-mode 的形式，是这个的简写形式。

   在父组件中

   ```js
   <HelloWorld :page="page" @updata:page="hand" />  // 接收自定义事件

   import HelloWorld from '@/components/HelloWorld.vue'
   import { ref } from 'vue'

   let page = ref(10)
   const hand = (res) =>{
       page.value = res
   }
   ```

   在子组件中

   ```js
   <button @click="btn">我是按钮</button>

   let props = defineProps(["page"]) // 接收参数
   let emit = defineEmits(["updata:page"]) // 自定义事件

   const btn =()=>{
       emit('updata:page', props.page + 50)
   }
   ```

2. 通过 v-model 实现父子组件之间的数据双向绑定，等同于 v2 的`.sync`实现的效果

   在父组件中，使用 v-model 传递数据

   ```js
   <childTemp v-model:page="page" />;

   import childTemp from "./child-temp.vue";
   import { ref, watch } from "vue";

   const page = ref(5);

   watch(page, (val) => {
     console.log("父组件的监听", val);
   });
   ```

   在子组件中更改值，实现父子之间值的同步

   ```js
   import { nextTick } from "vue";

   const props = defineProps(["page"]);

   const emit = defineEmits(["update:page"]);

   const change = async () => {
     emit("update:page", props.page + 1);
     // 必须要异步之后，子组件的值才是更新后的值
     await nextTick();
     console.log("子组件page", props.page);
   };
   ```

3. 特殊的值**modelValue**

   如果在 v-model 后没有指定双向绑定的值，那么他传递给子组件的值就是一个 modelValue 的特殊值。

   在父组件中

   ```js
   <childTemp v-model="page" />;

   import childTemp from "./child-temp.vue";
   import { ref, watch } from "vue";

   const page = ref(5);
   watch(page, (val) => {
     console.log("父组件的监听", val);
   });
   ```

   在子组件中

   ```js
   const props = defineProps(["modelValue"]);
   const emit = defineEmits(["update:modelValue"]);

   const change = async () => {
     emit("update:modelValue", props.modelValue + 1);
     await nextTick();
     console.log("子组件page", props.modelValue);
   };
   ```

### v-bind

1. 同时给一个标签挂载一堆属性

   ```js
   <div v-bind="objectOfAttrs">测试</div>

   objectOfAttrs: {
       id: 'divDom',
       class: 'user-top'
   }
   ```

2. 挂载动态属性

   ```js
   <div :[title]="newTitle">测试</div>

   title: 'aaaa',
   newTitle: 'newTitle',
   ```

### $parent

如果在子组件中的任意事件，在绑定事件的时候传递了一个`$parent`的属性，那么事件上就可以接受到该组件父组件的实例，并且该属性上有父组件通过 defineExpose 抛出的属性和方法。

```js
<div @click="change($parent)">子组件</div>

const change = async(e)=> {
  console.log('父组件的实例', e)
}
```

### 自定义事件的校验

要为事件添加校验，那么事件可以被赋值为一个函数，接受的参数就是抛出事件时传入 emit 的内容，返回一个布尔值来表明事件是否合法。

在子组件中

```js
<button @click="submitForm(email,password)">my login</button>

import { ref } from 'vue'
let email = ref(123)
let password = ref(456)

const emit = defineEmits({
    // 没有校验
    click: null,

    // 校验 submit 事件
    submit: ({ email, password }) => {
        if (email && password) {
            return true
        } else {
            console.warn('Invalid submit event payload!')
            return false
        }
    }
})

function submitForm(email:any, password:any) {
    emit('submit', { email, password })
}
```

在父组件中

```js
<myLogin @submit="submit"></myLogin>

import myLogin from '@/views/my-login.vue'

const submit = (e) => {
    console.log('我被点击了',e);
}
```

### 透传

前提：传递的属性没有在子组件的 prop 中声明接收，深层组件继承，如果子组件嵌套着子组件，并且孙子组件是这个子组件的根标签，那么这个属性会继续透传到孙组件中。

注意：

1. 如果子组件有根标签，也就是子组件被一个标签包裹了所有的元素，同时子组件中并没有声明接收父组件传过来的 lage，那么这个 lage 将会加载到根标签中。
2. 子组件本身有 my-login 这个类，将会和父组件传递过来的 lage 合并
3. style 中的属性也是同样的结果
4. 这一行为是可以禁止的，在 defineOptions 中声明 inheritAttrs: false 即可

- style 和 clasee 在父子组件中透传

  在父组件中

  ```html
  <myLogin class="lage" style="font-size: 15px;"></myLogin>
  ```

  在子组件中的根标签中

  ```html
  浏览器渲染的结果
  <div class="my-login lage " style="font-size: 15px;">
    <button>my login</button>
  </div>
  ```

- 事件在父子组件中透传

  在父组件中

  ```js
  <myLogin @click="onClick"></myLogin>

  const onClick = () => {
  	console.log('我被触发了');
  }
  ```

  在子组件中

  随意点击任何一个元素都会触发 onClick 事件

  ```html
  <div class="my-login">
    哈哈哈
    <button>my login</button>
  </div>
  ```

### 在 css 中直接使用 js 中的变量

借助 v-bind 直接在 css 中使用变量。

```js
<script setup lang="ts">
let textColor = 'red'
</script>

<style>
    .login{
        color: v-bind(textColor);  // 此时的col就等于red
    }
</style>
```
