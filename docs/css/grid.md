---
sidebar: auto
---

# grid 布局

## 父容器上的属性

### grid 、 inline-grid 、subgrid

- display: grid; 该容器元素为 块级元素

- display: inline-grid; 该容器元素为 行内元素

- display: subgrid; 定义一个继承其父级网格容器的行和列的大小的网格容器，它是父级网格容器的一个子项

### grid-template-columns（设置列）grid-template-rows（设置行）

- px，百分比

  ```css
  /*规定只能有三列，每列的宽度为100px*/
  grid-template-columns: 100px 100px 100px;
  
  /* 规定前两行，每行的高度为100px，如果有第三行则自适应*/
  grid-template-rows: 100px 100px;	  
  
  /*使用百分比规定3列的宽度*/
  grid-template-columns: 30% 30% 40%;
  
  /*使用百分比前2行的高度*/
  grid-template-rows: 30% 20%;
  ```

- repeat

  接收两个参数，第一个是重复第二个参数的次数，第二个参数可以是一个值，也可以是一种模式，也就是很多值

  ```css
  /*规定有两列，每列宽度为200px*/
  grid-template-columns: repeat(2, 200px);
  
  /*规定2 * 后面模式的个数，也就是4列*/
  grid-template-columns: repeat(2, 200px 100px);
  
  /*规定前两行的高度为300px，剩余的自适应*/
  grid-template-rows: repeat(2, 300px);
  ```

- auto-fill

  - 父级的宽度或者高度不知道，但要规定每个子盒子的宽度，就可以使用 auto-fill
  - auto-fit，两者的行为基本是相同的。只有当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候，才会有行为差异：auto-fill 会用空格子填满剩余宽度，auto-fit 则会尽量扩大单元格的宽度。

  ```css
  /*不知道父级的宽度，每个子项的宽度为200px*/
  grid-template-columns: repeat(auto-fill, 200px);
  
  /*不知道父级的高度，但每个子项的高度为350px*/
  grid-template-rows: repeat(auto-fill, 350px);
  
  grid-template-columns: repeat(auto-fit, 200px 300px);
  ```

- fr

  占比，每列或每行占比为多少，1fr 就代表一份

  在 columns 中有几个这个 fr 就代表有几列，在 row 中如果有 5 行，但是只规定了 3 行，剩下的行高度会自适应

  ```css
  /*有三列，第二列占比为一半，一、三列占位为1/4*/
  grid-template-columns: 1fr 2fr 1fr;

  /*设置前两行占总高度的一半，但是如果有第三行，总高度就会把第三行的高度去了，前两行再分配剩余高度*/
  grid-template-rows: 1fr 1fr;

  /*有三列，第一列占100px，第二列占剩余空间的2/3*/
  grid-template-columns：100px 2fr 1fr;

  /*规定前第一行为200px，2、3行占剩余空间的一半*/
  grid-template-row: 200px 1fr 1fr;
  ```
  
- minmax()  最大最小值

  接收两个参数，`minmax(500px, 1fr) `，如果1fr大于500px那么就取1fr的值，否则取500px

  ```css
  grid-template-columns: 1fr 1fr minmax(500px, 1fr);
  
  /*1fr代表第三行占总高度剔除200px的*/
  grid-template-rows: 100px 100px minmax(500px, 1fr);
  ```

- auto

  ```css
  /*第二列会占总高度减去200px的高度*/
  grid-template-columns: 100px auto 100px;
  
  /*第二行会占总高度减去200px的高度*/
  grid-template-row: 100px auto 100px;
  ```

- 网格线的名称

  指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。
  网格布局允许同一根线有多个名字，比如[fifth-line row-5]

  ```css
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  ```

### grid-gap、grid-column-gap、grid-row-gap

grid-row-gap   等同于  grid-row           设置子项的行间距

grid-column-gap  等同于  grid-column      设置子项的列间距

grid-gap   等同于  gap    同时设置行和列的间距

```css
grid-template-columns：200px 200px 200px；
/*设置每行之间的间距为50px；*/
grid-row-gap: 50px;	

/*设置每列之间的间距为50px*/
grid-columns-gap：50px；

/*只有一个参数，那么行间距和列间距一致，都为50px*/
grid-gap：50px；

/*第一个参数为行间距，第二个参数为列间距*/
gap：50px， 100px；
```

### grid-template-area

* 子项的位置可以随意书写。空出的位置可以用 . 占位。
* 可以只给某个子项设置grid-area，只要能对应grid-template-areas上的一个，就能改变其位置

```css
/*规定每个子项所在的位置，每个子项的命名通过grid-area命名*/
grid-template-areas: 'a b c';

/*在对应子项的类下面加入命名，grid-template-areas才能书写布局*/
grid-area: a;

grid-template-columns: 100px 300px 200px;
grid-template-areas: 'item1 item2 item3' 		
                     'item4 .	  item6'
                     'item7 .     item9'
                     'item5 .     .    '    用 . 去占位
					 'item8 item8 item8';  /*item8独占一行而不是赋值三份*/


.item1 {
    background: rebeccapurple;
    grid-area: item1;
}
......
.item9 {
    background: olivedrab;
    grid-area: item9;
}
```

