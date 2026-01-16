import{_ as s,o as a,c as e,e as p}from"./app-63ba67c3.js";const t={};function i(o,n){return a(),e("div",null,[...n[0]||(n[0]=[p(`<h1 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h1><h2 id="数字枚举" tabindex="-1"><a class="header-anchor" href="#数字枚举" aria-hidden="true">#</a> 数字枚举</h2><p>如果其中一个枚举值不是数字，那么所有的枚举值都必须进行手动赋值。</p><ul><li><p>如果只枚举属性，而不对其进行赋值，那么枚举的值将会是从零开始的数值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  pink<span class="token punctuation">,</span> <span class="token comment">// 值为0</span>
  red<span class="token punctuation">,</span> <span class="token comment">// 1</span>
  green<span class="token punctuation">,</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果只对其中的一个值进行数字赋值，那么那个值之前的会从 0 开始自增长，那个值之后的会从被复制的那个值自增长。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  pink<span class="token punctuation">,</span> <span class="token comment">// 0</span>
  yellow<span class="token punctuation">,</span> <span class="token comment">// 1</span>
  red <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 5</span>
  green<span class="token punctuation">,</span> <span class="token comment">// 6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="字符串枚举" tabindex="-1"><a class="header-anchor" href="#字符串枚举" aria-hidden="true">#</a> 字符串枚举</h2><p>只要有一个枚举被赋值了字符串，那么所有的枚举值都必须赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  yellow <span class="token operator">=</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">,</span>
  red <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
  green <span class="token operator">=</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异构枚举" tabindex="-1"><a class="header-anchor" href="#异构枚举" aria-hidden="true">#</a> 异构枚举</h2><p>通常情况下，一个枚举里面赋值的类型，应该是一样的，虽然 string 和 number 能混用，但并不建议使用，并且布尔类型、对象类型、以及 null 和 undefined 类型都不能作为枚举的成员类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  pink <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">,</span>
  yellow <span class="token operator">=</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span>
  red <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
  green <span class="token operator">=</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用运算符" tabindex="-1"><a class="header-anchor" href="#使用运算符" aria-hidden="true">#</a> 使用运算符</h2><p>枚举的值可以使用运算符计算</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  pink <span class="token operator">=</span> <span class="token number">15</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">,</span>
  yellow <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span>
  red <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span>
  green <span class="token operator">=</span> red<span class="token punctuation">,</span> <span class="token comment">// 如果枚举的值是number类型的，则可以赋值给另一个枚举</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举与-interface-的混用" tabindex="-1"><a class="header-anchor" href="#枚举与-interface-的混用" aria-hidden="true">#</a> 枚举与 interface 的混用</h2><ul><li><p>枚举的值是数值类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
    pink<span class="token punctuation">,</span>
    yellow<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Icolor</span> <span class="token punctuation">{</span>
    rgb<span class="token operator">:</span> color<span class="token punctuation">.</span>pink
    rgba<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myColor<span class="token operator">:</span> Icolor <span class="token operator">=</span> <span class="token punctuation">{</span>
    rgb<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// 可以直接将枚举的值赋值给对应的属性</span>
    rgb<span class="token operator">:</span> color<span class="token punctuation">.</span>pink<span class="token punctuation">,</span> <span class="token comment">// 最好使用这种方式</span>
    rgba<span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>枚举的值是字符串类型，那么只能将枚举赋值给对应的属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
    pink <span class="token operator">=</span> <span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span>
    yellow <span class="token operator">=</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Icolor</span> <span class="token punctuation">{</span>
    rgb<span class="token operator">:</span> color<span class="token punctuation">.</span>pink
    rgba<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myColor<span class="token operator">:</span> Icolor <span class="token operator">=</span> <span class="token punctuation">{</span>
    rgb<span class="token operator">:</span> color<span class="token punctuation">.</span>pink<span class="token punctuation">,</span>  <span class="token comment">// 只能这么赋值，不能将枚举的值直接赋值给对应属性</span>
    rgba<span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="函数使用枚举" tabindex="-1"><a class="header-anchor" href="#函数使用枚举" aria-hidden="true">#</a> 函数使用枚举</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span>
    Foo<span class="token punctuation">,</span>
    Bar<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 此时x能接收的值就只有0和1，或者E.Bar和E.Foo</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">E</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反向映射" tabindex="-1"><a class="header-anchor" href="#反向映射" aria-hidden="true">#</a> 反向映射</h2><p>如果枚举的值是number类型就可以反向映射，如果是字符串就不行</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
    <span class="token constant">A</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> Enum<span class="token punctuation">.</span><span class="token constant">A</span>
<span class="token comment">// A, 就类似于用enum中枚举的value去读取key</span>
Enum<span class="token punctuation">[</span>a<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同名枚举" tabindex="-1"><a class="header-anchor" href="#同名枚举" aria-hidden="true">#</a> 同名枚举</h2><p>名字相同枚举最终会合并，在其中一个枚举中声明过得枚举不能再次出现，如果出现就会报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
    red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> color <span class="token punctuation">{</span>
    pink <span class="token operator">=</span> <span class="token string">&#39;pink&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="const-枚举" tabindex="-1"><a class="header-anchor" href="#const-枚举" aria-hidden="true">#</a> const 枚举</h2><p>使用const定义的枚举，在编译阶段会把枚举去掉，在使用枚举的地方都是使用枚举真实的值。</p><ul><li><p>未使用const</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
    red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 编译后的结果</span>
<span class="token keyword">var</span> color<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    color<span class="token punctuation">[</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>color <span class="token operator">||</span> <span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用const</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> color <span class="token punctuation">{</span>
    red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 编译后的结果，枚举的属性全部被去除了，只剩下他的值</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="外部枚举" tabindex="-1"><a class="header-anchor" href="#外部枚举" aria-hidden="true">#</a> 外部枚举</h2><p>外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
    <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token constant">B</span><span class="token punctuation">,</span>
    <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)])])}const l=s(t,[["render",i],["__file","enum.html.vue"]]);export{l as default};
