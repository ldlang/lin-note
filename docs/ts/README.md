# 备忘单

### 联合类型 和 交叉类型
```typescript
interface IPerson {
    name: string;
    age: number;
}

interface IPerson1 {
  name: string;
  sex: string;
}

// 联合类型, 只要满足一个类型就可以，也可以同时满足两个类型
const person: IPerson | IPerson1 = {
    name: '张三',
    age: 18,
};

// 交叉类型, 必须同时满足两个类型的并集
const person: IPerson & IPerson1 = {
    name: '张三',
    age: 18,
    sex: '男'
};
```

### 子类型概念

如果一个类型A包含了B的所有属性，那么A是B的子类型，下面示例中，IPerson2包含了IPerson的所有属性，所以IPerson2是IPerson的子类型。
从继承的角度理解，如果A继承了B，那么A中至少包含了B的所有属性，那么A是B的子类型也就能理解了。
```typescript
interface IPerson {
    name: string;
    age: number;
}

interface IPerson2 {
    name: string;
    age: number;
    sex: string;
}

// T2 的类型是 IPerson2
type T2 = IPerson2 extends IPerson ? IPerson2 : IPerson;
```

### 控制流分析

![image](/ts/TypeScript-Control-Flow-Analysis.png)

### 接口

![image](/ts/TypeScript-Interfaces.png)

### 类型

![image](/ts/TypeScript-Types.png)

### 类

![image](/ts/TypeScript-Classes.png)
