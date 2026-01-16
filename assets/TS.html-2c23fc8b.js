import{_ as s,o as a,c as e,e as t}from"./app-63ba67c3.js";const i={};function l(p,n){return a(),e("div",null,[...n[0]||(n[0]=[t(`<h1 id="ts-面试题" tabindex="-1"><a class="header-anchor" href="#ts-面试题" aria-hidden="true">#</a> TS 面试题</h1><h2 id="_1、ts-中的高级类型有哪些" tabindex="-1"><a class="header-anchor" href="#_1、ts-中的高级类型有哪些" aria-hidden="true">#</a> 1、TS 中的高级类型有哪些？</h2><ol><li>交叉类型：<code>&amp;</code>，多个类型<strong>合并</strong>为一个</li><li>联合类型：<code>|</code>，多组类型满足其中一个即可</li><li>类型别名：<code>type</code></li><li>类型索引：<code>keyof</code> ，取出所有的 key 组成联合类型）</li><li>类型约束：<code>extends</code>，不是继承是约束</li><li>类型映射：<code>in</code> 循环</li><li>条件类型：<code>extends...? :</code> 三元运算符</li></ol><h2 id="_2、枚举及枚举的分类" tabindex="-1"><a class="header-anchor" href="#_2、枚举及枚举的分类" aria-hidden="true">#</a> 2、枚举及枚举的分类</h2><ol><li><p>数字枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  red<span class="token punctuation">,</span> <span class="token comment">// 0</span>
  green<span class="token punctuation">,</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  red<span class="token punctuation">,</span> <span class="token comment">// 0</span>
  green<span class="token punctuation">,</span> <span class="token comment">// 1</span>
  blue <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
  yellow<span class="token punctuation">,</span> <span class="token comment">// 6</span>
  purple <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
  white<span class="token punctuation">,</span> <span class="token comment">// 11</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>字符串枚举</p><p>如果其中一个枚举值设为了字符串，那么后续的也要赋值，除非后续某一个复制了数字；</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  red <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
  green <span class="token operator">=</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  red <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
  green <span class="token operator">=</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
  blue <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
  yellow<span class="token punctuation">,</span> <span class="token comment">// yellow不需要赋值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>异构枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> color <span class="token punctuation">{</span>
  red <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
  green <span class="token operator">=</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
  blue <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5)])])}const c=s(i,[["render",l],["__file","TS.html.vue"]]);export{c as default};
