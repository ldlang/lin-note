### typescript

```typescript
全局安装
	npm i -g typescript
```

### 编译ts

```typescript
tsc xxx.ts
```

### 数据类型

```typescript
number					任意数字
string					任意字符串
boolean					布尔值
null					null
undefined				undefined
any						任意类型
unknown					类型安全的any
void					空值，没有值或者undefined
never					没有值，不能是任何值
object					任意的js对象
array					任意的js数组
tuple					元素，TS新增类型，固定长度数组
enum					enum {A, B}枚举，TS新增类型
```

1. 布尔值

   ```typescript
   let isDone: boolean = false;
   let createdByBoolean: boolean = Boolean(1);
   let createdByNewBoolean: Boolean = new Boolean(1);
   ```

2. 数值

   ```typescript
   let decLiteral: number = 6;
   let hexLiteral: number = 0xf00d;
   let binaryLiteral: number = 0b1010; // ES6 中的二进制表示法
   let octalLiteral: number = 0o744;// ES6 中的八进制表示法
   let notANumber: number = NaN;
   let infinityNumber: number = Infinity;
   ```

3. 字符串

   ```typescript
   let myName:string = 'n'
   ```

4. void 空值

   ```typescript
   void	如果一个变量是void类型，那么只能将null和undefined赋值给他
       let isNull:void = null;
       let isNull:void = undefined;
   
       function fun():void{  //用void表示没有任何返回值的函数
           console.log('没有返回值');
       }
   
   
       let u: void;
       let num: number = u;
   ```

5. null和undefined

   ```typescript
   1.null值 和 undefined值
       let isNull:null = null
       let isUndefined:undefined = undefined
   
   2.注意null和undefined是所有类型的子类型，就说明以下方式都不会报错
       let isNull:number = undefined
       let isUndefined:boolean = null
   
       let u: undefined;
       let num: number = u;//同样不报错
   ```

6. 任意值 any

   ```typescript
   1.any 可以被赋值为任何类型，被改变为其他类型以为是可以的
       let isNull:any = null
       let isNum:any = 5
       let isStr:any = "str"
       let isBoolean:any = false
       let isArray:any = [1,2]
       isArray = { a: 1 };
   
   2.访问任何属性和方法也是可以的
       let anyThing: any = 'hello';
       console.log(anyThing.myName);
   
       let anyThing: any = 'Tom';
       anyThing.setName('Jerry');
   
   3.any类型的值也可以赋值给其他类型的值
       let a //此时a就是一个any类型的值
       a = true
       let str: string
       str = "15"
       str = a //可以赋值，此时str就变成了一个布尔值
   
   4.如果一个变量定义的时候没有给类型也没有赋值，那它就是一个any类型的值
   	let a //此时a就是一个any类型的值
   ```

7. unknown 未知类型，类型安全的any

   ```typescript
   当一个值未知类型时最好用unknown，不要用any
   
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

8. never

   ```typescript
   表示永远不会返回结果
       function fun():never {
           throw new Error('报错了') // 操作被这里中断了
       }
   	// 某种意义上说没有返回值也是一种返回值，never直接不会走到后面，直接被中断了
   ```

9. object

   ```typescript
   都不会报错，所以一般不这么用
   	let a: object
       a = function m() {}
       a = {}
   
   常用方式
   	let b: { name: string }
       b = {name: '张三'}
       b = {name: '张三',age: '李四'} // 报错，结构必须和定义的一致
   
   可选属性 ?
   	解决方式:用?指定一个属性为可选属性
           let b: { name: string , age?:number} 
   		以下都不会报错
           b = {name: '张三'}
           b = {name: '张三',age: '李四'}
   
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
   ```

10. array

    ```typescript
    1.普通形式
    	let arr: number[]  // 表示一个数组里面只能放数字类型的值
        let arr1: (number | string)[] // 表示一个数组里可以有数字和字符串
            arr = [1, 5]
            arr1 = [1, "5"]
    
    2.泛型的方式
    	let arr: Array<number> // 表示一个数组里面只能放数字类型的值
    	let arr1: Array<string | number> // 表示一个数组里可以有数字和字符串
        	arr = [1, 5]
            arr1 = [1, "5"]
    
    3.interface的形式
    	interface arr {
    		[index:number] : number | string //数组的下标为数字类型
        }
    	let brr :arr = [5,5 ,'a']
        
    ```

11. tuple 元组

    ```typescript
    固定长度的数组
        let arr: [number, string]  //长度必须是2，元素也必须一一对应
        arr = [5, "str"]
    ```

12. enum 枚举

    ```typescript
    定义一个枚举，试用于一个值在固定几种值中选择的时候使用
        enum Gender {
            men,
            women
        }
    
        let person: { name: string, gender: Gender }
        person = {
            name: '张三',
            gender: Gender.men
        }
    
        console.log(person.gender == Gender.men) // true
    ```

### 类型断言

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

**特殊：字面量赋值**

```typescript
let a: 10
此时就相当于
const a = 10, a的值不能在被更改

let str: 'ts' | 'js'
此时str只能被赋值ts或者js，不能再被赋值其他
```

### 类型推断

```typescript
情况1，声明变量同时赋值
    let anyThing = 7   //anyThing虽然没有指定类型，但是在定义的时候就被赋值了一个数值类型，此时anyThing就会被认为是一个number类型的，再赋值其他类型就会报错

情况2，只声明变量，不赋值，不给类型
	let anyThing   //此时anyThing就会被推断为任何类型(any)，可以赋任何类型的值
```

### 联合类型

```typescript
1.给一个变量指定两个或以上的类型 用 | 分开
    let aValue:string | number = 7
    aValue = '7' //不报错
    aValue = false //报错

2.访问联合类型时  ==> 必须访问联合类型共有的属性
    let aValue:string | number = 7
    aValue.length //报错，数值没有length属性
    aValue.toString() //正确

3.指定3种类型
    let aValue:string | number | boolean = 7
    aValue = false

4.联合类型的类型推断
	let myNum : string | number
    myNum = 15 // 此时myNum已经被推断为了number类型
    myNum.length  // number没有length属性会报错
    myNum ='str' // myNum又被被推断为了string类型
    myNum.length // 再去访问他的length属性就没问题

注意:如果定义了一个联合类型的变量，但是没有赋值，那么赋值什么类型的值就会被认为是什么类型的值
    let aValue: string | number;
    aValue = 'seven';
    aValue.length // 5

    aValue = 7;
    aValue.length // 编译时报错
```

### 函数

1. 设置函数传递参数的类型

   ```typescript
   function sum(a:number, b:number){
       console.log(a+b)
   }
   sum(15,2)
   ```

2. 设置函数返回值的类型

   ```typescript
   function sum(a:number, b:number) :number{
       return a+b
   }
   sum(15,2)
   
   函数确定的返回值的类型后,result就可以通过类型推断确定好类型了，同时也保证了返回值的正确性。
   let result = sum(15,2) 
   ```

3. 函数没有返回值

   ```typescript
   用void表示没有任何返回值的函数，但是可以放回空，null，undefined
       function fun():void{
           console.log('没有返回值');
       }
   
     	function fun():void{
           return null 
       }
   
   never就用于没有返回值，只能被中断操作
       function fun():never {
           throw new Error('报错了') // 操作被这里中断了
       }
   ```

4. 定义一个指定类型和参数的函数

   ```typescript
   定义一个返回值为string，接收两个形参都为number的函数
       let fun: (a: number, b: number) => string
   
       fun = function (n1, n2) {
           return n1 + n2 + ""
       }
   ```
   
5. 函数表达式定义类型

   ```typescript
   普通写法
   	function fun(a:string,b:number) : string{
         return a+b
       }
       fun('哈哈',5)
   
   变量写法
   	let fun =  function(a:string,b:number) : string{
         return a+b
       }
       fun('哈哈',5)
   
   	实际上左边是通过类型推断出来的，完整的写法应当是
       let fun:(a:string,b:number)=>string= function(a:string,b:number):string{
           return a+b
       }
       // 这里的=>指的是函数的返回类型，并不是箭头函数
   	fun('哈哈',5)
   ```

6. 通过interface定义函数

   ```typescript
   interface Ifun {
     (a:string,b:number):string //左边是参数的类型，右边是返回值的类型
   }
   
   let myFun:Ifun
   myFun = (a:string,b:number):string => a + b
   ```

7. 可选参数注意事项

   ```typescript
   1、可选参数必须放置于必传参数的后面，因为如果第二个参数是可选参数，同时他没有传，那么传递的参数就对不上了
       function fun(a:string,b:number,c?:string):string{
         return a+b+c
       }
       fun('字符串', 5,'哈哈哈')
   
   2、如果可选参数加了默认值那么，可选参数可以不放到最后
       function fun(a:string,b?:number = 15,c:string):string{
         return a+b+c
       }
       fun('字符串', 5,'哈哈哈')
   ```

8. 剩余参数

   ```typescript
   function fun(a:number,...b:Array<number>){
       console.log(b)
   }
   
   fun(1,2,3,4,5)
   ```

### & 与

```typescript
合并
let obj: { name: string } & { gae: number }
等同于
let obj: { name: string, gae: number }

obj = {name: '张三', gae: 15}
```

### 类型别名

```typescript
定义一个属于自己的类型
    type myType = string
    let str: myType // 由于myType等价与string，所以str就被指定为string类型

    type newType = 1 | 2 | 3
    let num : newType // 此时num的类型就必须是1或2或3中任意的一个值
    num = 2
    等同于写了let num :1 | 2 | 3但是使用一个自定义type写的，可以赋值个多个变量为这个type
    let numB : newType   === let num :1 | 2 | 3 // 此时numB也是这个类型了
```

## 编译选项

1. tsc xxx -w

   ```typescript
   监视文件变化，文件改变则自动编译为js
   ```

2. tsconfig.json

   ```typescript
   ts的配置文件，只要有这个文件，执行tsc就能编译所有ts文件，执行tsc -w就能同事监视所有ts文件的变化
   
   配置很多，具体参考官网
   ```

### class

1. 创建一个类

   ```typescript
       class Point {
           name: string = "张三"
           age: number = 15
       }
   	let p = new Point()  // 必须要new才能使用里面的方法
   ```

2. readonly

   ```typescript
   只读属性不能更改
       class Point {
           readonly name: string = "张三"
       }
       let p = new Point()
       console.log(p.name) // 张三
   ```

3. static

   ```typescript
   静态属性
   	能够立马调用，但是通过new创建的实例身上不会有静态的属性和方法
       class Point {
           static name: string = "张三"  // 静态属性
           static readonly age: number = 15  // 静态只读属性
           static fun(){
               return 1
           }    
       }
   	Point.fun()
       console.log(Point.age)  // 张三
   ```

4. constructor

   ```typescript
   类上面的构造函数 只要class被实例(new),就会立马调用constructor函数
   	class Point {
           name: string // 定义需要用到的属性的类型
           age: number
           constructor(name: string, age: number) {
               this.name = name
               this.age = age
       		console.log('被调用了')
           }
           brk() {
               console.log(this)
           }
       }
       let p = new Point('张三', 15) // 会立马调用constructor函数
       p.brk() // 谁实例化class，里面的this就只向谁，此时的this就只向p
   ```

5. abstract 抽象类

   ```typescript
   abstract 抽象类，一旦类前面有这个关键字，那他就是一个抽象类
   	抽象类不能被用来创建实例，也就是不能new
       抽象类就是专门用来被继承的类
       
       抽象方法,在方法前面加入abstract关键字，他就是一个抽象类
   		抽象方法必须在子类里面重写
       	abstract brk():void
   
   abstract class Point {
       name: string
       age: number
       constructor(name: string, age: number) {
           this.name = name
           this.age = age
       }
       abstract brk():void
   }
   
   class Per extends Point {
       sex: string
       constructor(name: string, age: number, sex: string) {
           super(name, age);
           this.sex = sex
       }
   	brk(){
           console.log(this.name)
       }
       fun() {
           console.log(this.name)
       }
   }
   
   let p = new Per('张三', 15, '男')
   p.fun()
   p.brk()
   ```

6. get和set的使用

   ```typescript
   class Point {
   	private name:string //私有属性，只能在类内部修改和访问
       constructor(age: number) {
           this.age = age
       }
       get newAge() {
           return this.age
       }
       set newAge(val) {
           this.age = val
       }
   }
   
   get newAge() {} 相当于是一个值，可以在创建实例后这就通过 实例.newAge访问里面的返回值
   set newAge(val) {} 当实例上去修改newAge这个值，val就会得到这个修改的值，就可以怼他进行					处理
   ```

### interface 接口

```typescript
1、可以定义一个接口，限制一个对象
    interface myInter {
        name: string
        age: number
        fun(): void
    }

    let obj: myInter = {
        name: '张三',
        age: 15，
        fun(){}
    }

2、重名将会合并
	interface Dom {
        name:string;
        age:number;
    }

    interface Dom {
        sex: string
    }
	// 必须拥有上面两个接口的所有属性
    let person: Dom = {
        name: '张三',
        sex: '男',
        age: 15,
    }
   
3、使用interface的变量必须和interface定义的形状保持一致
	interface Dom {
        name:string;
        age:number;
    }

    let person: Dom = {
        name: '张三',
        sex: '男',  // 多了这个属性，报错
        age: 15,
    }
    
    let person: Dom = {
        name: '张三',  // 少了属性报错
    }
    
 
4、可选属性
    interface Dom {
        name:string;
        age?:number; // 此时age是一个可选属性，写不写都行
    }

    let person: Dom = {
        name: '张三',
    }
    
5、任意属性
    interface Dom {
        name: string;
        age?: number;
        [propName:string]: string | number; 
    }
	// 定义一个key为string，value为string | number的任意属性，此时这个interface就能写任意个键值对，但是value必须是string或者number的类型
	注意：任意属性的value的类型必须是已有类型的父类型

    let person: Dom = {
        name: '张三',
        sex: '男',
    	ger: 15  // 可以写任意个属性，但一定要包含name属性
    }
    
6、添加只读属性 readonly
	interface Dom {
        readonly id : string
    }

    let person: Dom = {
        id : '12341241234'
    }

    person.id = '20'  // 只读属性只能在初始化的时候赋值一次，不能再次赋值，但可以读取值
  
7、interface嵌套
	interface Idata{
        token:string;
        name:string;
    }
	//data里面还有其他层数的数据结构，此时就可以通过interface的嵌套对深层次的数据进行约束
    interface IData{
        code:number,
        data:Idata 
    }
    
8、联合类型的interface
	interface Idata{
        token: string;
        name: string;
    }

    interface IData{
        code: number;
        date: string;
    }

    let person: Idata | IData = {
        name: '张三'，
        date: '哈哈'
    };
	// 此时两个interface里面的属性都变成了可选属性
    (person as Idata).token = '564156'; // 使用类型断言为 Idata 类型的属性赋值

8、也可以限制class，加上implements关键字
    class Point implements myInter {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.age = age
            this.name = name
        }

        fun() {
            return 22
        }
    }



注意：
	1.接口中所有的属性只能定义类型，不能拥有实际的值
	2.在接口中定义的所有方法都是抽象方法，即使必须要去被实现的方法
	3.接口定义可以重名，重名的两个接口会合并起来
	4.类使用接口必须加上implements关键字
```

### 修饰符

```typescript
private	
	私有属性，私有属性只能在这个类内部被访问和修改，不过可以通过get和set方法让外部也能修改
    
protected 
	受保护的方法，可以在这个类和子类，也就是继承他的类中被修改，外部不能直接修改，也可以用过get     和set让外部来修改
    
pulic
	公有的方法，可以在任意位置被访问和修改
    
readonly 
	只能被读取，不能修改
```

### 通过public可以简写

```typescript
class Point {
    constructor(public name: string, public age: number) {
        this.age = age
        this.name = name
    }
}
```

### 泛型

```typescript
在不确定类型的时候就可以使用泛型定义一个变量
	语法：
    function fun<T>(name: T) {  //T就是一个类型变量你传入啥，他就是啥类型
        return name
    }

    fun('张三') // 不指定类型，就会被类型推断，此时T就是一个string的类型
    fun<string>('张三') // 指定类型为string，此时的T就是被指定的string

可以同时定义多个泛型
    function fun<T, K>(name: T): T {
        return name
    }

    fun<string, number>('张三') // 此时T的类型就是string，K的类型就是number

给泛型添加约束
	1、通过interface约束
        interface Person {
            name: string;
            age: number;
        }

        function student<T extends Person>(arg: T): T {
            return arg;
        }
        student({name: "lili", age: 11, arg: 15});

	说明：
		Person拥有string和number两种类型，他给泛型T增加了约束，那么泛型T就是能是string和			number，不是为其他的类型，但Person同时也规定了两个属性，所有fun也必须有这两个属				性，缺一不可，他自身的arg可以是string和number的类型
        
    2、直接约束
    	function student<T extends string | number>(arg: T): T {
            return arg;
        }

        student('张三');
        student(15);
	说明：
    	此时T就只能是string或number的类型，也可以是他们的子类

在class中使用泛型
	class Point<T> {
        name: T
        constructor(name: T) {
            this.name = name
        }
    }
    let p = new Point<string>('张三')
```

### 泛型工具类型

1. Partial

   ```typescript
   partial<T>的作用就是将某个类型中的属性全部变为可选项?
       interface Person {
           name:string;
           age:number;
       }
       function student<T extends Person>(arg: Partial<T>):Partial<T> {
             return arg;
       }
   ```

2. Record

   ```typescript
   Record<K extends keyof any, T>的作用是将K中所有的属性转换为T类型；
   
   interface PageInfo {
       title: string
   }
   type Page = 'home'|'about'|'other';
   const x: Record<Page, PageInfo> = {
       home: { title: "xxx" },
       about: { title: "aaa" },
       other: { title: "ccc" },
   };
   将x中
   ```

3. Pick

   ```typescript
   Pick<T, K extends keyof T>的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型
       interface Todo {
           title:string,
           desc:string,
           time:string
       }
       type TodoPreview = Pick<Todo, 'title'|'time'>;
       const todo: TodoPreview ={
           title:'吃饭',
           time:'明天'
       }
   ```

4. Exclude

   ```typescript
   Exclude<T,U>的作用是将某个类型中属于另一个类型的属性移除掉
   type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c",第二个参数就是要移除的
   const t:T0 ='b';
   ```

5. ReturnType

   ```typescript
   returnType<T>的作用是用于获取函数T的返回类型
   ```

   





