import{_ as s,o as a,c as e,e as t}from"./app-0e033328.js";const c={};function i(p,n){return a(),e("div",null,n[0]||(n[0]=[t(`<h1 id="注释指令" tabindex="-1"><a class="header-anchor" href="#注释指令" aria-hidden="true">#</a> 注释指令</h1><h2 id="_1、-ts-nocheck" tabindex="-1"><a class="header-anchor" href="#_1、-ts-nocheck" aria-hidden="true">#</a> 1、// @ts-nocheck</h2><p>告诉编译器不对当前脚本进行类型检查，可以用于 TypeScript 脚本，也可以用于 JavaScript 脚本。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// @ts-nocheck</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、-ts-check" tabindex="-1"><a class="header-anchor" href="#_2、-ts-check" aria-hidden="true">#</a> 2、// @ts-check</h2><p>如果一个 JavaScript 脚本顶部添加了<code>// @ts-check</code>，那么编译器将对该脚本进行类型检查，不论是否启用了<code>checkJs</code>编译选项。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// @ts-check</span>
<span class="token keyword">let</span> isChecked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isChceked<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、-ts-ignore" tabindex="-1"><a class="header-anchor" href="#_3、-ts-ignore" aria-hidden="true">#</a> 3、// @ts-ignore</h2><p>告诉编译器不对<strong>下一行</strong>代码进行类型检查，可以用于 TypeScript 脚本，也可以用于 JavaScript 脚本。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// @ts-ignore</span>
x <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 不报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const l=s(c,[["render",i],["__file","annotation.html.vue"]]);export{l as default};
