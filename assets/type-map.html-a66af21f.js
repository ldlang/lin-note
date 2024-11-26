import{_ as s,o as a,c as p,e as t}from"./app-0e033328.js";const e={};function o(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<h1 id="类型映射" tabindex="-1"><a class="header-anchor" href="#类型映射" aria-hidden="true">#</a> 类型映射</h1><h2 id="_1、简介" tabindex="-1"><a class="header-anchor" href="#_1、简介" aria-hidden="true">#</a> 1、简介</h2><p>映射（mapping）指的是，将一种类型按照映射规则，转换成另一种类型，通常用于对象类型。</p><h2 id="_2、类型修饰符" tabindex="-1"><a class="header-anchor" href="#_2、类型修饰符" aria-hidden="true">#</a> 2、类型修饰符</h2><p><code>+</code>，<code>-</code>，<code>?</code>，<code>readonly</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 增加</span>
<span class="token keyword">type</span> <span class="token class-name">MyObj<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">+</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 移除</span>
<span class="token keyword">type</span> <span class="token class-name">MyObj<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">-</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、键名重映射" tabindex="-1"><a class="header-anchor" href="#_3、键名重映射" aria-hidden="true">#</a> 3、键名重映射</h2><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p>键名重映射的语法是在键名映射的后面加上<code>as + 新类型</code>子句。这里的“新类型”通常是一个模板字符串，</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TX</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TY</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>prop <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">TX</span> <span class="token keyword">as</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prop<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_ID</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般通过泛型的传入类型，以达到复用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TX</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TY</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>prop <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span> <span class="token keyword">as</span> prop <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prop<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_ID</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性过滤" tabindex="-1"><a class="header-anchor" href="#属性过滤" aria-hidden="true">#</a> 属性过滤</h3><p>如果<code>as</code>为<code>never</code>类型就可以过滤掉不需要的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TX</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 如果 value 的类型不是 string 则将其过滤掉</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TY</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>prop <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span> <span class="token keyword">as</span> <span class="token constant">T</span><span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">?</span> prop <span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// type TZ = { x: number}</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">TZ</span></span> <span class="token operator">=</span> <span class="token constant">TY</span><span class="token operator">&lt;</span><span class="token constant">TX</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联合类型映射" tabindex="-1"><a class="header-anchor" href="#联合类型映射" aria-hidden="true">#</a> 联合类型映射</h3><p>由于键名重映射可以修改键名类型，所以原始键名的类型不必是<code>string|number|symbol</code>，任意的联合类型都可以用来进行键名重映射。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;ZS&quot;</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IPerson1</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;LS&quot;</span><span class="token punctuation">;</span>
  sex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TPerson<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>prop <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span> <span class="token keyword">as</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">TPerson1</span> <span class="token operator">=</span> TPerson<span class="token operator">&lt;</span>IPerson <span class="token operator">|</span> IPerson1<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> TPerson<span class="token operator">&lt;</span>IPerson <span class="token operator">|</span> IPerson1<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">ZS</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">LS</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const i=s(e,[["render",o],["__file","type-map.html.vue"]]);export{i as default};
