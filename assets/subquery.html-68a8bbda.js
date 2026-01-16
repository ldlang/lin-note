import{_ as s,o as a,c as e,e as p}from"./app-63ba67c3.js";const t={};function l(o,n){return a(),e("div",null,[...n[0]||(n[0]=[p(`<h1 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h1><p><strong>在 SELECT 语句中除了 GROUP BY 和 LIMIT 之外其他的地方都可以写子查询</strong></p><p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，一个查询语句的结果被另一条查询语句所使用。</p><ul><li><p>子查询（内查询）在主查询之前一次执行完成。</p></li><li><p>子查询的结果被主查询（外查询）使用 。</p><p><strong>注意：</strong></p><ul><li>子查询要包含在括号内</li><li>将子查询放在比较条件的右侧</li><li>单行操作符对应单行子查询，多行操作符对应多行子查询</li></ul></li></ul><p>例：查询工资比 Abel 高的人的姓名和工资。</p><ul><li><p>方式一</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 先查询 Abel 的工资，结果为 11000</span>
<span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span>

<span class="token comment"># 在查询工资比 11000 高的人</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token number">11000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式二</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 自连接</span>
<span class="token keyword">SELECT</span> e2<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>e2<span class="token punctuation">.</span>salary
<span class="token keyword">FROM</span> employees e1<span class="token punctuation">,</span>employees e2
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span>last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span>
<span class="token operator">AND</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>salary<span class="token punctuation">\`</span></span> <span class="token operator">&lt;</span> e2<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>salary<span class="token punctuation">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式三</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 子查询</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> salary
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">&#39;Abel&#39;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="子查询的分类" tabindex="-1"><a class="header-anchor" href="#子查询的分类" aria-hidden="true">#</a> 子查询的分类</h2><p>分类方式一：按内查询的结果返回一条还是多条记录，将子查询分为<code>单行子查询</code>、<code>多行子查询</code>。</p><ul><li>单行子查询</li><li>多行子查询</li></ul><p>分类方式 2：按内查询是否被执行多次，将子查询划分为<code>相关(或关联)子查询</code>和<code>不相关(或非关联)子查询</code>。</p><ul><li>相关(或关联)子查询：子查询从数据表中查询了数据结果，如果这个数据结果只执行一次，然后这个数据结果作为主查询的条件进行执行，那么这样的子查询叫做不相关子查询</li><li>不相关(或非关联)子查询：如果子查询需要执行多次，即采用循环的方式，先从外部查询开始，每次都传入子查询进行查询，然后再将结果反馈给外部，这种嵌套的执行方式就称为相关子查询</li></ul><h3 id="单行子查询" tabindex="-1"><a class="header-anchor" href="#单行子查询" aria-hidden="true">#</a> 单行子查询</h3><p>单行子查询能使用的操作符</p><table><thead><tr><th style="text-align:center;">操作符</th></tr></thead><tbody><tr><td style="text-align:center;">=</td></tr><tr><td style="text-align:center;">&gt;</td></tr><tr><td style="text-align:center;">&gt;=</td></tr><tr><td style="text-align:center;">&lt;</td></tr><tr><td style="text-align:center;">&lt;=</td></tr><tr><td style="text-align:center;">&lt;&gt;</td></tr></tbody></table><p><strong>注意：</strong></p><ol><li>单行子查询必须只能返回一条数据给主查询使用。</li><li>如果子查询的内容为空，那么主查询的内容也必为空。</li></ol><ul><li><p>练习一</p><p>返回 job_id 与 141 号员工相同，salary 比 143 号员工多的员工姓名，job_id 和工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary <span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> job_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">141</span>
<span class="token punctuation">)</span>
<span class="token operator">AND</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">143</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>练习二</p><p>返回公司工资最少的员工的 last_name,job_id 和 salary</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary <span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>练习三</p><p>查询与 141 号员工的 manager_id 和 department_id 相同的其他员工的 employee_id，manager_id，department_id</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> manager_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> manager_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> manager_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">141</span>
<span class="token punctuation">)</span>
<span class="token operator">AND</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">141</span>
<span class="token punctuation">)</span>
<span class="token operator">AND</span> employee_id <span class="token operator">&lt;&gt;</span> <span class="token number">141</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>	employee_id<span class="token punctuation">,</span> manager_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span>	employees
<span class="token keyword">WHERE</span>  <span class="token punctuation">(</span>manager_id<span class="token punctuation">,</span> department_id<span class="token punctuation">)</span> <span class="token operator">=</span>
                      <span class="token punctuation">(</span><span class="token keyword">SELECT</span> manager_id<span class="token punctuation">,</span> department_id
                       <span class="token keyword">FROM</span>   employees
                       <span class="token keyword">WHERE</span>  employee_id <span class="token operator">=</span> <span class="token number">141</span><span class="token punctuation">)</span>
<span class="token operator">AND</span>	employee_id <span class="token operator">&lt;&gt;</span> <span class="token number">141</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>练习四</p><p>查询最低工资大于 50 号部门最低工资的部门 id 和其最低工资</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">50</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>练习五</p><p>显式员工的 employee_id,last_name 和 location。其中，若员工 department_id 与 location_id 为 1800 的 department_id 相同，则 location 为 Canada，其余则为 USA。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token keyword">CASE</span> department_id
        <span class="token keyword">WHEN</span>
            <span class="token punctuation">(</span><span class="token keyword">SELECT</span> department_id <span class="token keyword">FROM</span> departments <span class="token keyword">WHERE</span> location_id <span class="token operator">=</span> <span class="token number">1800</span><span class="token punctuation">)</span>
        <span class="token keyword">THEN</span> <span class="token string">&#39;Canada&#39;</span> <span class="token keyword">ELSE</span> <span class="token string">&#39;USA&#39;</span> <span class="token keyword">END</span><span class="token punctuation">)</span> location
<span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="多行子查询" tabindex="-1"><a class="header-anchor" href="#多行子查询" aria-hidden="true">#</a> 多行子查询</h3><ul><li>也叫集合比较子查询</li><li>内查询返回多行</li><li>使用多行比较操作符</li></ul><p>多行子查询使用的操作符</p><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td>IN</td><td>等于列表中的<strong>任意一个</strong></td></tr><tr><td>ANY</td><td>需要和单行比较操作符一起使用，和子查询返回的<strong>某一个</strong>值比较</td></tr><tr><td>ALL</td><td>需要和单行比较操作符一起使用，和子查询返回的<strong>所有</strong>值比较</td></tr><tr><td>SOME</td><td>实际上是 ANY 的别名，作用相同，一般常使用 ANY</td></tr></tbody></table><ul><li><p>练习一</p><p>返回其它 job_id 中比 job_id 为‘IT_PROG’部门<strong>任一</strong>工资低的员工的员工号、姓名、job_id 以及 salary</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> job_id <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;IT_PROG&#39;</span>
<span class="token operator">AND</span> salary <span class="token operator">&lt;</span> <span class="token keyword">ANY</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token string">&#39;IT_PROG&#39;</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>练习二</p><p>返回其它 job_id 中比 job_id 为‘IT_PROG’部门所有工资<strong>都</strong>低的员工的员工号、姓名、job_id 以及 salary</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> job_id <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;IT_PROG&#39;</span>
<span class="token operator">AND</span> salary <span class="token operator">&lt;</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> salary <span class="token keyword">FROM</span> employees <span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token string">&#39;IT_PROG&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>练习三</p><p>查询平均工资最低的部门 id</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 解析</span>
<span class="token comment"># 先查出每个部门的平均工资</span>
<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sa
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id

<span class="token comment"># 把上面的结果单做一张表，查出他的最低工资</span>
<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>avg_sa<span class="token punctuation">)</span> <span class="token keyword">FROM</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sa
    <span class="token keyword">FROM</span> employees
    <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token punctuation">)</span> t_avg_sa

<span class="token comment"># 用最低工资去等于查出对应的部门id</span>
<span class="token keyword">SELECT</span> department_id <span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>avg_sa<span class="token punctuation">)</span> <span class="token keyword">FROM</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sa
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
	<span class="token punctuation">)</span> t_avg_sa
<span class="token punctuation">)</span>

<span class="token comment"># 方式二</span>
<span class="token comment"># 解析子查询查出来的每个部门的平均工资，父查询只要小于平均工资全部的最小值</span>
<span class="token keyword">SELECT</span> department_id <span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token keyword">ALL</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sa
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="相关子查询" tabindex="-1"><a class="header-anchor" href="#相关子查询" aria-hidden="true">#</a> 相关子查询</h3><p>如果子查询的执行依赖于外部查询，通常情况下都是因为子查询中的表用到了外部的表，并进行了条件关联，因此每执行一次外部查询，子查询都要重新计算一次，这样的子查询就称之为<code>关联子查询</code>。相关子查询按照一行接一行的顺序执行，主查询的每一行都执行一次子查询。</p><ul><li><p>练习一</p><p>查询员工中工资大于本部门平均工资的员工的 last_name,salary 和其 department_id</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 方式一</span>
<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees e1
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token keyword">All</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token keyword">FROM</span> employees e2
	<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> e1<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span>

<span class="token comment"># 方式二</span>
<span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">,</span> e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>salary
<span class="token keyword">FROM</span> employees e<span class="token punctuation">,</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sa
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span> t_e2
<span class="token keyword">WHERE</span>  e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> t_e2<span class="token punctuation">.</span>department_id
<span class="token operator">AND</span> e<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> t_e2<span class="token punctuation">.</span>avg_sa

<span class="token comment"># 方式二解析</span>
<span class="token comment"># 1.把每个部门的平均工资和department_id查出来当做一张表</span>
<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sa
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id

<span class="token comment"># 2.把两张表连起来进行多表查询，连接条件就是 department_id 相等，并且salary上面那张表</span>
<span class="token comment"># 查出来的平均工资。</span>
<span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">,</span> e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e<span class="token punctuation">.</span>salary
<span class="token keyword">FROM</span> employees e<span class="token punctuation">,</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sa
	<span class="token keyword">FROM</span> employees
	<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span> t_e2
<span class="token keyword">WHERE</span>  e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> t_e2<span class="token punctuation">.</span>department_id
<span class="token operator">AND</span> e<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> t_e2<span class="token punctuation">.</span>avg_sa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>练习二</p><p>查询员工的 id,salary,按照 department_name 排序</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> salary
<span class="token keyword">FROM</span> employees e
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> department_name <span class="token keyword">FROM</span> departments d
	<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id
<span class="token punctuation">)</span> <span class="token keyword">ASC</span><span class="token punctuation">;</span>

<span class="token comment"># 解析</span>
<span class="token comment"># 下面查出来的只是这个部门的department_name，把他当做一个字段来看即可。</span>
<span class="token keyword">SELECT</span> department_name <span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> d<span class="token punctuation">.</span>department_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>练习三</p><p>若 employees 表中 employee_id 与 job_history 表中 employee_id 相同的数目不小于 2，输出这些相同 id 的员工的 employee_id,last_name 和其 job_id</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span>e<span class="token punctuation">.</span>job_id
<span class="token keyword">FROM</span>   employees e
<span class="token keyword">WHERE</span>  <span class="token number">2</span> <span class="token operator">&lt;=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
             <span class="token keyword">FROM</span>   job_history
             <span class="token keyword">WHERE</span>  employee_id <span class="token operator">=</span> e<span class="token punctuation">.</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="exists-与-not-exists-关键字" tabindex="-1"><a class="header-anchor" href="#exists-与-not-exists-关键字" aria-hidden="true">#</a> EXISTS 与 NOT EXISTS 关键字</h3><ul><li>关联子查询通常也会和 EXISTS 操作符一起来使用，用来检查在子查询中是否存在满足条件的行。</li><li><strong>如果在子查询中不存在满足条件的行：</strong><ul><li>条件返回 FALSE</li><li>继续在子查询中查找</li></ul></li><li><strong>如果在子查询中存在满足条件的行：</strong><ul><li>不在子查询中继续查找</li><li>条件返回 TRUE</li></ul></li><li>NOT EXISTS 关键字表示如果不存在某种条件，则返回 TRUE，否则返回 FALSE。</li></ul><p>练习：查询公司管理者的 employee_id，last_name，job_id，department_id 信息</p><ul><li><p>方式一</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span>   employees e1
<span class="token keyword">WHERE</span>  <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span>
                 <span class="token keyword">FROM</span>   employees e2
                 <span class="token keyword">WHERE</span>  e2<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> e1<span class="token punctuation">.</span>employee_id
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式二</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 自连接</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> e1<span class="token punctuation">.</span>employee_id<span class="token punctuation">,</span> e1<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e1<span class="token punctuation">.</span>job_id<span class="token punctuation">,</span> e1<span class="token punctuation">.</span>department_id
<span class="token keyword">FROM</span>   employees e1 <span class="token keyword">JOIN</span> employees e2
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span>employee_id <span class="token operator">=</span> e2<span class="token punctuation">.</span>manager_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式三</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
		     <span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> manager_id
		     <span class="token keyword">FROM</span> employees
	     <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,29)])])}const c=s(t,[["render",l],["__file","subquery.html.vue"]]);export{c as default};
