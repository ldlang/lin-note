import{_ as s,o as a,c as e,e as p}from"./app-63ba67c3.js";const t={};function o(l,n){return a(),e("div",null,[...n[0]||(n[0]=[p(`<h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> typescript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>全局安装
	npm i <span class="token operator">-</span>g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译ts" tabindex="-1"><a class="header-anchor" href="#编译ts" aria-hidden="true">#</a> 编译ts</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>tsc xxx<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">number</span>					任意数字
<span class="token builtin">string</span>					任意字符串
<span class="token builtin">boolean</span>					布尔值
<span class="token keyword">null</span>					<span class="token keyword">null</span>
<span class="token keyword">undefined</span>				<span class="token keyword">undefined</span>
<span class="token builtin">any</span>						任意类型
<span class="token builtin">unknown</span>					类型安全的<span class="token builtin">any</span>
<span class="token keyword">void</span>					空值，没有值或者<span class="token keyword">undefined</span>
<span class="token builtin">never</span>					没有值，不能是任何值
object					任意的js对象
array					任意的js数组
tuple					元素，<span class="token constant">TS</span>新增类型，固定长度数组
<span class="token keyword">enum</span>					<span class="token keyword">enum</span> <span class="token punctuation">{</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">}</span>枚举，<span class="token constant">TS</span>新增类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>布尔值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> createdByBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span> <span class="token comment">// ES6 中的二进制表示法</span>
<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span><span class="token comment">// ES6 中的八进制表示法</span>
<span class="token keyword">let</span> notANumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> infinityNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>字符串</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myName<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;n&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>void 空值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">void</span>	如果一个变量是<span class="token keyword">void</span>类型，那么只能将<span class="token keyword">null</span>和<span class="token keyword">undefined</span>赋值给他
    <span class="token keyword">let</span> isNull<span class="token operator">:</span><span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> isNull<span class="token operator">:</span><span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>  <span class="token comment">//用void表示没有任何返回值的函数</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;没有返回值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>null和undefined</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">1</span><span class="token punctuation">.</span>null值 和 <span class="token keyword">undefined</span>值
    <span class="token keyword">let</span> isNull<span class="token operator">:</span><span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> isUndefined<span class="token operator">:</span><span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token number">2.</span>注意<span class="token keyword">null</span>和<span class="token keyword">undefined</span>是所有类型的子类型，就说明以下方式都不会报错
    <span class="token keyword">let</span> isNull<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">let</span> isUndefined<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span><span class="token comment">//同样不报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>任意值 any</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">1</span><span class="token punctuation">.</span><span class="token builtin">any</span> 可以被赋值为任何类型，被改变为其他类型以为是可以的
    <span class="token keyword">let</span> isNull<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> isNum<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token keyword">let</span> isStr<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;str&quot;</span>
    <span class="token keyword">let</span> isBoolean<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> isArray<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
    isArray <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token number">2.</span>访问任何属性和方法也是可以的
    <span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyThing<span class="token punctuation">.</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> anyThing<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span>
    anyThing<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">3</span><span class="token punctuation">.</span><span class="token builtin">any</span>类型的值也可以赋值给其他类型的值
    <span class="token keyword">let</span> a <span class="token comment">//此时a就是一个any类型的值</span>
    a <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span>
    str <span class="token operator">=</span> <span class="token string">&quot;15&quot;</span>
    str <span class="token operator">=</span> a <span class="token comment">//可以赋值，此时str就变成了一个布尔值</span>

<span class="token number">4.</span>如果一个变量定义的时候没有给类型也没有赋值，那它就是一个<span class="token builtin">any</span>类型的值
	<span class="token keyword">let</span> a <span class="token comment">//此时a就是一个any类型的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>unknown 未知类型，类型安全的any</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>当一个值未知类型时最好用<span class="token builtin">unknown</span>，不要用<span class="token builtin">any</span>

<span class="token number">1</span><span class="token punctuation">.</span><span class="token builtin">unknown</span>可以被赋值为任何类型的值
    <span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">unknown</span>
    a <span class="token operator">=</span> <span class="token boolean">true</span>
    a <span class="token operator">=</span> <span class="token number">15</span>
    a <span class="token operator">=</span> <span class="token string">&quot;str&quot;</span>
<span class="token number">2.</span>虽然最后被赋值为了一个字符串，但是本质类型上是一个<span class="token builtin">unknown</span>，所以不能赋值个其他类型
    <span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">string</span>
    b <span class="token operator">=</span> a <span class="token comment">// 报错</span>

<span class="token number">3.</span>要赋值也行，先判断类型，就可以给其他类型的值赋值
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">==</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        b <span class="token operator">=</span> a
    <span class="token punctuation">}</span>
	
	或者使用类型断言 <span class="token keyword">as</span><span class="token punctuation">,</span><span class="token function">我们知道a是一个string，但是编辑器不知道，此时就可以使用类型断言</span><span class="token punctuation">(</span><span class="token keyword">as</span><span class="token punctuation">)</span>告诉编辑器a就是一个<span class="token builtin">string</span>
    b <span class="token operator">=</span> a <span class="token keyword">as</span> <span class="token builtin">string</span>   等同于  b <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>never</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>表示永远不会返回结果
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">never</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;报错了&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 操作被这里中断了</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 某种意义上说没有返回值也是一种返回值，never直接不会走到后面，直接被中断了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>object</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>都不会报错，所以一般不这么用
	<span class="token keyword">let</span> a<span class="token operator">:</span> object
    <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

常用方式
	<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">}</span> <span class="token comment">// 报错，结构必须和定义的一致</span>

可选属性 <span class="token operator">?</span>
	解决方式<span class="token operator">:</span>用<span class="token operator">?</span>指定一个属性为可选属性
        <span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span> 
		以下都不会报错
        b <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span>
        b <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">}</span>

任意值：
	定义一个key为<span class="token builtin">string</span>，value为任意值的属性，可以有多个传入的属性
	<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> 
    <span class="token punctuation">}</span><span class="token comment">//此时除了name是必须的其他任意都是可选的</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">15</span>，
        school<span class="token operator">:</span> <span class="token string">&#39;学校&#39;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>array</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">1.</span>普通形式
	<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment">// 表示一个数组里面只能放数字类型的值</span>
    <span class="token keyword">let</span> arr1<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 表示一个数组里可以有数字和字符串</span>
        arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
        arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">]</span>

<span class="token number">2.</span>泛型的方式
	<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token comment">// 表示一个数组里面只能放数字类型的值</span>
	<span class="token keyword">let</span> arr1<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token comment">// 表示一个数组里可以有数字和字符串</span>
    	arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
        arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">]</span>

<span class="token number">3.</span><span class="token keyword">interface</span>的形式
	<span class="token keyword">interface</span> <span class="token class-name">arr</span> <span class="token punctuation">{</span>
		<span class="token punctuation">[</span>index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token comment">//数组的下标为数字类型</span>
    <span class="token punctuation">}</span>
	<span class="token keyword">let</span> brr <span class="token operator">:</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span> <span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>tuple 元组</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>固定长度的数组
    <span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span>  <span class="token comment">//长度必须是2，元素也必须一一对应</span>
    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>enum 枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>定义一个枚举，试用于一个值在固定几种值中选择的时候使用
    <span class="token keyword">enum</span> Gender <span class="token punctuation">{</span>
        men<span class="token punctuation">,</span>
        women
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> Gender <span class="token punctuation">}</span>
    person <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        gender<span class="token operator">:</span> Gender<span class="token punctuation">.</span>men
    <span class="token punctuation">}</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>gender <span class="token operator">==</span> Gender<span class="token punctuation">.</span>men<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="类型断言" tabindex="-1"><a class="header-anchor" href="#类型断言" aria-hidden="true">#</a> 类型断言</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">1.</span>我们知道一个变量是什么类型，但是解析器不知道，此时就可以使用类型断言，告诉解析器，这个变量就是某一个类型的值
语法 变量 <span class="token keyword">as</span> 类型
	例
        a <span class="token operator">=</span> b <span class="token keyword">as</span> <span class="token builtin">string</span>  <span class="token comment">// 告诉解析器b就是一个string类型的值</span>
        <span class="token operator">&lt;</span> 类型 <span class="token operator">&gt;</span> 变量
	例
		b <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>a  	<span class="token comment">// 告诉解析器b就是一个string类型的值，避免这种写法，和泛型易混淆</span>

<span class="token number">2.</span>读取属性时
	window<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 我们非常确定这个是可以给window添加foo值的，但是ts报错了</span>
	<span class="token punctuation">(</span>window <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 使用类型断言去赋值</span>

<span class="token number">3.</span>修改函数的返回值类型
	<span class="token comment">// 最初的函数返回值是any</span>
	<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> key
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 通过类型断言去修改返回值为空</span>
    <span class="token keyword">const</span> tom <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Cat<span class="token punctuation">;</span>
    tom<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">4.</span>双重断言 <span class="token operator">**</span>慎用
	<span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
        <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">Fish</span> <span class="token punctuation">{</span>
        <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">testCat</span><span class="token punctuation">(</span>cat<span class="token operator">:</span> Cat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>cat <span class="token keyword">as</span> <span class="token builtin">any</span> <span class="token keyword">as</span> Fish<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cat直接断言为Fish肯定不行，所以通过any去折中</span>
    <span class="token punctuation">}</span>

总结：
	<span class="token number">1.</span>联合类型可以被断言为其中一个类型
    <span class="token number">2.</span>父类可以被断言为子类
    <span class="token number">3.</span>任何类型都可以被断言为 <span class="token builtin">any</span>
    <span class="token number">4</span><span class="token punctuation">.</span><span class="token builtin">any</span> 可以被断言为任何类型
    <span class="token number">5.</span>要使得 <span class="token constant">A</span> 能够被断言为 <span class="token constant">B</span>，只需要 <span class="token constant">A</span> 兼容 <span class="token constant">B</span> 或 <span class="token constant">B</span> 兼容 <span class="token constant">A</span> 即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特殊：字面量赋值</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token number">10</span>
此时就相当于
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> a的值不能在被更改

<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token string">&#39;ts&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;js&#39;</span>
此时str只能被赋值ts或者js，不能再被赋值其他
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断" aria-hidden="true">#</a> 类型推断</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>情况<span class="token number">1</span>，声明变量同时赋值
    <span class="token keyword">let</span> anyThing <span class="token operator">=</span> <span class="token number">7</span>   <span class="token comment">//anyThing虽然没有指定类型，但是在定义的时候就被赋值了一个数值类型，此时anyThing就会被认为是一个number类型的，再赋值其他类型就会报错</span>

情况<span class="token number">2</span>，只声明变量，不赋值，不给类型
	<span class="token keyword">let</span> anyThing   <span class="token comment">//此时anyThing就会被推断为任何类型(any)，可以赋任何类型的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">1.</span>给一个变量指定两个或以上的类型 用 <span class="token operator">|</span> 分开
    <span class="token keyword">let</span> aValue<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">7</span>
    aValue <span class="token operator">=</span> <span class="token string">&#39;7&#39;</span> <span class="token comment">//不报错</span>
    aValue <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//报错</span>

<span class="token number">2.</span>访问联合类型时  <span class="token operator">==</span><span class="token operator">&gt;</span> 必须访问联合类型共有的属性
    <span class="token keyword">let</span> aValue<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">7</span>
    aValue<span class="token punctuation">.</span>length <span class="token comment">//报错，数值没有length属性</span>
    aValue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//正确</span>

<span class="token number">3.</span>指定<span class="token number">3</span>种类型
    <span class="token keyword">let</span> aValue<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token number">7</span>
    aValue <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token number">4.</span>联合类型的类型推断
	<span class="token keyword">let</span> myNum <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
    myNum <span class="token operator">=</span> <span class="token number">15</span> <span class="token comment">// 此时myNum已经被推断为了number类型</span>
    myNum<span class="token punctuation">.</span>length  <span class="token comment">// number没有length属性会报错</span>
    myNum <span class="token operator">=</span><span class="token string">&#39;str&#39;</span> <span class="token comment">// myNum又被被推断为了string类型</span>
    myNum<span class="token punctuation">.</span>length <span class="token comment">// 再去访问他的length属性就没问题</span>

注意<span class="token operator">:</span>如果定义了一个联合类型的变量，但是没有赋值，那么赋值什么类型的值就会被认为是什么类型的值
    <span class="token keyword">let</span> aValue<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    aValue <span class="token operator">=</span> <span class="token string">&#39;seven&#39;</span><span class="token punctuation">;</span>
    aValue<span class="token punctuation">.</span>length <span class="token comment">// 5</span>

    aValue <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
    aValue<span class="token punctuation">.</span>length <span class="token comment">// 编译时报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><ol><li><p>设置函数传递参数的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置函数返回值的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b
<span class="token punctuation">}</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>

函数确定的返回值的类型后<span class="token punctuation">,</span>result就可以通过类型推断确定好类型了，同时也保证了返回值的正确性。
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>函数没有返回值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>用<span class="token keyword">void</span>表示没有任何返回值的函数，但是可以放回空，<span class="token keyword">null</span>，<span class="token keyword">undefined</span>
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;没有返回值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  	<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span> 
    <span class="token punctuation">}</span>

<span class="token builtin">never</span>就用于没有返回值，只能被中断操作
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">never</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;报错了&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 操作被这里中断了</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义一个指定类型和参数的函数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>定义一个返回值为<span class="token builtin">string</span>，接收两个形参都为<span class="token builtin">number</span>的函数
    <span class="token keyword">let</span> <span class="token function-variable function">fun</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>

    <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2 <span class="token operator">+</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>函数表达式定义类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>普通写法
	<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> a<span class="token operator">+</span>b
    <span class="token punctuation">}</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;哈哈&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>

变量写法
	<span class="token keyword">let</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span>  <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> a<span class="token operator">+</span>b
    <span class="token punctuation">}</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;哈哈&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>

	实际上左边是通过类型推断出来的，完整的写法应当是
    <span class="token keyword">let</span> <span class="token function-variable function">fun</span><span class="token operator">:</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function-variable function">string</span><span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>b
    <span class="token punctuation">}</span>
    <span class="token comment">// 这里的=&gt;指的是函数的返回类型，并不是箭头函数</span>
	<span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;哈哈&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过interface定义函数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Ifun</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token comment">//左边是参数的类型，右边是返回值的类型</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myFun<span class="token operator">:</span>Ifun
myFun <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可选参数注意事项</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">1</span>、可选参数必须放置于必传参数的后面，因为如果第二个参数是可选参数，同时他没有传，那么传递的参数就对不上了
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>c<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token operator">+</span>c
    <span class="token punctuation">}</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;字符串&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;哈哈哈&#39;</span><span class="token punctuation">)</span>

<span class="token number">2</span>、如果可选参数加了默认值那么，可选参数可以不放到最后
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>b<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">,</span>c<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token operator">+</span>c
    <span class="token punctuation">}</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;字符串&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;哈哈哈&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>剩余参数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token operator">...</span>b<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="与" tabindex="-1"><a class="header-anchor" href="#与" aria-hidden="true">#</a> &amp; 与</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>合并
<span class="token keyword">let</span> obj<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> gae<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
等同于
<span class="token keyword">let</span> obj<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> gae<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>

obj <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> gae<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>定义一个属于自己的类型
    <span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token builtin">string</span>
    <span class="token keyword">let</span> str<span class="token operator">:</span> myType <span class="token comment">// 由于myType等价与string，所以str就被指定为string类型</span>

    <span class="token keyword">type</span> <span class="token class-name">newType</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>
    <span class="token keyword">let</span> num <span class="token operator">:</span> newType <span class="token comment">// 此时num的类型就必须是1或2或3中任意的一个值</span>
    num <span class="token operator">=</span> <span class="token number">2</span>
    等同于写了<span class="token keyword">let</span> num <span class="token operator">:</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>但是使用一个自定义<span class="token keyword">type</span>写的，可以赋值个多个变量为这个<span class="token keyword">type</span>
    <span class="token class-name"><span class="token keyword">let</span></span> numB <span class="token operator">:</span> newType   <span class="token operator">===</span> <span class="token keyword">let</span> num <span class="token operator">:</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token comment">// 此时numB也是这个类型了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译选项" tabindex="-1"><a class="header-anchor" href="#编译选项" aria-hidden="true">#</a> 编译选项</h2><ol><li><p>tsc xxx -w</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>监视文件变化，文件改变则自动编译为js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>tsconfig.json</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>ts的配置文件，只要有这个文件，执行tsc就能编译所有ts文件，执行tsc <span class="token operator">-</span>w就能同事监视所有ts文件的变化

配置很多，具体参考官网
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h3><ol><li><p>创建一个类</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>    <span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">15</span>
    <span class="token punctuation">}</span>
	<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 必须要new才能使用里面的方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>readonly</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>只读属性不能更改
    <span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
        <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 张三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>static</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>静态属性
	能够立马调用，但是通过<span class="token keyword">new</span>创建的实例身上不会有静态的属性和方法
    <span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>  <span class="token comment">// 静态属性</span>
        <span class="token keyword">static</span> <span class="token keyword">readonly</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">15</span>  <span class="token comment">// 静态只读属性</span>
        <span class="token keyword">static</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>
	Point<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Point<span class="token punctuation">.</span>age<span class="token punctuation">)</span>  <span class="token comment">// 张三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>constructor</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>类上面的构造函数 只要<span class="token keyword">class</span><span class="token function">被实例</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">,</span>就会立马调用constructor函数
	<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 定义需要用到的属性的类型</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;被调用了&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">brk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token comment">// 会立马调用constructor函数</span>
    p<span class="token punctuation">.</span><span class="token function">brk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 谁实例化class，里面的this就只向谁，此时的this就只向p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>abstract 抽象类</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> 抽象类，一旦类前面有这个关键字，那他就是一个抽象类
	抽象类不能被用来创建实例，也就是不能<span class="token keyword">new</span>
    <span class="token class-name">抽象类就是专门用来被继承的类</span>
    
    抽象方法<span class="token punctuation">,</span>在方法前面加入<span class="token keyword">abstract</span>关键字，他就是一个抽象类
		抽象方法必须在子类里面重写
    	<span class="token keyword">abstract</span> <span class="token function">brk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token keyword">abstract</span> <span class="token function">brk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Per</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    sex<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> sex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex
    <span class="token punctuation">}</span>
	<span class="token function">brk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Per</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">brk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>get和set的使用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> name<span class="token operator">:</span><span class="token builtin">string</span> <span class="token comment">//私有属性，只能在类内部修改和访问</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">newAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age
    <span class="token punctuation">}</span>
    <span class="token keyword">set</span> <span class="token function">newAge</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">get</span> <span class="token function">newAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 相当于是一个值，可以在创建实例后这就通过 实例<span class="token punctuation">.</span>newAge访问里面的返回值
<span class="token keyword">set</span> <span class="token function">newAge</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 当实例上去修改newAge这个值，val就会得到这个修改的值，就可以怼他进行					处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface 接口</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">1</span>、可以定义一个接口，限制一个对象
    <span class="token keyword">interface</span> <span class="token class-name">myInter</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span>
        <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> obj<span class="token operator">:</span> myInter <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">15</span>，
        <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token number">2</span>、重名将会合并
	<span class="token keyword">interface</span> <span class="token class-name">Dom</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
        age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">Dom</span> <span class="token punctuation">{</span>
        sex<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 必须拥有上面两个接口的所有属性</span>
    <span class="token keyword">let</span> person<span class="token operator">:</span> Dom <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        sex<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
   
<span class="token number">3</span>、使用<span class="token keyword">interface</span>的变量必须和<span class="token keyword">interface</span>定义的形状保持一致
	<span class="token keyword">interface</span> <span class="token class-name">Dom</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
        age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> person<span class="token operator">:</span> Dom <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        sex<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 多了这个属性，报错</span>
        age<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">let</span> person<span class="token operator">:</span> Dom <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 少了属性报错</span>
    <span class="token punctuation">}</span>
    
 
<span class="token number">4</span>、可选属性
    <span class="token keyword">interface</span> <span class="token class-name">Dom</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
        age<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 此时age是一个可选属性，写不写都行</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> person<span class="token operator">:</span> Dom <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    
<span class="token number">5</span>、任意属性
    <span class="token keyword">interface</span> <span class="token class-name">Dom</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
	<span class="token comment">// 定义一个key为string，value为string | number的任意属性，此时这个interface就能写任意个键值对，但是value必须是string或者number的类型</span>
	注意：任意属性的value的类型必须是已有类型的父类型

    <span class="token keyword">let</span> person<span class="token operator">:</span> Dom <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        sex<span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
    	ger<span class="token operator">:</span> <span class="token number">15</span>  <span class="token comment">// 可以写任意个属性，但一定要包含name属性</span>
    <span class="token punctuation">}</span>
    
<span class="token number">6</span>、添加只读属性 <span class="token keyword">readonly</span>
	<span class="token keyword">interface</span> <span class="token class-name">Dom</span> <span class="token punctuation">{</span>
        <span class="token keyword">readonly</span> id <span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> person<span class="token operator">:</span> Dom <span class="token operator">=</span> <span class="token punctuation">{</span>
        id <span class="token operator">:</span> <span class="token string">&#39;12341241234&#39;</span>
    <span class="token punctuation">}</span>

    person<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;20&#39;</span>  <span class="token comment">// 只读属性只能在初始化的时候赋值一次，不能再次赋值，但可以读取值</span>
  
<span class="token number">7</span>、<span class="token keyword">interface</span>嵌套
	<span class="token keyword">interface</span> <span class="token class-name">Idata</span><span class="token punctuation">{</span>
        token<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
        name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//data里面还有其他层数的数据结构，此时就可以通过interface的嵌套对深层次的数据进行约束</span>
    <span class="token keyword">interface</span> <span class="token class-name">IData</span><span class="token punctuation">{</span>
        code<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span>Idata 
    <span class="token punctuation">}</span>
    
<span class="token number">8</span>、联合类型的<span class="token keyword">interface</span>
	<span class="token class-name"><span class="token keyword">interface</span></span> Idata<span class="token punctuation">{</span>
        token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">IData</span><span class="token punctuation">{</span>
        code<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> person<span class="token operator">:</span> Idata <span class="token operator">|</span> IData <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span>，
        date<span class="token operator">:</span> <span class="token string">&#39;哈哈&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 此时两个interface里面的属性都变成了可选属性</span>
    <span class="token punctuation">(</span>person <span class="token keyword">as</span> Idata<span class="token punctuation">)</span><span class="token punctuation">.</span>token <span class="token operator">=</span> <span class="token string">&#39;564156&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 使用类型断言为 Idata 类型的属性赋值</span>

<span class="token number">8</span>、也可以限制<span class="token keyword">class</span>，加上<span class="token keyword">implements</span>关键字
    <span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token keyword">implements</span> <span class="token class-name">myInter</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span>

        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token punctuation">}</span>

        <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">22</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



注意：
	<span class="token number">1.</span>接口中所有的属性只能定义类型，不能拥有实际的值
	<span class="token number">2.</span>在接口中定义的所有方法都是抽象方法，即使必须要去被实现的方法
	<span class="token number">3.</span>接口定义可以重名，重名的两个接口会合并起来
	<span class="token number">4.</span>类使用接口必须加上<span class="token keyword">implements</span>关键字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">private</span>	
	私有属性，私有属性只能在这个类内部被访问和修改，不过可以通过<span class="token keyword">get</span>和<span class="token keyword">set</span>方法让外部也能修改
    
<span class="token keyword">protected</span> 
	受保护的方法，可以在这个类和子类，也就是继承他的类中被修改，外部不能直接修改，也可以用过<span class="token keyword">get</span>     和<span class="token keyword">set</span>让外部来修改
    
pulic
	公有的方法，可以在任意位置被访问和修改
    
<span class="token keyword">readonly</span> 
	只能被读取，不能修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过public可以简写" tabindex="-1"><a class="header-anchor" href="#通过public可以简写" aria-hidden="true">#</a> 通过public可以简写</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>在不确定类型的时候就可以使用泛型定义一个变量
	语法：
    <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//T就是一个类型变量你传入啥，他就是啥类型</span>
        <span class="token keyword">return</span> name
    <span class="token punctuation">}</span>

    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 不指定类型，就会被类型推断，此时T就是一个string的类型</span>
    <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 指定类型为string，此时的T就是被指定的string</span>

可以同时定义多个泛型
    <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name
    <span class="token punctuation">}</span>

    <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 此时T的类型就是string，K的类型就是number</span>

给泛型添加约束
	<span class="token number">1</span>、通过<span class="token keyword">interface</span>约束
        <span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
            age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">student</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Person<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">student</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&quot;lili&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> arg<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	说明：
		Person拥有<span class="token builtin">string</span>和<span class="token builtin">number</span>两种类型，他给泛型<span class="token constant">T</span>增加了约束，那么泛型<span class="token constant">T</span>就是能是<span class="token builtin">string</span>和			<span class="token builtin">number</span>，不是为其他的类型，但Person同时也规定了两个属性，所有fun也必须有这两个属				性，缺一不可，他自身的arg可以是<span class="token builtin">string</span>和<span class="token builtin">number</span>的类型
        
    <span class="token number">2</span>、直接约束
    	<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">student</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">student</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">student</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	说明：
    	此时<span class="token constant">T</span>就只能是<span class="token builtin">string</span>或<span class="token builtin">number</span>的类型，也可以是他们的子类

在<span class="token keyword">class</span>中使用泛型
	<span class="token keyword">class</span> <span class="token class-name">Point<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token constant">T</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型工具类型" tabindex="-1"><a class="header-anchor" href="#泛型工具类型" aria-hidden="true">#</a> 泛型工具类型</h3><ol><li><p>Partial</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>的作用就是将某个类型中的属性全部变为可选项<span class="token operator">?</span>
    <span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
        age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">student</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Person<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span>Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Record</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Record<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span>的作用是将<span class="token constant">K</span>中所有的属性转换为<span class="token constant">T</span>类型；

<span class="token keyword">interface</span> <span class="token class-name">PageInfo</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Page</span> <span class="token operator">=</span> <span class="token string">&#39;home&#39;</span><span class="token operator">|</span><span class="token string">&#39;about&#39;</span><span class="token operator">|</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> x<span class="token operator">:</span> Record<span class="token operator">&lt;</span>Page<span class="token punctuation">,</span> PageInfo<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    home<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    about<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    other<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;ccc&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
将x中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Pick</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span>的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型
    <span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
        desc<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
        time<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">type</span> <span class="token class-name">TodoPreview</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token operator">|</span><span class="token string">&#39;time&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> todo<span class="token operator">:</span> TodoPreview <span class="token operator">=</span><span class="token punctuation">{</span>
        title<span class="token operator">:</span><span class="token string">&#39;吃饭&#39;</span><span class="token punctuation">,</span>
        time<span class="token operator">:</span><span class="token string">&#39;明天&#39;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Exclude</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Exclude<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span>的作用是将某个类型中属于另一个类型的属性移除掉
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;b&quot; | &quot;c&quot;,第二个参数就是要移除的</span>
<span class="token keyword">const</span> t<span class="token operator">:</span><span class="token constant">T0</span> <span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>ReturnType</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>returnType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>的作用是用于获取函数<span class="token constant">T</span>的返回类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,35)])])}const i=s(t,[["render",o],["__file","typescript.html.vue"]]);export{i as default};
