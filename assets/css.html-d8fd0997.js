import{_ as s,o as e,c as i,e as a}from"./app-0e033328.js";const l={};function c(o,n){return e(),i("div",null,n[0]||(n[0]=[a(`<h1 id="css-面试题" tabindex="-1"><a class="header-anchor" href="#css-面试题" aria-hidden="true">#</a> css 面试题</h1><h2 id="_1、可继承的属性-7-类" tabindex="-1"><a class="header-anchor" href="#_1、可继承的属性-7-类" aria-hidden="true">#</a> 1、可继承的属性(7 类)</h2><ul><li><p><strong>字体</strong>系列属性</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>font
font-family
font-weight
font-size
font-style
font-variant <span class="token comment">/* 浏览器会显示小型大写字母的字体 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>文本</strong>系列属性</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>text-indent <span class="token comment">/* 缩进 */</span>
text-align
line-height
word-spacing <span class="token comment">/* 单词与单词的间距 */</span>
letter-spacing <span class="token comment">/* 字符与字符的间距 */</span>
text-transform <span class="token comment">/* 英文大小写 */</span>
direction <span class="token comment">/* 文本书写的方向 */</span>
color
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>可见性</strong>属性</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>visibility
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>表格布局</strong>属性</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>caption-side
border-collapse
border-spacing
empty-cells
table-layout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>列表</strong>属性</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>list-style-type <span class="token comment">/* 列表项前面小点的样式 */</span>
list-style-position <span class="token comment">/* 列表项前面小点的位置 */</span>
list-style
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>引用</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>quotes <span class="token comment">/* 设置嵌套引用的引号类型 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>光标</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>cursor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_2、文本溢出隐藏" tabindex="-1"><a class="header-anchor" href="#_2、文本溢出隐藏" aria-hidden="true">#</a> 2、文本溢出隐藏</h2><ul><li><p>单行模式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/* 文字长度超出限定宽度，则隐藏超出的内容 */</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span> <span class="token comment">/* 设置文字在一行显示，不能换行 */</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> <span class="token comment">/* 规定当文本溢出时，显示省略符号来代表被修剪的文本 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多行模式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> <span class="token comment">/* 用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性 */</span>
<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span> <span class="token comment">/* 和 1 结合使用，将对象作为弹性伸缩盒子模型显示 */</span>
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span> <span class="token comment">/* 和 1 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 */</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> <span class="token comment">/* 文本溢出限定的宽度就隐藏内容 */</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> <span class="token comment">/* 多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3、浏览器默认最小字体-12px" tabindex="-1"><a class="header-anchor" href="#_3、浏览器默认最小字体-12px" aria-hidden="true">#</a> 3、浏览器默认最小字体(12px)</h2><p>谷歌浏览器默认浏览器字体最小一般是<strong>12px</strong>，所以一般设置小于<strong>12px</strong>的字体就需要通过缩放来实现。</p><blockquote><p>显示新版的谷歌浏览器默认最小好像是 0，所以对于新版浏览器来说，设置小于 12px 的字体也是生效的，可以通过 chrome://settings/fonts 查看当前浏览器支持的最小是多少。</p></blockquote><ul><li><p>zoom</p><p>缩放，CSS 属性缩放目标元素，这可能会<strong>影响页面布局</strong>。缩放时，缩放的元素将从 <code>top</code> 使用默认值 <code>writing-mode</code> 开始缩放 <code>center</code> （兼用性有问题）。</p></li><li><p>transform: scale(x);</p><p>缩放使用的 <code>scale()</code> 元素<strong>不会导致布局重新计算</strong>或移动页面上的其他元素</p></li></ul><h2 id="_4、回流和重绘" tabindex="-1"><a class="header-anchor" href="#_4、回流和重绘" aria-hidden="true">#</a> 4、回流和重绘</h2><p>回流必将引起重绘，而重绘不一定会引起回流。</p><ol><li><p>回流</p><p>当 render 树中的一部分或者全部因为大小边距等问题发生改变而需要重建的过程叫做回流（<strong>改变大小</strong>）。</p></li><li><p>重绘</p><p>当元素的一部分属性发生变化，如外观背景色不会引起布局变化而需要重新渲染的过程叫做重绘（<strong>改变样式</strong>）。</p></li></ol><h2 id="_5、block、inline-和-inline-block" tabindex="-1"><a class="header-anchor" href="#_5、block、inline-和-inline-block" aria-hidden="true">#</a> 5、block、inline 和 inline-block</h2><ul><li><p>block</p><ul><li>block 元素会独占一行，多个 block 元素会各自新起一行。默认情况下，block 元素宽度自动填满其父元素宽度。</li><li>block 元素可以设置 width,height 属性。块级元素即使设置了宽度,仍然是独占一行。</li><li>block 元素可以设置 margin 和 padding 属性。</li></ul></li><li><p>inline</p><ul><li>inline 元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。</li><li>inline 元素设置 width,height 属性无效。</li><li>inline 元素的 margin 和 padding 属性，<strong>只有水平方向</strong>的 padding-left, padding-right,margin-left, margin-right 产生边距效果；</li></ul></li><li><p>inline-block</p><p>简单来说就是将对象呈现为 inline 对象，但是对象的内容作为 block 对象呈现。之后的内联对象会被排列在同一行内。</p></li></ul><h2 id="_6、盒子模型" tabindex="-1"><a class="header-anchor" href="#_6、盒子模型" aria-hidden="true">#</a> 6、盒子模型</h2><ul><li><p>标准盒模型 （box-sizing: content-box;）</p><p>盒子总宽：content + padding + border + margin</p><blockquote><p>设置 width 也就是设置 content 的宽度</p></blockquote></li><li><p>IE 怪异盒模型 （box-sizing: border-box;）</p><p>盒子总宽：width + margin</p><blockquote><p>设置 width 也就是设置 content + padding + border 的总宽度</p></blockquote></li></ul><h2 id="_7、bfc-块级格式化上下文" tabindex="-1"><a class="header-anchor" href="#_7、bfc-块级格式化上下文" aria-hidden="true">#</a> 7、BFC (块级格式化上下文)</h2><p><code>BFC</code>就相当于是一个隔离的的独立容器，容器里面的盒子不会影响到外面的元素，同一个<code>BFC</code>两个相邻的盒子的 margin 会发生塌陷；</p><p>如何触发<code>BFC</code>：</p><ol><li>在外出包裹一个父级，并且父级上有<code>display: flex</code>或者<code>overflow: hidden;</code></li><li>给当前元素是设置<code>display: inline-block;</code>或者<code>position: fixed | absolute</code></li></ol><h2 id="_8、定位-position" tabindex="-1"><a class="header-anchor" href="#_8、定位-position" aria-hidden="true">#</a> 8、定位（position）</h2><ul><li><code>relative</code>和<code>sticky</code>所有方向设为 0 盒子不会被拉伸</li><li><code>absolute</code>会铺满父级盒子，<code>fixed</code>会铺满整个页面</li></ul><h2 id="_9、css3-动画" tabindex="-1"><a class="header-anchor" href="#_9、css3-动画" aria-hidden="true">#</a> 9、css3 动画</h2><ul><li><code>animation</code>要配合<code>@keyframes</code>才能实现动画</li><li><code>transform</code><ul><li>translate： 位移</li><li>scale：缩放</li><li>rotate：旋转</li><li>skew：倾斜</li></ul></li><li><code>transition</code> 过渡动画</li></ul>`,24)]))}const t=s(l,[["render",c],["__file","css.html.vue"]]);export{t as default};
