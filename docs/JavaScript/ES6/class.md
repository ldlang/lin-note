---
sidebar: auto
---

## 构造函数

### 构造函数表现形式的特点

函数拥有 prototype
对象拥有\_\_proto\_\_

- 函数体内部使用了 this 关键字，代表了所要生成的对象实例。
- 生成对象的时候，必须使用 new 命令
- 查找顺序，先在函数本身区找，找不到就去原型上找，一直往上找，找不到则返回 null

```js
// 给构造函数添加属性
function Person(name) {
  this.name = name;
}

// 给构造函数添加方法
Person.prototype.fun = function () {
  return "fun11";
};

// 实例化构造函数
const per = new Person("张三");
console.log(per.name); // 张三
console.log(per.fun()); // fun11
```

### 构造函数的特点

- 一个构造函数可以使用 new 关键字来创造出若干的实例。

- 每一个实例都可以使用这个构造函数的属性和方法，属性和方法都是共享的。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.fun = function () {
  console.log("fun");
};
let a = new Person("张三", 18);
let b = new Person("李四", 15);
a.fun(); // fun
b.fun(); // fun
console.log(a); //Person {name: '张三', age: 18}
console.log(b); //Person {name: '张三', age: 18}
```

### 构建函数的创建

- 属性写在构造函数体内
- 方法写在构造函数的原型上
- 方法不是不能写在构造函数体内如果你写在构造函数体内，每次 new 的时候会创建一个函数空间，最后就会有若干个一摸一样的函数空间出现，浪费内存空间。

### 有 return 的情况

- 返回值为普通类型，无法得到返回值

  ```js
  function Person() {
    this.name = "Jack";
    return 1;
  }
  var a = new Person();
  console.log(a); // Person {name: 'Jack'}
  ```

- 返回值为复杂类型,得到的值永远是返回值，里面定义的值拿不到

  ```js
  function Person() {
    this.name = "Jack";
    return [1, 2, 3];
  }
  var a = new Person();
  console.log(a); // (3) [1, 2, 3]
  ```

## class

### class 与 构造函数

1. class 里面的方法和构造函数一致，还是存放在 prototype 上

   ```js
   class Point {
     newFun() {
       return 22;
     }
   }

   等同于;
   function Fun() {}
   Fun.prototype.newFun = () => 22;
   ```

2. class 上所有的方法是不可能枚举的，这点和构造函数有所区别

   - class

     ```js
     class
         class Point {
             constructor(x, y) {}
             fun() {}
         }

     // 获取可枚举的属性方法
     Object.keys(Point.prototype)  // []

     // 获取所有属性方法，包括不可枚举的
     Object.getOwnPropertyNames(Point.prototype) // ["constructor","fun"]
     ```

   - 构造函数

     ```js
     function fun() {}
     fun.prototype.newFun = () => {};

     // 获取可枚举的属性方法
     Object.keys(Point.prototype); // ["newFun"]

     // 获取所有属性方法，包括不可枚举的
     Object.getOwnPropertyNames(Point.prototype); // ["constructor","toString"]
     ```

3. p 是 point 的实例，调 p 的 constructor 实际上就是调 point 原型上的 constructor

   ```js
   class point {}
   let p = new point();
   p.constructor == point.prototype.constructor; // true
   ```

4. 给 class 快速添加一些方法

   ```js
   class point {}
   Object.assign(point.prototype, {
     fun() {},
     newFun() {},
   });
   ```

### constructor()

每个了类身上都会有一个 constructor 方法，即使不手动添加，也会默认给你添加一个空的 constructor 方法

```js
class Point {}
等同于;
class Ponit {
  constructor() {}
}
```

### 原型

由同一个 class new 出来的实例，他们都共享同一个原型对象

```js
class Point {}

let p1 = new Point();
let p2 = new Point();
p1.__proto__ == p2.__proto__; // true
```

### constructor 实例新写法

新写法定义的属性是实例对象自身的属性，而不是定义在实例对象的原型上面。

- 原来的写法

  将 x 定义在 constructor()方法里面的 this 上面，此时原型上的 constructor 的 length 是 1。

  ```js
  class Point {
    constructor() {
      this.x = 1;
    }
  }
  ```

- 新写法

  直接定义在 class 里面的最顶层，此时原型上的 constructor 的 length 是 0。

  ```js
  class Poin {
    x = 1;
  }
  ```

### 取值函数 get 和 set

get 函数必须有返回值，set 函数接收到的参数就是给属性赋的值。

```js
class Point {
  constructor(x) {
    this.x = 1;
  }
  get prop() {
    return "getter";
  }
  set prop(val) {
    console.log("val的值是", val);
  }
}

let p = new Point();
p.prop; // getter，直接调用prop读取到的值是get中的返回值
p.prop = 5; // 5 ,如果给prop赋值那么将会走到set中的prop
```

### 属性表达式

class 中的方法名可以是一个变量。

```js
let fun = 'getFun'
class Point {
    ['new' + 'fun']() {
        console.log('newfun');
    }
    [fun]() {
        console.log('get');
     }
}

let p = new Point()
p.newfun() // newfun
p[fun]() 等同于 p.getFun()   // get
```

### class 表达式

- 创建实例只能用 myClass，Me 只能用在 class 内部

  ```js
  let myClass = class Me {
    getClassName() {
      return Me.name;
    }
  };
  let p = new myClass();
  console.log(p.getClassName()); // Me
  ```

- 简写形式

  ```js
  let myClass = class {};
  ```

- 可以写出立即执行的类

  ```js
  let myClass = new (class {
    getClassName() {
      console.log("name");
    }
  })();
  myClass.getClassName(); // name 创建时就new了所以可以直接使用
  ```

### static 静态方法

- 在方法前面加上 static,表示这是一个静态方法，此方法不会被**实例**继承，可以直接通过类来调用，但是能被类继承。

  ```js
  class Point {
    //不需要new就能直接调用，也不会被继承
    static nowFun() {
      console.log("nowFun");
    }
    fun() {
      console.log("fun");
    }
  }
  Point.nowFun(); // nowFun
  Point.fun(); // 报错
  let p = new Point(); // p身上也无法找到nowFun这个方法
  ```

- 配合 static 直接实例化自身

  ```js
  class Point {
    fun() {
      console.log("fun");
    }
    static getInstance() {
      // 直接将class实例出来
      Point.prototype.instance = new Point();
      return Point.prototype.instance;
    }
  }
  // 此时的Point已经被实例化过，可以直接使用
  Point = Point.getInstance();
  ```

- 静态方法中包含 this，那么这个 this 指的是类，而不是实例

  class 里面的方法相互调用，可以通过 this，但是 static 的只能调用 static 的方法，普通方法也只能调用 普通方法，static 的方法可以和普通方法重名。

  ```js
  class Point {
    static bar() {
      // 静态方法
      this.baz();
    }
    static baz() {
      // 静态方法
      console.log("hello");
    }
    bar() {
      this.baz();
    }
    baz() {
      console.log("world");
    }
  }
  Point.bar(); // hello

  let p = new Point();
  p.bar(); // world
  ```

- 静态方法可以被继承

  ```js
  class Foo {
    static bar() {
      console.log("bar");
    }
  }
  class Zar extends Foo {}

  Zar.bar();
  ```

### 静态属性

能够直接被类调用，也能被类继承，但是不能被实例继承。

```js
class Foo {
  static p = 15;
}
class Zar extends Foo {}

console.log(Zar.p); // 15

let p = new Zar();
console.log(p); // {}空对象
```

### 私有属性和私有方法

只能在类内部被访问和调用，不能在实例身上调用，也不能被继承

```js
class Foo {
    p = 89
	#p = 15
    #bar() {
    	console.log(this.#p)
	}
    fun() {
        this.#bar()  只能在Foo这个类内部被调用
    }
}
class Zar extends Foo {
    bar() {
        console.log(this.#p);  报错，无法读取Foo里面的私有属性
	}
}
let p = new Zar()
p.fun() // 15
```

### 静态块

静态块只能操作已有的已有属性，不能声明新的静态属性，静态块里面不能有 return

```js
class C {
  static x = ...;
  static y;
  static z;

  static {
    try {
      const obj = doSomethingWith(this.x);
      this.y = obj.y;
      this.z = obj.z;
    }
    catch {
      this.y = ...;
      this.z = ...;
    }
  }
}
```

### class 的继承

1. 使用 extends 关键字来实现类的继承，子类继承父类，就想当于复制了一份父类，除了私有属性，完全和父类一样。

   ```js
   class Foo {
     p = 89;
     fun() {
       console.log("fun");
     }
   }
   class Zar extends Foo {}

   let p = new Zar();
   console.log(p.fun());
   ```

2. 如果子类写有 constructor，就必须在里面调用 super 方法，不然会报错，同时 super 之前的 this 也不能用。不写 constructor 其实他也会默认帮你调一次 super。

   ```js
   class Foo {
     str = "字符串";
     fun() {
       return "fun";
     }
   }

   class Zar extends Foo {
     constructor() {
       super(); // 必须调用super
     }
     bar() {
       console.log(this.str);
       return this.fun();
     }
   }

   let p = new Zar();
   console.log(p.bar());
   ```

3. 静态属性和静态方法的继承，静态的属性被继承后，在子类中修改，不会影响到父类中的这个属性值。

   ```js
   class Foo {
     static str = "字符串";
   }

   class Zar extends Foo {
     static bar() {
       this.str = "barStr";
     }
   }
   Zar.bar();
   console.log(Zar.str); // barStr
   console.log(Foo.str); // 字符串
   ```

### super 关键字

1. super 作为方法时只能在 constructor 内使用，而且必须写在调用 this 之前，不然 this 会报错，作为对象时就可以在其他地方调用。

   ```js
   class Foo {
     str = "字符串";
     fun() {}
   }
   class Zar extends Foo {
     b = 5;
     constructor() {
       super();
       this.b = 6;
       super.fun(); // 调用父类的方法
     }
     bar() {
       super.fun(); // 调用父类的方法
     }
   }
   ```

2. super 传递的参数，是父类 constructor 的实参。

   ```js
   class Foo {
     str = "字符串";
     constructor(x) {
       //形参，接收super传递过来的参数
       this.str = x;
     }
   }
   class Zar extends Foo {
     constructor() {
       super("新串"); // 实参
       super.fun();
     }
   }
   let p = new Zar();
   console.log(p.str); // 新串
   ```
