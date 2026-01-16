import{_ as s,o as a,c as t,e as p}from"./app-63ba67c3.js";const e={};function c(o,n){return a(),t("div",null,[...n[0]||(n[0]=[p(`<p>node.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node也是js的运行环境 但是无法调用dom、bom和ajax等的流浪器内置的api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如何用node运行js文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、打开js文件存放的位置
2、在终端使用 node+文件名 就可运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>快捷键</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tab 可以快速补全路径
esc 清空当前输入的命令
快捷命令
	els+回车，清空历史
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件的读取——fs文件系统模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>readFile
    <span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 引入fs模块</span>
    <span class="token comment">// 异步的方式</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">//第一个参数为路径，第二个为读取的编码格式（默认为utf8），第三个为回调函数</span>
    <span class="token comment">//如果不传&#39;utf8&#39;得到的结果是一个buffer，需要对结果调用toString()，才能转成文字</span>

readFileSync
    <span class="token comment">// 同步的方式</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">)</span>
    
createReadStream  流式读取
        <span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;./测试.mp4&#39;</span><span class="token punctuation">)</span>
		<span class="token comment">// 绑定data事件才能拿到数据</span>
        rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token comment">// 得到的是一些buffer</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// 绑定end事件，监听读取完成</span>
        rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;读取结束&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件的写入——fs模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>writeFile <span class="token comment">//异步</span>
	<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;很棒&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//第一个参数为路径，第二个参数为写入的内容，第三个为读取的编码格式（默认为utf8），第四个为回调函数</span>
	<span class="token comment">//写入的内容会把原来的替换掉，如果写入的路径没有那个文件，则会新建一个文件</span>

writeFileSync <span class="token comment">//同步</span>

appendFile 追加写入
    fs<span class="token punctuation">.</span><span class="token function">appendFile</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;很棒&#39;</span><span class="token parameter">，err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>            
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 异步的方法</span>
    <span class="token function">appendFileSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//同步的方法</span>

createWriteStream 文件流的写入

	<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;./测试.txt&#39;</span><span class="token punctuation">)</span><span class="token comment">//要写入的文件，没有则会自动创建</span>
    ws<span class="token punctuation">.</span>write（<span class="token string">&#39;你好&#39;</span>）
    ws<span class="token punctuation">.</span>write（<span class="token string">&#39;很棒&#39;</span>）
	ws<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//结束写入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件读取写入练习，复制一份文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>通过流式读取和写入的方式 <span class="token comment">//效率更高</span>
	<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;./测试.mp4&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ws <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;./ceshi.mp4&#39;</span><span class="token punctuation">)</span>
    rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        ws<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;读取结束&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

	ws<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token comment">//简单写法，不常用</span>
通过同步的方式
	<span class="token keyword">let</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./ceshi.mp4&#39;</span><span class="token punctuation">)</span>
	fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./ceshi1.mp4&#39;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件的移动与重命名——fs模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>rename <span class="token comment">// 异步的方式</span>
	如果原路径与新路径相同那么就是重命名，否则就是移动并且重命名
	<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
    fs<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./text.txt&#39;</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//，参数：(原路径，新路径，回调)</span>

renameSync <span class="token comment">//同步的方式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件的删除——fs模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>unlink 
	<span class="token comment">//异步 文件的删除</span>
	fs<span class="token punctuation">.</span><span class="token function">unlink</span><span class="token punctuation">(</span><span class="token string">&#39;./ceshi.mp4&#39;</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

unlinkSync<span class="token comment">// 同步 文件的删除</span>

rm  
	<span class="token comment">//异步 文件的删除，同时也能删除文件夹</span>
    fs<span class="token punctuation">.</span><span class="token function">rm</span><span class="token punctuation">(</span><span class="token string">&#39;./ceshi1.mp4&#39;</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

rmSync<span class="token comment">// 同步 文件的删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作文件夹——fs模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mkdir 
	<span class="token comment">//新建文件夹</span>
	创建单个文件夹
    fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

	创建递归文件夹
    fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token string">&#39;./a/b/c&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">recursive</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//recursive:true开启递归模式</span>

readdir 
	<span class="token comment">//读取文件夹</span>
	fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">&#39;../node&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//放回一个数组，里面包含了文件夹下面所有的文件名</span>

rmdir 
	<span class="token comment">//删除文件夹</span>
	fs<span class="token punctuation">.</span><span class="token function">rmdir</span><span class="token punctuation">(</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//只有文件夹a里面是空的才能删除</span>

	fs<span class="token punctuation">.</span><span class="token function">rmdir</span><span class="token punctuation">(</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">recursive</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//无论文件夹a里面是不是空的都能删除</span>
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看文件信息——fs模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>stat
	查看文件得到信息，如大小，创建事件，修改时间等
    fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span><span class="token string">&#39;./ceshi2.mp4&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

isFile
	看是不是一个文件
    
isDirectory
	看是不是一个文件文件夹
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>__dirname</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>__dirname 保存的是所在文件的所在目录的绝对路径，说白了就是你写代码这个文件的相对路径
node有一个特性，会在终端的目录下运行代码，导致文件路径不对，此时路径前面加上__dirname路径就一定不会出错了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>join小技巧</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> join将数组转换为字符串
     let arr = [1,2,3,6,5,6]
     console.log(arr.join(&#39;\\r\\n&#39;)); // 打印的结果是每一个数字占一行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>path路径模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 拼接路径
	fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname，<span class="token string">&#39;/test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;很棒&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>会抵消前一个路径 
		<span class="token literal-property property">例</span><span class="token operator">:</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/b&#39;</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span><span class="token punctuation">,</span><span class="token string">&#39;/c&#39;</span><span class="token punctuation">)</span> <span class="token comment">//结果/a/c,/b被后面的../抵消了</span>
	<span class="token comment">//这样拼接的路径会减少很多问题</span>

basename 读取路径的最后一段，也就是文件名
    <span class="token keyword">const</span> newPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;./text/index.html&#39;</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// index.html</span>
     
    <span class="token keyword">const</span> newPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;./text/index.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;tml&#39;</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// index.h会把匹配到第二个参数的内容干掉</span>

extname 读取文件的扩展名
	<span class="token keyword">const</span> newPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;./text/index.html&#39;</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newPath<span class="token punctuation">)</span><span class="token comment">//.html</span>

动态路径问题
	使用__dirname解决
    	__dirname表示当前目录
        fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>__dirname<span class="token operator">+</span><span class="token string">&#39;/test.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;很棒&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//此时无论在哪执行，都不会路径报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>buffer模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、创建buffer
    <span class="token number">1</span>、alloc（安全但是效率不搞）
        <span class="token keyword">let</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        
    <span class="token number">2</span>、allocUnsafe（不是很安全但是效率高）
        <span class="token keyword">let</span> buf2 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">allocUnsafe</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
        
    <span class="token number">3</span>、from
        <span class="token keyword">let</span> buf3 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>

<span class="token number">2</span>、buffer与字符串的装换
	<span class="token keyword">let</span> buf5 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">105</span><span class="token punctuation">,</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token number">118</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">,</span><span class="token number">121</span><span class="token punctuation">,</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	buf5<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//默认转换编码为utf-8</span>

<span class="token number">3</span>、操作buffer
	<span class="token keyword">let</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
    buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">95</span><span class="token comment">//就能将h变成_</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抓取请求包软件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://www.telerik.com/fiddler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建服务对象</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建服务对象</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    request<span class="token punctuation">.</span>method <span class="token comment">//获取请求方法</span>
    request<span class="token punctuation">.</span>url <span class="token comment">// 获取请求的地址，只能拿到请求路径上的字符串</span>
    request<span class="token punctuation">.</span>headers <span class="token comment">// 获取请求头</span>
    request<span class="token punctuation">.</span>httpVersion <span class="token comment">// 获取http协议版本</span>

    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;application/json;charset:utf-8&#39;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;你好&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 监听端口，启动服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务启动了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    
     response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;application/json;charset:utf-8&#39;</span><span class="token punctuation">)</span><span class="token comment">//设置编码模式，能够解析中文</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;hello node&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 返回响应结果</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 监听端口，启动服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务启动了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取请求的内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>获取请求体内容
    <span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> body <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span><span class="token parameter">chunk</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            body <span class="token operator">+=</span> chunk
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//得到的就是请求体</span>
            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

获取请求的路径，以及查询参数
    <span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span> <span class="token comment">// url模块</span>
    <span class="token comment">// 创建服务对象</span>
    <span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// 请求的路径：http://127.0.0.1/search?keys=5</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//提取查询的路径,第二个参数会让query变成一个对象，也就是查询的字符串变成一个对象</span>
        <span class="token comment">// 路径</span>
        pathName <span class="token operator">=</span> res<span class="token punctuation">.</span>pathname
        <span class="token keyword">let</span> keys <span class="token operator">=</span> res<span class="token punctuation">.</span>query<span class="token punctuation">.</span>keys
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathName<span class="token punctuation">,</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;查询成功了&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 监听端口，启动服务</span>
    server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务启动了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应设置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> parse <span class="token punctuation">}</span> <span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建服务对象</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span>response</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    response<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">// 设置响应状态码</span>
    response<span class="token punctuation">.</span>statusMessage <span class="token operator">=</span> <span class="token string">&#39;成功了&#39;</span>   <span class="token comment">// 设置响应状态描述</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;serves&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">)</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;love&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 可以设置重复响应头的key，value分别是后面的值</span>

    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;响应的结果&#39;</span><span class="token punctuation">)</span> 
    response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;响应的结果&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 可以返回多次响应结果</span>
    response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;响应的结果&#39;</span><span class="token punctuation">)</span><span class="token comment">//必须有end结束响应</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 监听端口，启动服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务启动了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭指定端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打开电脑搜索 资源监视器 ===&gt; 网络 ===&gt; 侦听端口 ===&gt; 找到对应服务的pid ===&gt; 打开资源管理器找到对应pid然后结束他的服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>暴露与导入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>暴露方式与引入方式
	home<span class="token punctuation">.</span>js暴露
        <span class="token keyword">function</span> <span class="token function">home</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
            home
        <span class="token punctuation">}</span>
        exports<span class="token punctuation">.</span>home <span class="token operator">=</span> home
        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> home

	index<span class="token punctuation">.</span>js引入 <span class="token comment">// 分别对应上面的三种暴露方式</span>
	<span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./home&#39;</span><span class="token punctuation">)</span>
    me<span class="token punctuation">.</span><span class="token function">home</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 运行函数</span>
	me<span class="token punctuation">.</span><span class="token function">home</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 运行函数</span>
	<span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 运行函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm——包管理工具</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm init
	将一个文件夹初始化为一个<span class="token punctuation">[</span>包<span class="token punctuation">]</span>
	
npm init <span class="token operator">-</span>y 
	全部以默认值来创建一个包
	
<span class="token operator">**</span><span class="token operator">**</span>注意事项
	包的名字不能有中文，不能有大写字母
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发依赖和生产依赖</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i <span class="token operator">-</span><span class="token constant">S</span> axios
	安装的就是生产依赖，会安装到<span class="token keyword">package</span><span class="token punctuation">.</span>json的dependencies里<span class="token punctuation">,</span>即使不加<span class="token operator">-</span><span class="token constant">S</span>默认的使用npm i axios也是等于加入了<span class="token operator">-</span><span class="token constant">S</span>
	
npm i <span class="token operator">-</span><span class="token constant">D</span> less
	安装的就是开发环境，会安装到<span class="token keyword">package</span><span class="token punctuation">.</span>json的devDependencies里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nodemon</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>能够热启动node服务，不用每次修改代码再去重启服务

使用：
	<span class="token number">1</span>、全局安装
		npm i <span class="token operator">-</span>g nodemon <span class="token comment">// 加入-g就是全局安装</span>
	<span class="token number">2</span>、使用
		使用nodemon替换node去启动服务
			例：nodemon <span class="token punctuation">.</span><span class="token operator">/</span>index<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm root -g</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看已安装的全局包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>npm r 或 npm remove</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>卸载包
npm r -g nodemon 卸载全局包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义启动命令</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、配置命令
    <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./javaScript.js&quot;</span> <span class="token comment">// 自定义的命令 serve可以随便取</span>
        <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./javaScript.js&quot;</span> <span class="token comment">// 特殊自定义的命令</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token number">2</span>、使用
	npm run serve <span class="token operator">===</span><span class="token operator">&gt;</span>是刚刚配置的自定义的
	npm start 不用加run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52)])])}const l=s(e,[["render",c],["__file","node.js.html.vue"]]);export{l as default};
