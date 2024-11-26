import{_ as a,o as s,c as e,e as t}from"./app-0e033328.js";const p="/lin-note/java/java-dataType.png",o={};function c(l,n){return s(),e("div",null,n[0]||(n[0]=[t(`<h1 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h1><h2 id="_1、java-三大版本" tabindex="-1"><a class="header-anchor" href="#_1、java-三大版本" aria-hidden="true">#</a> 1、Java 三大版本</h2><ol><li>JavaSE：标准版（桌面程序，控制台开发...）</li><li>JavaME：嵌入式开发（手机，小家电...） 几乎已淘汰</li><li>JavaEE：E 企业级开发（web 端，服务器开发...）</li></ol><h2 id="_2、注释" tabindex="-1"><a class="header-anchor" href="#_2、注释" aria-hidden="true">#</a> 2、注释</h2><ol><li><p>单行注释，双斜线</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>多行注释，<code>/* */</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
我是注释
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>javaDoc</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* @Description 描述
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_3、标识符-变量名-命名规范" tabindex="-1"><a class="header-anchor" href="#_3、标识符-变量名-命名规范" aria-hidden="true">#</a> 3、标识符（变量名）命名规范</h2><ol><li>所有的标识符都应该以<strong>字符</strong>，<strong>美元符</strong>或<strong>下划线</strong>开始。</li><li>首字符之后可以是字母、美元符、下划线或数字的任何字符组合。</li><li><strong>不能使用关键字作为变量名或者方法。</strong></li><li>标识符是大小写敏感的。</li><li>标识符也可以使用中文或者拼音，但不建议使用。</li></ol><p>例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 以下都是合法的变量名</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> $name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> _name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> _1name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、数据类型" tabindex="-1"><a class="header-anchor" href="#_4、数据类型" aria-hidden="true">#</a> 4、数据类型</h2><p><img src="`+p+`" alt="java数据类型"></p><h3 id="_4-1、基本数据类型" tabindex="-1"><a class="header-anchor" href="#_4-1、基本数据类型" aria-hidden="true">#</a> 4.1、基本数据类型</h3><ol><li><p>整数类型</p><ul><li><p><strong>byte</strong>：占 1 个字节 ，范围 -128 到 127</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span> num1 <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>short</strong>：占 2 个字节 ，范围-32768 到 32767</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">short</span> num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>int</strong>：（<strong>最常用</strong>）占 4 个字节，范围-2147483648 到 2147483647。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 最常用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>long</strong>：占 8 个字节，<strong>long 类型要在数字后面加个 L</strong>，范围-9223372036854775808 到 9223372036854775807。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">long</span> num3 <span class="token operator">=</span> <span class="token number">10L</span><span class="token punctuation">;</span> <span class="token comment">// long类型要在数字后面加个L</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>小数类型</p><p><strong>最好完全避免使用小数类型的值进行比较，因为存在精度问题</strong></p><ul><li><p><strong>float</strong>：占 4 个字节，<strong>float 类型要在后面加个 F</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">float</span> num4 <span class="token operator">=</span> <span class="token number">10.12F</span><span class="token punctuation">;</span> <span class="token comment">// float 类型要在后面加个F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>double</strong>：占 8 个字节</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">double</span> num5 <span class="token operator">=</span> <span class="token number">10.1231</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>字符类型</p><ul><li><p><strong>char</strong>：占 2 个字节，里面只能有一个字符，并且只能使用单引号。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">char</span> aChar <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> aChar <span class="token operator">=</span> <span class="token char">&#39;哈&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 错误，只放一个字符</span>
<span class="token keyword">char</span> bChar <span class="token operator">=</span> <span class="token char">&#39;basd&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 错误，只能使用单引号</span>
<span class="token keyword">char</span> cChar <span class="token operator">=</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>布尔类型</p><ul><li><p><strong>boolean</strong>：占 1 位。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ol><h2 id="_5、类型转换" tabindex="-1"><a class="header-anchor" href="#_5、类型转换" aria-hidden="true">#</a> 5、类型转换</h2><p>运算中不同类型的数据先转换为同一类型的数据才开始进行计算。数据类型容量排序，由低到高。<code>byte</code>，<code>short</code>，<code>char</code>之间不会相互转换，他们在计算时首先会转换为 int 类型。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span><span class="token punctuation">,</span><span class="token keyword">short</span><span class="token punctuation">,</span><span class="token keyword">char</span> <span class="token operator">-&gt;</span> <span class="token keyword">int</span> <span class="token operator">-&gt;</span> <span class="token keyword">long</span> <span class="token operator">-&gt;</span> <span class="token keyword">float</span> <span class="token operator">-&gt;</span> <span class="token keyword">double</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong></p><ol><li>布尔值不能进行数据类型转换</li><li>不能把对象数据类型转换为不相干的类型</li><li>在把高容量转换到低容量时，要进行强制转换。</li><li>转换的时候肯存在内存溢出，或者精度问题。</li></ol><blockquote><p>补充：jdk7 中数字之间可以用 _ 连接，并且不会影响到数字真正的值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10000</span> <span class="token operator">==</span> <span class="token number">1_0000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="_5-1、自动类型转换" tabindex="-1"><a class="header-anchor" href="#_5-1、自动类型转换" aria-hidden="true">#</a> 5.1、自动类型转换</h3><p>数据类型按上面的<strong>由低到高</strong>就会<strong>自动转换类型</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">short</span> num2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num3 <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>

<span class="token keyword">char</span> cha <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num4 <span class="token operator">=</span> cha <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2、强制类型转换" tabindex="-1"><a class="header-anchor" href="#_5-2、强制类型转换" aria-hidden="true">#</a> 5.2、强制类型转换</h3><p>数据类型按上面的<strong>由高到低</strong>就需要<strong>强制转换类型</strong>。</p><ol><li><p><strong>语法:</strong></p><ul><li><p>(类型)变量名</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> num5 <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> cha1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> num5<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cha1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>(类型)(表达式)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> num5 <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> cha2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>num5 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cha2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>高转低可能会出现内存溢出，或者精度问题，得到的结果就无法预料。</p><ul><li><p>内存溢出</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> num6 <span class="token operator">=</span> <span class="token number">9999</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> num7 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> num6<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num7<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 15</span>

<span class="token keyword">int</span> num10 <span class="token operator">=</span> <span class="token number">10_0000_0000</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num11 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token comment">// 已经超过了int能承载的最大值，导致了内存溢出。</span>
<span class="token keyword">int</span> num12 <span class="token operator">=</span> num10 <span class="token operator">*</span> num11<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num12<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -64771072</span>

<span class="token comment">// 在进行乘之前需要转换为 long 类型</span>
<span class="token keyword">long</span> num13 <span class="token operator">=</span> num10 <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> num11<span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token keyword">long</span> num13 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> num10 <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> num11<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num13<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 30000000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>精度问题</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">float</span> num8 <span class="token operator">=</span> <span class="token number">3.14f</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num9 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> num8<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num9<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h2 id="_6、变量、常量、作用域" tabindex="-1"><a class="header-anchor" href="#_6、变量、常量、作用域" aria-hidden="true">#</a> 6、变量、常量、作用域</h2><h3 id="_6-1、变量" tabindex="-1"><a class="header-anchor" href="#_6-1、变量" aria-hidden="true">#</a> 6.1、变量</h3><p><strong>注意事项：</strong></p><ol><li>java 是强类型语言，所以每个变量都必须有类型。</li><li>创建变量的语法：<strong>类型 变量名 = 值;</strong></li></ol><p><strong>变量可分为：</strong></p><ol><li><p>类变量</p><p>通过<code>static</code>关键字在类下面定义的变量。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LetClass</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类变量</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> money <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10000</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实例变量</p><p>类实例化后才能使用的变量，也就是类下面没有<code>static</code>关键字的变量。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LetClass</span> <span class="token punctuation">{</span>
    <span class="token comment">// 实例变量</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 需要通过 new 类 名后才能使用</span>
        <span class="token class-name">LetClass</span> letClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>letClass<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>局部变量</p><p>在方法内部定义的变量，只能在这个方法里面使用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LetClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 局部变量，只能在 main 这个方法里面使用</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>变量默认值</strong></p><table><thead><tr><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>数字</td><td>0 或 0.0</td></tr><tr><td>布尔值</td><td>false</td></tr><tr><td>引用类型</td><td>null</td></tr></tbody></table><h3 id="_6-2、常量-final" tabindex="-1"><a class="header-anchor" href="#_6-2、常量-final" aria-hidden="true">#</a> 6.2、常量（final）</h3><p>不会变化的量，使用关键字<code>final</code>定义，并且常量名一般用全大写字母表示。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinalClass</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个常量 WIDTH</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">WIDTH</span> <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">WIDTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、运算符" tabindex="-1"><a class="header-anchor" href="#_7、运算符" aria-hidden="true">#</a> 7、运算符</h2><table><thead><tr><th>运算符类型</th><th>运算符</th></tr></thead><tbody><tr><td>算术运算符</td><td>+，-，*，/，%，++，--</td></tr><tr><td>赋值运算符</td><td>=</td></tr><tr><td>关系元素符</td><td>&lt;，&gt;，&gt;=，&lt;=，==，!=，instanceof</td></tr><tr><td>逻辑运算符</td><td>&amp;&amp;，||，!</td></tr><tr><td>位运算符（了解即可）</td><td>&amp;，|，^，~，&gt;&gt;，&lt;&lt;，&gt;&gt;&gt;</td></tr><tr><td>三元运算符</td><td>? ... :</td></tr><tr><td>扩展赋值元素符</td><td>+=，-=，*=，/=</td></tr></tbody></table><p><strong>注意：</strong> java 中有类型的存在</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span><span class="token punctuation">,</span><span class="token keyword">short</span> <span class="token operator">-&gt;</span> <span class="token keyword">int</span> <span class="token operator">-&gt;</span> <span class="token keyword">long</span> <span class="token operator">-&gt;</span> <span class="token keyword">float</span> <span class="token operator">-&gt;</span> <span class="token keyword">double</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>如果两个<code>int</code>类型的数<strong>相除</strong>得到是小数，如果没有将其中一个的类型转为<code>flaot</code>或者<code>double</code>那么得到永远是<strong>舍去小数位</strong>的整数。</li><li>小于<code>int</code>或者包含<code>int</code>的任意两个类型的值相加得到的都是<code>int</code>类型的值。</li><li>大于任意类型的值与<code>int</code>或者大于<code>int</code>类型的值相加，得到的值都是最大那个类型的值。</li></ol><blockquote><p>如何验证：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> f <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 转为不能转的类型的时候，就会报错(Inconvertible types; cannot cast &#39;long&#39; to &#39;java.lang.String&#39;),以此来证明相加后的类型。</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>e <span class="token operator">+</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="_8、包机制" tabindex="-1"><a class="header-anchor" href="#_8、包机制" aria-hidden="true">#</a> 8、包机制</h2><ol><li><p>java 中有包机制，用于区别类名的命名空间。 <strong>语法：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">pkg1</span><span class="token punctuation">[</span><span class="token punctuation">.</span>pag2<span class="token punctuation">[</span><span class="token punctuation">.</span>pkg3<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>例：</strong> 有这样一个目录结构 <code>src/com/ldlang/Pack.java</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 在这个(src/com/ldlang)目录下的所有java文件的顶层都要加入以下代码</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ldlang</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：一般利用公司域名倒置作为包名; com.ldlang.www</p></blockquote></li><li><p>为了能够在一个包中能够使用另一个包的成员，可以使用<code>import</code>来导入。</p><p><strong>例：</strong> 在<code>src/top/ldlang/PackTop.java</code>中使用<code>src/com/ldlang/Pack.java</code>这个文件。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Pack.java 文件</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ldlang</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pack</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// PackTop.java 文件</span>
<span class="token keyword">package</span> <span class="token namespace">top<span class="token punctuation">.</span>ldlang</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ldlang<span class="token punctuation">.</span></span><span class="token class-name">Pack</span></span><span class="token punctuation">;</span> <span class="token comment">// import 语句必须放在 package 之后</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PackTop</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Pack</span> pack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pack<span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// main</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>同时同一文件夹下的所有包</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ldlang<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_9、javadoc" tabindex="-1"><a class="header-anchor" href="#_9、javadoc" aria-hidden="true">#</a> 9、javaDoc</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> 参数名
 * <span class="token keyword">@return</span> 返回值
 * <span class="token keyword">@throws</span> 异常抛出情况
 * <span class="token keyword">@author</span> 作者名
 * <span class="token keyword">@version</span> 版本号
 * <span class="token keyword">@since</span> 指明最早使用的jdk版本
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46)]))}const u=a(o,[["render",c],["__file","basics.html.vue"]]);export{u as default};
