import{_ as n,o as a,c as e,e as l}from"./app-0e033328.js";const p={};function o(t,s){return a(),e("div",null,s[0]||(s[0]=[l(`<h1 id="排序和分页" tabindex="-1"><a class="header-anchor" href="#排序和分页" aria-hidden="true">#</a> 排序和分页</h1><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><ol><li><p>语法： ASC 升序（默认值可以不写）， DESC 降序</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> 表名 <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 字段 <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>ORDER BY 中可以使用字段的别名，因为 SELECT 执行的顺序中 ORDER BY 在 SELECT 之后执行。</p><p>SELECT 的执行基本顺序</p><ol><li>先执行 FROM 看从那张表查询</li><li>再执行 WHERE 过滤掉不符合条件的</li><li>再执行 SELECT 查看需要的字段，此时才可以声明别名</li><li>最后执行 ORDER BY。</li></ol></li><li><p>多列排序，先满足第一列排序的条件，再满足第二列排序的条件，以此类推。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> 表名 <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 字段一 <span class="token keyword">ASC</span><span class="token punctuation">,</span> 字段二 <span class="token keyword">DESC</span><span class="token punctuation">;</span>

<span class="token comment"># 字段一后面没有写升序还是降序，则默认为升序排列。</span>
<span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> 表名 <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 字段一<span class="token punctuation">,</span> 字段二 <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2><ol><li><p>语法</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> 偏移量（页码）<span class="token punctuation">,</span> 条目数（每页多少条）<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询第一页的 10 条数据</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment"># 等价于</span>
<span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果要依次查询第一页 10 条，第二页 10 条.... 的公式</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> （页码 <span class="token operator">-</span> <span class="token number">1</span>）<span class="token operator">*</span> 条目数<span class="token punctuation">,</span> 条目数

例，查询第五页的<span class="token number">10</span>条数据
<span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> 表名 <span class="token keyword">LIMIT</span> （<span class="token number">5</span> <span class="token operator">-</span> <span class="token number">1</span>）<span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其实偏移量就是要从第几条数据 - 1 条数据开始查询，条目数就是要查几条数据，因为偏移量是从 0 开始的，第 0 条其实就是第一条数据。</p><p>比如说要查询第 15 条数据后面的 3 条数据</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">LIMIT</span> <span class="token punctuation">(</span><span class="token number">15</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>书写的顺序，LIMIT 必须放置语句的最后 SELECT =&gt; FROM =&gt; WHERE =&gt; ORDER BY =&gt; LIMIT</p></li><li><p>mysql 8.0 的语法</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段 <span class="token keyword">FROM</span> <span class="token keyword">LIMIT</span> 条目数 <span class="token keyword">OFFSET</span> 偏移量（页码）<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,5)]))}const c=n(p,[["render",o],["__file","sort-and-limit.html.vue"]]);export{c as default};
