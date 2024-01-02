# 基础类型

* **boolean** - 布尔值

  ```typescript
  let isDone: boolean = true
  ```

* **number** - 数字 

  ```typescript
  let num: number = 15
  ```

* **string** - 字符串

  ```typescript
  let name: string = '张三'
  ```

* **Array** - 数组

  ```typescript
  普通写法
  	let list: string[] = ["15", 'a']	 		表示一个数组里面每个元素都是字符串
      
      数组对象
      let arr: { suit: string; card: number; }[]
      arr = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }];
  
  泛型写法
  	let list: Array<number> = [1, 2, 3, 5]   	表示一个数组里面都是数字类型
  ```

* **tuple** - 元组

  ```typescript
  let list: [string, number]				
  	定义一个元组，第一个只能是string类型，第二个只能是number类型，并且这个数组只能有两个元素，不能同意元组以外的元素
      
  list = ['a', 15]
  list = ['a', 15, 2] // 报错
  ```

* **enum** - 枚举

  ```typescript
  枚举的时候不直接赋值，那么枚举的属性的值就是从0开始的数值
  	enum Color { 
          red, 		// 没有进行赋值，red的值就是0
          green, 		// 值是1
          blue = 2	// 因为默认值就是2，其他枚举不赋值也不会报错
      }
  	let c = Color.red  //c的值是0
  
  枚举的时候直接赋值，那么每个枚举的属性都要赋值
  	enum Color {
          Red = 'red',
          Green = 'green',
          Blue = 'blue'
      };
      let c = Color.Red;
  ```

* **any** - 任意值

  ```typescript
  let color:any = '15'
  color = 15
  
  注意：
  	1.当你想要调用一个属性里面的方法或者属性，但是里面的方法和属性没有你不知道其类型，你就可以给他赋值		为any，就可以任意调用里面的方法和属性
  	2.可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任	  意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
  	3.被定义为any类型的值，相当于关闭了ts对他的类型检查
  ```

* **void** - 空值

  ```typescript
  let variable: void = undefined
  	
  当一个值被指定为void时，这个值只能被赋值为 null 和 undefined，因为他不能是任何值
  ```

* **null** 和**undefined**

  ```typescript
  null 和 undefined是所有类型的子类型
  ```

*  **never** - 永远不存在的值

  ```typescript
  永远不存在的值的类型，never类型是任何类型的子类型
  
  // 返回never的函数必须存在无法达到的终点
  function error(message: string): never {
      throw new Error(message);
  }
  
  // 推断的返回值类型为never
  function fail() {
      return error("Something failed");
  }
  ```

* **unknown** 未知类型，类型安全的any

  ```typescript
  2.它表示一个类型未知的值。和 any 类型类似，unknown 也可以被赋值为任何类型的值，但是在使用 unknown 类型值时，需要先进行类型检查或类型断言，以确保类型安全。当一个值未知类型时最好用unknown，不要用any。
  
  1.unknown可以被赋值为任何类型的值
      let a: unknown
      a = true
      a = 15
      a = "str"
  2.虽然最后被赋值为了一个字符串，但是本质类型上是一个unknown，所以不能赋值个其他类型
      let b: string
      b = a // 报错
  
  3.要赋值也行，先判断类型，就可以给其他类型的值赋值
      if (typeof a == "string"){
          b = a
      }
  	
  	或者使用类型断言 as,我们知道a是一个string，但是编辑器不知道，此时就可以使用类型断言(as)告诉编辑器a就是一个string
      b = a as string   等同于  b = <string>a
  ```

* **object** 

  ```typescript
  object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
  
  都不会报错，所以一般不这么用
  	let a: object
      a = function m() {}
      a = {}
  
  常用方式
  	let b: { name: string }
      b = {name: '张三'}
      b = {name: '张三',age: '李四'} // 报错，结构必须和定义的一致
  
  任意值：
  	定义一个key为string，value为任意值的属性，可以有多个传入的属性
  	let b: {
          name: string,
          [prop: string]: any 
      }//此时除了name是必须的其他任意都是可选的
      b = {
          name: '张三',
          age: 15，
          school: '学校'
      }
  
  注意
  	let x = {
          name: '张三',
          sex?: '男'   // error，对象中不能声明可选属性
      }
  ```

* 类型断言

  ```typescript
  1.我们知道一个变量是什么类型，但是解析器不知道，此时就可以使用类型断言，告诉解析器，这个变量就是某一个类型的值
  
  语法 变量 as 类型
  	例
          a = b as string  // 告诉解析器b就是一个string类型的值
          < 类型 > 变量
  	例
  		b = <string>a  	// 告诉解析器b就是一个string类型的值，避免这种写法，和泛型易混淆
  
  2.读取属性时
  	window.foo = 1; // 我们非常确定这个是可以给window添加foo值的，但是ts报错了
  	(window as any).foo = 1;  // 使用类型断言去赋值
  
  3.修改函数的返回值类型
  	// 最初的函数返回值是any
  	function fun(key: string): any {
          return key
      }
  
      interface Cat {
          name: string;
          run(): void;
      }
  	// 通过类型断言去修改返回值为空
      const tom = fun('tom') as Cat;
      tom.run();
  
  4.双重断言 **慎用
  	interface Cat {
          run(): void;
      }
      interface Fish {
          swim(): void;
      }
  
      function testCat(cat: Cat) {
          return (cat as any as Fish); // cat直接断言为Fish肯定不行，所以通过any去折中
      }
  
  总结：
  	1.联合类型可以被断言为其中一个类型
      2.父类可以被断言为子类
      3.任何类型都可以被断言为 any
      4.any 可以被断言为任何类型
      5.要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
  ```

# interface 接口

* 定义了一个数据的形状，使用这个interface属性的形状必须和interface的形状保持一致

  ```typescript
  写法一：
  	interface person {
          name: string
          age: number
      }
  
      let men: person = {  // men里有的属性必须和是person这个接口里面定义的过的，不能多也不能少
          name: '张三',
          age: 15
      }
      
  写法二：
      interface IPoint {
          x: number
          y: string
      }
  
      let point = <IPoint>{}
      point.x = 5 // 只能往point身上添加IPoint定义过得属性，但所有定义过得属性都变成可选属性了
  
  接口在函数中使用，传入的参数必须包含着lable属性，并且值的类型为string
      interface Iobj {
        label: string;
      }
  
      function print(labelObj: Iobj) {
        console.log(labelObj.label);
      }
  
      let myObj = {size: 10, label: "Size 10 Object"};
      printLabel(myObj);
  ```

*  **? **- 可选属性

  ```typescript
  接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。就可以将这个属性变为可选属性，他存不存在也无所谓，但是依然不能多出来属性。
  
  interface person {
      name: string
      age?: number  // 此时age就是一个可选的属性，使用这个接口的属性，里面age属性就变得可有可无了
  }
  
  let men: person = {
      name: '张三',
      // age: 15			age不存在也不会报错
  }
  
  函数中使用	
  	interface Square {
          color?: string;
          width?: number;
      }
  	
  	// 参数后面的为函数的返回值类型
      function create(config: Square): {color: string; area: number}{
          // 必须定义好对象里的属性，不能定义一个空对象，否则下面会报错 类型“{}”上不存在属性“color”
          let newSquare = { color: "", area: 0 }; 
          if (config.color) {
              newSquare.color = config.color;
          }
          if (config.width) {
              newSquare.area = config.width * config.width;
          }
          return newSquare;
      }
  
      let mySquare = create({ color: "black" })// 传入的参数都是可选的
  ```

* **readonly** - 只读属性

  ```typescript
  字面意思，被 readonly 的属性只能被读取，不能被修改，只能在调用这个接口的时候进行赋值一次，之后则只能读取他的值，而不能赋值
  
  interface Point {
      readonly x: number;
      readonly y: number;
  }
  
  let p: Point = {
      x: '15',
      y: 2
  }
  p.x = 'a' // 报错
  ```

* **ReadonlyArray** - 只读的数组

  ```typescript
  ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
  
  let list: ReadonlyArray<number> = [1, 2, 3] // list不能被修改
  
  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;  // 此时的ro依然是不能修改的
  
  但是可以通过类型断言去赋值
      let a: number[] = [1, 2, 3, 4];
      let ro: ReadonlyArray<number> = a;
  	let b: number[] = [3, 4, 5]
      a = b as number[]  // 此时再次赋值就可以
  ```

* 任意属性

  ```typescript
  一个接口拥有任意属性后，出来必须的属性要存在，可以添加任意个interface为定义的属性，但是任意属性value的类型，必须是其他类型的父类型
  
  interface Point {
      x: string
      [prop: string]: any  
  }
  
  let p: Point = {  // 只有x属性时必须存在的其他的可有可无
      x: '15',
      y: 9,
      z: false
  }
  ```

* 函数类型

  ```typescript
  // 定义使用这个接口的函数，有两个参数，分别为下x和y，且函数的返回值类型为string
  interface Point {
      (x: string, y: number): string
  }
  
  let fun: Point
  fun = function (x: string, y: number)：string {
      return x + y
  }
  fun('a', 5)
  ```

* 可索引的类型

  ```typescript
  其实就是用interface去描述调用这个interface的数据属性的特征
  
  interface arr {
      [index: number]: string   // 数组的特征就是有索引，即下标，且为数字类型，里面的参数就随意定义
  }
  
  let list: arr = ['a', '8']
  
  定义了arr接口，它具有索引签名。 这个索引签名表示了当用 number去索引arr时会得到string类型的返回值。
  ```

* 类使用interface

  * **implements** 

    ```typescript
    类要使用 interface 必须借用 implement 关键字
    
    interface IPoint {
        x: number
      fun(a: string): string
    }
    
    class Point implements IPoint {
        x: number
        constructor(x: number) {
            this.x = 5
        }
        fun(a: string): string {
            return ''
        }
    }
    ```
    

* **extends** - 继承接口

  ```typescript
  interface IPoint {
      x: number
  }
  
  interface APoint {
      y: string
  }
  
  interface BPoint extends IPoint, APoint {  // 此时BPoint同时继承了IPoint和APoint
      z: number
  }
  
  let point: BPoint = {  // point必须实现上面三个接口的形状
      x: 5,
      y: '15',
      z: 2
  }
  ```

* 混合类型

  ```typescript
  待补充
  ```

* 接口继承类

  ```typescript
  待补充
  ```

* 

# 类

* 待补充

# 函数

* 函数类型

  ```typescript
  接收两个参数，第一个为string类型，第二个为number类型，函数的返回值为string类型，函数返回值类型可以省略，因为ts会自动去推断返回值的类型
  
  	具名函数：
          function fun(x: string, y: number): string { 
              return x + y
          }
      匿名函数
          let myFun = function (x: string, y: number): string {
              return x + y
          }
  ```

* 匿名函数完整写法

  ```typescript
  实际上左边是通过类型推断出来的,所以完整的写法应当是给左侧也定义好类型
  let myFun: (x: string, y: number) => string= function (x: string, y: number): string {
      return x + y
  } // 这里的=>指的是函数的返回类型，并不是箭头函数
  
  左侧参数部分为了能够语义化，其实是可以和函数右侧参数名不一致的，这里ts只会去校验他对应参数的类型
  let myFun: (str: string, num: number)=>string=function(x: string, y: number): string {
      return x + y
  }// 这里和上面的写法没有区别，只不过是参数语义化而已
  
  注意：完整写法中必须书写函数的返回值类型，即使没有返回值页应该定义 =>void
  ```

* 推断类型

  ```typescript
  因为ts存在着类型推断，所有只要你定义了任何一边ts就会自动识别出来
      let myFun: (str: string, num: number) => string = function (x, y) {
          return x + y
      }
      等同于
       let myFun = function (x: string, y: number): string {
           return x + y
       }
  ```

* **?**  可选参数

  ```typescript
  在js中函数的参数都是可选的，即使定义了也可以不用传，在ts中，得让这个参数变为可选参数，才能不必传
  
  function fun(x: string, y?: number) {
      return x + y
  }
  fun('x')//y是可选参数，所有可以不用传
  
  注意：
  	1.可选参数必须至于参数的最后，加入x是可选参数，我指给函数传递了一个参数，那么这个参数不就变成了x了
      
  ```

* 参数默认值

  ```typescript
  参数也可以使用默认值，此时这个参数其实也是一个可选参数，当没有传递y，或者传递的y为undefined则为默认值
      function fun(x: string, y = false) {
          return x + y
      }
  
  注意：
  	1.给定了默认值的参数，其实同时就制定了他参数的类型，上面y的类型就是boolean，不能传递其他类型的
      2.有默认值的参数可以不放置于参数的最后，但是在调用的时候必须明确给这个参数传递undefined，才能使		用其默认值
  ```

* 剩余参数

  ```typescript
  在js中可以使用aruments来访问所有传入的对象，在ts中只能自己去收集没有去声明接收的属性
      function fun(x: string, y: number, ...z: Array<number | string>) {
          return x + y
      }
  
      fun("a", 5, 6, "c") // z收集到的就是剩余的参数
  	fun("a", 5)// z可以一个参数都收集不到
  ```

* 指定**this**的类型

  ```typescript
  this的类型为any，
  	let point = {
          str: '字符串',
          fun: function () {
              return () => {
                  return this.str  // 这里的this的类型是any
              }
          }
      }
      
  规定this的类型
  	interface Deck {
          str: string,
          fun(this: Deck): () => string; // 显示的去传入this，并指定类型
      }
      let point: Deck = {
          str: '字符串',
          fun: function (this: Deck) {
              return () => {
                  return this.str // 这里的this的类型就是Deck
              }
          }
      }
  ```

* 待补充

### 4. 重载

* 函数重载

  ```typescript
  同一个函数里面对传入的同一个参数类型的不同，要进行不同的处理，就可以为同一个函数提供多个函数类型来进行重载，说白了就是给一个函数写多种传入参数和返回值不同的情况，ts自动去匹配使用那种情况
  
      function fun(x): any {   //此时x的类型就是any，因为传入的参数类型不同，所以不好定义
          if (typeof x == "object") {
              return x[0].name;
          }
          if (typeof x == "number") {
              return x
          }
      }
  
      let myDeck = [{ name: '张三', id: 1 }];
  
      fun(myDeck)
      fun(5)
  
  重载去定义类型
      function fun(x: { name: string; id: number; }[]): string; // 重载情况一匹配第一个调用
      function fun(x: number): number // 重载情况二，匹配第二个调用
      function fun(x): any {
          if (typeof x == "object") {
              return x[0].name;
          }
          if (typeof x == "number") {
              return x
          }
      }
  
      let myDeck = [{ name: '张三', id: 1 }];
      console.log(fun(myDeck));
      console.log(fun(5));
  ```

# 泛型

* 简介

  ```typescript
  定义一个函数，传来什么类型就返回什么类型，此时我们不知道要传入的类型，所以只能用any来规定类型，但这样就失去了类型的校验
      function fun(x) { // 不规定类型默认就是any
          return x
      }
  
  使用泛型就能轻松解决这问题
      function fun<T>(x: T): T {  // T其实就是一个变量，他具体是什么类型就需要通过你去指定
          return x
      }
  
      fun<number>(6)  // 手动指定T的类型为number，则上面所有T就是number
      fun(5)	// 不手动指定类型，ts会根据传入参数的类型去推断T的类型
  
  在实际使用中，一般不会去明确指定T的类型，这样可以保持代码的精简
  	
  错误示例：
  	function fun<T>(x: number): T {
          return x 
          // 虽然指定了T的类型为number，x也为number类型，但是在函数内部也不能混用T 和 number 类型,
          // 因为T代表的是任意类型
      }
      fun<number>(6)
  ```

* 使用泛型变量

  ```typescript
  编译器要求在函数体，你必须把这个参数T当作是任意或所有类型
  
  function fun<T>(x: T): T {
      console.log(x.length);  // 报错
      	// 虽然下面指定了x的类型，但是T依然代表的是任意类型，没有地方明确指定它具有length的属性
      return x;
  }
  fun('a')
  
  给x添加length属性
      function fun<T>(x: T[]): T[] {  // 此时T就是数组中每个元素的类型
          x.length  // 这样就能正确访问到length属性
          return x;
      }
  
      fun(['a', 5])
  		// 第一个参数是string，此时T就是string类型，第二个参数是number，此时T就被推断为number
  
  	fun<string>(['a', '6'])  // 但是如果手动指定了T的类型，那么所有的参数就必须是这个类型
  ```

* 泛型类型  (泛型函数)

  ```typescript
  function fun<T>(x: T): T {
      return x;
  }
  
  let fun1 = fun;  // fun1也同样具有了fun的类型变量T
  
  let fun1: <T>(x: T) => T = fun; // 也可以指定相同的参数
  
  let fun1: <U>(x: U) => U = fun;	//只有数量和使用方式一致，参数名也可以不同
  
  let fun1: { <T>(x: T): T } = fun; // 使用带有调用签名的对象字面量来定义泛型函数
  
  使用interface去构造泛型
      interface myFun {
          <T>(x: T): T
      }
      function fun<T>(x: T): T {
          return x;
      }
      let fun1: myFun = fun
      
  使用泛型去构造interface
  	interface myFun<T> {  // 创建一个泛型T，当调用interface传入类型的时候，就已经锁定了T的类型
          (x: T): T
      }
  
      function fun<T>(x: T): T {
          return x;
      }
  
      let fun1: myFun<number> = fun// 显示的给interface的T传递为number类型
  ```

* 泛型类

  ```typescript
  class GenericNumber<T> {
      zeroValue: T;
      add: (x: T, y: T) => T;
  }
  
  let myGenericNumber = new GenericNumber<number>();
  ```

* 泛型约束 extends 

  ```typescript
  借助extends来约束T
  	interface myFun {
          length: number;
      }
  
      function fun<T extends myFun>(arg: T): T { // 这里约束了T必须有length属性
          console.log(arg.length)
          return arg;
      }
  
      fun('a')  // 字符串有length属性可以传
  	fun(5) // 数字没有number属性，不能传
  	fun([1]) // 数组可以传
  
  或者
  	function fun<T extends Array<T> | string>(arg: T): T {
          console.log(arg.length)
          return arg;
      }
  
      fun('a')
  ```


#  enum 枚举

* 数字枚举

  ```typescript
  如果只枚举属性，而不对其进行赋值，那么枚举的值将会是从零开始的数值
  	enum color {
          pink,  // 值为0
          red,   // 1
          green  // 2
      }
  
  如果只对其中的一个值进行数字赋值，那么那个值之前的会从0开始自增长，那个值之后的会从被复制的那个值自增长
      enum color {
          pink,  // 0
          yellow, // 1
          red = 5,   // 5
          green  // 6
      }
  
  注意：
  	如果其中一个枚举值不是数字，那么所有的枚举值都必须进行手动赋值
  ```

* 异构枚举

  ```typescript
  通常情况下，一个枚举里面赋值的类型，应该是一样的，虽然string和number能混用，但并不建议使用，并且布尔类型、对象类型、以及null和undefined类型都不能作为枚举的成员类型
      enum color {
          pink = 15,
          yellow = 'str',
          red = 'red',
          green = 'green'
      }
  ```

* 使用运算符

  ```typescript
  枚举的值可以使用运算符计算
  	enum color {
          pink = 15 + 6,
          yellow = 5 / 5,
          red = 6,
          green = red  // 如果枚举的值是number类型的，则可以赋值给另一个枚举
      }
  ```

* 枚举与interface的混用

  ```typescript
  枚举的值是数值类型
      enum color {
          pink,
          yellow,
      }
  
      interface Icolor {
          rgb: color.pink
          rgba: number
      }
  
      let myColor: Icolor = {
          rgb: 0,  // 可以直接将枚举的值赋值给对应的属性
          rgb: color.pink, // 最好使用这种方式
          rgba: 15
      }
      
  枚举的值是字符串类型，那么只能将枚举赋值给对应的属性
  	enum color {
          pink = 'pink',
          yellow = 'yellow',
      }
  
      interface Icolor {
          rgb: color.pink
          rgba: number
      }
  
      let myColor: Icolor = {
          rgb: color.pink,  // 只能这么赋值，不能将枚举的值直接赋值给对应属性
          rgba: 15
      }
  
  ```

* 函数使用枚举

  ```typescript
      enum E {
          Foo,
          Bar,
      }
  
      function f(x: E) {}  // 此时x能接收的值就只有0和1，或者E.Bar和E.Foo
  ```

* 反向映射

  ```typescript
  如果枚举的值是number类型就可以反向映射，如果是字符串就不行
  	enum Enum {
          A
      }
      let a = Enum.A
      Enum[a] // A, 就类似于用enum中枚举的value去读取key
  ```

* 同名枚举

  ```typescript
  名字相同枚举最终会合并，在其中一个枚举中声明过得枚举不能再次出现
  	enum color {
          red = 'red'
      }
  
      enum color {
          pink = 'pink'
      }
  ```

* const 枚举

  ```typescript
  使用const定义的枚举，在编译阶段会把枚举去掉，在使用枚举的地方都是使用枚举真实的值
      enum color {
          red = 'red'
      }
      console.log(color.red);
  
  	编译后的结果
      	var color;
          (function (color) {
              color["red"] = "red";
          })(color || (color = {}));
          console.log(color.red);
  
  使用const定义的枚举 
  	const enum color {
          red = 'red'
      }
      console.log(color.red);
  
      编译后的结果  // 枚举的属性全部被去除了，只剩下他的值
      console.log("red");
  ```
  
* 外部枚举

  ```typescript
  
    declare enum Enum {
        A = 1,
        B,
        C = 2
    }
    
    外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
  ```

# 类型推论

```typescript
一个变量在定义的时候就被赋值，那么ts会自动为他推断类型
    let str = 'str'   等同于  let str: string = 'str' 
    
如果在定义的时候没有赋值，那么则会被推断为any
	let str      等同于  let str：any
    
最佳通用类型
	let arr = [5, 'str']  等同  let arr: (string | number)[]
	会匹配一个适合所有赋值类型的类型
```

# 类型兼容性

* 变量比较

  ```typescript
  如果要将一个变量的值赋值给另一个变量，那么赋值的那个变量必须要包含被赋值那个变量的属性
      interface color {
          red: string
      }
  
      let x: color
  
      let y = { red: 'red', pink: 'pink' }  
      x = y // y有x需要的red: string，所以可以成功赋值
  
  	检查函数 参数 也一样
      	let y = { red: 'red', pink: 'pink' }
  
          function fun(a: color) {}
  
          fun(y)  // y有a需要的red: string，所以可以成功赋值
  ```

* 比较两个函数

  ```typescript
  参数比较时，只有先比较参数的个数，只有参数少的才能赋值给参数多的函数(特殊：参数多的函数，多的部分都是可选参数则可以给参数少的函数赋值)，函数赋值并不关心参数名是否一致，只关注相同位置的参数类型是否一致
      let x = (a: number) => 0
      let y = (b: number, s: string) => 0
  
      y = x; // OK
      x = y; // Error
  
  函数返回值比较，y中的返回值包含了x返回值必须的属性，所以y能赋值给x，但x没有y必须的location，所以x不能赋值给y
  
  	let x = () => ({ name: 'Alice' });
      let y = () => ({ name: 'Alice', location: 'Seattle' });
  
      x = y; // OK
      y = x; // Error
  ```

* 枚举

  ```typescript
  枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。
  enum Status { Ready, Waiting };
  enum Color { Red, Blue, Green };
  
  let tat = Status.Ready;
  tat = Color.Red;  // Error ,即使值相同也不能赋值
  ```

* 类

  待补充

* 泛型

  ```typescript
  如果使用泛型里面并没有具体的属性使用到，即使泛型的类型不一致，也能成功赋值，但是一旦里面有属性用到泛型，虽然 x 和 y 都是非空对象，但是它们的类型并不严格相同。在 x 的定义中，数据类型为 number ，而在 y 的定义中，数据类型也是 number，但是由于它们的定义是分别赋值的，所以在 TypeScript 中它们的类型被视为不同的类型。
      interface Empty<T> {
      }
      let x: Empty<number>;
      let y: Empty<string>;
  
      x = y; 
  ```

# 高级类型

* **&**交叉类型

  ```typescript
  将两个类型合并起来，需要注意相同属性的类型必须相同，不然会报错
      interface Type1 {
          prop1: string;
          prop2: number;
      }
  
      interface Type2 {
          prop2: number;  // 合并的时候prop2必须和上面的prop2类型一致
          prop3: boolean;
      }
  
      type Type3 = Type1 & Type2;  // 合并类型
  
      const obj: Type3 = {
          prop1: 'Hello',
          prop2: 123,
          prop3: true
      };
  ```

* **|** 联合类型

  ```typescript
  将几种类型联合起来表示一个值，这个值可以是这些联合类型中的一种
  	interface Type1 {
          prop1: string | number | boolean
          prop2: number | string
      }
  
      const obj: Type1 = {
          prop1: false,  // 这里可以输入三种类型的值
          prop2: 123,
      }
  
  如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
      interface Type1 {
          aar(): void
          car(): void
      }
  
      interface Type2 {
          bar(): void
          car(): void
      }
  
      function fun(): Type1 | Type2 {  // car()是两个接口共有的成员，只有他才能被访问到
          const obj = {
              car() { },
              bar() { }
          }
          return obj as Type1 | Type2
      }
  
      let p = fun()
      p.car()  // ok
      p.bar()  // error  不是两个接口共有的成员
  
  	在对象中
  	let obj: Type1 | Type2 = {
          car() { },  
          aar() { }, // 可以声明但不能使用
          bar() { }
      }
  
      obj.car()  // ok
      obj.aar()  // error  不是两个接口共有的成员
  
  如果要非要访问不是共同类型的话，就只能使用类型断言
      (<Type1>obj).aar();   // 指定obj为Type1类型，就能访问aar方法
      (obj as Type1).aar();
  ```

* **is**类型保护

  ```typescript
  function isFish(pet: Fish | Bird): pet is Fish {
      return (<Fish>pet).swim !== undefined;
  }
  在 TypeScript 中，使用 is 运算符时，它的左边是函数的参数名，右边是要判断的类型。这种语法被称为类型谓词，用于在函数内部保护参数的类型，从而避免在函数体内执行特定操作时出现检查参数类型的运行时错误。
  
  使用的 pet is Fish 是一个类型保护谓词，它的作用是判断某个对象 pet 是否是 Fish 类型。如果条件成立，则该语句返回 true，并使得编译器将 pet 推断为 Fish 类型，从而避免在后续的代码中出现运行时错误或类型不匹配的问题。如果条件不成立，则该语句返回 false，pet 仍被推断为 Fish | Bird 类型。
  ```

* **typeof** 类型保护

  ```typescript
  类似于类型断言，被typeof判断的参数，就能在里面正确的调用对应属性的方法，比如能string有length属性，而number没有，如果没有被typeof保护起来，则不行
      function fun(x: string, y: string | number) {
          if (typeof y === "number") {
              return y.toString()
          }
          if (typeof y === "string") {
              return y.length  
              // 如果这里没有被typeof保护起来，则会报错，length不是string和number共有的属性
          }
      }
  ```

* **type**类型别名

  ```typescript
  type x = string  // 此时x就代表string类型
  let a:x = 'str'  // a的类型就是x做代表的string类型
  
  type newType = 1 | 2 | 3
  let num : newType // 此时num的类型就必须是1或2或3中任意的一个值
  num = 2
  等同于写了let num :1 | 2 | 3但是使用一个自定义type写的，可以赋值个多个变量为这个type
  let numB : newType   === let num :1 | 2 | 3 // 此时numB也是这个类型了
  
  类型别名使用泛型
  	type Container<T> = { value: T };
  
  使用类型别名来在属性里引用自己
  	type Tree<T> = {
          value: T;
          left: Tree<T>;
          right: Tree<T>;
      }
  ```

* 可识别的联合类型

  ```typescript
  每个接口都有 kind属性但有不同的字符串字面量类型。 kind属性称做 可辨识的特征或 标签。 其它的属性则特定于各个接口
  interface Square {
      kind: "square";
      size: number;
  }
  interface Rectangle {
      kind: "rectangle";
      width: number;
      height: number;
  }
  interface Circle {
      kind: "circle";
      radius: number;
  }
  type Shape = Square | Rectangle | Circle;
  
  function area(s: Shape) {
      switch (s.kind) {
          case "square": return s.size * s.size;
          case "rectangle": return s.height * s.width;
          case "circle": return Math.PI * s.radius ** 2;
      }
  }
  
  area({ kind: 'circle', radius: 5 })  // kind只能是固定的square、rectangleh或者circle，而其他属性也只能是对应接口的属性
  ```

# 模块

```typescript
和js的导入导出基本一致
    默认暴露和分别暴露
        export default interface color { 
            red: string
        }

        export type person = number | string

    引入
        import colorType, { person } from './greeter'

        let myColor: colorType = {
            red: 'red'
        }

        let myPerson: person = 'name'

```

# 命名空间

* **namespace** 单文件中

  ```typescript
  通过namespace来定义命名空间，命名空间里面的内容外部无法访问，必须里面通过export暴露出去，外部才能访问到
      namespace mySpase {
          export interface color {
              red: string
          }
          export let str:string = 'str'
          export function fun() {
              console.log('fun')
          }
          let num:number = 15 // 没有暴露的变量在外部是无法使用的
      }
  
      let obj: mySpase.color = {  // 使用命名空间里的 interface
          red: 'red'
      }
      mySpase.fun() // 使用命名空间里面的函数
  	muSpace.str	 // 使用命名空间里面的变量
  
  注意：
  	1.在同一个ts文件中，不同的命名空间可以由相同的变量，但他们都是独立存在的，互不影响
      2.同名的命名空间，他们中不能拥有同名属性，他们其中的变量，和方法也不能共享
      3.同名命名空间中同名的interface会进行合并
  ```

* 多文件使用命名空间

  ```typescript
  在my.ts中写入命名空间
  	namespace mySpase {
          export interface color {
              red: string
          }
          let str: string = 'str'
      }
  
      namespace mySpase {
          export interface color {
              pink: string
          }
      }
          
  在type.ts中导入my.ts中的命名空间
      /// <reference path="greeter.ts" />
  
      let obj: mySpase.color = {
          red: 'red',
          pink: 'pink'
      }
  ```

* 命名空间别名 **import**

  ```typescript
  通过import来给命名空间起别名
  	namespace Shapes {
          export namespace Polygons {
              export class Triangle { }
              export class Square { }
          }
      }
  
      import polygons = Shapes.Polygons  // 将Shapes.Polygons的别名为polygons，就不用嵌套读取里面的类
      let sq = new polygons.Square()
  ```

