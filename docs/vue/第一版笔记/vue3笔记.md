### vite

```typescript
使用vite创建vue-cli
	npm init vite-app <项目名称>
```

# 以下所有方式均不是在setup语法糖内实现

### setup

```js
两种返回值：
	1.返回一个对象，对象里面的方法和属性，模板上能够直接使用
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
	
	2.返回一个渲染函数，页面上所有的内容都会被干掉，最后只会保留渲染函数里面的内容
    	import { h } from 'vue' // 必须引入这个
        export default{
          setup() {
          return () => h('div','哈哈哈')
        }

注意 
	1.setup前不能写async
    2.最好不要和vue2中的写法混写，如果出现同名属性则以setup中的为主
```

**setup注意点**

1. setup的执行时机在beforeCreate之前，且this是undefined

2. setup函数接收两个参数，分别的props，content

   ```js
   1、props
   	在子组件中声明接收父组件传过来的msg，此时setup里面就可以使用props接收到的值，并且接收到的值是一个被包装过得响应式数据
   	props:['msg'],
       setup(props){
       	console.log(props);
   	}
   
   2、context 上下文对象
       setup(props,content){
       	console.log(content);
   	}
   	content有三个值
       	1、attrs 父组件传过来的值，没有声明接收就放在attr里面
           2、emit 分发自定义事件的函数，等于$emit
   		3、slots 收到的插槽内容，等于$slots
   ```

### emit 自定义事件

```js
在子组件中
    <div @click="test">给父亲传值</div>

    emits:['hello'], // 必须声明要抛出的事件
    setup(props,context){
        function test(){
            context.emit('hello','我是儿子的值')
            // 必须通过context里面的emit才能抛出值
        }
        return{
            test
        }
    }
父组件中不变
	<HelloWorld msg="我是消息" @hello="hello"></HelloWorld>
    setup() {
        function hello(e) { //使用子组件抛出的hello事件
            console.log('接收来自于子组件的值',e);
        }
        return{
            hello
        }
    }
```

### ref  函数

```js
给数据添加响应式，通过ref包装成一个引用对象

1.处理简单的数据类型 （原理：Object.defineProperty）
    import { ref } from 'vue'
    setup() {
        let name = ref('张三') // 包装为一个引用对象，数据才是一个响应式的数据
        name.value = '李四'  // 想要引用和修改值必须得使用.value才行
        return{
            name
        }
    }

2.处理复杂数据类型 (原理:Proxy)
	import { ref } from 'vue'
    setup() {
        let person = ref({
            age:15,
            name:'张三',
            obj:{
              sex:'男'
			}
        })
        person.value.name  // 只需要第一层使用.value,后面不管藏的多深都不需要写.value
		person.value.obj.sex 
        return{
            person
        }
    }

注意：
	1.在script中使用被ref包装的值，必须使用.value(name.value)才能读取和修改这个值
    2.在template中使用值则可以直接使用，不需要加.value
    3.复杂的数据类型只需要第一层使用.value
	4.如果将ref包装过得值一整个的赋值给另一个属性，那么他两个都是响应式对象，会同时改变
```

### reactive 函数

```js
能将一个复杂数据类型处理为响应式的代理对象（原理就是Proxy函数）

	import { reactive } from 'vue'

	export default{
        setup() {
            let person = reactive({
            age:15,
            name:'张三',
        })
注意：
	1.处理完的对象不需要想ref处理的那样需要通过.value的形式去拿，可以直接使用
	2.不能处理基本的数据类型，只能处理复杂数据类型，基本类型无法添加响应式
    
坑：
	reactive定义的数组或对象不能整个赋值，那样会丢失响应式
    
    let list = reactive([])
    list = records  // 直接给整个属性赋值，那么list就失去响应式了
           
    解决方式
    方式一	 直接添加到里面去，而不是赋值
    	list.push(...records)
  
    方式二  给深层次的属性赋值
    	let list = reactive({
            newList:[]
        })
        
        list.newList = records
```

### computed 计算属性函数

```js
简写形式 
	类似于一个有返回值的函数
	import { computed } from 'vue';

    let name = computed(()=>{
    	return '张三'
    }

复杂形式 
    当name被赋值的时候就会走到set，val就是name被赋的值
	import { computed } from 'vue';

    let name = computed({
      get(){
        return '张三'
      },
      set(val){
        name =  val
      }
    }) 
```

### watch 函数

```js
watch是个函数，接收三个参数，第一个是需要被监视的值，第二个是一个回调函数，第三个是watch的配置项

1.监视ref的属性，只监视一个值
    import { watch,ref } from 'vue';

    let count = ref(1)
    
    watch(count,(newVal,oldVal)=>{
    	console.log(newVal,oldVal)
    },{immediate:true,deep:true})
	
	注意：
    	1.如果ref定义的是个复杂的数据类型就需要加.value,或者开启深度监视也行，简单类型就不需要
		2.复杂类型的新旧值是一样的，因为本质上是借助了reactive函数

2.监视ref的多个值，可以配置一个数组
	只要有一个值变了，回调函数就会触发，第一个值变成了15，第二值依然是2 //['15', 2]
	import { watch,ref } from 'vue';

    let count = ref(1)
    let num = ref(2)
    
    watch([count,num],(newVal,oldVal)=>{
    	console.log(newVal,oldVal);
    },{immediate:true，deep:true})

3.监视reactive定义值的所有属性
	import { watch,reactive } from 'vue';

    let person = reactive({
        age:15
    })
    watch(person,(newVal,oldVal)=>{
        console.log(newVal,oldVal); // 新旧值是一样的
    })

	注意：
		1.无法得到正确oldVal的值，newVal,oldVal的值是一样的，且无法解决，也不能像v2那样监视对			象里面的某个值person.age
		2.默认就开启了深度监视，且无法关闭 // deep:false也没用
        
4.监视reactive定义值的某一个属性
	import { watch,reactive } from 'vue';

	let person = reactive({
		age:15,
        name:'张三'
    })
    watch(()=>person.age,(newVal,oldVal)=>{
      console.log(newVal,oldVal);
    })
	注意：
    	1.被监视的值必须放在一个函数的返回值里面，此时的newVal,oldVal就是正确的
		2.同时监听两个值，就把两个值通过函数返回值的形式，放在一个数组里面	
        	例：	
            	watch([()=>person.age,()=>person.name],(newVal,oldVal)=>{
                  console.log(newVal,oldVal);
                })

5.监视reactive定义值的某一个属性里的所有属性
	import { watch,reactive } from 'vue';

	let person = reactive({
		age:15,
        obj：{
        	name：'张三'
    	}
    })
    
    watch(()=>person.obj,(newVal,oldVal)=>{
      console.log(newVal,oldVal);
    },{deep:true}) // 必须开启深度监视才生效
	注意：
    	此时又必须开启深度监视才生效
```

### watchEffect 监视函数

```js
接收一个回调函数，所有的逻辑写在回调函数里面，只要回到函数里面的任意一个值发生改变，回调函数里面的所有逻辑都有走一遍

	import { watch,reactive,watchEffect } from 'vue';

    let count = reactive({
      age:15
    })
    watchEffect(()=>{
      console.log(count.age);
    })
```

### 生命周期

```js
在setup里面，也就是组合式api，必须引入才能使用
setup外面			   setup里面

beforeCreate		setup()
created				setup()
beforeMount			onBeforeMount
mounted				onMounted
beforeUpdate		onBeforeUpdate
updated				onUpdated
beforeUnmount		onBeforeUnmount			对比v2发生了改变
unmounted			onUnmounted				对比v2发生了改变

注意：
	1.如果选项式的生命周期和组合式的生命周期同时写，那么同名的生命周期组合式的先执行
    2.组合式生命是一个函数，接收一个回到函数，所有的逻辑写在回调函数里面
    	  例：
          	onMounted(()=>{
              逻辑
            })
```

### hook 函数

```js
创建一个js文件，将需要用到组合式api全部引入进来，就可以直接写逻辑
1.书写
    import { reactive,onMounted,onBeforeUnmount } from 'vue';
    export default function(){
        
        let count = reactive({
          x:0,
          y:0
        })
        
        function point(res){
          count.x = res.pageX
          count.y = res.pageY
        }
        
        onMounted(()=>{
          window.addEventListener('click',point)
        })
        onBeforeUnmount(()=>{
          window.removeEventListener('click',point)
        })
      return count // 如果这个hook用到的值，再其他地方也要用就要return出去
    }

2.使用
	import usePoint from '../hooks/usePoint'

	  setup(){
        let count = usePoint() // 将用到的值交出去
        return{
          count
        }
      }

	注意：
    	1.类似于v2的mixins，但是数据不能直接使用，得交出去才能使用
        
3.可以接收参数
	import { useMouse } from '@/hooks/useMouse'
    useMouse('我是传递的参数')

	在hooks中	
    export function useMouse(msg) {  // 接收参数
        console.log('useMouse', msg);
    }
```

### toRef 和toRefs

```js
    import { reactive,toRef,toRefs } from 'vue';

    let count = reactive({
        x:1,
        y:1
    })
	
    let num = count.x 
    return{
        num1:count.x
    }
	// 此时相当于count.x的值赋值给了num和num1，此时的num和num1不是一个响应式的数据，也和			count.x没有一点关系，num和num1变count.x也不会变

toRef 函数
	数组
        let arr = reactive([5,6])
        let x = toRef(arr,0)
    对象
		let count = reactive({x:1})
        let num = toRef(count,'x')
        console.log(arr1[1].value);
        
        深层次的对象使用ref，
        	    let count = reactive({
					x:1,
					y:1,
					obj:{
                    	name:'张三'
                  	}
                })
           let name = toRef(count.obj,"name")
                
	注意：
    	1.接收两个参数，第一个是要被转换值的父级，第一个是他的key或者下标，一次只能处理一个值
    	2.此时就相当于新得到的值和原来的值建立了连接关系，无论是原来的值改变，还是被toRef转过的			值发生改变，另一个值也会发生变化
        3.里面所有的值都是经过ref包装的值，在setup中读取需要.value才能拿到值

toRefs 函数
	数组
	    let arr = reactive([5,6])
        let arr1 = toRefs(arr)
        console.log(arr1[1].value);

	对象
        setup(){
           let count = reactive({
              x:1,
              y:1,
              obj:{
                obj1:{
                  name:'张三'
                }
              }
            })
           	let num = toRefs(count)
            console.log(num.obj.value.obj1.name);
            return{
				...toRefs(count)
                // 将count下面的第一级数据都交了出去，此时模板上就能直接用x,y,obj
            }
        }

	注意：
    	1.接收一个参数，就是要被转换的数据
    	2.会将一个对象或者数组里面的第一个子级都包装成ref引用对象，且和原数据保持着连接关系
        3.读取第一层子级的值需要加入.value,模板上不用
```

### shallowRef 和 shallowReactive

```
shallowRef
	1、处理基本数据类似和ref效果一致
	2、处理复杂数据类型就无法添加响应式，因为他不去求助与reactive
	
shallowReactive
	1、数据只有第一层有响应式，深层次的没有响应式
	
应用场景
	如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。
	如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。
```

### readonly 和 shallowReadonly  函数

```js
readonly
	1、将一个数据变为只读的，不能修改
	2、不仅仅是视图不更新，是在js部分都不能更改这个数据
    
shallowReadonly
	1、将一个数据变第一层变为只读的，深层次的不受形象
    
应用场景
	两个页面共用一个数据，一个页面不允许改，可以将其readonly，防止修改
```

### toRaw 和 markRaw  函数

```js
toRaw	
	将一个有reactive定义的响应式对象，变为普通的对象
    
markRaw
	将一个对象标记为永远不能成为响应式的对象
    
    使用：
    	1.一个数据有些用于响应式，有些只是单纯的展示，就可以使用markRaw将其变为普通的数据，			提升性能
        2.一个数据里面的有些属性需要被第三方类库去处理，比如时间转换啥的，这种数据就应该用			markRaw去处理，不然非常浪费性能  
```

### customRef 		自定义一个ref

```js
用法：
	1、customRef接收一个函数，里面有两个参数，第一个参数放get里，用于追踪返回值的变化，让		vue认为这个值是有用的。第二个参数放在set里，通知vue去重新解析模板，两个参数都是函数
    2、customRef接收的函数必须放回一个对象，get和set写在对象里面
    

	import { customRef } from 'vue';

	setup() {
        let str = myRef('字符串') 

        function myRef(val){
          return customRef((track,trigger)=>{
            return{
              get() {
                track() //	用于追踪返回值的变化，让vue认为这个值是有用的
                return val
              },
              set(newVal){
                val = newVal
                trigger() // 通知vue去重新解析模板
              }
            }
          })
        }
	return{ str }
```

### provide 和 inject

```js
provide 父组件里面
	import { ref,provide } from 'vue';

	setup() {
		let str = ref('字符串') 
        provide('str',str)
	}

inject 子组件，孙组件里面
	import { inject } from 'vue';

	export default{
	setup(){
		let str1 = inject('str')
    	console.log(str1);//字符串
    }
```

### 响应式数据的判断

```js
isRef: 
	检查一个值是否为一个 ref 对象
    
isReactive: 
	检查一个对象是否是由 reactive 创建的响应式代理
    
isReadonly: 
	检查一个对象是否是由 readonly 创建的只读代理
    
isProxy: 
	检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
```

### teleport 传送标签

```html
<teleport to="body">  
	<div>
        我是传送的内容
    </div>
</teleport>

1.直接将上面的标签放在body下面，也就是父级就是body，无论这个标签之前嵌套的多深，他只有一个父级就是body
2.to也可以写选择器，to="#content" 就是将这个标签传送到id为content的标签下面

```

### 异步引入组件

```js
import { defineAsyncComponent } from 'vue'
const HelloWorld = defineAsyncComponent(()=>import('./HelloWorld.vue'))

作用：
	不用等这个组件加载好，页面才全部展示，这个组件引入得慢也不影响其他组件的展示
```

### Suspense 组件

```html
有两个插槽，先去展示default插槽里面的内容，如果里面内容展示失败了，就会展示fallback里面的内容

<template>
    <Suspense>
        <template v-slot:default>
            <son/>		<--  默认展示这个组件  -->
        </template>
        <template v-slot:fallback>
            <h3>加载中.....</h3>
        </template>
    </Suspense>
</template>
```

### api的变更

| 2.x 全局 API（```Vue```） | 3.x 实例 API (`app`)                       |
| ------------------------- | ------------------------------------------ |
| Vue.config.xxxx           | app.config.xxxx                            |
| Vue.config.productionTip  | 移除                                       |
| Vue.component             | app.component   注册全局组件               |
| Vue.directive             | app.directive   注册全局指令               |
| Vue.mixin                 | app.mixin   注册全局混入                   |
| Vue.use                   | app.use  使用插件                          |
| Vue.prototype             | app.config.globalProperties   挂载全局属性 |

* v-on.native被移除，因为子组件抛出的事件还要通过 emits: ['close']声明，不声明就可以掉到原生事件上



# 以下所有方式都是在setup语法糖内实现

### setup

```js
<script setup>
    import { reactive } from 'vue'

    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }
</script>

结合setup语法糖之后，所有的属性和方法都无需手动return出去，都能在模板上直接使用
```

### nextTick 

```js
异步更新nextTick函数里面的
    import { nextTick } from 'vue'

    function increment() {
      state.count++
      nextTick(() => {
        // 访问更新后的 DOM
      })
    }
```

### 获取组件实例  dom

```js
1、获取组件实例对象
	<HelloWorld ref="hello"></HelloWorld>

    import HelloWorld from './components/HelloWorld.vue'
    import { ref, onMounted } from 'vue'

    let hello = ref(null)  // 变量必须和上面标签上ref的一致

    onMounted(()=>{
      hello.value // 组件实例
    })

2、获取子组件身上的方法和属性，必须借助defineExpose
	子组件必须把方法交出去  defineExpose
    
    	import { ref，defineExpose } from 'vue';
		let str = ref('字符串')
		function open(params) {
			return '你好'
        }
        defineExpose({open})

	在父组件中
    	方式一
        	import { ref,onMounted } from 'vue'
            let hello = ref(null)

            onMounted(()=>{
				hello.value.open() // 就能拿到子组件交出来的open方法
                hello.value.str 	// 子组件交出来的属性
            })

		方式二
        	import { ref,onMounted,getCurrentInstance } from 'vue'
            const { proxy } = getCurrentInstance();
            let hello = ref(null)
            
            onMounted(()=>{
				proxy.$refs['hello'].open() // 也能拿到子组件交出来的open方法
				proxy.$refs['hello'].str 	// 子组件交出来的属性
            })
```

### 组件的引入

```js
直接引入就可以使用，无需再到components上注册
	<HelloWorld ref="hello"></HelloWorld>
	import HelloWorld from './components/HelloWorld.vue'
```

### defineProps

```js
父子之间传值
	父组件中
    	<HelloWorld title="标题"></HelloWorld>

	子组件中接收，必须配合defineProps
    
    	方式一 普通接收
    		import { defineProps } from 'vue';
			
			let props = defineProps(['title'])
			console.log(props.title); // 标题
		
		方式二	指定类型
            let props = defineProps({
              title:String
            })
            console.log(props.title);

		方式三 指定类型指定默认值
        	let props = defineProps({
              title:{
                type:String,
                default: '哈哈'
              }
            })
            console.log(props.title);

	注意：	
    	在模板中可以省略不写props，可以直接写title
```

### defineEmits

```js
抛出自定义事件
	在子组件中
    	 <div @click="onBtn">我是子组件</div>
    	
		import { defineEmits } from 'vue';  // 可以不引入
		
		const emit = defineEmits(['onBtn']) // 指定要抛出的事件

        function onBtn(){
          emit('onBtn','传递的值') // 抛出事件名，后面是传递的值
        }
	
	在父组件中
		<HelloWorld @on-btn="onBtn"></HelloWorld>

		import HelloWorld from './components/HelloWorld.vue'
			
		function onBtn(e){
      		console.log(e,'接收值'); // e为子组件抛出的值
		}

直接在模板抛出自定义事件
	在子组件中  //抛出onClick事件，携带 哈哈 参数
    	<button @click="$emit('onClick','哈哈')">my login</button>  
			
	在父组件中
	<myLogin @onClick="onClick"></myLogin>

    import myLogin from '@/views/my-login.vue'

    const onClick = (e) => {
        console.log('我被点击了',e); // 接收子组件抛出的事件以及参数
    }
```

### defineExpose

```js
交出的方法和属性，父组件能从子组件实例上直接拿到
	子组件
        import { ref，defineExpose } from 'vue';
        let str = ref('字符串')
        function open(params) {
            return '你好'
        }
        defineExpose({
            open，// 交出方法
            str	// 交出属性
        })

	父组件
    	<HelloWorld ref="hello"></HelloWorld>

    	import { ref,onMounted } from 'vue'
        let hello = ref(null)

         onMounted(()=>{
			hello.value.open() // 就能拿到子组件交出来的open方法
            hello.value.str 	// 子组件交出来的属性
        })

$parent 
	$parent配合defineExpose拿到父亲身上的方法
		在父组件中把属性和方法交出去
        	defineExpose({
              newSize,
              page
            })
		
		在子组件中
        	<button @click="sizeBtn($parent)">按钮</button>  // 参数必须叫$parent

			const sizeBtn =(e)=>{
              console.log(e); // 就有父亲身上交出来的属性和方法
            }
```

### 动态组件

```js
通过component配合is属性来判断要展示的属性，is上绑定的值就是要展示组件引入的名字或者是他的name，hello的值是HelloWorld，那么显示的组件就是HelloWorld组件
    <component :is="hello"></component>
    <button @click="btn">修改</button>

    <script setup>
    import HelloWorld from './components/HelloWorld.vue'
    import son from './components/son.vue'
    import { shallowRef } from 'vue'

    let hello = shallowRef(HelloWorld) 
    const btn = ()=>{
      hello.value = son
    }

    注意：
    	1、最好使用shallowRef去绑定属性，不然会有警告
```

### 全局组件，全局异步组件

```js
全局组件注册
    import MyComponent from './App.vue'
    app.component('MyComponent', MyComponent)

全局异步组件注册
	app.component('MyComponent', defineAsyncComponent(() =>
      import('./components/MyComponent.vue')
    ))
```

### mitt

```js
mitt一个插件，类似于全局事件总线，能实现任意组件间通信

	1、安装
    	import mitt from 'mitt'

	2、创建一个js文件，写入以下代码
    	import mitt from 'mitt'
		const bus = mitt()
        export default bus

	3、传递数据
		接收数据
        	bus.on('*', (type, e) => console.log(type, e) )
		传递数据
        	bus.emit('foo', { a: 'b' })
		关闭监视
       		bus.off('foo', onFoo)
```

### v-model 的扩展

```js
1、实现父子间数据的双向绑定
	父组件中：
    	 <HelloWorld :page="page" @updata:page="hand" />  // 接收自定义事件
             
		import HelloWorld from '@/components/HelloWorld.vue'
		import {ref} from 'vue'

		let page = ref(10)
        const hand = (res) =>{
          page.value = res
        }
        
    子组件中
		<button @click="btn">我是按钮</button>

        let props = defineProps(["page"]) // 接收参数
        let emit = defineEmits(["updata:page"]) // 自定义事件

        const btn =()=>{
          emit('updata:page', props.page+50)
        }
        
2、使用v-model实现父子间数据双向绑定。相比于v2的一大变化
	父组件中
    	<HelloWorld v-model:page="page" v-model:size="newSize" />
            					 // 给子组件传递的props是size，但是最后更新的是newSize
            
        import HelloWorld from '@/components/HelloWorld.vue'
        import {ref} from 'vue'

        let page = ref(10)
        let newSize = ref(30)
        
    子组件中
        <button @click="btn">我是按钮</button>
        <button @click="sizeBtn">我是改变size</button>

        let props = defineProps(["page",'size']) //接收父组件传的值
        let emit = defineEmits(["update:page",'update:size']) 
        									// 配合update关键字定义事件
        const btn =()=>{
          emit('update:page', props.page+50) // 抛出自定义事件，同时抛出值
        }
        const sizeBtn =()=>{
          emit('update:size', props.size+50) // 抛出自定义事件，同时抛出值
        }
       
3、特殊modelValue
	父组件中
    	<HelloWorld v-model="page" />
        
        import HelloWorld from '@/components/HelloWorld.vue'
        import {ref} from 'vue'

        let page = ref(10)
        
    子组件中
		<div>{{ modelValue }}</div>
		<button @click="btn">我是按钮</button>

		let props = defineProps(["modelValue"]) // modelValue就是父组件传递过来的page
        
        let emit = defineEmits(["update:modelValue",'update:size'])
        const btn =()=>{
          emit('update:modelValue', props.modelValue+50)//依然实现了父子组件的双向绑定
        }
        
	注意：
    	1.在组件上写v-model="page"，就是给子组件传递了一个page属性，同时接收了一个					update:page的事件
        2.在同一个组件中能写多个v-model实现多个值的双向绑定
```

### useAttrs 和 $attrs

```js
相当于v2的$attrs,引入以后能够拿到父组件给传递的事件和属性
    <div>{{ attrs.size }}</div>

    import { useAttrs } from 'vue';
    let attrs = useAttrs()
    
	注意：
    	传递的属性，如果被defineProp介绍了，useAttrs身上就没有了
        
这个 $attrs 对象包含了除组件所声明的 props 和 emits 之外的所有其他 attribute，例如 class，style，v-on 监听器等等，传递过来的属性一旦被声明接收了，那么就从$attrs中移除

如果在父组件透传的值，没有被props接收，那么会被$attrs接收，在模板上的直接使用
	<button>my login{{ $attrs }}</button>

	也可以将所有透传过来的属性全部显示的绑定在标签上
    <button v-bind="$attrs">my login{{ $attrs }}</button>
```

### pinia

1. pinia和vuex的区别

   ```js
   1、pinia只有state ， actions ，getters
   2、state的值能够直接改
   3、不论异步同步全部写在actions里面，里面的方法也不接收context上下文对象，可以接受任意个参数
   4、在store里面state，actions，getters的属性和方法都是通过this.拿取
   ```

2. 安装使用pinia

   ```js
   1.安装
       yarn add pinia
       npm install pinia
   
   2.使用
   	创建文件夹store/index.js写入
           import { createPinia } from "pinia";
           const store = createPinia()
           export default store
   	
   	在mian.js中引入使用
   		import store from './store'
           app.use(store)
   
   ```

3. 创建小仓库，类似于module 

   ```js
   选项式api的写法
       1.新建一个js文件，写入以下代码
           import { defineStore } from "pinia";
   
           let useInfoStore = defineStore('info',{
             state:()=>{   // state里面的值是一个函数的返回值
               return{
                 name:'张三'
               }
             },
             actions:{  // 里面的方法可以接受任意个参数，且没有context上下文对象
               fun(e){  
                 console.log('actions',e,this.name,this.count);
                 this.fun1()
               },
               fun1(){
                 console.log('fun1');
               }
             },
             getters:{
               count(){
                 return 'getters'
               }
             }
           })
   
           export default useInfoStore
   
           注意：
               1、defineStore接收两个参数，一个是小仓库的名字，第二个是配置对象
               2、defineStore最后返回的是一个函数
               
   组合式api的写法
   	1.新建一个js文件，写入以下代码
           import { defineStore } from "pinia";
           import { ref,computed,watch } from "vue";
   
           let useInfoStore = defineStore('info',()=>{
           let name = ref('张三')
   
           let count = computed(()=>{
             return 'getter'
           })  // 代替getter
   
           function fun(){  // 写的方法相当于就是actions里面的方法
             console.log('fun');
           }
   
           return{ // 把方法属性交出去
               name,
               fun,
               count
             }
           })
   
           export default useInfoStore
   ```

4. 在页面中使用

   ```js
   在页面中选项式api的写法和组合式api的写法一直
   	<button @click="store.fun(2)">按钮</button>// 调用actions中的fun方法并传递参数
   
       import useInfoStore from '@/store/module/info';
       let store = useInfoStore()
       console.log(store.name); // 拿到state中的name值
       console.log(store.count); // 拿到getters中的conut值
       store.fun(222) // 调用actions中的fun方法并传递参数
   ```


### router技巧

```js
route对象身上的matched
	存储这当前路由的信息，以及他的父路由，每个路由都是matched数组里面的一个对象，利用这个属性就可以做面包屑的路由显示
    route.matched实现面包屑功能

	<el-breadcrumb separator-icon="ArrowRight" style="margin-left: 20px">
        <el-breadcrumb-item v-for="(item, index) in route.matched" :key="index"
          :to="item.path" v-show="item.meta.title" >
          <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
	</el-breadcrumb>

```

# 补充

### v-bind

```js
同时给一个标签挂载一堆属性
	<div v-bind="objectOfAttrs">测试</div>

	objectOfAttrs: {
        id: 'divDom',
    	class: 'user-top'
    },
        
挂载动态属性
	<div :[title]="newTitle">测试</div>  // title和newTitle都是变量

	title: 'aaaa',
	newTitle: 'newTitle',
```

### v-for的结构赋值

```js
<template v-for="({info},index) in list" :key="index">  直接将info结构出来使用
	<div>{{ index }} -- {{ info }}</div>
</template>

import { reactive } from 'vue'
let list = reactive([
    {
    name: '张三',
        info: {
            sex: '男',
            age: 15
        }
    },
    {
    name: '李四',
        info: {
            sex: '男',
            age: 35
        }
    }
])

of 
	({info},index) in list  等同于 ({info},index) of list
```

### 事件

```js
如果绑定的事件不传参，则事件默认接收一个参数，为DOM 原生事件event
如果要显示的传入这个参数就必须传$event,这样接收到的才是dom原生事件    onDiv($event)
<div @click="onDiv">login</div>

const onDiv = (event) => {
    console.log(event)  //event 是 DOM 原生事件
}
```

### 自定义事件的校验

```js
要为事件添加校验，那么事件可以被赋值为一个函数，接受的参数就是抛出事件时传入 emit 的内容，返回一个布尔值来表明事件是否合法。
	在子组件中
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
	
	在父组件中
		<myLogin @submit="submit"></myLogin>

        import myLogin from '@/views/my-login.vue'

        const submit = (e) => {
            console.log('我被点击了',e);
        }
```

### 透传

```html
前提：传递的属性没有在子组件的prop中声明接收
style和clasee在父子组件中透传
	在父组件中
        <myLogin class="lage" style="font-size: 15px;"></myLogin>

    在子组件中
        <div class="my-login lage " style="font-size: 15px;">    浏览器渲染的结果  
            <button>my login</button>
        </div>

事件在父子组件中透传
	在父组件中
		<myLogin @click="onClick"></myLogin>

		const onClick = () => {
            console.log('我被触发了');
        }

	在子组件中  随意点击任何一个元素都会触发onClick事件
	    <div class="my-login">
            哈哈哈
            <button >my login</button>
        </div>

深层组件继承
 	如果子组件嵌套着子组件，并且孙子组件是这个子组件的根标签，那么这个属性会继续透传到孙组件中

注意
	1.如果子组件有根标签，也就是子组件被一个标签包裹了所有的元素，同时子组件中并没有声明接收父组件传过			来的lage，那么这个lage将会加载到根标签中。
	2.子组件本身有my-login这个类，将会和父组件传递过来的lage合并
	3.style中的属性也是同样的结果

禁用这一行为
	<script>
        // 使用普通的 <script> 来声明选项
        export default {
          inheritAttrs: false
        }
    </script>
```

### 在css中使用js中的变量

```js
<script setup lang="ts">
let col = 'red'
</script>

<style>
    .login{
        color: v-bind(col);  // 此时的col就等于red
    }
</style>
```

### getCurrentInstance

```js
获取当前页面的实例，相当于this，但是局限性很大，不能当做this使用
```













