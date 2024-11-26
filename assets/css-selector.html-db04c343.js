import{_ as d,r as p,o as e,c as o,e as a,b as t,d as s,a as u,w as i}from"./app-0e033328.js";const r={};function c(k,n){const l=p("RouterLink");return e(),o("div",null,[n[23]||(n[23]=a('<h1 id="css-选择器" tabindex="-1"><a class="header-anchor" href="#css-选择器" aria-hidden="true">#</a> css 选择器</h1><h2 id="_1、基本选择器" tabindex="-1"><a class="header-anchor" href="#_1、基本选择器" aria-hidden="true">#</a> 1、基本选择器</h2><table><thead><tr><th>选择器</th><th>名称</th><th>基本示例</th><th>基本说明</th></tr></thead><tbody><tr><td>.</td><td>类名选择器</td><td>.container</td><td>选择所有 class=&quot;container&quot; 的元素</td></tr><tr><td>#</td><td>id 选择器</td><td>#container</td><td>选择所有 id=&quot;container&quot; 的元素</td></tr><tr><td>*</td><td>通配符选择器</td><td>*</td><td>选择所有元素</td></tr><tr><td>element</td><td>元素选择器</td><td>div</td><td>选择所有的 div 元素</td></tr><tr><td>,</td><td>群组选择器</td><td>.p1,.p2</td><td>选择所有的 class=&quot;p1&quot; 和 class=&quot;p2&quot;的元素</td></tr></tbody></table><h2 id="_2、层级选择器" tabindex="-1"><a class="header-anchor" href="#_2、层级选择器" aria-hidden="true">#</a> 2、层级选择器</h2><table><thead><tr><th>选择器</th><th>名称</th><th>基本示例</th><th>基本说明</th></tr></thead><tbody><tr><td>div p</td><td>后代选择器（一个空格）</td><td>div p</td><td>选择 div 元素<strong>下</strong>所有的 p 的元素</td></tr><tr><td>&gt;</td><td>子级选择器</td><td>div &gt; p</td><td>选择所有<strong>直属</strong>父级是 div 元素的 p 元素</td></tr><tr><td>+</td><td>相邻兄弟选择器</td><td>div + p</td><td>选择所有前一个兄弟是 div 的 p 元素（相邻）</td></tr><tr><td>~</td><td>通用兄弟选择器</td><td>div ~ p</td><td>选择所有在 div 之后同父级的 p 元素</td></tr></tbody></table><h2 id="_3、属性类选择器" tabindex="-1"><a class="header-anchor" href="#_3、属性类选择器" aria-hidden="true">#</a> 3、属性类选择器</h2><table><thead><tr><th>选择器</th><th>名称</th><th>示例</th><th>说明</th></tr></thead><tbody><tr><td>[attribute]</td><td>简单属性选择器</td><td>[custom]</td><td>选择所有带有 custom 属性的元素</td></tr><tr><td>[attribute=value]</td><td>精准属性选择器</td><td>[custom=test]</td><td>选择所有带有 custom=&quot;test&quot; 属性的元素</td></tr><tr><td>[attribute~=value]</td><td>部分属性值选择器</td><td>[custom~=test]</td><td>选择所有带有只要 custom 的 value 中有 test 这个完整单词的元素，即使是 custom=&quot;test abs&quot; 也能被选中</td></tr><tr><td>[attribute|=value]</td><td>以某个值<strong>开头短横线</strong>分隔值的属性选择器</td><td>[custom|=test]</td><td>选择所有 custom 的 value 以 test 开头的元素，如果 test 后面还有字母则必须以<code>-</code>连接，如 custom=&quot;test-te&quot;</td></tr><tr><td>[attribute^=value]</td><td>以某个值<strong>开头</strong>的属性选择器</td><td>[custom^=test]</td><td>选择所有 custom 的 value 以 test <strong>开头</strong>的元素</td></tr><tr><td>[attribute$=value]</td><td>以某个值<strong>结尾</strong>的属性选择器</td><td>[custom$=test]</td><td>选择所有 custom 的 value 以 test <strong>结尾</strong>的元素</td></tr><tr><td>[attribute*=value]</td><td>模糊匹配属性选择器</td><td>[custom*=test]</td><td>选择所有 custom 的 value 能 like 查询（<strong>模糊匹配</strong>）到 test 的元素</td></tr></tbody></table><h2 id="_4、否定伪类选择器" tabindex="-1"><a class="header-anchor" href="#_4、否定伪类选择器" aria-hidden="true">#</a> 4、否定伪类选择器</h2><table><thead><tr><th>选择器</th><th>示例</th><th>说明</th></tr></thead><tbody><tr><td>:not(selector)</td><td>p:not(.p2)</td><td>选择所有 p 元素中不含有 p2 类的元素</td></tr></tbody></table><h2 id="_5、伪类选择器" tabindex="-1"><a class="header-anchor" href="#_5、伪类选择器" aria-hidden="true">#</a> 5、伪类选择器</h2>',10)),t("table",null,[n[22]||(n[22]=t("thead",null,[t("tr",null,[t("th",null,"选择器"),t("th",null,"名称"),t("th",null,"示例"),t("th",null,"说明")])],-1)),t("tbody",null,[n[4]||(n[4]=t("tr",null,[t("td",null,":link"),t("td",null,"链接伪类选择器（未访问过）"),t("td",null,"*:link"),t("td",null,[s("选择所有"),t("strong",null,"未被访问过"),s("的链接")])],-1)),n[5]||(n[5]=t("tr",null,[t("td",null,":visited"),t("td",null,"链接伪类选择器（访问过）"),t("td",null,"*:visited"),t("td",null,[s("选择所有"),t("strong",null,"访问过"),s("的链接")])],-1)),n[6]||(n[6]=t("tr",null,[t("td",null,":active"),t("td",null,"用户行为选择器（鼠标点击未松开时）"),t("td",null,"div:active"),t("td",null,"div 元素点击时触发这个伪类选中")],-1)),n[7]||(n[7]=t("tr",null,[t("td",null,":hover"),t("td",null,"用户行为选择器（鼠标移到节点时）"),t("td",null,"div:hover"),t("td",null,"div 在鼠标移入时触发这个伪类选中")],-1)),n[8]||(n[8]=t("tr",null,[t("td",null,":focus"),t("td",null,"用户行为选择器（具有焦点的元素获得焦点时）"),t("td",null,"input:focus"),t("td",null,"在 input 获得焦点的时候触发这个伪类")],-1)),n[9]||(n[9]=t("tr",null,[t("td",null,":first-letter"),t("td",null,"首字符选择（只能用于块级元素）"),t("td",null,"p:first-letter"),t("td",null,[s("选择 p 元素第一"),t("strong",null,"个"),s("字符")])],-1)),n[10]||(n[10]=t("tr",null,[t("td",null,":first-line"),t("td",null,"首行文字选择（只能用于块级元素）"),t("td",null,"p:first-line"),t("td",null,[s("选择 p 元素第一"),t("strong",null,"行"),s("字符")])],-1)),t("tr",null,[t("td",null,[u(l,{to:"/css/css-selector/#:dirst-child"},{default:i(()=>n[0]||(n[0]=[s(":first-child")])),_:1})]),n[1]||(n[1]=t("td",null,"第一个子元素",-1)),n[2]||(n[2]=t("td",null,"p:first-child",-1)),n[3]||(n[3]=t("td",null,"指定只有当 p 元素是其父级的第一个子级的样式。",-1))]),n[11]||(n[11]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[12]||(n[12]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[13]||(n[13]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[14]||(n[14]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[15]||(n[15]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[16]||(n[16]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[17]||(n[17]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[18]||(n[18]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[19]||(n[19]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[20]||(n[20]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1)),n[21]||(n[21]=t("tr",null,[t("td"),t("td"),t("td"),t("td")],-1))])]),n[24]||(n[24]=a(`<h2 id="_6、特别说明" tabindex="-1"><a class="header-anchor" href="#_6、特别说明" aria-hidden="true">#</a> 6、特别说明</h2><h3 id="first-child" tabindex="-1"><a class="header-anchor" href="#first-child" aria-hidden="true">#</a> :first-child</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* 此时选中的是 p1 和 p4 */</span>
    <span class="token selector">.container:first-child</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const g=d(r,[["render",c],["__file","css-selector.html.vue"]]);export{g as default};