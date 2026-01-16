import{_ as s,o as a,c as p,e}from"./app-63ba67c3.js";const t={};function o(c,n){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h1 id="基础类型" tabindex="-1"><a class="header-anchor" href="#基础类型" aria-hidden="true">#</a> 基础类型</h1><ul><li><p><strong>boolean</strong> - 布尔值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>number</strong> - 数字</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>string</strong> - 字符串</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>Array</strong> - 数组</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>普通写法
	<span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>	 		表示一个数组里面每个元素都是字符串
    
    数组对象
    <span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token punctuation">{</span> suit<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> card<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> suit<span class="token operator">:</span> <span class="token string">&quot;diamonds&quot;</span><span class="token punctuation">,</span> card<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> suit<span class="token operator">:</span> <span class="token string">&quot;spades&quot;</span><span class="token punctuation">,</span> card<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

泛型写法
	<span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>   	表示一个数组里面都是数字类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>tuple</strong> - 元组</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span>				
	定义一个元组，第一个只能是<span class="token builtin">string</span>类型，第二个只能是<span class="token builtin">number</span>类型，并且这个数组只能有两个元素，不能同意元组以外的元素
    
list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span>
list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>enum</strong> - 枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>枚举的时候不直接赋值，那么枚举的属性的值就是从<span class="token number">0</span>开始的数值
	<span class="token keyword">enum</span> Color <span class="token punctuation">{</span> 
        red<span class="token punctuation">,</span> 		<span class="token comment">// 没有进行赋值，red的值就是0</span>
        green<span class="token punctuation">,</span> 		<span class="token comment">// 值是1</span>
        blue <span class="token operator">=</span> <span class="token number">2</span>	<span class="token comment">// 因为默认值就是2，其他枚举不赋值也不会报错</span>
    <span class="token punctuation">}</span>
	<span class="token keyword">let</span> c <span class="token operator">=</span> Color<span class="token punctuation">.</span>red  <span class="token comment">//c的值是0</span>

枚举的时候直接赋值，那么每个枚举的属性都要赋值
	<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
        Red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
        Green <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
        Blue <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> Color<span class="token punctuation">.</span>Red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>any</strong> - 任意值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> color<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;15&#39;</span>
color <span class="token operator">=</span> <span class="token number">15</span>

注意：
	<span class="token number">1.</span>当你想要调用一个属性里面的方法或者属性，但是里面的方法和属性没有你不知道其类型，你就可以给他赋值		为<span class="token builtin">any</span>，就可以任意调用里面的方法和属性
	<span class="token number">2.</span>可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任	  意值 <span class="token operator">-</span> 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
	<span class="token number">3.</span>被定义为<span class="token builtin">any</span>类型的值，相当于关闭了ts对他的类型检查
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>void</strong> - 空值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> variable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
	
当一个值被指定为<span class="token keyword">void</span>时，这个值只能被赋值为 <span class="token keyword">null</span> 和 <span class="token keyword">undefined</span>，因为他不能是任何值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>null</strong> 和<strong>undefined</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">null</span> 和 <span class="token keyword">undefined</span>是所有类型的子类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>never</strong> - 永远不存在的值</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>永远不存在的值的类型，<span class="token builtin">never</span>类型是任何类型的子类型

<span class="token comment">// 返回never的函数必须存在无法达到的终点</span>
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 推断的返回值类型为never</span>
<span class="token keyword">function</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Something failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>unknown</strong> 未知类型，类型安全的any</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">2.</span>它表示一个类型未知的值。和 <span class="token builtin">any</span> 类型类似，<span class="token builtin">unknown</span> 也可以被赋值为任何类型的值，但是在使用 <span class="token builtin">unknown</span> 类型值时，需要先进行类型检查或类型断言，以确保类型安全。当一个值未知类型时最好用<span class="token builtin">unknown</span>，不要用<span class="token builtin">any</span>。

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>object</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>object表示非原始类型，也就是除<span class="token builtin">number</span>，<span class="token builtin">string</span>，<span class="token builtin">boolean</span>，<span class="token builtin">symbol</span>，<span class="token keyword">null</span>或<span class="token keyword">undefined</span>之外的类型。

都不会报错，所以一般不这么用
	<span class="token keyword">let</span> a<span class="token operator">:</span> object
    <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

常用方式
	<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span>
    b <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">}</span> <span class="token comment">// 报错，结构必须和定义的一致</span>

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

注意
	<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        sex<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span>   <span class="token comment">// error，对象中不能声明可选属性</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>类型断言</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token number">1.</span>我们知道一个变量是什么类型，但是解析器不知道，此时就可以使用类型断言，告诉解析器，这个变量就是某一个类型的值

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface 接口</h1><ul><li><p>定义了一个数据的形状，使用这个interface属性的形状必须和interface的形状保持一致</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>写法一：
	<span class="token keyword">interface</span> <span class="token class-name">person</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> men<span class="token operator">:</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// men里有的属性必须和是person这个接口里面定义的过的，不能多也不能少</span>
        name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">15</span>
    <span class="token punctuation">}</span>
    
写法二：
    <span class="token keyword">interface</span> <span class="token class-name">IPoint</span> <span class="token punctuation">{</span>
        x<span class="token operator">:</span> <span class="token builtin">number</span>
        y<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token operator">&lt;</span>IPoint<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    point<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">// 只能往point身上添加IPoint定义过得属性，但所有定义过得属性都变成可选属性了</span>

接口在函数中使用，传入的参数必须包含着lable属性，并且值的类型为<span class="token builtin">string</span>
    <span class="token keyword">interface</span> <span class="token class-name">Iobj</span> <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span>labelObj<span class="token operator">:</span> Iobj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>labelObj<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> myObj <span class="token operator">=</span> <span class="token punctuation">{</span>size<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;Size 10 Object&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">printLabel</span><span class="token punctuation">(</span>myObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>**? **- 可选属性</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。就可以将这个属性变为可选属性，他存不存在也无所谓，但是依然不能多出来属性。

<span class="token keyword">interface</span> <span class="token class-name">person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>  <span class="token comment">// 此时age就是一个可选的属性，使用这个接口的属性，里面age属性就变得可有可无了</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> men<span class="token operator">:</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// age: 15			age不存在也不会报错</span>
<span class="token punctuation">}</span>

函数中使用	
	<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
        color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	
	<span class="token comment">// 参数后面的为函数的返回值类型</span>
    <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span>config<span class="token operator">:</span> Square<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> area<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token comment">// 必须定义好对象里的属性，不能定义一个空对象，否则下面会报错 类型“{}”上不存在属性“color”</span>
        <span class="token keyword">let</span> newSquare <span class="token operator">=</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> area<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newSquare<span class="token punctuation">.</span>color <span class="token operator">=</span> config<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newSquare<span class="token punctuation">.</span>area <span class="token operator">=</span> config<span class="token punctuation">.</span>width <span class="token operator">*</span> config<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> newSquare<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> mySquare <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&quot;black&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">// 传入的参数都是可选的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>readonly</strong> - 只读属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>字面意思，被 <span class="token keyword">readonly</span> 的属性只能被读取，不能被修改，只能在调用这个接口的时候进行赋值一次，之后则只能读取他的值，而不能赋值

<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">readonly</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token string">&#39;15&#39;</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
p<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>ReadonlyArray</strong> - 只读的数组</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>ReadonlyArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>类型，它与<span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改

<span class="token keyword">let</span> list<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// list不能被修改</span>

<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ro<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>  <span class="token comment">// 此时的ro依然是不能修改的</span>

但是可以通过类型断言去赋值
    <span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> ro<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
	<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
    a <span class="token operator">=</span> b <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment">// 此时再次赋值就可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>任意属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>一个接口拥有任意属性后，出来必须的属性要存在，可以添加任意个<span class="token keyword">interface</span>为定义的属性，但是任意属性value的类型，必须是其他类型的父类型

<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>  
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// 只有x属性时必须存在的其他的可有可无</span>
    x<span class="token operator">:</span> <span class="token string">&#39;15&#39;</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    z<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>函数类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义使用这个接口的函数，有两个参数，分别为下x和y，且函数的返回值类型为string</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> fun<span class="token operator">:</span> Point
<span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span>：<span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可索引的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>其实就是用<span class="token keyword">interface</span>去描述调用这个<span class="token keyword">interface</span>的数据属性的特征

<span class="token keyword">interface</span> <span class="token class-name">arr</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>   <span class="token comment">// 数组的特征就是有索引，即下标，且为数字类型，里面的参数就随意定义</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> list<span class="token operator">:</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">]</span>

定义了arr接口，它具有索引签名。 这个索引签名表示了当用 <span class="token builtin">number</span>去索引arr时会得到<span class="token builtin">string</span>类型的返回值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>类使用interface</p><ul><li><p><strong>implements</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>类要使用 <span class="token keyword">interface</span> <span class="token class-name">必须借用</span> implement 关键字

<span class="token keyword">interface</span> <span class="token class-name">IPoint</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token keyword">implements</span> <span class="token class-name">IPoint</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
    <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>extends</strong> - 继承接口</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPoint</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">APoint</span> <span class="token punctuation">{</span>
    y<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BPoint</span> <span class="token keyword">extends</span> <span class="token class-name">IPoint</span><span class="token punctuation">,</span> APoint <span class="token punctuation">{</span>  <span class="token comment">// 此时BPoint同时继承了IPoint和APoint</span>
    z<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> point<span class="token operator">:</span> BPoint <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// point必须实现上面三个接口的形状</span>
    x<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token string">&#39;15&#39;</span><span class="token punctuation">,</span>
    z<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>混合类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>待补充
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>接口继承类</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>待补充
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li></li></ul><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1><ul><li>待补充</li></ul><h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1><ul><li><p>函数类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>接收两个参数，第一个为<span class="token builtin">string</span>类型，第二个为<span class="token builtin">number</span>类型，函数的返回值为<span class="token builtin">string</span>类型，函数返回值类型可以省略，因为ts会自动去推断返回值的类型

	具名函数：
        <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> 
            <span class="token keyword">return</span> x <span class="token operator">+</span> y
        <span class="token punctuation">}</span>
    匿名函数
        <span class="token keyword">let</span> <span class="token function-variable function">myFun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">+</span> y
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>匿名函数完整写法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>实际上左边是通过类型推断出来的<span class="token punctuation">,</span>所以完整的写法应当是给左侧也定义好类型
<span class="token keyword">let</span> <span class="token function-variable function">myFun</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">string</span><span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span> <span class="token comment">// 这里的=&gt;指的是函数的返回类型，并不是箭头函数</span>

左侧参数部分为了能够语义化，其实是可以和函数右侧参数名不一致的，这里ts只会去校验他对应参数的类型
<span class="token keyword">let</span> <span class="token function-variable function">myFun</span><span class="token operator">:</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function-variable function">string</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span><span class="token comment">// 这里和上面的写法没有区别，只不过是参数语义化而已</span>

注意：完整写法中必须书写函数的返回值类型，即使没有返回值页应该定义 <span class="token operator">=&gt;</span><span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>推断类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>因为ts存在着类型推断，所有只要你定义了任何一边ts就会自动识别出来
    <span class="token keyword">let</span> <span class="token function-variable function">myFun</span><span class="token operator">:</span> <span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">string</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y
    <span class="token punctuation">}</span>
    等同于
     <span class="token keyword">let</span> <span class="token function-variable function">myFun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> x <span class="token operator">+</span> y
     <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>?</strong> 可选参数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>在js中函数的参数都是可选的，即使定义了也可以不用传，在ts中，得让这个参数变为可选参数，才能不必传

<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token comment">//y是可选参数，所有可以不用传</span>

注意：
	<span class="token number">1.</span>可选参数必须至于参数的最后，加入x是可选参数，我指给函数传递了一个参数，那么这个参数不就变成了x了
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数默认值</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>参数也可以使用默认值，此时这个参数其实也是一个可选参数，当没有传递y，或者传递的y为<span class="token keyword">undefined</span>则为默认值
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y
    <span class="token punctuation">}</span>

注意：
	<span class="token number">1.</span>给定了默认值的参数，其实同时就制定了他参数的类型，上面y的类型就是<span class="token builtin">boolean</span>，不能传递其他类型的
    <span class="token number">2.</span>有默认值的参数可以不放置于参数的最后，但是在调用的时候必须明确给这个参数传递<span class="token keyword">undefined</span>，才能使		用其默认值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>剩余参数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>在js中可以使用aruments来访问所有传入的对象，在ts中只能自己去收集没有去声明接收的属性
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token operator">...</span>z<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y
    <span class="token punctuation">}</span>

    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span> <span class="token comment">// z收集到的就是剩余的参数</span>
	<span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token comment">// z可以一个参数都收集不到</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>指定<strong>this</strong>的类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">this</span>的类型为<span class="token builtin">any</span>，
	<span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token punctuation">{</span>
        str<span class="token operator">:</span> <span class="token string">&#39;字符串&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">fun</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>str  <span class="token comment">// 这里的this的类型是any</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
规定<span class="token keyword">this</span>的类型
	<span class="token keyword">interface</span> <span class="token class-name">Deck</span> <span class="token punctuation">{</span>
        str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
        <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Deck<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 显示的去传入this，并指定类型</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> point<span class="token operator">:</span> Deck <span class="token operator">=</span> <span class="token punctuation">{</span>
        str<span class="token operator">:</span> <span class="token string">&#39;字符串&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">fun</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> Deck<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>str <span class="token comment">// 这里的this的类型就是Deck</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>待补充</p></li></ul><h3 id="_4-重载" tabindex="-1"><a class="header-anchor" href="#_4-重载" aria-hidden="true">#</a> 4. 重载</h3><ul><li><p>函数重载</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>同一个函数里面对传入的同一个参数类型的不同，要进行不同的处理，就可以为同一个函数提供多个函数类型来进行重载，说白了就是给一个函数写多种传入参数和返回值不同的情况，ts自动去匹配使用那种情况

    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>   <span class="token comment">//此时x的类型就是any，因为传入的参数类型不同，所以不好定义</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">==</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> myDeck <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">fun</span><span class="token punctuation">(</span>myDeck<span class="token punctuation">)</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

重载去定义类型
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 重载情况一匹配第一个调用</span>
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 重载情况二，匹配第二个调用</span>
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">==</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> myDeck <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fun</span><span class="token punctuation">(</span>myDeck<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h1><ul><li><p>简介</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>定义一个函数，传来什么类型就返回什么类型，此时我们不知道要传入的类型，所以只能用<span class="token builtin">any</span>来规定类型，但这样就失去了类型的校验
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 不规定类型默认就是any</span>
        <span class="token keyword">return</span> x
    <span class="token punctuation">}</span>

使用泛型就能轻松解决这问题
    <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>  <span class="token comment">// T其实就是一个变量，他具体是什么类型就需要通过你去指定</span>
        <span class="token keyword">return</span> x
    <span class="token punctuation">}</span>

    <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>  <span class="token comment">// 手动指定T的类型为number，则上面所有T就是number</span>
    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>	<span class="token comment">// 不手动指定类型，ts会根据传入参数的类型去推断T的类型</span>

在实际使用中，一般不会去明确指定<span class="token constant">T</span>的类型，这样可以保持代码的精简
	
错误示例：
	<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x 
        <span class="token comment">// 虽然指定了T的类型为number，x也为number类型，但是在函数内部也不能混用T 和 number 类型,</span>
        <span class="token comment">// 因为T代表的是任意类型</span>
    <span class="token punctuation">}</span>
    <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用泛型变量</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>编译器要求在函数体，你必须把这个参数<span class="token constant">T</span>当作是任意或所有类型

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 报错</span>
    	<span class="token comment">// 虽然下面指定了x的类型，但是T依然代表的是任意类型，没有地方明确指定它具有length的属性</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>

给x添加length属性
    <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>  <span class="token comment">// 此时T就是数组中每个元素的类型</span>
        x<span class="token punctuation">.</span>length  <span class="token comment">// 这样就能正确访问到length属性</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token comment">// 第一个参数是string，此时T就是string类型，第二个参数是number，此时T就被推断为number</span>

	<span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 但是如果手动指定了T的类型，那么所有的参数就必须是这个类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>泛型类型 (泛型函数)</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> fun1 <span class="token operator">=</span> fun<span class="token punctuation">;</span>  <span class="token comment">// fun1也同样具有了fun的类型变量T</span>

<span class="token keyword">let</span> fun1<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token operator">=</span> fun<span class="token punctuation">;</span> <span class="token comment">// 也可以指定相同的参数</span>

<span class="token keyword">let</span> fun1<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">U</span> <span class="token operator">=</span> fun<span class="token punctuation">;</span>	<span class="token comment">//只有数量和使用方式一致，参数名也可以不同</span>

<span class="token keyword">let</span> fun1<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">}</span> <span class="token operator">=</span> fun<span class="token punctuation">;</span> <span class="token comment">// 使用带有调用签名的对象字面量来定义泛型函数</span>

使用<span class="token keyword">interface</span>去构造泛型
    <span class="token keyword">interface</span> <span class="token class-name">myFun</span> <span class="token punctuation">{</span>
        <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> fun1<span class="token operator">:</span> myFun <span class="token operator">=</span> fun
    
使用泛型去构造<span class="token keyword">interface</span>
	<span class="token class-name"><span class="token keyword">interface</span></span> myFun<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// 创建一个泛型T，当调用interface传入类型的时候，就已经锁定了T的类型</span>
        <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> fun1<span class="token operator">:</span> myFun<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> fun<span class="token comment">// 显示的给interface的T传递为number类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>泛型类</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    zeroValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>泛型约束 extends</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>借助<span class="token keyword">extends</span>来约束<span class="token constant">T</span>
	<span class="token keyword">interface</span> <span class="token class-name">myFun</span> <span class="token punctuation">{</span>
        length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> myFun<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span> <span class="token comment">// 这里约束了T必须有length属性</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 字符串有length属性可以传</span>
	<span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// 数字没有number属性，不能传</span>
	<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 数组可以传</span>

或者
	<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fun</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="enum-枚举" tabindex="-1"><a class="header-anchor" href="#enum-枚举" aria-hidden="true">#</a> enum 枚举</h1><ul><li><p>数字枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>如果只枚举属性，而不对其进行赋值，那么枚举的值将会是从零开始的数值
	<span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        pink<span class="token punctuation">,</span>  <span class="token comment">// 值为0</span>
        red<span class="token punctuation">,</span>   <span class="token comment">// 1</span>
        green  <span class="token comment">// 2</span>
    <span class="token punctuation">}</span>

如果只对其中的一个值进行数字赋值，那么那个值之前的会从<span class="token number">0</span>开始自增长，那个值之后的会从被复制的那个值自增长
    <span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        pink<span class="token punctuation">,</span>  <span class="token comment">// 0</span>
        yellow<span class="token punctuation">,</span> <span class="token comment">// 1</span>
        red <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>   <span class="token comment">// 5</span>
        green  <span class="token comment">// 6</span>
    <span class="token punctuation">}</span>

注意：
	如果其中一个枚举值不是数字，那么所有的枚举值都必须进行手动赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>异构枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>通常情况下，一个枚举里面赋值的类型，应该是一样的，虽然<span class="token builtin">string</span>和<span class="token builtin">number</span>能混用，但并不建议使用，并且布尔类型、对象类型、以及<span class="token keyword">null</span>和<span class="token keyword">undefined</span>类型都不能作为枚举的成员类型
    <span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        pink <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">,</span>
        yellow <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span><span class="token punctuation">,</span>
        red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
        green <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用运算符</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>枚举的值可以使用运算符计算
	<span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        pink <span class="token operator">=</span> <span class="token number">15</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">,</span>
        yellow <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span>
        red <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span>
        green <span class="token operator">=</span> red  <span class="token comment">// 如果枚举的值是number类型的，则可以赋值给另一个枚举</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>枚举与interface的混用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>枚举的值是数值类型
    <span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        pink<span class="token punctuation">,</span>
        yellow<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">Icolor</span> <span class="token punctuation">{</span>
        rgb<span class="token operator">:</span> color<span class="token punctuation">.</span>pink
        rgba<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> myColor<span class="token operator">:</span> Icolor <span class="token operator">=</span> <span class="token punctuation">{</span>
        rgb<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// 可以直接将枚举的值赋值给对应的属性</span>
        rgb<span class="token operator">:</span> color<span class="token punctuation">.</span>pink<span class="token punctuation">,</span> <span class="token comment">// 最好使用这种方式</span>
        rgba<span class="token operator">:</span> <span class="token number">15</span>
    <span class="token punctuation">}</span>
    
枚举的值是字符串类型，那么只能将枚举赋值给对应的属性
	<span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        pink <span class="token operator">=</span> <span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span>
        yellow <span class="token operator">=</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">Icolor</span> <span class="token punctuation">{</span>
        rgb<span class="token operator">:</span> color<span class="token punctuation">.</span>pink
        rgba<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> myColor<span class="token operator">:</span> Icolor <span class="token operator">=</span> <span class="token punctuation">{</span>
        rgb<span class="token operator">:</span> color<span class="token punctuation">.</span>pink<span class="token punctuation">,</span>  <span class="token comment">// 只能这么赋值，不能将枚举的值直接赋值给对应属性</span>
        rgba<span class="token operator">:</span> <span class="token number">15</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>函数使用枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>    <span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span>
        Foo<span class="token punctuation">,</span>
        Bar<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">E</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 此时x能接收的值就只有0和1，或者E.Bar和E.Foo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>反向映射</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>如果枚举的值是<span class="token builtin">number</span>类型就可以反向映射，如果是字符串就不行
	<span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
        <span class="token constant">A</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> Enum<span class="token punctuation">.</span><span class="token constant">A</span>
    Enum<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token comment">// A, 就类似于用enum中枚举的value去读取key</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>同名枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>名字相同枚举最终会合并，在其中一个枚举中声明过得枚举不能再次出现
	<span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        pink <span class="token operator">=</span> <span class="token string">&#39;pink&#39;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>const 枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>使用<span class="token keyword">const</span>定义的枚举，在编译阶段会把枚举去掉，在使用枚举的地方都是使用枚举真实的值
    <span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>

	编译后的结果
    	<span class="token keyword">var</span> color<span class="token punctuation">;</span>
        <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            color<span class="token punctuation">[</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>color <span class="token operator">||</span> <span class="token punctuation">(</span>color <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>

使用<span class="token keyword">const</span>定义的枚举 
	<span class="token keyword">const</span> <span class="token keyword">enum</span> color <span class="token punctuation">{</span>
        red <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>

    编译后的结果  <span class="token comment">// 枚举的属性全部被去除了，只剩下他的值</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>外部枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
  <span class="token keyword">declare</span> <span class="token keyword">enum</span> Enum <span class="token punctuation">{</span>
      <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token constant">B</span><span class="token punctuation">,</span>
      <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
  
  外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="类型推论" tabindex="-1"><a class="header-anchor" href="#类型推论" aria-hidden="true">#</a> 类型推论</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>一个变量在定义的时候就被赋值，那么ts会自动为他推断类型
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span>   等同于  <span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span> 
    
如果在定义的时候没有赋值，那么则会被推断为<span class="token builtin">any</span>
	<span class="token keyword">let</span> str      等同于  <span class="token keyword">let</span> str：<span class="token builtin">any</span>
    
最佳通用类型
	<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;str&#39;</span><span class="token punctuation">]</span>  等同  <span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
	会匹配一个适合所有赋值类型的类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="类型兼容性" tabindex="-1"><a class="header-anchor" href="#类型兼容性" aria-hidden="true">#</a> 类型兼容性</h1><ul><li><p>变量比较</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>如果要将一个变量的值赋值给另一个变量，那么赋值的那个变量必须要包含被赋值那个变量的属性
    <span class="token keyword">interface</span> <span class="token class-name">color</span> <span class="token punctuation">{</span>
        red<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> x<span class="token operator">:</span> color

    <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token punctuation">{</span> red<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> pink<span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span> <span class="token punctuation">}</span>  
    x <span class="token operator">=</span> y <span class="token comment">// y有x需要的red: string，所以可以成功赋值</span>

	检查函数 参数 也一样
    	<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token punctuation">{</span> red<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> pink<span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span> <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token operator">:</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token function">fun</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>  <span class="token comment">// y有a需要的red: string，所以可以成功赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>比较两个函数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">参数比较时，只有先比较参数的个数，只有参数少的才能赋值给参数多的函数</span><span class="token punctuation">(</span>特殊：参数多的函数，多的部分都是可选参数则可以给参数少的函数赋值<span class="token punctuation">)</span>，函数赋值并不关心参数名是否一致，只关注相同位置的参数类型是否一致
    <span class="token keyword">let</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span>
    <span class="token keyword">let</span> <span class="token function-variable function">y</span> <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span>

    y <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// OK</span>
    x <span class="token operator">=</span> y<span class="token punctuation">;</span> <span class="token comment">// Error</span>

函数返回值比较，y中的返回值包含了x返回值必须的属性，所以y能赋值给x，但x没有y必须的location，所以x不能赋值给y

	<span class="token keyword">let</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Alice&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token function-variable function">y</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> location<span class="token operator">:</span> <span class="token string">&#39;Seattle&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    x <span class="token operator">=</span> y<span class="token punctuation">;</span> <span class="token comment">// OK</span>
    y <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>枚举</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。
<span class="token keyword">enum</span> Status <span class="token punctuation">{</span> Ready<span class="token punctuation">,</span> Waiting <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span> Red<span class="token punctuation">,</span> Blue<span class="token punctuation">,</span> Green <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> tat <span class="token operator">=</span> Status<span class="token punctuation">.</span>Ready<span class="token punctuation">;</span>
tat <span class="token operator">=</span> Color<span class="token punctuation">.</span>Red<span class="token punctuation">;</span>  <span class="token comment">// Error ,即使值相同也不能赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>类</p><p>待补充</p></li><li><p>泛型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>如果使用泛型里面并没有具体的属性使用到，即使泛型的类型不一致，也能成功赋值，但是一旦里面有属性用到泛型，虽然 x 和 y 都是非空对象，但是它们的类型并不严格相同。在 x 的定义中，数据类型为 <span class="token builtin">number</span> ，而在 y 的定义中，数据类型也是 <span class="token builtin">number</span>，但是由于它们的定义是分别赋值的，所以在 TypeScript 中它们的类型被视为不同的类型。
    <span class="token keyword">interface</span> <span class="token class-name">Empty<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> x<span class="token operator">:</span> Empty<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> y<span class="token operator">:</span> Empty<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    x <span class="token operator">=</span> y<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="高级类型" tabindex="-1"><a class="header-anchor" href="#高级类型" aria-hidden="true">#</a> 高级类型</h1><ul><li><p>**&amp;**交叉类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>将两个类型合并起来，需要注意相同属性的类型必须相同，不然会报错
    <span class="token keyword">interface</span> <span class="token class-name">Type1</span> <span class="token punctuation">{</span>
        prop1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        prop2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">Type2</span> <span class="token punctuation">{</span>
        prop2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>  <span class="token comment">// 合并的时候prop2必须和上面的prop2类型一致</span>
        prop3<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">type</span> <span class="token class-name">Type3</span> <span class="token operator">=</span> Type1 <span class="token operator">&amp;</span> Type2<span class="token punctuation">;</span>  <span class="token comment">// 合并类型</span>

    <span class="token keyword">const</span> obj<span class="token operator">:</span> Type3 <span class="token operator">=</span> <span class="token punctuation">{</span>
        prop1<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
        prop2<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        prop3<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>|</strong> 联合类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>将几种类型联合起来表示一个值，这个值可以是这些联合类型中的一种
	<span class="token keyword">interface</span> <span class="token class-name">Type1</span> <span class="token punctuation">{</span>
        prop1<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span>
        prop2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> obj<span class="token operator">:</span> Type1 <span class="token operator">=</span> <span class="token punctuation">{</span>
        prop1<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">// 这里可以输入三种类型的值</span>
        prop2<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
    <span class="token keyword">interface</span> <span class="token class-name">Type1</span> <span class="token punctuation">{</span>
        <span class="token function">aar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
        <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">Type2</span> <span class="token punctuation">{</span>
        <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
        <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Type1 <span class="token operator">|</span> Type2 <span class="token punctuation">{</span>  <span class="token comment">// car()是两个接口共有的成员，只有他才能被访问到</span>
        <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> obj <span class="token keyword">as</span> Type1 <span class="token operator">|</span> Type2
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span><span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// ok</span>
    p<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// error  不是两个接口共有的成员</span>

	在对象中
	<span class="token keyword">let</span> obj<span class="token operator">:</span> Type1 <span class="token operator">|</span> Type2 <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  
        <span class="token function">aar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 可以声明但不能使用</span>
        <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    obj<span class="token punctuation">.</span><span class="token function">car</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// ok</span>
    obj<span class="token punctuation">.</span><span class="token function">aar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// error  不是两个接口共有的成员</span>

<span class="token function">如果要非要访问不是共同类型的话，就只能使用类型断言</span>
    <span class="token punctuation">(</span><span class="token operator">&lt;</span>Type1<span class="token operator">&gt;</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 指定obj为Type1类型，就能访问aar方法</span>
    <span class="token punctuation">(</span>obj <span class="token keyword">as</span> Type1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>is</strong>类型保护</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isFish</span><span class="token punctuation">(</span>pet<span class="token operator">:</span> Fish <span class="token operator">|</span> Bird<span class="token punctuation">)</span><span class="token operator">:</span> pet <span class="token keyword">is</span> Fish <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>Fish<span class="token operator">&gt;</span>pet<span class="token punctuation">)</span><span class="token punctuation">.</span>swim <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
在 TypeScript 中，使用 <span class="token keyword">is</span> 运算符时，它的左边是函数的参数名，右边是要判断的类型。这种语法被称为类型谓词，用于在函数内部保护参数的类型，从而避免在函数体内执行特定操作时出现检查参数类型的运行时错误。

使用的 pet <span class="token keyword">is</span> Fish 是一个类型保护谓词，它的作用是判断某个对象 pet 是否是 Fish 类型。如果条件成立，则该语句返回 <span class="token boolean">true</span>，并使得编译器将 pet 推断为 Fish 类型，从而避免在后续的代码中出现运行时错误或类型不匹配的问题。如果条件不成立，则该语句返回 <span class="token boolean">false</span>，pet 仍被推断为 Fish <span class="token operator">|</span> Bird 类型。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>typeof</strong> 类型保护</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>类似于类型断言，被<span class="token keyword">typeof</span>判断的参数，就能在里面正确的调用对应属性的方法，比如能<span class="token builtin">string</span>有length属性，而<span class="token builtin">number</span>没有，如果没有被<span class="token keyword">typeof</span>保护起来，则不行
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> y<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> y<span class="token punctuation">.</span>length  
            <span class="token comment">// 如果这里没有被typeof保护起来，则会报错，length不是string和number共有的属性</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>type</strong>类型别名</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">x</span> <span class="token operator">=</span> <span class="token builtin">string</span>  <span class="token comment">// 此时x就代表string类型</span>
<span class="token keyword">let</span> a<span class="token operator">:</span>x <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span>  <span class="token comment">// a的类型就是x做代表的string类型</span>

<span class="token keyword">type</span> <span class="token class-name">newType</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>
<span class="token keyword">let</span> num <span class="token operator">:</span> newType <span class="token comment">// 此时num的类型就必须是1或2或3中任意的一个值</span>
num <span class="token operator">=</span> <span class="token number">2</span>
等同于写了<span class="token keyword">let</span> num <span class="token operator">:</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>但是使用一个自定义<span class="token keyword">type</span>写的，可以赋值个多个变量为这个<span class="token keyword">type</span>
<span class="token class-name"><span class="token keyword">let</span></span> numB <span class="token operator">:</span> newType   <span class="token operator">===</span> <span class="token keyword">let</span> num <span class="token operator">:</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token comment">// 此时numB也是这个类型了</span>

类型别名使用泛型
	<span class="token keyword">type</span> <span class="token class-name">Container<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

使用类型别名来在属性里引用自己
	<span class="token keyword">type</span> <span class="token class-name">Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
        left<span class="token operator">:</span> Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
        right<span class="token operator">:</span> Tree<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可识别的联合类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>每个接口都有 kind属性但有不同的字符串字面量类型。 kind属性称做 可辨识的特征或 标签。 其它的属性则特定于各个接口
<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
    kind<span class="token operator">:</span> <span class="token string">&quot;square&quot;</span><span class="token punctuation">;</span>
    size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    kind<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">;</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    kind<span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">;</span>
    radius<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Shape</span> <span class="token operator">=</span> Square <span class="token operator">|</span> Rectangle <span class="token operator">|</span> Circle<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;square&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;rectangle&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> s<span class="token punctuation">.</span>height <span class="token operator">*</span> s<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;circle&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>radius <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">{</span> kind<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span> radius<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// kind只能是固定的square、rectangleh或者circle，而其他属性也只能是对应接口的属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>和js的导入导出基本一致
    默认暴露和分别暴露
        <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">interface</span> <span class="token class-name">color</span> <span class="token punctuation">{</span> 
            red<span class="token operator">:</span> <span class="token builtin">string</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">person</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>

    引入
        <span class="token keyword">import</span> colorType<span class="token punctuation">,</span> <span class="token punctuation">{</span> person <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./greeter&#39;</span>

        <span class="token keyword">let</span> myColor<span class="token operator">:</span> colorType <span class="token operator">=</span> <span class="token punctuation">{</span>
            red<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> myPerson<span class="token operator">:</span> person <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h1><ul><li><p><strong>namespace</strong> 单文件中</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>通过<span class="token keyword">namespace</span>来定义命名空间，命名空间里面的内容外部无法访问，必须里面通过<span class="token keyword">export</span>暴露出去，外部才能访问到
    <span class="token keyword">namespace</span> mySpase <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">color</span> <span class="token punctuation">{</span>
            red<span class="token operator">:</span> <span class="token builtin">string</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">export</span> <span class="token keyword">let</span> str<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span>
        <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fun&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> num<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">15</span> <span class="token comment">// 没有暴露的变量在外部是无法使用的</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> obj<span class="token operator">:</span> mySpase<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// 使用命名空间里的 interface</span>
        <span class="token class-name">red</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
    <span class="token punctuation">}</span>
    mySpase<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 使用命名空间里面的函数</span>
	muSpace<span class="token punctuation">.</span>str	 <span class="token comment">// 使用命名空间里面的变量</span>

注意：
	<span class="token number">1.</span>在同一个ts文件中，不同的命名空间可以由相同的变量，但他们都是独立存在的，互不影响
    <span class="token number">2.</span>同名的命名空间，他们中不能拥有同名属性，他们其中的变量，和方法也不能共享
    <span class="token number">3.</span>同名命名空间中同名的<span class="token keyword">interface</span>会进行合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多文件使用命名空间</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>在my<span class="token punctuation">.</span>ts中写入命名空间
	<span class="token keyword">namespace</span> mySpase <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">color</span> <span class="token punctuation">{</span>
            red<span class="token operator">:</span> <span class="token builtin">string</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;str&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">namespace</span> mySpase <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">color</span> <span class="token punctuation">{</span>
            pink<span class="token operator">:</span> <span class="token builtin">string</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
        
在type<span class="token punctuation">.</span>ts中导入my<span class="token punctuation">.</span>ts中的命名空间
    <span class="token comment">/// &lt;reference path=&quot;greeter.ts&quot; /&gt;</span>

    <span class="token keyword">let</span> obj<span class="token operator">:</span> mySpase<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token punctuation">{</span>
        red<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
        pink<span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>命名空间别名 <strong>import</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>通过<span class="token keyword">import</span>来给命名空间起别名
	<span class="token keyword">namespace</span> Shapes <span class="token punctuation">{</span>
        <span class="token keyword">export</span> <span class="token keyword">namespace</span> Polygons <span class="token punctuation">{</span>
            <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
            <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">import</span> polygons <span class="token operator">=</span> Shapes<span class="token punctuation">.</span>Polygons  <span class="token comment">// 将Shapes.Polygons的别名为polygons，就不用嵌套读取里面的类</span>
    <span class="token keyword">let</span> sq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">polygons</span><span class="token punctuation">.</span><span class="token function">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,28)])])}const i=s(t,[["render",o],["__file","ts笔记.html.vue"]]);export{i as default};
