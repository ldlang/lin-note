---
sidebar: auto
---

# 不在 script 内写入 setup 的方式

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
   
6. watch会返回一个函数，如果调用这个函数，那么这个监听也就停止了

   ```js
   import { watch, ref } from 'vue'
   
   const count = ref(5)
   const stop = watch(count,(val)=>{
       console.log('count',val)
   })
   
   // 关闭监听
   stop()
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
stop()
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

### shallowRef

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

### toRaw

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
import { customRef } from 'vue';

let str = myRef('字符串')

function myRef(val){
    return customRef((track,trigger)=>{
        return{
            get() {
                //	用于追踪返回值的变化，让vue认为这个值是有用的
                track() 
                return val
            },
            set(newVal){
                val = newVal
                // 通知vue去重新解析模板
                trigger() 
            }
        }
    })
}
```

### provide 和 inject

跨层级传递参数

**使用场景：** 

* 父组件直接给孙组件传递或者孙孙组件传递数据
* 父组件中有一个默认插槽，而子组件并没有直接放到父组件中，而是在使用是通过插槽的方式传递进来的，就可以使用给其传递数据

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

创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。如果在effectScope作用域内的计算属性和侦听器，如果关闭了这个作用域，那么所有的计算属性和侦听器都不会再运转。对于watch来说，就是调用了他的返回函数，关闭了监听。

```js
import { effectScope, ref, watchEffect, watch  } from 'vue'

const i = ref(5)
const scope = effectScope()

// 创建 effectScope 作用域
scope.run(()=> {
  watchEffect(()=> {
    console.log('watchEffect', i.value)
  })

  watch(i, ()=> {
    console.log('wathc', i.value)
  })
})

setInterval(()=> {
  ++i.value
}, 1000)

// 关闭 effectScope 作用域，里面所有的监听都会被停止
const stop = ()=> {
  scope.stop()
}
```

### getCurrentScope

如果有的话，返回当前活跃的effect 作用域，如果没有则返回undefined

```js
import {  getCurrentScope  } from 'vue'

 getCurrentScope() // undefined 或者 EffectScope 
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

