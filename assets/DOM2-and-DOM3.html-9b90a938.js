import{_ as n,o as a,c as t,e}from"./app-0e033328.js";const p="/lin-note/red-book/offset.png",o="/lin-note/red-book/scroll.png",c="/lin-note/red-book/getBoundingClientRect.png",l={};function i(d,s){return a(),t("div",null,s[0]||(s[0]=[e(`<h1 id="dom2和dom3" tabindex="-1"><a class="header-anchor" href="#dom2和dom3" aria-hidden="true">#</a> DOM2和DOM3</h1><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><h3 id="存取元素样式" tabindex="-1"><a class="header-anchor" href="#存取元素样式" aria-hidden="true">#</a> 存取元素样式</h3><ol><li><p>存取元素样式</p><p>每个<code>css</code>都有对应的<code>js</code>，除了<code>float</code>是<code>cssFloat</code> ，所有通过<code>-</code>连接的<code>css</code>都必须改为驼峰的形式，如<code>padding-top</code>改为<code>paddingTop</code>。可以通过js读取或者设置dom节点的样式，但是通过css类名设置的样式不能被读取到</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;mydiv&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;background: aquamarine;&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mydiv&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token keyword">const</span> mydiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;mydiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

读取
mydiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token comment">// aquamarine</span>

设置
mydiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>DOM 样式属性和方法</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;mydiv&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;color: aquamarine; width: 50px;&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mydiv&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token keyword">const</span> mydiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;mydiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mydiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token comment">// color: aquamarine; width: 50px;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>cssText</td><td>style中所有的css代码</td></tr><tr><td>length</td><td>style中的css数量</td></tr><tr><td>parentRule</td><td>表示 CSS 信息的 CSSRule 对象</td></tr><tr><td>getPropertyPriority</td><td>如果 CSS 属性 <em>propertyName</em> 使用了!important则返回&quot;important&quot;，否则返回空字符串。</td></tr><tr><td>getPropertyValue</td><td>返回属性 <em>propertyName</em> 的字符串值</td></tr><tr><td>item(<em>index</em>)</td><td>返回索引为 <em>index</em> 的 CSS 属性名。</td></tr><tr><td>removeProperty(<em>propertyName</em>)</td><td>从样式中删除 CSS 属性 <em>propertyName</em>。</td></tr><tr><td>setProperty(<em>propertyName, value, priority</em>)</td><td>设置 CSS 属性 <em>propertyName</em> 的值为<em>value</em>，<em>priority</em> 是&quot;important&quot;或空字符串。</td></tr></tbody></table><ol start="3"><li><p>计算样式</p><p>得到dom节点上任意地方设置的css（直接通过style，或者css上设置的）。只读，不能修改</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;mydiv&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;color: aquamarine; width: 50px;&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mydiv&quot;</span><span class="token operator">&gt;</span>
      
<span class="token keyword">const</span> myDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;mydiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>defaultView<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>myDiv<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span>height  <span class="token comment">//css中设置500px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="元素尺寸" tabindex="-1"><a class="header-anchor" href="#元素尺寸" aria-hidden="true">#</a> 元素尺寸</h3><ol><li><p>偏移尺寸(只读)</p><p>不能用判断盒子距离浏览器可视窗口的位置，因为如果该节点的父盒子设置了<code>position: relative;</code>，那么<code>offsetLeft</code>和<code>offsetTop</code>就是相对于父盒子的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;mydiv&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;width: 50px;background: #ccc;&quot;</span><span class="token operator">&gt;</span>盒子<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token keyword">const</span> myDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;mydiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myDiv<span class="token punctuation">.</span>offsetLeft <span class="token comment">// 0 元素左边框外侧距离包含元素左边框内侧的像素数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>offsetHeight</td><td>元素在垂直方向上占用的像素尺寸，包括它的高度、水平滚动条高度（如果可见）和上、下边框的高度</td></tr><tr><td>offsetLeft</td><td>元素左边框外侧距离包含元素左边框内侧的像素数</td></tr><tr><td>offsetTop</td><td>元素上边框外侧距离包含元素上边框内侧的像素数</td></tr><tr><td>offsetWidth</td><td>元素在水平方向上占用的像素尺寸，包括它的宽度、垂直滚动条宽度（如果可</td></tr></tbody></table><p><img src="`+p+`" alt="Image"></p></li><li><p>客户端尺寸（只读）</p><p><code>clientHeight</code>和<code>clientWidth</code>是元素内部的空间，不包含滚动条的空间，所有这两个属性常用于确定浏览器视口尺寸。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>一般用于表示视口（<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>或<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>元素）的尺寸。
<span class="token keyword">const</span> <span class="token punctuation">{</span> clientHeight<span class="token punctuation">,</span> clientWidth <span class="token punctuation">}</span> <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>滚动尺寸</p><p>除了html标签，其他的必须要有<code>overflow</code>才能滚动。</p><p>如果发生了滚动，那么改变的是父盒子的scrollTop的值，子盒子的还是0，滚动后可以将scrollTop或者scrollLeft设为0就可以将对齐方向滚动到起始位置。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mydiv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> sandybrown<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>childDiv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>盒子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;mydiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> childDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;childDiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myDiv<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    myDiv<span class="token punctuation">.</span>scrollTop <span class="token comment">// 在垂直方向的滚动的距离</span>
    myDiv<span class="token punctuation">.</span>scrollHeight <span class="token comment">// 被父盒子撑开了高度也是，300</span>
    childDiv<span class="token punctuation">.</span>scrollTop <span class="token comment">// 永远是0</span>
    childDiv<span class="token punctuation">.</span>scrollHeight <span class="token comment">// 盒子自身的高度，300</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>scrollHeight</td><td>没有滚动条出现时，元素内容的总高度。</td></tr><tr><td>scrollLeft</td><td>内容区左侧隐藏的像素数，设置这个属性可以改变元素的滚动位置。</td></tr><tr><td>scrollTop</td><td>内容区顶部隐藏的像素数，设置这个属性可以改变元素的滚动位置。</td></tr><tr><td>scrollWidth</td><td>没有滚动条出现时，元素内容的总宽度。</td></tr></tbody></table><p><img src="`+o+'" alt="image"></p></li><li><p>确定元素尺寸及位置</p><p>每个元素身上的<code>getBoundingClientRect()</code>方法，返回一个元素尺寸级位置的对象。</p><p><img src="'+c+'" alt="image"></p></li></ol><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h3><p>目前感觉意义不大，日后刚兴趣补充</p>',11)]))}const u=n(l,[["render",i],["__file","DOM2-and-DOM3.html.vue"]]);export{u as default};
