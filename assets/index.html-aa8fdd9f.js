import{_ as s,o as a,c as e,e as t}from"./app-63ba67c3.js";const p="/lin-note/ts/TypeScript-Control-Flow-Analysis.png",i="/lin-note/ts/TypeScript-Interfaces.png",o="/lin-note/ts/TypeScript-Types.png",c="/lin-note/ts/TypeScript-Classes.png",l={};function r(d,n){return a(),e("div",null,[...n[0]||(n[0]=[t(`<h1 id="备忘单" tabindex="-1"><a class="header-anchor" href="#备忘单" aria-hidden="true">#</a> 备忘单</h1><h3 id="联合类型-和-交叉类型" tabindex="-1"><a class="header-anchor" href="#联合类型-和-交叉类型" aria-hidden="true">#</a> 联合类型 和 交叉类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IPerson1</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  sex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 联合类型, 只要满足一个类型就可以，也可以同时满足两个类型</span>
<span class="token keyword">const</span> person<span class="token operator">:</span> IPerson <span class="token operator">|</span> IPerson1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 交叉类型, 必须同时满足两个类型的并集</span>
<span class="token keyword">const</span> person<span class="token operator">:</span> IPerson <span class="token operator">&amp;</span> IPerson1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子类型概念" tabindex="-1"><a class="header-anchor" href="#子类型概念" aria-hidden="true">#</a> 子类型概念</h3><p>如果一个类型A包含了B的所有属性，那么A是B的子类型，下面示例中，IPerson2包含了IPerson的所有属性，所以IPerson2是IPerson的子类型。 从继承的角度理解，如果A继承了B，那么A中至少包含了B的所有属性，那么A是B的子类型也就能理解了。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IPerson2</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    sex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// T2 的类型是 IPerson2</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T2</span></span> <span class="token operator">=</span> IPerson2 <span class="token keyword">extends</span> <span class="token class-name">IPerson</span> <span class="token operator">?</span> IPerson2 <span class="token operator">:</span> IPerson<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制流分析" tabindex="-1"><a class="header-anchor" href="#控制流分析" aria-hidden="true">#</a> 控制流分析</h3><p><img src="`+p+'" alt="image"></p><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><p><img src="'+i+'" alt="image"></p><h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h3><p><img src="'+o+'" alt="image"></p><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3><p><img src="'+c+'" alt="image"></p>',14)])])}const k=s(l,[["render",r],["__file","index.html.vue"]]);export{k as default};
