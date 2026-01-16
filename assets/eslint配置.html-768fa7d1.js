import{_ as s,o as a,c as e,e as p}from"./app-63ba67c3.js";const o={};function t(l,n){return a(),e("div",null,[...n[0]||(n[0]=[p(`<h1 id="在vite创建的vue3项目配置eslint" tabindex="-1"><a class="header-anchor" href="#在vite创建的vue3项目配置eslint" aria-hidden="true">#</a> 在vite创建的vue3项目配置eslint</h1><ol><li><p>通过创建一个项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn create vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装eslint与使用</p><ul><li><p>安装eslint</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add -D eslint			安装eslint为开发依赖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>初始化eslint</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx eslint --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置初始化选择</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> <span class="token operator">...</span>
  To check syntax only
  To check syntax and find problems
<span class="token operator">&gt;</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> 选择强制代码风格
√ How would you like to use ESLint<span class="token operator">?</span> · style       
<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> <span class="token operator">...</span> 
<span class="token operator">&gt;</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>
  <span class="token function">CommonJS</span> <span class="token punctuation">(</span>require<span class="token operator">/</span>exports<span class="token punctuation">)</span>
  None <span class="token keyword">of</span> these
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>选择语言模块
<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> <span class="token operator">...</span> 
  React
<span class="token operator">&gt;</span> Vue<span class="token punctuation">.</span>js
  None <span class="token keyword">of</span> these
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>选择vue框架
<span class="token operator">?</span> Does your project use TypeScript<span class="token operator">?</span> » No <span class="token operator">/</span> Yes
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>是否使用ts
<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> <span class="token operator">...</span>  <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select<span class="token punctuation">,</span> <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all<span class="token punctuation">,</span> <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert selection<span class="token punctuation">)</span>
√ Browser
√ Node
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token function">代码在哪里运行</span> <span class="token punctuation">(</span>用空格选中 Browser<span class="token operator">+</span>Node<span class="token punctuation">)</span>
<span class="token operator">?</span> How would you like to define a style <span class="token keyword">for</span> your project<span class="token operator">?</span> <span class="token operator">...</span> 
  Use a popular style guide
<span class="token operator">&gt;</span> Answer questions about your style
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>使用流行风格还是你的风格来配置规则
<span class="token operator">?</span> What format <span class="token keyword">do</span> you want your config file to be <span class="token keyword">in</span><span class="token operator">?</span> <span class="token operator">...</span>
<span class="token operator">&gt;</span> JavaScript
  <span class="token constant">YAML</span>
  <span class="token constant">JSON</span>
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>配置文件使用js文件，因为js的优先级最高
<span class="token operator">?</span> What style <span class="token keyword">of</span> indentation <span class="token keyword">do</span> you use<span class="token operator">?</span> <span class="token operator">...</span>
<span class="token operator">&gt;</span> Tabs
  Spaces
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>缩进方式
<span class="token operator">?</span> What quotes <span class="token keyword">do</span> you use <span class="token keyword">for</span> strings<span class="token operator">?</span> <span class="token operator">...</span> 
  Double	<span class="token comment">// 双引号</span>
<span class="token operator">&gt;</span> Single	<span class="token comment">// 单引号</span>
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>字符串用什么引号
<span class="token operator">?</span> What line endings <span class="token keyword">do</span> you use<span class="token operator">?</span> <span class="token operator">...</span>
  Unix
<span class="token operator">&gt;</span> Windows
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>在windows上使用
<span class="token operator">?</span> Do you require semicolons<span class="token operator">?</span> » No <span class="token operator">/</span> Yes
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token function">是否需要分号</span><span class="token punctuation">(</span>视自己情况而定<span class="token punctuation">,</span>我这里不用选No<span class="token punctuation">)</span>
<span class="token operator">?</span> Would you like to install them now<span class="token operator">?</span> » No <span class="token operator">/</span> Yes
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>选择yes现在立即初始化配置文件
<span class="token operator">?</span> Which <span class="token keyword">package</span> manager <span class="token keyword">do</span> you want to use<span class="token operator">?</span> <span class="token operator">...</span> 
  npm
<span class="token operator">&gt;</span> yarn
  pnpm
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>包管理器选择yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>初始化完成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>此时项目的根目录下面就会出现一个.eslintrc.cjs的文件，用来配置里面好了你刚刚选择的风格
同时也可以自定义一些风格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>安装vite检测eslint的包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add -D vite-plugin-eslint			安装vite配合eslint的包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装eslint-parser</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add -D @babel/core             
yarn add -D @babel/eslint-parser

@babel/core 是 Babel 的核心模块，它提供了将现代 JavaScript 代码转换为向后兼容版本的能力。Babel 是一个非常流行的 JavaScript 编译器，它可以将使用了最新语法和特性的 JavaScript 代码转换为可以在不同环境中运行的 JavaScript 代码。通过使用 @babel/core，你可以在项目中集成并配置 Babel，从而在构建过程中自动进行代码转换。

@babel/eslint-parser 是一个 ESLint 解析器，它允许你使用 Babel 解析器来分析你的代码。默认情况下，ESLint 使用 Espree 解析器来解析 JavaScript 代码，但它仅支持 ECMAScript 5 语法。如果你的项目中使用了 Babel 来使用较新的 JavaScript 特性，那么你需要将解析器配置为 @babel/eslint-parser，以使 ESLint 能够正确地分析和检查你的代码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置vite.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> eslintPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-eslint&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 引入刚刚下载的vite配合eslint的包</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">eslintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/**/*.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/**/*.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/*.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/*.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/src&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在vscode中下载eslint的插件</p></li><li><p>在.eslintrc.cjs 配置自定义规则文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>module.exports = <span class="token punctuation">{</span>
	<span class="token comment">/** 
	 *  默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。
	 *  ESLint一旦发现配置文件中有   &quot;root&quot;: true，它就会停止在父级目录中寻找。
	*/</span>
	root<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// 运行环境</span>
	&#39;env&#39;<span class="token operator">:</span> <span class="token punctuation">{</span>
		&#39;browser&#39;<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		&#39;es2021&#39;<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		&#39;node&#39;<span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// node 环境</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// 此项是用来配置标准的js风格，就是说写代码的时候要规范的写</span>
	&#39;extends&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
		&#39;eslint<span class="token operator">:</span>recommended&#39;<span class="token punctuation">,</span>
		&#39;plugin<span class="token operator">:</span>vue/vue3-essential&#39;
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	&#39;overrides&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	&#39;parserOptions&#39;<span class="token operator">:</span> <span class="token punctuation">{</span>
		&#39;ecmaVersion&#39;<span class="token operator">:</span> &#39;latest&#39;<span class="token punctuation">,</span>
		&#39;sourceType&#39;<span class="token operator">:</span> &#39;module&#39;
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	&#39;plugins&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
		&#39;vue&#39;
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">/**
		下面这些rules是用来设置从插件来的规范代码的规则
        &quot;off&quot; 或 0   - 关闭规则
        &quot;warn&quot; 或 1  - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
        &quot;error&quot; 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    */</span>
	&#39;rules&#39;<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue组件使用多单词命名</span>
    &#39;vue/multi-word-component-names&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置每行最大属性数</span>
    &#39;vue/max-attributes-per-line&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        singleline<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 标签为单行时，每行最大属性数值为 10，默认值为 1</span>
        multiline<span class="token operator">:</span> <span class="token punctuation">{</span>
          max<span class="token operator">:</span> <span class="token number">5</span> <span class="token comment">// 标签为多行时，每行最大属性数字为 1，默认值为 1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 在单行元素的内容之前和之后需要换行符</span>
    &#39;vue/singleline-html-element-content-newline&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 在同一标签禁止出现相同的属性</span>
    &#39;vue/no-duplicate-attributes&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;allowCoexistClass&#39;<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否允许同时出现class和:class</span>
      &#39;allowCoexistStyle&#39;<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 是否允许同时出现style和:style</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 在多行元素的内容之前和之后需要换行符</span>
    &#39;vue/multiline-html-element-content-newline&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件 name 属性值必须使用帕斯卡命名法（单词首字母大写）</span>
    &#39;vue/name-property-casing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> &#39;PascalCase&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 v-html 来防止 XSS 攻击</span>
    &#39;vue/no-v-html&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用vue的关键字作为prop的key</span>
    &#39;vue/no-reserved-props&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;error&#39;<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;vueVersion&#39;<span class="token operator">:</span> <span class="token number">3</span> <span class="token comment">// or 2</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在textarea中使用{{ }},因为只有v-model是有效的</span>
    &#39;vue/no-textarea-mustache&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止引入组件但不使用</span>
    &#39;vue/no-unused-components&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;error&#39;<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;ignoreWhenBindingPresent&#39;<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止v-if和v-for出现在同一标签中</span>
    &#39;vue/no-use-v-if-with-v-for&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;error&#39;<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;allowUsingIterationVar&#39;<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 只能从vue上引入组合式api</span>
    &#39;vue/prefer-import-from-vue&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止标签上的右括号换行</span>
    &#39;vue/html-closing-bracket-newline&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;singleline&#39;<span class="token operator">:</span> &#39;never&#39;<span class="token punctuation">,</span>
      &#39;multiline&#39;<span class="token operator">:</span> &#39;never&#39;
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    &#39;vue/html-closing-bracket-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;error&#39;<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;startTag&#39;<span class="token operator">:</span> &#39;never&#39;<span class="token punctuation">,</span>
      &#39;endTag&#39;<span class="token operator">:</span> &#39;never&#39;<span class="token punctuation">,</span>
      &#39;selfClosingTag&#39;<span class="token operator">:</span> &#39;always&#39; <span class="token comment">// 自闭标签右括号前必须要有空格</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 一个标签换行后的对齐方式</span>
    &#39;vue/html-indent&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;attribute&#39;<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      &#39;baseIndent&#39;<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      &#39;closeBracket&#39;<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      &#39;alignAttributesVertically&#39;<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      &#39;ignores&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 标签内必须使用双引号</span>
    &#39;vue/html-quotes&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;error&#39;<span class="token punctuation">,</span> &#39;double&#39;<span class="token punctuation">,</span> <span class="token punctuation">{</span> &#39;avoidEscape&#39;<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 标签内没有内容自动转为自闭标签</span>
    &#39;vue/html-self-closing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;error&#39;<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;html&#39;<span class="token operator">:</span> <span class="token punctuation">{</span>
        &#39;void&#39;<span class="token operator">:</span> &#39;never&#39;<span class="token punctuation">,</span>
        &#39;normal&#39;<span class="token operator">:</span> &#39;always&#39;<span class="token punctuation">,</span>
        &#39;component&#39;<span class="token operator">:</span> &#39;always&#39;
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      &#39;svg&#39;<span class="token operator">:</span> &#39;always&#39;<span class="token punctuation">,</span>
      &#39;math&#39;<span class="token operator">:</span> &#39;always&#39;
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 标签内表达式和双花括号之间应该有一个空格</span>
    &#39;vue/mustache-interpolation-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;error&#39;<span class="token punctuation">,</span> &#39;always&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止标签内出现多余的空格</span>
    &#39;vue/no-multi-spaces&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;error&#39;<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      &#39;ignoreProperties&#39;<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 不允许标签属性中等号两边有空格</span>
    &#39;vue/no-spaces-around-equal-signs-in-attribute&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义对象的set存取器属性时，强制定义get</span>
    &#39;accessor-pairs&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制箭头函数的箭头前后使用一致的空格</span>
    &#39;arrow-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        before<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        after<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止或强制在单行代码块中使用空格</span>
    &#39;block-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;always&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在代码块中使用一致的大括号风格</span>
    &#39;brace-style&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      &#39;1tbs&#39;<span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        allowSingleLine<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制使用骆驼拼写法命名约定</span>
    camelcase<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//  数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号</span>
    &#39;comma-dangle&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;never&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 控制逗号前后的空格</span>
    &#39;comma-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        before<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        after<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 控制逗号在行尾出现还是在行首出现 (默认行尾)</span>
    &#39;comma-style&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;last&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制所有控制语句使用一致的括号风格</span>
    curly<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;multi-line&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制object.key 中 . 的位置，参数:</span>
    <span class="token comment">// property，&#39;.&#39;号应与属性在同一行</span>
    <span class="token comment">// object, &#39;.&#39; 号应与对象名在同一行</span>
    &#39;dot-location&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;property&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 文件末尾强制换行</span>
    &#39;eol-last&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用类型安全的 === 和 !== 操作符代替 == 和 != 除null以外</span>
    eqeqeq<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> &#39;always&#39;<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token null keyword">null</span><span class="token operator">:</span> &#39;ignore&#39; <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制 generator 函数中 * 号周围使用一致的空格</span>
    &#39;generator-star-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        before<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        after<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求回调函数中有容错处理</span>
    &#39;handle-callback-err&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;^(err|error)$&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制使用一致的缩进</span>
    indent<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 缩进字符数</span>
      <span class="token punctuation">{</span>
        SwitchCase<span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在对象字面量的属性中键和值之间使用一致的间距</span>
    &#39;key-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        beforeColon<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        afterColon<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在关键字前后使用一致的空格</span>
    &#39;keyword-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        before<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        after<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求构造函数首字母大写</span>
    &#39;new-cap&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        newIsCap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        capIsNew<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求调用无参构造函数时有圆括号</span>
    &#39;new-parens&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在没有类型检查操作符的情况下与 null 进行比较</span>
    &#39;no-eq-<span class="token null keyword">null</span>&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 Array 构造函数</span>
    &#39;no-array-constructor&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用 arguments.caller 或 arguments.callee</span>
    &#39;no-caller&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用 console</span>
    &#39;no-console&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止修改类声明的变量</span>
    &#39;no-class-assign&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止条件表达式中出现赋值操作符</span>
    &#39;no-cond-assign&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止修改 const 声明的变量</span>
    &#39;no-const-assign&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在正则表达式中使用控制字符 ：new RegExp(&quot;\\x1f&quot;)</span>
    &#39;no-control-regex&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止删除变量</span>
    &#39;no-delete-var&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止 function 定义中出现重名参数</span>
    &#39;no-dupe-args&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止类成员中出现重复的名称</span>
    &#39;no-dupe-class-members&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止对象字面量中出现重复的 key</span>
    &#39;no-dupe-keys&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止重复的 case 标签</span>
    &#39;no-duplicate-case&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在正则表达式中使用空字符集 (/^abc[]/)</span>
    &#39;no-empty-character-class&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用空解构模式no-empty-pattern</span>
    &#39;no-empty-pattern&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用 eval()</span>
    &#39;no-eval&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止对 catch 子句的参数重新赋值</span>
    &#39;no-ex-assign&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止扩展原生类型</span>
    &#39;no-extend-native&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止不必要的 .bind() 调用</span>
    &#39;no-extra-bind&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止不必要的布尔转换</span>
    &#39;no-extra-boolean-cast&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止不必要的括号 //(a * b) + c;//报错</span>
    &#39;no-extra-parens&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;functions&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止 case 语句落空</span>
    &#39;no-fallthrough&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止数字字面量中使用前导和末尾小数点</span>
    &#39;no-floating-decimal&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止对 function 声明重新赋值</span>
    &#39;no-func-assign&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用类似 eval() 的方法</span>
    &#39;no-implied-eval&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在嵌套的块中出现 function 或 var 声明</span>
    &#39;no-inner-declarations&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;functions&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止 RegExp 构造函数中无效的正则表达式字符串</span>
    &#39;no-invalid-regexp&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在字符串和注释之外不规则的空白</span>
    &#39;no-irregular-whitespace&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用 __iterator__ 属性</span>
    &#39;no-iterator&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 不允许标签与变量同名</span>
    &#39;no-label-var&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用标签语句</span>
    &#39;no-labels&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        allowLoop<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        allowSwitch<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用不必要的嵌套块</span>
    &#39;no-lone-blocks&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 不允许空格和 tab 混合缩进</span>
    &#39;no-mixed-spaces-and-tabs&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用多个空格</span>
    &#39;no-multi-spaces&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串</span>
    &#39;no-multi-str&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 不允许多个空行</span>
    &#39;no-multiple-empty-lines&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        max<span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止对原生对象赋值</span>
    &#39;no-native-reassign&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在 in 表达式中出现否定的左操作数</span>
    &#39;no-negated-in-lhs&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 Object 的构造函数</span>
    &#39;no-new-object&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止调用 require 时使用 new 操作符</span>
    &#39;no-new-require&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止 Symbol 的构造函数</span>
    &#39;no-new-symbol&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止对 String，Number 和 Boolean 使用 new 操作符</span>
    &#39;no-new-wrappers&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();</span>
    &#39;no-obj-calls&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用八进制字面量</span>
    &#39;no-octal&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在字符串中使用八进制转义序列</span>
    &#39;no-octal-escape&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止对 __dirname 和 __filename进行字符串连接</span>
    &#39;no-path-concat&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用 __proto__ 属性</span>
    &#39;no-proto&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 var 多次声明同一变量</span>
    &#39;no-redeclare&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止正则表达式字面量中出现多个空格</span>
    &#39;no-regex-spaces&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在返回语句中赋值</span>
    &#39;no-return-assign&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;except-parens&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止自我赋值</span>
    &#39;no-self-assign&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止自身比较</span>
    &#39;no-self-compare&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用逗号操作符</span>
    &#39;no-sequences&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止覆盖受限制的标识符</span>
    &#39;no-shadow-restricted-names&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止 function 标识符和括号之间出现空格</span>
    &#39;no-spaced-func&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用稀疏数组</span>
    &#39;no-sparse-arrays&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在构造函数中，在调用 super() 之前使用 this 或 super</span>
    &#39;no-this-before-super&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止抛出非异常字面量</span>
    &#39;no-throw-literal&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用行尾空格</span>
    &#39;no-trailing-spaces&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用未声明的变量，除非它们在 /*global */ 注释中被提到</span>
    &#39;no-undef&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止将变量初始化为 undefined</span>
    &#39;no-undef-init&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止出现令人困惑的多行表达式</span>
    &#39;no-unexpected-multiline&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用一成不变的循环条件</span>
    &#39;no-unmodified-loop-condition&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止可以在有更简单的可替代的表达式时使用三元操作符</span>
    &#39;no-unneeded-ternary&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        defaultAssignment<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在return、throw、continue 和 break语句之后出现不可达代码</span>
    &#39;no-unreachable&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    &#39;no-unsafe-finally&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止出现未使用过的变量</span>
    &#39;no-unused-vars&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        vars<span class="token operator">:</span> &#39;all&#39;<span class="token punctuation">,</span>
        args<span class="token operator">:</span> &#39;none&#39;
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止不必要的 .call() 和 .apply()</span>
    &#39;no-useless-call&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止不必要的计算性能键对象的文字</span>
    &#39;no-useless-computed-key&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    &#39;no-useless-constructor&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用不必要的转义字符</span>
    &#39;no-useless-escape&#39;<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止属性前有空白</span>
    &#39;no-whitespace-before-property&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用 with 语句</span>
    &#39;no-with&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制函数中的变量要么一起声明要么分开声明</span>
    &#39;one-var&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        initialized<span class="token operator">:</span> &#39;never&#39;
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制操作符使用一致的换行符</span>
    &#39;operator-linebreak&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      &#39;after&#39;<span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        overrides<span class="token operator">:</span> <span class="token punctuation">{</span>
          &#39;?&#39;<span class="token operator">:</span> &#39;before&#39;<span class="token punctuation">,</span>
          &#39;<span class="token operator">:</span>&#39;<span class="token operator">:</span> &#39;before&#39;
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求或禁止块内填充</span>
    &#39;padded-blocks&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;never&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制使用一致的反勾号、双引号或单引号</span>
    quotes<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      &#39;single&#39;<span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        avoidEscape<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        allowTemplateLiterals<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）</span>
    semi<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;never&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制分号之前和之后使用一致的空格</span>
    &#39;semi-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        before<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        after<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在块之前使用一致的空格</span>
    &#39;space-before-blocks&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;always&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在 function的左括号之前使用一致的空格</span>
    &#39;space-before-function-paren&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;never&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在圆括号内使用一致的空格</span>
    &#39;space-in-parens&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;never&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求操作符周围有空格</span>
    &#39;space-infix-ops&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在一元操作符前后使用一致的空格</span>
    &#39;space-unary-ops&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        words<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        nonwords<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在注释中 // 或 /* 使用一致的空格</span>
    &#39;spaced-comment&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      &#39;always&#39;<span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        markers<span class="token operator">:</span> <span class="token punctuation">[</span>&#39;global&#39;<span class="token punctuation">,</span> &#39;globals&#39;<span class="token punctuation">,</span> &#39;eslint&#39;<span class="token punctuation">,</span> &#39;eslint-disable&#39;<span class="token punctuation">,</span> &#39;*package&#39;<span class="token punctuation">,</span> &#39;!&#39;<span class="token punctuation">,</span> &#39;<span class="token punctuation">,</span>&#39;<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求或禁止模板字符串中的嵌入表达式周围空格的使用</span>
    &#39;template-curly-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;never&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求使用 isNaN() 检查 NaN</span>
    &#39;use-isnan&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// typeof foo === &quot;undefimed&quot; 错误</span>
    &#39;valid-typeof&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求 IIFE 使用括号括起来</span>
    &#39;wrap-iife&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;any&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在 yield* 表达式中 * 周围使用空格</span>
    &#39;yield-star-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;both&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求或禁止 “Yoda” 条件</span>
    yoda<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;never&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求使用 const 声明那些声明后不再被修改的变量</span>
    &#39;prefer-const&#39;<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否允许debugger</span>
    &#39;no-debugger&#39;<span class="token operator">:</span> p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? <span class="token number">2</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制在花括号中使用一致的空格</span>
    &#39;object-curly-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      &#39;always&#39;<span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        objectsInObjects<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格</span>
    &#39;array-bracket-spacing&#39;<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> &#39;never&#39;<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过配置.eslintignore 配置 eslint 忽略检测的文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 忽略public目录下文件的语法检查
public
# 忽略node_modules目录下文件的语法检查
node_modules
# 忽略src/assets目录下文件的语法检查
src/assets
# 忽略dist目录下文件的语法检查
dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在package.json文件添加eslint的校验</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .js,.vue --ignore-path .eslintignore --fix src&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>vscode的配置文件setting.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;eslint.format.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dbaeumer.vscode-eslint&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dbaeumer.vscode-eslint&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.mouseWheelZoom&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.commandCenter&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.html-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.codeAction.showDocumentation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;enable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.guides.bracketPairs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;active&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Default Dark+&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.accessibilitySupport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2)])])}const i=s(o,[["render",t],["__file","eslint配置.html.vue"]]);export{i as default};
