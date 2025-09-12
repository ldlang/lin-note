import{_ as a,o as s,c as e,e as t}from"./app-343a20be.js";const p={};function o(i,n){return s(),e("div",null,[...n[0]||(n[0]=[t(`<h1 id="注解和反射" tabindex="-1"><a class="header-anchor" href="#注解和反射" aria-hidden="true">#</a> 注解和反射</h1><h2 id="_1、注解" tabindex="-1"><a class="header-anchor" href="#_1、注解" aria-hidden="true">#</a> 1、注解</h2><ul><li><p>Annotation 是从<code>JDK5.0</code>开始引入的新技术</p></li><li><p>Annotation 的作用</p><ul><li>不是程序本身，可以对程序做出解释</li><li>可以被其他程序（比如编译器）读取</li></ul></li><li><p>Annotation 的格式</p><ul><li><p>注解是以<code>@注释名</code>在代码中存在的，还可以添加一些参数</p><blockquote><p>@SuppressWarnings(value=&quot;unchecked&quot;)</p></blockquote></li></ul></li><li><p>Annotation 可以在 package、class、methods、field 上面使用，相当于给他们添加了额外的辅助信息，可以通过反射机制编程实现对这些元数据的访问</p></li></ul><h3 id="内置注解" tabindex="-1"><a class="header-anchor" href="#内置注解" aria-hidden="true">#</a> 内置注解</h3><ul><li><p>@Override：定义在<code>java.lang.Override</code>中，只能修饰方法，表示一个方法打算重写超类中的另一个方法声明</p></li><li><p>@Deprecated：定义在<code>java.lang.Deprecated</code>中，可以用于方法、属性、类，表示这个不推荐使用，或者有更好的选择</p></li><li><p>@SuppressWarnings：定义在<code>java.lang.SuppressWarnings</code>中，用了抑制编译时的警告信息，必须传入一个参数才能正确使用</p><blockquote><ul><li>@SuppressWarnings(value=&quot;unchecked&quot;)</li><li>@SuppressWarnings(&quot;all&quot;)</li></ul></blockquote></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ldlang<span class="token punctuation">.</span>annotation</span><span class="token punctuation">;</span>

<span class="token comment">// 可以抑制编译时当前类里面的所有警告信息</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverrideStu</span> <span class="token punctuation">{</span>
    <span class="token comment">// 让test方法变成弃用方法，但只是一个警告</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元注解" tabindex="-1"><a class="header-anchor" href="#元注解" aria-hidden="true">#</a> 元注解</h3><p>元注解的作用就是负责注解其他注解，比如自定义的注解，java 中有 4 个标准注解的<code>meta-annotation</code>，他们被用来提供对其他<code>annotation</code>类型说明</p><ul><li><p>@Target</p><blockquote><p>@Target 表示我的定义的注解能够用到哪些地方，如用到方法上 <code>ElementType.METHOD</code>，用到类上 <code>ElementType.TYPE</code>等</p></blockquote></li><li><p>@Retention</p><blockquote><p>@Retention 表示我们在什么时候生效，运行时还是源码时等 runtime &gt; class &gt; sources</p></blockquote></li><li><p>@Documented</p><blockquote><p>表示是否将我的注解生产在 JAVAdoc 中</p></blockquote></li><li><p>@Inherited</p><blockquote><p>子类是否可以继承父类的注解</p></blockquote></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@MyAnnotation</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> customAnn <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 定义一个注解</span>
<span class="token comment">// @Target 表示我的定义的注解能够用到哪些地方，如用到方法上 \`ElementType.METHOD\`，用到类上 \`ElementType.TYPE\`等</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// @Retention 表示我们在什么时候生效，运行时还是源码时等</span>
<span class="token comment">// runtime &gt; class &gt; sources</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>

<span class="token comment">// 表示是否将我的注解生产在JAVAdoc中</span>
<span class="token annotation punctuation">@Documented</span>

<span class="token comment">// 子类是否可以继承父类的注解</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)])])}const c=a(p,[["render",o],["__file","annotation.html.vue"]]);export{c as default};
