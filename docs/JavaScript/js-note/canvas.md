---
sidebar: auto
---

# **canvas**

```JS
使用
1.书写标签
	<canvas id="can" width="500" height="500" style="background: red;"></canvas>

2.获取节点
	let can = document.getElementById('can')

3.获取画笔上下文对象
	let ctx = can.getContext('2d')

4.绘制一个矩形
	ctx.fillRect(100,100,200,200)//(x轴移动距离，y轴移动距离，宽度，高度)

5.设置颜色
	ctx.fillStyle = 'green';
```

### **fillRect**

```js
绘制一个填充矩形;
ctx.fillRect(100, 100, 200, 200); //(x轴移动距离，y轴移动距离，宽度，高度)

设置填充矩形的颜色;
ctx.fillStyle = "green";
```

### **strokeRect**

```js
绘制一个未填充的矩形，就是一个矩形的边框
	ctx.strokeRect(100,100,200,200)//(x轴移动距离，y轴移动距离，宽度，高度)

设置未填充矩形的颜色
	ctx.strokeStyle = 'green';
```

**clearRect**

```js
清楚绘制的图形;
ctx.clearRect(200, 100, 50, 10); //(从x轴200位置开始清除，从y轴100位置开始清除，x轴清除的宽度，y轴清除的高度)===>最后清除的是x，y交集的部分
```

**beginPath 和 closePath 配合拆分写法**

```js
绘着一个矩形路径;
ctx.rect(100, 100, 200, 200); //(x轴移动距离，y轴移动距离，宽度，高度)

选择填充方式;
ctx.fill(); //实心填充
ctx.stroke(); //边框填充

同时绘制两个矩形就必须使用beginPath和closePath;
ctx.beginPath(); //开始绘制
ctx.rect(100, 100, 200, 200);
ctx.stroke();
ctx.closePath(); //结束绘制

ctx.beginPath(); //开始绘制
ctx.rect(50, 50, 50, 50);
ctx.fill();
ctx.closePath(); //结束绘制
```

**arc**

```js
绘制圆弧;
ctx.arc(200, 200, 100, Math.PI / 3, Math.PI / 2, false); //(圆心的x轴坐标,圆心的y轴坐标,圆的半径，弧度开始的位置，弧度结束的位置，true 表示逆时针false 表示顺时针(默认是顺时针))
ctx.stroke(); //通过线条展示
//Math.PI表示180°
```

**moveTo**

```js
将画笔抬起，并移到某个位置
	ctx.moveTo(65,65)//(x坐标，y坐标)

通过beginPath和closePath的方式绘制笑脸
		//绘制一张脸
		ctx.beginPath()
		ctx.arc(75,75,50,0,Math.PI* 2)
		ctx.stroke()
		ctx.closePath()

		//绘制嘴巴
		ctx.beginPath()
		ctx.arc(75,75,35,0,Math.PI)
		ctx.stroke()
		ctx.closePath()

		//绘制左眼
		ctx.beginPath()
		ctx.arc(50,50,10,Math.PI,Math.PI * 2)
		ctx.stroke()
		ctx.closePath()
		//绘制右眼
		ctx.beginPath()
		ctx.arc(100,50,10,Math.PI,Math.PI * 2)
		ctx.stroke()
		ctx.closePath()

绘制一个笑脸通过moveTo的方式
		//绘制一张脸
		ctx.beginPath()
		ctx.arc(75,75,50,0,Math.PI* 2)
		ctx.moveTo(110,75)
		//绘制嘴巴
		ctx.arc(75,75,35,0,Math.PI)
		ctx.moveTo(40,50)
		//绘制左眼
		ctx.arc(50,50,10,Math.PI,Math.PI * 2)
		ctx.moveTo(90,50)
		//绘制右眼
		ctx.arc(100,50,10,Math.PI,Math.PI * 2)
		ctx.stroke()
		ctx.closePath()
```

**lineTo**

```js
绘制一条从当前位置到指定坐标lineTo(200, 50)的直线.
    ctx.moveTo(50, 50); //把画笔移动到指定的坐标
    ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
	//就是绘制一条从moveTo(50, 50)开始到lineTo(200, 50)结束的直线
```

**arcTo**

```js
绘制一个与两条直线相切的圆弧;
ctx.beginPath();
ctx.moveTo(50, 50); //起始点坐标
ctx.arcTo(200, 50, 300, 300, 150); //(控制点1的x坐标，控制点1的y坐标，结束点2的x坐标，结束点2的有y坐标，绘制圆弧的半径)
ctx.stroke();
ctx.closePath();
//通过三个点去绘制一个夹角，再让一个圆去与这个夹角相切，最后的到的就是这个相切的圆弧
```

**quadraticCurveTo**

```js
贝塞尔曲线;
ctx.beginPath();
ctx.moveTo(10, 200); //起始点
ctx.quadraticCurveTo(40, 100, 200, 200); //(控制点1的x坐标，控制点1的y坐标，结束点2的x坐标，结束点2的有y坐标)
ctx.stroke();
ctx.closePath();
//就是画一条连接起始点和结束点的弧线，而弧线的弧度是通过一个控制点控制的
```

**bezierCurveTo**

```js
三次贝塞尔曲线;
ctx.beginPath();
ctx.moveTo(200, 200); //起始点
ctx.bezierCurveTo(120, 120, 160, 60, 200, 100); //(控制点1的x坐标，控制点1的y坐标，控制点2的x坐标，控制点2的y坐标,结束点2的x坐标，结束点2的有y坐标)
ctx.stroke();
ctx.closePath();
//就是画一条连接起始点和结束点的弧线，而弧线的弧度是通过两个控制点控制的

//通过三次贝塞尔曲线画一个爱心
ctx.beginPath();
ctx.moveTo(200, 200); //起始点
ctx.bezierCurveTo(120, 120, 160, 60, 200, 100);
ctx.moveTo(200, 200);
ctx.bezierCurveTo(280, 120, 250, 60, 200, 100);
ctx.stroke();
ctx.closePath();
```

**Path2D**

```js
封装路径;
画爱心;
let heart = new Path2D();
heart.moveTo(200, 200); //起始点
heart.bezierCurveTo(120, 120, 160, 60, 200, 100);
heart.moveTo(200, 200);
heart.bezierCurveTo(280, 120, 250, 60, 200, 100);
ctx.stroke(heart);
//就不用写开始结束了
```

**strokeStyle 和 fillStyle**

```js
设置stroke和fill的颜色;
ctx.strokeStyle = "blue";
ctx.strokeStyle = "#ffffff";
ctx.strokeStyle = "rgb(0,0,255)";
ctx.strokeStyle = "rgba(0,0,255)";
```

**globalAlpha**

```
设置透明度
	ctx.globalAlpha = 0.5
```

**createLinearGradient**

```js
创建线性渐变;
let gradual = ctx.createLinearGradient(50, 50, 100, 100); //(开始位置x坐标，开始位置y坐标，结束位置x坐标，结束位置y坐标)
gradual.addColorStop(0, "red"); //起点位置的颜色
gradual.addColorStop(0.5, "blue"); //一半位置的颜色
gradual.addColorStop(1, "pink"); //结束位置的颜色
ctx.fillStyle = gradual; //将颜色值赋值给fillStyle
ctx.fillRect(50, 50, 100, 100);
```

**createRadialGradient**

```js
创建径向渐变;
let gradual = ctx.createRadialGradient(100, 100, 5, 100, 100, 100); //(开始位置圆心的x坐标，开始位置圆心的y坐标，圆心的半径，结束位置圆心的x坐标，结束位置圆心的y坐标，圆心的半径)
gradual.addColorStop(0, "red");
gradual.addColorStop(0.5, "blue");
gradual.addColorStop(1, "pink");
ctx.fillStyle = gradual;
ctx.fillRect(0, 0, 500, 500);
```

**createConicGradient**

```js
锥形渐变;
let gradual = ctx.createConicGradient(0, 100, 100); //(开始的角度，圆心的x坐标，圆心的y坐标)
gradual.addColorStop(0, "red");
gradual.addColorStop(0.5, "blue");
ctx.fillStyle = gradual;
ctx.fillRect(0, 0, 500, 500);
```

**patten**

```js
印章模式;
var img = new Image(); // 创建一个<img>元素
img.src = "./img/1.png"; // 设置图片源地址
img.onload = function () {
  var pattern = ctx.createPattern(img, "repeat"); //(图片对象，重复的方式)
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 100, 100);
};
//repeat重复，no-repeat不重复，repeat-x水平重复，repeat-y垂直重复
```

**设置线条(画笔)样式**

```js
设置线条(画笔)的宽度
	ctx.lineWidth = 10

设置画笔端点样式
	ctx.lineCap = 'butt'
	//butt平齐，round半圆，square正方形

设置画笔两个线段连接处的样式
	ctx.lineJoin = "round"
	//round通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。圆角的半径是线段的宽度。
	//bevel在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
	//miter(默认) 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域
	ctx.miterLimit = 5 //限制相加线条的长度

设置线段为虚线
	ctx.setLineDash([20,10])//每出现20像素的线段，就有10像素的空白

设置线条的偏移
	ctx.lineDashOffset = 10
```

**设置线条阴影**

```js
设置阴影水平偏移量;
shadowOffsetX = 1;

设置阴影垂直偏移量;
shadowOffsetY = 1;

设置阴影模糊程度;
shadowBlur = 1;

设置阴影颜色;
shadowColor = "#ccc";
```

**drawImage**

```js
绘制图片
	var img = new Image();   // 创建一个<img>元素
    img.src = './img/1.png'; // 设置图片源地址
    img.onload = function(){
    	ctx.drawImage(img,0,0)//(图片对象，绘制的开始位置的x坐标，绘制的开始位置的y坐标)
    }
	//总的有9个参数===>5个参数的情况
	drawImage(img,0,0,300,300)//(图片对象，绘制的开始位置的x坐标，绘制的开始位置的y坐标,将图片横向等比缩小，将图片纵向等比缩小)
	//9个参数的情况
	drawImage(img,200,200,500,500,0,0,300,300)//(图片对象，开始裁剪位置的x坐标，开始裁剪位置的y坐标，需要裁剪的x长度，需要裁剪的y长度，绘制的开始位置的x坐标，绘制的开始位置的y坐标,将图片横向等比缩小，将图片纵向等比缩小)

绘制视频//参数同上
		var video = document.querySelector('video')   // 创建一个<img>元素 // 设置图片源地址
		videoPlay()；
		function videoPlay(){
			ctx.drawImage(video,0,0,500,500)
			requestAnimationFrame(videoPlay)//请求动画关键帧
		}
```

**requestAnimationFrame**

```
请求动画关键帧
```

**绘制文字**

```js
设置文字颜色
	ctx.fillStyle = '#000' //设置文本颜色

设置文字像素，及字体
	ctx.font = "100px Microsoft YaHei"//大小为100px，字体为微软雅黑

设置文字内容及位置
	ctx.fillText('girl',200,200,200)//(绘制的文字内容，开始绘制的x坐标，开始绘制的y坐标,最大宽度)开始的坐标同时是基线，最后一个值可选

设置文字对齐的方式
	ctx.textAlign = 'center'//对齐方式，可选start(默认)，end，left，right，center

设置文字对准基线的方式
	ctx.textBaseline = 'top' //基线对齐选项，可选的值包括：top,hanging,middle, alphabetic,ideographic,bottom。默认值是alphabetic。

设置文字的放方向
	ctx.direction = 'rtl' //文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit

预测文字的宽度等信息
	let w =  ctx.measureText("girl")//console.log(w);
```

**translate**

```js
移动画布的的起始点位置;
ctx.translate(100, 100); //此时画布上x100，y100的位置就相当于x0，y0位置，他的每一次移动都是想对于当前的位置移动，就比如说再次ctx.translate(100,100)，此时x200，y200的位置就是起始点。
```

**scale**

```js
缩放;
ctx.scale(3, 2); //他后面的x放大3倍，y放大2倍
ctx.fillRect(0, 0, 100, 100); //就相当于ctx.fillRect(0,0,300,200)
```

**rotate**

```js
旋转;
ctx.rotate(Math.PI / 6); //他后面的旋转30°，可以为负值，旋转的是坐标系
ctx.fillRect(200, 200, 100, 100);
```

**transform**

```js
旋转缩放位移;
ctx.transform(1, 0, 0, 1, 100, 100); //(水平方向缩放，竖直方向的倾斜偏移，水平方向的倾斜偏移，垂直方向缩放，水平方向上的移动，竖直方向上的移动)
```

**globalCompositeOperation**

```js
图形合成
	ctx.fillRect(0,0,100,100)
	ctx.globalCompositeOperation = 'source-in'//只显示两个图形重叠的部分
	ctx.fillRect(50,50,100,100)

source-over(默认)，这是默认设置，新图像会覆盖在原有图像
source-in，仅仅会出现新图像与原来图像重叠的部分，其他区域都变成透明的。(包括其他的老图像区域也会透明)
source-out，仅仅显示新图像与老图像没有重叠的部分，其余部分全部透明。(老图像也不显示)
source-atop，新图像仅仅显示与老图像重叠区域。老图像仍然可以显示。
destination-over，新图像会在老图像的下面。
destination-in，仅仅新老图像重叠部分的老图像被显示，其他区域全部透明。
destination-out，仅仅老图像与新图像没有重叠的部分。 注意显示的是老图像的部分区域。
destination-atop，老图像仅仅仅仅显示重叠部分，新图像会显示在老图像的下面。
lighter，新老图像都显示，但是重叠区域的颜色做加处理。
darken，保留重叠部分最黑的像素。(每个颜色位进行比较，得到最小的)
lighten，保证重叠部分最量的像素。(每个颜色位进行比较，得到最大的)
xor，重叠部分会变成透明。
copy，只有新图像会被保留，其余的全部被清除(边透明)。
```

**刮刮卡小案例**

```js
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<style>
	#can{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
	div{
		position: absolute;
		top: 0;
		left: 0;
		width: 500px;
		height: 500px;
		text-align: center;
		line-height: 500px;
		font-size: 50px;
	}
	</style>
</head>
<body>
	<canvas id="can" width="500" height="500" style="border: 1px solid #ccc;"></canvas>
	<div>恭喜你中奖了</div>
	<script>
		let can = document.getElementById('can')
		let ctx = can.getContext('2d')
		let img = new Image();
		img.src= './img/1.png'
		img.onload = function(){
			ctx.drawImage(img,0,0,500,500)
		}
		let isCanvas = false
		can.onmousedown = function(){
			isCanvas = true
		}
		can.onmouseup = function(){
			isCanvas = false
		}
		can.onmousemove = function(e){
			if(isCanvas){
				let x = e.pageX
				let y = e.pageY
				ctx.globalCompositeOperation = 'destination-out'
				ctx.beginPath()
				ctx.arc(x,y,10,0,2*Math.PI)
				ctx.closePath()
				ctx.fill()
			}
		}
	</script>
</body>
</html>
```

**clip**

```js
裁剪;
var img = new Image(); // 创建一个<img>元素
img.src = "./img/1.png"; // 设置图片源地址
img.onload = function () {
  ctx.drawImage(img, 0, 0);
};
let heart = new Path2D();
heart.moveTo(200, 200); //起始点
heart.bezierCurveTo(120, 120, 160, 60, 200, 100);
heart.moveTo(200, 200);
heart.bezierCurveTo(280, 120, 250, 60, 200, 100);
ctx.clip(heart);
//图片裁剪出一个爱心图形
```

**save 和 restore**

```js
状态的保存与恢复; //先进后出，后进先出
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 100, 100);
ctx.save();

ctx.fillStyle = "blue";
ctx.fillRect(100, 100, 100, 100);
ctx.save();

ctx.restore(); //这里恢复的就是后进去的蓝色方框
ctx.fillRect(0, 100, 100, 100);
```

**getImageData 和 putImageData**

```js
获取像素数据getImageData
	let img = ctx.getImageData(0,0,100,100)//获取从坐标0,0到坐标100,100的所有像素
    //每个像素有四个值r，g，b，a

    ctx.putImageData(img,x,y,dirtyX,dirtyY,dirtyWidth，dirtyHeight)
    //img规定要放回画布的img对象。
    //x，img对象左上角的 x 坐标
    //y，img对象左上角的 y 坐标
    //dirtyX，水平值（x），在画布上放置图像的位置。
    //dirtyY，垂直值（y），在画布上放置图像的位置。
    //dirtyWidth，在画布上绘制图像所使用的宽度。
    //dirtyHeight，在画布上绘制图像所使用的高度。
```
