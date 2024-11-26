import{_ as s,o as a,c as p,e as t}from"./app-0e033328.js";const e={};function o(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="类型缩小" tabindex="-1"><a class="header-anchor" href="#类型缩小" aria-hidden="true">#</a> 类型缩小</h1><h2 id="typeof-类型保护" tabindex="-1"><a class="header-anchor" href="#typeof-类型保护" aria-hidden="true">#</a> typeof 类型保护</h2><p>一个值如果是联合类型，但是我们只对其中一种类型进行特殊的处理，那么就可以使用 typeof 将其缩小为我们需要的类型，在进行特殊的处理。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 虽然缩小为了 object类型，但是null也是 object，所以还是会报错</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> str <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 解决方式，因为在if中 null 会被隐式转为false，所以进到if里面的一定不是null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> str <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相等性缩小" tabindex="-1"><a class="header-anchor" href="#相等性缩小" aria-hidden="true">#</a> 相等性缩小</h2><p>在 ts 中还可以使用<code>switch</code> 语句和 <code>===</code>、<code>!==</code>、<code>==</code> 和 <code>!=</code> 等相等性检查来缩小类型。</p><p>用<code>===</code>来缩小类型，其实就是如果两个值的类型有一个相同的部分，那么<code>===</code>才成立，也能进行类型缩小，但是值也要相同。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">main2</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

或者<span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">a</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">b</span> <span class="token punctuation">{</span>
  b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">c</span> <span class="token punctuation">{</span>
  c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span>x<span class="token operator">:</span> a <span class="token operator">|</span> b<span class="token punctuation">,</span> y<span class="token operator">:</span> b <span class="token operator">|</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 对 <code>==</code> 和 <code>!=</code> 的更宽松的相等性检查也正确地缩小了类型。 如果你不熟悉，检查某事 <code>== null</code> 是否实际上不仅检查它是否具体是值 <code>null</code> - 它还检查它是否可能是 <code>undefined</code>。 这同样适用于 <code>== undefined</code>： 它检查一个值是 <code>null</code> 还是 <code>undefined</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">main3</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="in-运算符缩小" tabindex="-1"><a class="header-anchor" href="#in-运算符缩小" aria-hidden="true">#</a> <code>in</code> 运算符缩小</h2><p>JavaScript 有一个运算符来确定对象或其原型链是否具有名称属性： <code>in</code> 运算符。ts 页认为能进行类型缩小，但感觉实用性不强。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Fish</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token function-variable function">swim</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Bird</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token function-variable function">fly</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Fish <span class="token operator">|</span> Bird<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;swim&quot;</span> <span class="token keyword">in</span> animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> animal<span class="token punctuation">.</span><span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> animal<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof-缩小" tabindex="-1"><a class="header-anchor" href="#instanceof-缩小" aria-hidden="true">#</a> <code>instanceof</code> 缩小</h2><p>和 typeof 类似。<strong>instanceof</strong> <strong>运算符</strong>用于检测构造函数的 <code>prototype</code> 属性是否出现在某个实例对象的原型链上。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token keyword">instanceof</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="is类型保护" tabindex="-1"><a class="header-anchor" href="#is类型保护" aria-hidden="true">#</a> <code>is</code>类型保护</h2><p>在 TypeScript 中，使用 is 运算符时，它的左边是函数的参数名，右边是要判断的类型。这种语法被称为类型谓词，用于在函数内部保护参数的类型，从而避免在函数体内执行特定操作时出现检查参数类型的运行时错误。</p><p>使用的 pet is Fish 是一个类型保护谓词，它的作用是判断某个对象 pet 是否是 Fish 类型。如果条件成立，则该语句返回 true，并使得编译器将 pet 推断为 Fish 类型，从而避免在后续的代码中出现运行时错误或类型不匹配的问题。如果条件不成立，则该语句返回 false，pet 仍被推断为 Fish | Bird 类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isFish</span><span class="token punctuation">(</span>pet<span class="token operator">:</span> Fish <span class="token operator">|</span> Bird<span class="token punctuation">)</span><span class="token operator">:</span> pet <span class="token keyword">is</span> Fish <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>Fish<span class="token operator">&gt;</span>pet<span class="token punctuation">)</span><span class="token punctuation">.</span>swim <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]))}const l=s(e,[["render",o],["__file","Narrowing.html.vue"]]);export{l as default};
