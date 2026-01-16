import{_ as s,o as a,c as e,e as p}from"./app-63ba67c3.js";const t={};function o(c,n){return a(),e("div",null,[...n[0]||(n[0]=[p(`<h1 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型" aria-hidden="true">#</a> 对象类型</h1><p>描述一个对象时，通常使用<code>interface</code>或者<code>type</code>。</p><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> interface</h2><p>定义了一个数据的形状，使用这个<code>interface</code>属性的形状必须和<code>interface</code>的形状保持一致。</p><ul><li><p>方式一</p><p>/men 里有的属性必须和是 person 这个接口里面定义的过的，不能多也不能少</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> men<span class="token operator">:</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式二</p><p>只能往 point 身上添加 IPoint 定义过得属性，但所有定义过得属性都变成可选属性了</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPoint</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token operator">&lt;</span>IPoint<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
point<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式三</p><p>在函数中使用，只要满足了<code>interface</code>所必须的就行了，多了一个也可以通过校验的，但是少了不行。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Iobj</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span>labelObj<span class="token operator">:</span> Iobj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>labelObj<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myObj <span class="token operator">=</span> <span class="token punctuation">{</span> size<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;Size 10 Object&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">printLabel</span><span class="token punctuation">(</span>myObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性" aria-hidden="true">#</a> 可选属性</h3><p>接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。就可以将这个属性变为可选属性，他存不存在也无所谓，但是依然不能多出来属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 此时age就是一个可选的属性，使用这个接口的属性，里面age属性就变得可有可无了</span>
<span class="token keyword">interface</span> <span class="token class-name">person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h3><p>readonly 的属性只能被读取，不能被修改，只能在调用这个接口的时候进行赋值一次，之后则只能读取他的值，而不能赋值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读数组" tabindex="-1"><a class="header-anchor" href="#只读数组" aria-hidden="true">#</a> 只读数组</h3><p><code>ReadonlyArray&lt;T&gt;</code>类型，它与 <code>Array&lt;T&gt;</code>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// list不能被修改</span>
<span class="token keyword">let</span> list<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 此时的ro依然是不能修改的</span>
<span class="token keyword">let</span> ro<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>

<span class="token comment">// 但是可以通过类型断言去赋值</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ro<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> b <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 此时再次赋值就可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任意属性" tabindex="-1"><a class="header-anchor" href="#任意属性" aria-hidden="true">#</a> 任意属性</h3><p>一个接口拥有任意属性后，除了必须的属性要存在，可以添加任意个 interface 为定义的属性，但是任意属性 value 的类型，必须是其他类型的父类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 只有x属性时必须存在的其他的可有可无</span>
  x<span class="token operator">:</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  z<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h3><p>使用<code>interface</code>去描述函数，下面这个<code>interface</code>描述了使用这个接口的函数，有两个参数，分别为下 x 和 y，且函数的返回值类型为 string。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> fun<span class="token operator">:</span> Point
<span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span>：<span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可索引的类型" tabindex="-1"><a class="header-anchor" href="#可索引的类型" aria-hidden="true">#</a> 可索引的类型</h3><p>其实就是用 interface 去描述调用这个 interface 的数据属性的特征。下面定义了 arr 接口，它具有索引签名， 这个索引签名表示了当用 number 去索引 arr 时会得到 string 类型的返回值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 数组的特征就是有索引，即下标，且为数字类型，里面的参数就随意定义类型了</span>
<span class="token keyword">interface</span> <span class="token class-name">arr</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> list<span class="token operator">:</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>一个<code>interface</code>定义了一些公共的参数，另一个<code>interface</code>在使用的时候就可以不用重复的书写公共的属性，直接继承公共的接口即可。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPoint</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">APoint</span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 此时BPoint同时继承了IPoint和APoint</span>
<span class="token keyword">interface</span> <span class="token class-name">BPoint</span> <span class="token keyword">extends</span> <span class="token class-name">IPoint</span><span class="token punctuation">,</span> APoint <span class="token punctuation">{</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// point必须实现上面三个接口的形状</span>
<span class="token keyword">let</span> point<span class="token operator">:</span> BPoint <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
  z<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交集" tabindex="-1"><a class="header-anchor" href="#交集" aria-hidden="true">#</a> 交集</h3><p>上面继承的情况也可以通过交集的方式实现。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPoint</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">APoint</span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">BPoint</span> <span class="token operator">=</span> IPoint <span class="token operator">&amp;</span> APoint <span class="token operator">&amp;</span> <span class="token punctuation">{</span> z<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// point必须实现上面三个接口的形状</span>
<span class="token keyword">let</span> point<span class="token operator">:</span> BPoint <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
  z<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口重名" tabindex="-1"><a class="header-anchor" href="#接口重名" aria-hidden="true">#</a> 接口重名</h3><ol><li><p>如果定义的接口重名了，那么接口里面的属性将会合并，如果同名属性被赋予了不同的类型，将会合并失败并报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Box</span> <span class="token punctuation">{</span>
    height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Box</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    scale<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> box<span class="token operator">:</span> Box <span class="token operator">=</span> <span class="token punctuation">{</span>
    height<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    scale<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果接口中声明的是函数类型重名，则会进行函数重载。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Cloner</span> <span class="token punctuation">{</span>
  <span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Animal<span class="token punctuation">)</span><span class="token operator">:</span> Animal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Cloner</span> <span class="token punctuation">{</span>
  <span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Sheep<span class="token punctuation">)</span><span class="token operator">:</span> Sheep<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Cloner</span> <span class="token punctuation">{</span>
  <span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Dog<span class="token punctuation">)</span><span class="token operator">:</span> Dog<span class="token punctuation">;</span>
  <span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Cat<span class="token punctuation">)</span><span class="token operator">:</span> Cat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="接口使用泛型" tabindex="-1"><a class="header-anchor" href="#接口使用泛型" aria-hidden="true">#</a> 接口使用泛型</h2><p>在一些相同的或者会变化的类型就可以通过泛型去传递类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义了一个T类型，T具体的类型就需要在使用的时候才能确定</span>
<span class="token keyword">interface</span> <span class="token class-name">Person<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  sex<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 给T传递string类，确定T的类型</span>
<span class="token keyword">const</span> obj<span class="token operator">:</span> Person<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  sex<span class="token operator">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34)])])}const l=s(t,[["render",o],["__file","object-types.html.vue"]]);export{l as default};
