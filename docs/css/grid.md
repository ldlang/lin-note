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

- minmax() 最大最小值

  接收两个参数，`minmax(500px, 1fr) `，如果 1fr 大于 500px 那么就取 1fr 的值，否则取 500px

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

  指定网格布局为 3 行 x 3 列，因此有 4 根垂直网格线和 4 根水平网格线。方括号里面依次是这八根线的名字。
  网格布局允许同一根线有多个名字，比如[fifth-line row-5]

  ```css
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  ```

### grid-gap、grid-column-gap、grid-row-gap

grid-row-gap 等同于 grid-row 设置子项的行间距

grid-column-gap 等同于 grid-column 设置子项的列间距

grid-gap 等同于 gap 同时设置行和列的间距

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

- 子项的位置可以随意书写。空出的位置可以用 . 占位。
- 可以只给某个子项设置 grid-area，只要能对应 grid-template-areas 上的一个，就能改变其位置

```css
/*规定每个子项所在的位置，每个子项的命名通过grid-area命名*/
grid-template-areas: "a b c";

/*在对应子项的类下面加入命名，grid-template-areas才能书写布局*/
grid-area: a;

grid-template-columns: 100px 300px 200px;
grid-template-areas:
  "item1 item2 item3"
  "item4 .	  item6"
  "item7 .     item9"
  "item5 .     .    " 用 . 去占位
  "item8 item8 item8"; /*item8独占一行而不是赋值三份*/

.item1 {
  background: rebeccapurple;
  grid-area: item1;
}
...... .item9 {
  background: olivedrab;
  grid-area: item9;
}
```

### grid-auto-flow

```css
/* 子项会先填满第一行，才会去填充第二行，先行后列，   row默认值 */
grid-auto-flow: row;
/* 子项会先填满第一列，然后才去填充第二列，先列后行 */
grid-auto-flow: columns;

/*先行后列，并且紧密排列，尽量不会出现空格*/
grid-auto-flow: row dense;
/*先列后行，并且紧密排列，尽量不会出现空格*/
grid-auto-flow: row columns;
```

### justify-items、align-items、place-items

justify-items 子项水平线上的布局

align-items 子项垂直线上的布局

place-items 子项水平和垂直线上的布局

如果子项自身定义了宽高，但是 grid 布局的宽大于其自身的宽高，那么就可以通过这些去设置子项在单元格中的布局

配置可选值：

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。前提是子项没有设置宽高

```css
grid-template-columns: 100px 100px 100px;
grid-template-rows: 100px 100px 100px;
justify-items: center; /*子项在其单元格中 水平 居中*/
align-items: center; /*子项在其单元格中 垂直 居中*/

place-items: center; /*只有一个参数，水平和垂直布局一致，都为center*/
place-items: center start; /*第一个为align-items的布局，justify-items的布局*/
```

### justify-content、align-content、place-content

justify-content 整个内容区域在容器里面的水平位置

align-content 整个内容区域在容器里面的垂直位置

place-content 整个内容区域在容器里面的水平和垂直位置

配置可选值：

- start 对齐容器的起始边框。
- end 对齐容器的结束边框。
- center 容器内部居中。
- stretch 项目大小没有指定时，拉伸占据整个网格容器。
- space-around 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
- space-between 项目与项目的间隔相等，项目与容器边框之间没有间隔。
- space-evenly 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

```css
justify-content: center; /*整体内容在盒子中 水平 居中*/
align-content: center; /*整体内容在盒子中 垂直 居中*/
/*有一个参数，水平和垂直布局一致，两个参数第一个为align-content，第二个为justify-content*/
place-content
```

### grid-auto-columns、grid-auto-rows

grid-auto-columns 设置在 grid-template-columns 规定列之外列的属性，写法同 grid-template-columns

grid-auto-rows 设置在 grid-template-row 规定行之外行的属性，写法同 grid-template-row

下面只规定了一个三列二行单元格的大小，第 3 行的及以后的高度并没有去规定，grid-auto-rows 就是去规定，没有被 grid-template-rows 规定以外单元格的属性，此时第 3 行的及以后的高度则为 10px，
grid-auto-columns 同 grid-template-rows

```css
grid-template-columns: 100px 100px 100px;
grid-template-rows: 200px 200px;
grid-auto-rows: 10px;
```

### grid-template、grid

**grid-template**属性是 `grid-template-columns`、`grid-template-rows`和`grid-template-areas`这三个属性的合并简写形式。

**grid**属性是 `grid-template-rows`、`grid-template-columns`、`grid-template-areas`、 `grid-auto-rows`、`grid-auto-columns`、`grid-auto-flow`这六个属性的合并简写式

## 子项的属性

### grid-column-start、grid-column-end、grid-row-start、grid-row-end

grid-column-start 左边框所在的垂直网格线

grid-column-end 右边框所在的垂直网格线

grid-row-start 上边框所在的水平网格线

grid-row-end 下边框所在的水平网格线

规定了 item1 这一子项的左边框在第二根垂直线上，右边框在第四根垂直线上，此时第一和第二根垂直线上的位置就会被空出来

```css
.item1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
```

规定同时规定了 item1 垂直线和水平线的位置，空出来的位置会被其他子项填充，其他子项会排除这个子项的位置，开始正常排列

```css
.item1 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

也可以使用网格线的别名

```css
grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
grid-column-start: c2;
grid-column-end: c4;
```

### span 跨越的网格线数量

```css
grid-column-start: span 3; /*表示要跨越3条网格线，即开始线为1，结束线为4*/

等同于
	grid-column-start: 1;
	grid-column-end: 4;
```

### grid-column、grid-row

如果只有一个参数，则表示开始线的位置，结束线的位置为开始线的位置+1

```css
grid-column:1 / 4; /*开始线为1，结束线为4*/

等同于
	grid-column-start: 1;
	grid-column-end: 4;
```

### grid-area

用法一：参靠父级属性的 grid-template-area

用法二：grid-area 属性还可用作 grid-row-start、grid-column-start、grid-row-end、grid-column-end 的合并简写形式，直接指定项目的位置

```css
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

### justify-self、align-self、place-self

用法同父级的 justify-items、align-items、place-items 一致
