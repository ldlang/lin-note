import{_ as s,o as a,c as e,e as p}from"./app-63ba67c3.js";const t={};function o(c,n){return a(),e("div",null,[...n[0]||(n[0]=[p(`<h1 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h1><p>基本上和 es6 的导入模块语法一致，能够导入类型。</p><h2 id="ts-中的模块" tabindex="-1"><a class="header-anchor" href="#ts-中的模块" aria-hidden="true">#</a> ts 中的模块</h2><h3 id="import-type" tabindex="-1"><a class="header-anchor" href="#import-type" aria-hidden="true">#</a> import type</h3><p>只能导入类型，不能导入值，如果导入的是值就会报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// app.ts 导出</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Cat</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// greeter.ts 导入</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Cat<span class="token punctuation">,</span> Dog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./app&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> cat<span class="token operator">:</span> Cat <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  year<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> dog<span class="token operator">:</span> Dog <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  year<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内敛-type" tabindex="-1"><a class="header-anchor" href="#内敛-type" aria-hidden="true">#</a> 内敛 type</h3><p>在同一个导入语句中，如果导入的是值可以正常使用，如果导入的是类型，可以使用 type 去指定。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// app.ts 导出</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Cat</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;fun&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// greeter.ts 导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fun<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">Cat</span><span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./app&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> cat<span class="token operator">:</span> Cat <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  year<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> dog<span class="token operator">:</span> Dog <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  year<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)])])}const i=s(t,[["render",o],["__file","modules.html.vue"]]);export{i as default};
