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

### 控制流分析

![image](/ts/TypeScript-Control-Flow-Analysis.png)

### 接口

![image](/ts/TypeScript-Interfaces.png)

### 类型

![image](/ts/TypeScript-Types.png)

### 类

![image](/ts/TypeScript-Classes.png)
