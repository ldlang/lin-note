import{_ as s,o as a,c as t,e}from"./app-70f1c539.js";const p={};function o(c,n){return a(),t("div",null,[...n[0]||(n[0]=[e(`<h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> vite</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>使用vite创建vue<span class="token operator">-</span>cli
	npm init vite<span class="token operator">-</span>app <span class="token operator">&lt;</span>项目名称<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="以下所有方式均不是在setup语法糖内实现" tabindex="-1"><a class="header-anchor" href="#以下所有方式均不是在setup语法糖内实现" aria-hidden="true">#</a> 以下所有方式均不是在setup语法糖内实现</h1><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>两种返回值：
	<span class="token number">1.</span>返回一个对象，对象里面的方法和属性，模板上能够直接使用
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
            <span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//最后必须把属性和方法抛出去页面上才能使用</span>
            <span class="token keyword">return</span><span class="token punctuation">{</span>
                name<span class="token punctuation">,</span>
                sayName
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
	
	<span class="token number">2.</span>返回一个渲染函数，页面上所有的内容都会被干掉，最后只会保留渲染函数里面的内容
    	<span class="token keyword">import</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> <span class="token comment">// 必须引入这个</span>
        <span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
          <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;哈哈哈&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

注意 
	<span class="token number">1</span><span class="token punctuation">.</span>setup前不能写<span class="token keyword">async</span>
    <span class="token number">2.</span>最好不要和vue2中的写法混写，如果出现同名属性则以setup中的为主
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>setup注意点</strong></p><ol><li><p>setup的执行时机在beforeCreate之前，且this是undefined</p></li><li><p>setup函数接收两个参数，分别的props，content</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、props
	在子组件中声明接收父组件传过来的msg，此时setup里面就可以使用props接收到的值，并且接收到的值是一个被包装过得响应式数据
	<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token number">2</span>、context 上下文对象
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>content</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	content有三个值
    	<span class="token number">1</span>、attrs 父组件传过来的值，没有声明接收就放在attr里面
        <span class="token number">2</span>、emit 分发自定义事件的函数，等于$emit
		<span class="token number">3</span>、slots 收到的插槽内容，等于$slots
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="emit-自定义事件" tabindex="-1"><a class="header-anchor" href="#emit-自定义事件" aria-hidden="true">#</a> emit 自定义事件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>在子组件中
    <span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span>给父亲传值<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token literal-property property">emits</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 必须声明要抛出的事件</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;我是儿子的值&#39;</span><span class="token punctuation">)</span>
            <span class="token comment">// 必须通过context里面的emit才能抛出值</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            test
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
父组件中不变
	<span class="token operator">&lt;</span>HelloWorld msg<span class="token operator">=</span><span class="token string">&quot;我是消息&quot;</span> @hello<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>HelloWorld<span class="token operator">&gt;</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//使用子组件抛出的hello事件</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;接收来自于子组件的值&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            hello
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-函数" tabindex="-1"><a class="header-anchor" href="#ref-函数" aria-hidden="true">#</a> ref 函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>给数据添加响应式，通过ref包装成一个引用对象

<span class="token number">1.</span>处理简单的数据类型 （原理：Object<span class="token punctuation">.</span>defineProperty）
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 包装为一个引用对象，数据才是一个响应式的数据</span>
        name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>  <span class="token comment">// 想要引用和修改值必须得使用.value才行</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            name
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token number">2.</span><span class="token function">处理复杂数据类型</span> <span class="token punctuation">(</span>原理<span class="token operator">:</span>Proxy<span class="token punctuation">)</span>
	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span>
			<span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        person<span class="token punctuation">.</span>value<span class="token punctuation">.</span>name  <span class="token comment">// 只需要第一层使用.value,后面不管藏的多深都不需要写.value</span>
		person<span class="token punctuation">.</span>value<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>sex 
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            person
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

注意：
	<span class="token number">1.</span>在script中使用被ref包装的值，必须使用<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span>才能读取和修改这个值
    <span class="token number">2.</span>在template中使用值则可以直接使用，不需要加<span class="token punctuation">.</span>value
    <span class="token number">3.</span>复杂的数据类型只需要第一层使用<span class="token punctuation">.</span>value
	<span class="token number">4.</span>如果将ref包装过得值一整个的赋值给另一个属性，那么他两个都是响应式对象，会同时改变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reactive-函数" tabindex="-1"><a class="header-anchor" href="#reactive-函数" aria-hidden="true">#</a> reactive 函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>能将一个复杂数据类型处理为响应式的代理对象（原理就是Proxy函数）

	<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
注意：
	<span class="token number">1.</span>处理完的对象不需要想ref处理的那样需要通过<span class="token punctuation">.</span>value的形式去拿，可以直接使用
	<span class="token number">2.</span>不能处理基本的数据类型，只能处理复杂数据类型，基本类型无法添加响应式
    
坑：
	reactive定义的数组或对象不能整个赋值，那样会丢失响应式
    
    <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    list <span class="token operator">=</span> records  <span class="token comment">// 直接给整个属性赋值，那么list就失去响应式了</span>
           
    解决方式
    方式一	 直接添加到里面去，而不是赋值
    	list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>records<span class="token punctuation">)</span>
  
    方式二  给深层次的属性赋值
    	<span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">newList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
        list<span class="token punctuation">.</span>newList <span class="token operator">=</span> records
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed-计算属性函数" tabindex="-1"><a class="header-anchor" href="#computed-计算属性函数" aria-hidden="true">#</a> computed 计算属性函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>简写形式 
	类似于一个有返回值的函数
	<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token string">&#39;张三&#39;</span>
    <span class="token punctuation">}</span>

复杂形式 
    当name被赋值的时候就会走到<span class="token keyword">set</span>，val就是name被赋的值
	<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;张三&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        name <span class="token operator">=</span>  val
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch-函数" tabindex="-1"><a class="header-anchor" href="#watch-函数" aria-hidden="true">#</a> watch 函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>watch是个函数，接收三个参数，第一个是需要被监视的值，第二个是一个回调函数，第三个是watch的配置项

<span class="token number">1.</span>监视ref的属性，只监视一个值
    <span class="token keyword">import</span> <span class="token punctuation">{</span> watch<span class="token punctuation">,</span>ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    
    <span class="token function">watch</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	
	注意：
    	<span class="token number">1.</span>如果ref定义的是个复杂的数据类型就需要加<span class="token punctuation">.</span>value<span class="token punctuation">,</span>或者开启深度监视也行，简单类型就不需要
		<span class="token number">2.</span>复杂类型的新旧值是一样的，因为本质上是借助了reactive函数

<span class="token number">2.</span>监视ref的多个值，可以配置一个数组
	只要有一个值变了，回调函数就会触发，第一个值变成了<span class="token number">15</span>，第二值依然是<span class="token number">2</span> <span class="token comment">//[&#39;15&#39;, 2]</span>
	<span class="token keyword">import</span> <span class="token punctuation">{</span> watch<span class="token punctuation">,</span>ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>count<span class="token punctuation">,</span>num<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token literal-property property">，deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token number">3.</span>监视reactive定义值的所有属性
	<span class="token keyword">import</span> <span class="token punctuation">{</span> watch<span class="token punctuation">,</span>reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新旧值是一样的</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

	注意：
		<span class="token number">1.</span>无法得到正确oldVal的值，newVal<span class="token punctuation">,</span>oldVal的值是一样的，且无法解决，也不能像v2那样监视对			象里面的某个值person<span class="token punctuation">.</span>age
		<span class="token number">2.</span>默认就开启了深度监视，且无法关闭 <span class="token comment">// deep:false也没用</span>
        
<span class="token number">4.</span>监视reactive定义值的某一个属性
	<span class="token keyword">import</span> <span class="token punctuation">{</span> watch<span class="token punctuation">,</span>reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>age<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
	注意：
    	<span class="token number">1.</span>被监视的值必须放在一个函数的返回值里面，此时的newVal<span class="token punctuation">,</span>oldVal就是正确的
		<span class="token number">2.</span>同时监听两个值，就把两个值通过函数返回值的形式，放在一个数组里面	
        	例：	
            	<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>age<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token number">5.</span>监视reactive定义值的某一个属性里的所有属性
	<span class="token keyword">import</span> <span class="token punctuation">{</span> watch<span class="token punctuation">,</span>reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">,</span>
        obj：<span class="token punctuation">{</span>
        	name：<span class="token string">&#39;张三&#39;</span>
    	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>obj<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 必须开启深度监视才生效</span>
	注意：
    	此时又必须开启深度监视才生效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watcheffect-监视函数" tabindex="-1"><a class="header-anchor" href="#watcheffect-监视函数" aria-hidden="true">#</a> watchEffect 监视函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>接收一个回调函数，所有的逻辑写在回调函数里面，只要回到函数里面的任意一个值发生改变，回调函数里面的所有逻辑都有走一遍

	<span class="token keyword">import</span> <span class="token punctuation">{</span> watch<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span>watchEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">15</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>在setup里面，也就是组合式api，必须引入才能使用
setup外面			   setup里面

beforeCreate		<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
created				<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
beforeMount			onBeforeMount
mounted				onMounted
beforeUpdate		onBeforeUpdate
updated				onUpdated
beforeUnmount		onBeforeUnmount			对比v2发生了改变
unmounted			onUnmounted				对比v2发生了改变

注意：
	<span class="token number">1.</span>如果选项式的生命周期和组合式的生命周期同时写，那么同名的生命周期组合式的先执行
    <span class="token number">2.</span>组合式生命是一个函数，接收一个回到函数，所有的逻辑写在回调函数里面
    	  例：
          	<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
              逻辑
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hook-函数" tabindex="-1"><a class="header-anchor" href="#hook-函数" aria-hidden="true">#</a> hook 函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>创建一个js文件，将需要用到组合式api全部引入进来，就可以直接写逻辑
<span class="token number">1.</span>书写
    <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span>onMounted<span class="token punctuation">,</span>onBeforeUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
        <span class="token keyword">function</span> <span class="token function">point</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          count<span class="token punctuation">.</span>x <span class="token operator">=</span> res<span class="token punctuation">.</span>pageX
          count<span class="token punctuation">.</span>y <span class="token operator">=</span> res<span class="token punctuation">.</span>pageY
        <span class="token punctuation">}</span>
        
        <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>point<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>point<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> count <span class="token comment">// 如果这个hook用到的值，再其他地方也要用就要return出去</span>
    <span class="token punctuation">}</span>

<span class="token number">2.</span>使用
	<span class="token keyword">import</span> usePoint <span class="token keyword">from</span> <span class="token string">&#39;../hooks/usePoint&#39;</span>

	  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">usePoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 将用到的值交出去</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
          count
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

	注意：
    	<span class="token number">1.</span>类似于v2的mixins，但是数据不能直接使用，得交出去才能使用
        
<span class="token number">3.</span>可以接收参数
	<span class="token keyword">import</span> <span class="token punctuation">{</span> useMouse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useMouse&#39;</span>
    <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token string">&#39;我是传递的参数&#39;</span><span class="token punctuation">)</span>

	在hooks中	
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 接收参数</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;useMouse&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toref-和torefs" tabindex="-1"><a class="header-anchor" href="#toref-和torefs" aria-hidden="true">#</a> toRef 和toRefs</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span>toRef<span class="token punctuation">,</span>toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
	
    <span class="token keyword">let</span> num <span class="token operator">=</span> count<span class="token punctuation">.</span>x 
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        <span class="token literal-property property">num1</span><span class="token operator">:</span>count<span class="token punctuation">.</span>x
    <span class="token punctuation">}</span>
	<span class="token comment">// 此时相当于count.x的值赋值给了num和num1，此时的num和num1不是一个响应式的数据，也和			count.x没有一点关系，num和num1变count.x也不会变</span>

toRef 函数
	数组
        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
    对象
		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        深层次的对象使用ref，
        	    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
					<span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
					<span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
					<span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span>
                  	<span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
           <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>obj<span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
                
	注意：
    	<span class="token number">1.</span>接收两个参数，第一个是要被转换值的父级，第一个是他的key或者下标，一次只能处理一个值
    	<span class="token number">2.</span>此时就相当于新得到的值和原来的值建立了连接关系，无论是原来的值改变，还是被toRef转过的			值发生改变，另一个值也会发生变化
        <span class="token number">3.</span>里面所有的值都是经过ref包装的值，在setup中读取需要<span class="token punctuation">.</span>value才能拿到值

toRefs 函数
	数组
	    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

	对象
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">obj1</span><span class="token operator">:</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
           	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>obj1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">{</span>
				<span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
                <span class="token comment">// 将count下面的第一级数据都交了出去，此时模板上就能直接用x,y,obj</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

	注意：
    	<span class="token number">1.</span>接收一个参数，就是要被转换的数据
    	<span class="token number">2.</span>会将一个对象或者数组里面的第一个子级都包装成ref引用对象，且和原数据保持着连接关系
        <span class="token number">3.</span>读取第一层子级的值需要加入<span class="token punctuation">.</span>value<span class="token punctuation">,</span>模板上不用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shallowref-和-shallowreactive" tabindex="-1"><a class="header-anchor" href="#shallowref-和-shallowreactive" aria-hidden="true">#</a> shallowRef 和 shallowReactive</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shallowRef
	1、处理基本数据类似和ref效果一致
	2、处理复杂数据类型就无法添加响应式，因为他不去求助与reactive
	
shallowReactive
	1、数据只有第一层有响应式，深层次的没有响应式
	
应用场景
	如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。
	如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readonly-和-shallowreadonly-函数" tabindex="-1"><a class="header-anchor" href="#readonly-和-shallowreadonly-函数" aria-hidden="true">#</a> readonly 和 shallowReadonly 函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>readonly
	<span class="token number">1</span>、将一个数据变为只读的，不能修改
	<span class="token number">2</span>、不仅仅是视图不更新，是在js部分都不能更改这个数据
    
shallowReadonly
	<span class="token number">1</span>、将一个数据变第一层变为只读的，深层次的不受形象
    
应用场景
	两个页面共用一个数据，一个页面不允许改，可以将其readonly，防止修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toraw-和-markraw-函数" tabindex="-1"><a class="header-anchor" href="#toraw-和-markraw-函数" aria-hidden="true">#</a> toRaw 和 markRaw 函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>toRaw	
	将一个有reactive定义的响应式对象，变为普通的对象
    
markRaw
	将一个对象标记为永远不能成为响应式的对象
    
    使用：
    	<span class="token number">1.</span>一个数据有些用于响应式，有些只是单纯的展示，就可以使用markRaw将其变为普通的数据，			提升性能
        <span class="token number">2.</span>一个数据里面的有些属性需要被第三方类库去处理，比如时间转换啥的，这种数据就应该用			markRaw去处理，不然非常浪费性能  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customref-自定义一个ref" tabindex="-1"><a class="header-anchor" href="#customref-自定义一个ref" aria-hidden="true">#</a> customRef 自定义一个ref</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>用法：
	<span class="token number">1</span>、customRef接收一个函数，里面有两个参数，第一个参数放<span class="token keyword">get</span>里，用于追踪返回值的变化，让		vue认为这个值是有用的。第二个参数放在<span class="token keyword">set</span>里，通知vue去重新解析模板，两个参数都是函数
    <span class="token number">2</span>、customRef接收的函数必须放回一个对象，<span class="token keyword">get</span>和<span class="token keyword">set</span>写在对象里面
    

	<span class="token keyword">import</span> <span class="token punctuation">{</span> customRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

	<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token string">&#39;字符串&#39;</span><span class="token punctuation">)</span> 

        <span class="token keyword">function</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span>trigger</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">{</span>
              <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//	用于追踪返回值的变化，让vue认为这个值是有用的</span>
                <span class="token keyword">return</span> val
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
                val <span class="token operator">=</span> newVal
                <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 通知vue去重新解析模板</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
	<span class="token keyword">return</span><span class="token punctuation">{</span> str <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="provide-和-inject" tabindex="-1"><a class="header-anchor" href="#provide-和-inject" aria-hidden="true">#</a> provide 和 inject</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>provide 父组件里面
	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

	<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;字符串&#39;</span><span class="token punctuation">)</span> 
        <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

inject 子组件，孙组件里面
	<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
	<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">)</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//字符串</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应式数据的判断" tabindex="-1"><a class="header-anchor" href="#响应式数据的判断" aria-hidden="true">#</a> 响应式数据的判断</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">isRef</span><span class="token operator">:</span> 
	检查一个值是否为一个 ref 对象
    
<span class="token literal-property property">isReactive</span><span class="token operator">:</span> 
	检查一个对象是否是由 reactive 创建的响应式代理
    
<span class="token literal-property property">isReadonly</span><span class="token operator">:</span> 
	检查一个对象是否是由 readonly 创建的只读代理
    
<span class="token literal-property property">isProxy</span><span class="token operator">:</span> 
	检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="teleport-传送标签" tabindex="-1"><a class="header-anchor" href="#teleport-传送标签" aria-hidden="true">#</a> teleport 传送标签</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        我是传送的内容
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>

1.直接将上面的标签放在body下面，也就是父级就是body，无论这个标签之前嵌套的多深，他只有一个父级就是body
2.to也可以写选择器，to=&quot;#content&quot; 就是将这个标签传送到id为content的标签下面

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步引入组件" tabindex="-1"><a class="header-anchor" href="#异步引入组件" aria-hidden="true">#</a> 异步引入组件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> HelloWorld <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./HelloWorld.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

作用：
	不用等这个组件加载好，页面才全部展示，这个组件引入得慢也不影响其他组件的展示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="suspense-组件" tabindex="-1"><a class="header-anchor" href="#suspense-组件" aria-hidden="true">#</a> Suspense 组件</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>有两个插槽，先去展示default插槽里面的内容，如果里面内容展示失败了，就会展示fallback里面的内容

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span><span class="token punctuation">/&gt;</span></span>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>--</span>  <span class="token attr-name">默认展示这个组件</span>  <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>fallback</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>加载中.....<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api的变更" tabindex="-1"><a class="header-anchor" href="#api的变更" aria-hidden="true">#</a> api的变更</h3><table><thead><tr><th>2.x 全局 API（<code>Vue</code>）</th><th>3.x 实例 API (<code>app</code>)</th></tr></thead><tbody><tr><td>Vue.config.xxxx</td><td>app.config.xxxx</td></tr><tr><td>Vue.config.productionTip</td><td>移除</td></tr><tr><td>Vue.component</td><td>app.component 注册全局组件</td></tr><tr><td>Vue.directive</td><td>app.directive 注册全局指令</td></tr><tr><td>Vue.mixin</td><td>app.mixin 注册全局混入</td></tr><tr><td>Vue.use</td><td>app.use 使用插件</td></tr><tr><td>Vue.prototype</td><td>app.config.globalProperties 挂载全局属性</td></tr></tbody></table><ul><li>v-on.native被移除，因为子组件抛出的事件还要通过 emits: [&#39;close&#39;]声明，不声明就可以掉到原生事件上</li></ul><h1 id="以下所有方式都是在setup语法糖内实现" tabindex="-1"><a class="header-anchor" href="#以下所有方式都是在setup语法糖内实现" aria-hidden="true">#</a> 以下所有方式都是在setup语法糖内实现</h1><h3 id="setup-1" tabindex="-1"><a class="header-anchor" href="#setup-1" aria-hidden="true">#</a> setup</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

结合setup语法糖之后，所有的属性和方法都无需手动<span class="token keyword">return</span>出去，都能在模板上直接使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>异步更新nextTick函数里面的
    <span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 访问更新后的 DOM</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取组件实例-dom" tabindex="-1"><a class="header-anchor" href="#获取组件实例-dom" aria-hidden="true">#</a> 获取组件实例 dom</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、获取组件实例对象
	<span class="token operator">&lt;</span>HelloWorld ref<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>HelloWorld<span class="token operator">&gt;</span>

    <span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld.vue&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

    <span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>  <span class="token comment">// 变量必须和上面标签上ref的一致</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      hello<span class="token punctuation">.</span>value <span class="token comment">// 组件实例</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token number">2</span>、获取子组件身上的方法和属性，必须借助defineExpose
	子组件必须把方法交出去  defineExpose
    
    	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref，defineExpose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;字符串&#39;</span><span class="token punctuation">)</span>
		<span class="token keyword">function</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token string">&#39;你好&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span><span class="token punctuation">)</span>

	在父组件中
    	方式一
        	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
            <span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

            <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
				hello<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 就能拿到子组件交出来的open方法</span>
                hello<span class="token punctuation">.</span>value<span class="token punctuation">.</span>str 	<span class="token comment">// 子组件交出来的属性</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

		方式二
        	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>onMounted<span class="token punctuation">,</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
            
            <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
				proxy<span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 也能拿到子组件交出来的open方法</span>
				proxy<span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>str 	<span class="token comment">// 子组件交出来的属性</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件的引入" tabindex="-1"><a class="header-anchor" href="#组件的引入" aria-hidden="true">#</a> 组件的引入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>直接引入就可以使用，无需再到components上注册
	<span class="token operator">&lt;</span>HelloWorld ref<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>HelloWorld<span class="token operator">&gt;</span>
	<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld.vue&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defineprops" tabindex="-1"><a class="header-anchor" href="#defineprops" aria-hidden="true">#</a> defineProps</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>父子之间传值
	父组件中
    	<span class="token operator">&lt;</span>HelloWorld title<span class="token operator">=</span><span class="token string">&quot;标题&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>HelloWorld<span class="token operator">&gt;</span>

	子组件中接收，必须配合defineProps
    
    	方式一 普通接收
    		<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
			
			<span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 标题</span>
		
		方式二	指定类型
            <span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span>String
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>

		方式三 指定类型指定默认值
        	<span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;哈哈&#39;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>

	注意：	
    	在模板中可以省略不写props，可以直接写title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defineemits" tabindex="-1"><a class="header-anchor" href="#defineemits" aria-hidden="true">#</a> defineEmits</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>抛出自定义事件
	在子组件中
    	 <span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">&quot;onBtn&quot;</span><span class="token operator">&gt;</span>我是子组件<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    	
		<span class="token keyword">import</span> <span class="token punctuation">{</span> defineEmits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 可以不引入</span>
		
		<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;onBtn&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 指定要抛出的事件</span>

        <span class="token keyword">function</span> <span class="token function">onBtn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;onBtn&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;传递的值&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 抛出事件名，后面是传递的值</span>
        <span class="token punctuation">}</span>
	
	在父组件中
		<span class="token operator">&lt;</span>HelloWorld @on<span class="token operator">-</span>btn<span class="token operator">=</span><span class="token string">&quot;onBtn&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>HelloWorld<span class="token operator">&gt;</span>

		<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld.vue&#39;</span>
			
		<span class="token keyword">function</span> <span class="token function">onBtn</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span><span class="token string">&#39;接收值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// e为子组件抛出的值</span>
		<span class="token punctuation">}</span>

直接在模板抛出自定义事件
	在子组件中  <span class="token comment">//抛出onClick事件，携带 哈哈 参数</span>
    	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;onClick&#39;,&#39;哈哈&#39;)&quot;</span><span class="token operator">&gt;</span>my login<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>  
			
	在父组件中
	<span class="token operator">&lt;</span>myLogin @onClick<span class="token operator">=</span><span class="token string">&quot;onClick&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>myLogin<span class="token operator">&gt;</span>

    <span class="token keyword">import</span> myLogin <span class="token keyword">from</span> <span class="token string">&#39;@/views/my-login.vue&#39;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我被点击了&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 接收子组件抛出的事件以及参数</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defineexpose" tabindex="-1"><a class="header-anchor" href="#defineexpose" aria-hidden="true">#</a> defineExpose</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>交出的方法和属性，父组件能从子组件实例上直接拿到
	子组件
        <span class="token keyword">import</span> <span class="token punctuation">{</span> ref，defineExpose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;字符串&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">function</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&#39;你好&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            open，<span class="token comment">// 交出方法</span>
            str	<span class="token comment">// 交出属性</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

	父组件
    	<span class="token operator">&lt;</span>HelloWorld ref<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>HelloWorld<span class="token operator">&gt;</span>

    	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
        <span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

         <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
			hello<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 就能拿到子组件交出来的open方法</span>
            hello<span class="token punctuation">.</span>value<span class="token punctuation">.</span>str 	<span class="token comment">// 子组件交出来的属性</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

$parent 
	$parent配合defineExpose拿到父亲身上的方法
		在父组件中把属性和方法交出去
        	<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              newSize<span class="token punctuation">,</span>
              page
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
		
		在子组件中
        	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;sizeBtn($parent)&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>  <span class="token comment">// 参数必须叫$parent</span>

			<span class="token keyword">const</span> <span class="token function-variable function">sizeBtn</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 就有父亲身上交出来的属性和方法</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>通过component配合is属性来判断要展示的属性，is上绑定的值就是要展示组件引入的名字或者是他的name，hello的值是HelloWorld，那么显示的组件就是HelloWorld组件
    <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>修改<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld.vue&#39;</span>
    <span class="token keyword">import</span> son <span class="token keyword">from</span> <span class="token string">&#39;./components/son.vue&#39;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

    <span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span>HelloWorld<span class="token punctuation">)</span> 
    <span class="token keyword">const</span> <span class="token function-variable function">btn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      hello<span class="token punctuation">.</span>value <span class="token operator">=</span> son
    <span class="token punctuation">}</span>

    注意：
    	<span class="token number">1</span>、最好使用shallowRef去绑定属性，不然会有警告
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局组件-全局异步组件" tabindex="-1"><a class="header-anchor" href="#全局组件-全局异步组件" aria-hidden="true">#</a> 全局组件，全局异步组件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>全局组件注册
    <span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span>

全局异步组件注册
	app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/MyComponent.vue&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mitt" tabindex="-1"><a class="header-anchor" href="#mitt" aria-hidden="true">#</a> mitt</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mitt一个插件，类似于全局事件总线，能实现任意组件间通信

	<span class="token number">1</span>、安装
    	<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;mitt&#39;</span>

	<span class="token number">2</span>、创建一个js文件，写入以下代码
    	<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;mitt&#39;</span>
		<span class="token keyword">const</span> bus <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">export</span> <span class="token keyword">default</span> bus

	<span class="token number">3</span>、传递数据
		接收数据
        	bus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">)</span>
		传递数据
        	bus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
		关闭监视
       		bus<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> onFoo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-model-的扩展" tabindex="-1"><a class="header-anchor" href="#v-model-的扩展" aria-hidden="true">#</a> v-model 的扩展</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、实现父子间数据的双向绑定
	父组件中：
    	 <span class="token operator">&lt;</span>HelloWorld <span class="token operator">:</span>page<span class="token operator">=</span><span class="token string">&quot;page&quot;</span> @updata<span class="token operator">:</span>page<span class="token operator">=</span><span class="token string">&quot;hand&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>  <span class="token comment">// 接收自定义事件</span>
             
		<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;@/components/HelloWorld.vue&#39;</span>
		<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

		<span class="token keyword">let</span> page <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> <span class="token function-variable function">hand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          page<span class="token punctuation">.</span>value <span class="token operator">=</span> res
        <span class="token punctuation">}</span>
        
    子组件中
		<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>我是按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

        <span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 接收参数</span>
        <span class="token keyword">let</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;updata:page&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 自定义事件</span>

        <span class="token keyword">const</span> <span class="token function-variable function">btn</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;updata:page&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>page<span class="token operator">+</span><span class="token number">50</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        
<span class="token number">2</span>、使用v<span class="token operator">-</span>model实现父子间数据双向绑定。相比于v2的一大变化
	父组件中
    	<span class="token operator">&lt;</span>HelloWorld v<span class="token operator">-</span>model<span class="token operator">:</span>page<span class="token operator">=</span><span class="token string">&quot;page&quot;</span> v<span class="token operator">-</span>model<span class="token operator">:</span>size<span class="token operator">=</span><span class="token string">&quot;newSize&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            					 <span class="token comment">// 给子组件传递的props是size，但是最后更新的是newSize</span>
            
        <span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;@/components/HelloWorld.vue&#39;</span>
        <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

        <span class="token keyword">let</span> page <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> newSize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        
    子组件中
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>我是按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;sizeBtn&quot;</span><span class="token operator">&gt;</span>我是改变size<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

        <span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//接收父组件传的值</span>
        <span class="token keyword">let</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;update:page&quot;</span><span class="token punctuation">,</span><span class="token string">&#39;update:size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
        									<span class="token comment">// 配合update关键字定义事件</span>
        <span class="token keyword">const</span> <span class="token function-variable function">btn</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:page&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>page<span class="token operator">+</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// 抛出自定义事件，同时抛出值</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> <span class="token function-variable function">sizeBtn</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:size&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>size<span class="token operator">+</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// 抛出自定义事件，同时抛出值</span>
        <span class="token punctuation">}</span>
       
<span class="token number">3</span>、特殊modelValue
	父组件中
    	<span class="token operator">&lt;</span>HelloWorld v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;page&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        
        <span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;@/components/HelloWorld.vue&#39;</span>
        <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

        <span class="token keyword">let</span> page <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        
    子组件中
		<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> modelValue <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>我是按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

		<span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;modelValue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// modelValue就是父组件传递过来的page</span>
        
        <span class="token keyword">let</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;update:modelValue&quot;</span><span class="token punctuation">,</span><span class="token string">&#39;update:size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> <span class="token function-variable function">btn</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>modelValue<span class="token operator">+</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token comment">//依然实现了父子组件的双向绑定</span>
        <span class="token punctuation">}</span>
        
	注意：
    	<span class="token number">1.</span>在组件上写v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;page&quot;</span>，就是给子组件传递了一个page属性，同时接收了一个					update<span class="token operator">:</span>page的事件
        <span class="token number">2.</span>在同一个组件中能写多个v<span class="token operator">-</span>model实现多个值的双向绑定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useattrs-和-attrs" tabindex="-1"><a class="header-anchor" href="#useattrs-和-attrs" aria-hidden="true">#</a> useAttrs 和 $attrs</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>相当于v2的$attrs<span class="token punctuation">,</span>引入以后能够拿到父组件给传递的事件和属性
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> attrs<span class="token punctuation">.</span>size <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token keyword">import</span> <span class="token punctuation">{</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
	注意：
    	传递的属性，如果被defineProp介绍了，useAttrs身上就没有了
        
这个 $attrs 对象包含了除组件所声明的 props 和 emits 之外的所有其他 attribute，例如 <span class="token keyword">class</span>，style，v<span class="token operator">-</span>on 监听器等等，传递过来的属性一旦被声明接收了，那么就从$attrs中移除

如果在父组件透传的值，没有被props接收，那么会被$attrs接收，在模板上的直接使用
	<span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>my login<span class="token punctuation">{</span><span class="token punctuation">{</span> $attrs <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

	也可以将所有透传过来的属性全部显示的绑定在标签上
    <span class="token operator">&lt;</span>button v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span><span class="token operator">&gt;</span>my login<span class="token punctuation">{</span><span class="token punctuation">{</span> $attrs <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia" aria-hidden="true">#</a> pinia</h3><ol><li><p>pinia和vuex的区别</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、pinia只有state ， actions ，getters
<span class="token number">2</span>、state的值能够直接改
<span class="token number">3</span>、不论异步同步全部写在actions里面，里面的方法也不接收context上下文对象，可以接受任意个参数
<span class="token number">4</span>、在store里面state，actions，getters的属性和方法都是通过<span class="token keyword">this</span><span class="token punctuation">.</span>拿取
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装使用pinia</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span>安装
    yarn add pinia
    npm install pinia

<span class="token number">2.</span>使用
	创建文件夹store<span class="token operator">/</span>index<span class="token punctuation">.</span>js写入
        <span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">export</span> <span class="token keyword">default</span> store
	
	在mian<span class="token punctuation">.</span>js中引入使用
		<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
        app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建小仓库，类似于module</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>选项式api的写法
    <span class="token number">1.</span>新建一个js文件，写入以下代码
        <span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> useInfoStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
          <span class="token function-variable function">state</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>   <span class="token comment">// state里面的值是一个函数的返回值</span>
            <span class="token keyword">return</span><span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">// 里面的方法可以接受任意个参数，且没有context上下文对象</span>
            <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;actions&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fun1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token string">&#39;getters&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">export</span> <span class="token keyword">default</span> useInfoStore

        注意：
            <span class="token number">1</span>、defineStore接收两个参数，一个是小仓库的名字，第二个是配置对象
            <span class="token number">2</span>、defineStore最后返回的是一个函数
            
组合式api的写法
	<span class="token number">1.</span>新建一个js文件，写入以下代码
        <span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>computed<span class="token punctuation">,</span>watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> useInfoStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token string">&#39;getter&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 代替getter</span>

        <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 写的方法相当于就是actions里面的方法</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fun&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span><span class="token punctuation">{</span> <span class="token comment">// 把方法属性交出去</span>
            name<span class="token punctuation">,</span>
            fun<span class="token punctuation">,</span>
            count
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">export</span> <span class="token keyword">default</span> useInfoStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在页面中使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>在页面中选项式api的写法和组合式api的写法一直
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;store.fun(2)&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token comment">// 调用actions中的fun方法并传递参数</span>

    <span class="token keyword">import</span> useInfoStore <span class="token keyword">from</span> <span class="token string">&#39;@/store/module/info&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">useInfoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拿到state中的name值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拿到getters中的conut值</span>
    store<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span> <span class="token comment">// 调用actions中的fun方法并传递参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="router技巧" tabindex="-1"><a class="header-anchor" href="#router技巧" aria-hidden="true">#</a> router技巧</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>route对象身上的matched
	存储这当前路由的信息，以及他的父路由，每个路由都是matched数组里面的一个对象，利用这个属性就可以做面包屑的路由显示
    route<span class="token punctuation">.</span>matched实现面包屑功能

	<span class="token operator">&lt;</span>el<span class="token operator">-</span>breadcrumb separator<span class="token operator">-</span>icon<span class="token operator">=</span><span class="token string">&quot;ArrowRight&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;margin-left: 20px&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>breadcrumb<span class="token operator">-</span>item v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in route.matched&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span>
          <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;item.path&quot;</span> v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;item.meta.title&quot;</span> <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>breadcrumb<span class="token operator">-</span>item<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>breadcrumb<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h1><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>同时给一个标签挂载一堆属性
	<span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;objectOfAttrs&quot;</span><span class="token operator">&gt;</span>测试<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

	<span class="token literal-property property">objectOfAttrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;divDom&#39;</span><span class="token punctuation">,</span>
    	<span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;user-top&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
挂载动态属性
	<span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token punctuation">[</span>title<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;newTitle&quot;</span><span class="token operator">&gt;</span>测试<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>  <span class="token comment">// title和newTitle都是变量</span>

	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;aaaa&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">newTitle</span><span class="token operator">:</span> <span class="token string">&#39;newTitle&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-for的结构赋值" tabindex="-1"><a class="header-anchor" href="#v-for的结构赋值" aria-hidden="true">#</a> v-for的结构赋值</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;({info},index) in list&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span><span class="token operator">&gt;</span>  直接将info结构出来使用
	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">--</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> info <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">35</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">of</span> 
	<span class="token punctuation">(</span><span class="token punctuation">{</span>info<span class="token punctuation">}</span><span class="token punctuation">,</span>index<span class="token punctuation">)</span> <span class="token keyword">in</span> list  <span class="token function">等同于</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>info<span class="token punctuation">}</span><span class="token punctuation">,</span>index<span class="token punctuation">)</span> <span class="token keyword">of</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>如果绑定的事件不传参，则事件默认接收一个参数，为<span class="token constant">DOM</span> 原生事件event
如果要显示的传入这个参数就必须传$event<span class="token punctuation">,</span>这样接收到的才是dom原生事件    <span class="token function">onDiv</span><span class="token punctuation">(</span>$event<span class="token punctuation">)</span>
<span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">&quot;onDiv&quot;</span><span class="token operator">&gt;</span>login<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onDiv</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>  <span class="token comment">//event 是 DOM 原生事件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义事件的校验" tabindex="-1"><a class="header-anchor" href="#自定义事件的校验" aria-hidden="true">#</a> 自定义事件的校验</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>要为事件添加校验，那么事件可以被赋值为一个函数，接受的参数就是抛出事件时传入 emit 的内容，返回一个布尔值来表明事件是否合法。
	在子组件中
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;submitForm(email,password)&quot;</span><span class="token operator">&gt;</span>my login<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

        <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
        <span class="token keyword">let</span> email <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> password <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span>

        <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// 没有校验</span>
          <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

          <span class="token comment">// 校验 submit 事件</span>
          <span class="token function-variable function">submit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>email <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid submit event payload!&#39;</span><span class="token punctuation">)</span>
              <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">function</span> <span class="token function">submitForm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">email</span><span class="token operator">:</span>any<span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
	
	在父组件中
		<span class="token operator">&lt;</span>myLogin @submit<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>myLogin<span class="token operator">&gt;</span>

        <span class="token keyword">import</span> myLogin <span class="token keyword">from</span> <span class="token string">&#39;@/views/my-login.vue&#39;</span>

        <span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我被点击了&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="透传" tabindex="-1"><a class="header-anchor" href="#透传" aria-hidden="true">#</a> 透传</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>前提：传递的属性没有在子组件的prop中声明接收
style和clasee在父子组件中透传
	在父组件中
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myLogin</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lage<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myLogin</span><span class="token punctuation">&gt;</span></span>

    在子组件中
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-login lage <span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>    浏览器渲染的结果  
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>my login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

事件在父子组件中透传
	在父组件中
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myLogin</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myLogin</span><span class="token punctuation">&gt;</span></span>

		const onClick = () =&gt; {
            console.log(&#39;我被触发了&#39;);
        }

	在子组件中  随意点击任何一个元素都会触发onClick事件
	    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            哈哈哈
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token punctuation">&gt;</span></span>my login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

深层组件继承
 	如果子组件嵌套着子组件，并且孙子组件是这个子组件的根标签，那么这个属性会继续透传到孙组件中

注意
	1.如果子组件有根标签，也就是子组件被一个标签包裹了所有的元素，同时子组件中并没有声明接收父组件传过			来的lage，那么这个lage将会加载到根标签中。
	2.子组件本身有my-login这个类，将会和父组件传递过来的lage合并
	3.style中的属性也是同样的结果

禁用这一行为
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 使用普通的 &lt;script&gt; 来声明选项</span>
        <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在css中使用js中的变量" tabindex="-1"><a class="header-anchor" href="#在css中使用js中的变量" aria-hidden="true">#</a> 在css中使用js中的变量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    <span class="token punctuation">.</span>login<span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span>col<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 此时的col就等于red</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcurrentinstance" tabindex="-1"><a class="header-anchor" href="#getcurrentinstance" aria-hidden="true">#</a> getCurrentInstance</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>获取当前页面的实例，相当于<span class="token keyword">this</span>，但是局限性很大，不能当做<span class="token keyword">this</span>使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,90)])])}const i=s(p,[["render",o],["__file","vue3笔记.html.vue"]]);export{i as default};
