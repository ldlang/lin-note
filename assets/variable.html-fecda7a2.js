import{_ as s,o as a,c as t,e as p}from"./app-63ba67c3.js";const e={};function o(c,n){return a(),t("div",null,[...n[0]||(n[0]=[p(`<h1 id="变量、作用域、内存" tabindex="-1"><a class="header-anchor" href="#变量、作用域、内存" aria-hidden="true">#</a> 变量、作用域、内存</h1><h3 id="原始值和引用值" tabindex="-1"><a class="header-anchor" href="#原始值和引用值" aria-hidden="true">#</a> 原始值和引用值</h3><ol><li><p>原始值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">6</span>个基础类型 Undefined、Null、Boolean、Number、String 和 Symbol
<span class="token function">通过字面量形式创建的会直接将值存储在内存中</span><span class="token punctuation">(</span>也就是存储在栈内存中<span class="token punctuation">)</span>，访问变量就直接访问
内存中的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>引用值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>object、Array、<span class="token keyword">function</span>、和通过 <span class="token keyword">new</span> <span class="token function">创建的基础类型</span><span class="token punctuation">(</span>存储在堆内存中<span class="token punctuation">)</span>，变量保存的只不
过是这个值存储在内存中的引用地址

注意：通过 <span class="token keyword">new</span> 创建出来的基础类型，通过<span class="token keyword">typeof</span>检测为object
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>复制值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>原始数据类型：
	将一个变量保存的值赋值给另一个变量式，会在内存中开辟两个空间来存储这两个值，因此两个
 值是互不干扰的，即使一个值变了，另一个值也不会变
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> str1 <span class="token operator">=</span> str<span class="token punctuation">;</span>
    str <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> str1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2  &#39;字符串&#39;</span>

引用数据类型：
	引用数据类型将一个变量的引用值赋值个另一个变量，只是原来这个变量存储的引用地址赋值给
 了这个新的变量，只要任意个变量改变了存储的这个值，那么所有保存这个引用值的变量都会改
 变<span class="token punctuation">,</span>引用数据直接赋值也就是所谓的浅拷贝。
    对象：
        <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> obj1 <span class="token operator">=</span> obj<span class="token punctuation">;</span>
        obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj，obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: &#39;15&#39;, b: &#39;2&#39;} 两个变量的结果都是同一个</span>

	数组：
		<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    	<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">;</span>
    	arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;字符串&quot;</span><span class="token punctuation">;</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, &#39;字符串&#39;, 3] 两个变量的结果都是同一个</span>

	即使是通过函数参数的形式去修改值同样也只是修改了内存中的值
        <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter">ob</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ob<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&quot;哈哈哈&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">fun</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// {a: &#39;哈哈哈&#39;, b: &#39;2&#39;} 两个变量的结果都是同一个</span>

	修改原来的对象后，在开辟一个新对象去修改，是不会影响到原来的对象的
        <span class="token keyword">function</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
            obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;张三&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>确定类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>通过<span class="token keyword">typeof</span>去检测除了 <span class="token keyword">null</span> 的基础数据类型是有意义的，因为能够准确的知道类型，检测引
用数据类型的意义其实并不大，此时就可以 <span class="token keyword">instanceof</span> 去确定引用的数据类型

    <span class="token keyword">let</span> mao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mao <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mao <span class="token keyword">instanceof</span> <span class="token class-name">Map</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>

    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fun <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fun <span class="token keyword">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>

通过 <span class="token keyword">instanceof</span> 检测基础数据类型会直接返回<span class="token boolean">false</span>，检测引用数据类型，所有的数据类型通
过 <span class="token keyword">instanceof</span> 与 Object 检测都是返回<span class="token boolean">true</span>，即使是函数也是<span class="token boolean">true</span>， 所以可以直接检测对应
的类型，如Array，Function，Map等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>const 定义的引用数据类型如何不让更改</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>创建一个对象，并用 Object<span class="token punctuation">.</span>freeze 来冻结这个对象，那么这个对象将永远不能更改
<span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>判断两个值是否相等</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>基础数据类型只是判断值等不等，引用数据类型，则是判断连个变量保存的引用地址等不等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,3)])])}const i=s(e,[["render",o],["__file","variable.html.vue"]]);export{i as default};
