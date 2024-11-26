import{_ as a,o as n,c as e,e as l}from"./app-0e033328.js";const d={};function p(i,s){return n(),e("div",null,s[0]||(s[0]=[l(`<h1 id="select-语句" tabindex="-1"><a class="header-anchor" href="#select-语句" aria-hidden="true">#</a> select 语句</h1><h2 id="select-from" tabindex="-1"><a class="header-anchor" href="#select-from" aria-hidden="true">#</a> SELECT... FROM...</h2><ul><li><p>查询一张表的所有字段</p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 emp 表的所有字段：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询一张表指定的字段</p><p>语法：字段名之间用<code>,</code>隔开，最后一个字段不要<code>,</code>后</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段名<span class="token punctuation">,</span> 字段名 <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 emp 表的 id，name，sex 字段</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> sex <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="列的别名" tabindex="-1"><a class="header-anchor" href="#列的别名" aria-hidden="true">#</a> 列的别名</h2><ul><li><p>方式一</p><p>直接查询字段后面跟别名</p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段名 别名<span class="token punctuation">,</span> 字段名 别名 <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 emp 表的 id 和 name 字段，并进行重命名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> id emp_id<span class="token punctuation">,</span> name first_name <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>方式二 AS 关键字</p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段名 <span class="token keyword">AS</span> 别名<span class="token punctuation">,</span> 字段名 <span class="token keyword">AS</span> 别名 <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 emp 表的 id 和 name 字段，并进行重命名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> id <span class="token keyword">AS</span> emp_id<span class="token punctuation">,</span> name <span class="token keyword">AS</span> first_name <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>方式三 通过<code>&quot;&quot;</code>将别名包起来（推荐使用）</p><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段名 <span class="token string">&quot;别名&quot;</span><span class="token punctuation">,</span> 字段名 <span class="token string">&quot;别名&quot;</span> <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 emp 表的 id 和 name 字段，并进行重命名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> id <span class="token string">&quot;emp_id&quot;</span><span class="token punctuation">,</span> name <span class="token string">&quot;first_name&quot;</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="distinct-去除重复行" tabindex="-1"><a class="header-anchor" href="#distinct-去除重复行" aria-hidden="true">#</a> DISTINCT 去除重复行</h2><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> 字段名 <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 emp 表的 age 字段，并去除重复的</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> age <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong>：DISTINCT 查询是最好只查询一个字段，如果 DISTINCT 有查询的字段那么会报错，如果后面查询了不止一个字段，那么查出来的也没有什么意义</p><h2 id="null-值" tabindex="-1"><a class="header-anchor" href="#null-值" aria-hidden="true">#</a> NULL 值</h2><ol><li>null 值不等同于 0、&quot;&quot;、&quot;null&quot;</li><li>null 如果参与了运算那么值也是 null</li></ol><h2 id="着重号" tabindex="-1"><a class="header-anchor" href="#着重号" aria-hidden="true">#</a> \`\` 着重号</h2><p>使用场景，如果一张表的表名是 sql 中的关键字，那么就用\`\`将表名包裹起来，就可以了</p><p>假如现在有一张表的表名是 select，与关键字重名了，那么就必需要用\`\`将其包裹</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>select<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查询常数" tabindex="-1"><a class="header-anchor" href="#查询常数" aria-hidden="true">#</a> 查询常数</h2><p>语法：常数可以放任意位置</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 常数，字段名 <span class="token keyword">FROM</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 emp 表的 id，name 字段，并添加两列常数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token string">&#39;林达浪&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">&#39;lin&#39;</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="describe-或-dese-查询表结构" tabindex="-1"><a class="header-anchor" href="#describe-或-dese-查询表结构" aria-hidden="true">#</a> DESCRIBE 或 DESE 查询表结构</h2><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DESC</span> 表名<span class="token punctuation">;</span>
<span class="token keyword">DESCRIBE</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="where-条件查询" tabindex="-1"><a class="header-anchor" href="#where-条件查询" aria-hidden="true">#</a> WHERE 条件查询</h2><p>语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段名 <span class="token keyword">FROM</span> 表名 <span class="token keyword">WHERE</span> 条件<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询 emp 表中工资大于 5000 的所有字段：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp <span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token number">5000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：WHERE 必须跟在 FORM 的后面</p>`,31)]))}const c=a(d,[["render",p],["__file","SELECT.html.vue"]]);export{c as default};
