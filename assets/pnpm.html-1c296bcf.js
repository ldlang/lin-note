import{_ as o,r as c,o as p,c as i,e as n,b as a,d,a as l}from"./app-0e033328.js";const t={},r={href:"https://www.pnpm.cn/",target:"_blank",rel:"noopener noreferrer"};function m(u,e){const s=c("ExternalLinkIcon");return p(),i("div",null,[e[2]||(e[2]=n(`<h1 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> pnpm</h1><h2 id="_1、动机" tabindex="-1"><a class="header-anchor" href="#_1、动机" aria-hidden="true">#</a> 1、动机</h2><h3 id="pnpm-相对于-npm-yarn-的优势" tabindex="-1"><a class="header-anchor" href="#pnpm-相对于-npm-yarn-的优势" aria-hidden="true">#</a> pnpm 相对于 npm/yarn 的优势</h3><ol><li><p>节省磁盘空间</p><ul><li>同一依赖包需要使用不同的版本，则仅有 版本之间不同的文件会被存储起来。</li><li>因为<code>pnpm</code>管理的包全部都在硬盘上的统一的位置。当安装软件包时， 其包含的所有文件都会硬链接自此位置，而不会占用 额外的硬盘空间。这让你可以在项目之间方便地共享相同版本的 依赖包。</li></ul></li><li><p>安装速度的提升</p><ul><li>pnpm 使用一种高效的算法来解析包的依赖关系,避免了不必要的重复解析。</li><li>它会在安装包时创建一个依赖关系图,并智能地重用已经解析过的包,从而加快了安装过程。</li></ul></li><li><p>创建非扁平化的<code>node_modules</code></p><p>当使用 npm 或 Yarn Classic 安装依赖包时，所有软件包都将被提升到 node_modules 的 根目录下。其结果是，源码可以访问 本不属于当前项目所设定的依赖包。默认情况下，pnpm 则是通过使用符号链接的方式仅将项目的直接依赖项添加到 <code>node_modules</code> 的根目录下。</p></li></ol><h2 id="_2、安装" tabindex="-1"><a class="header-anchor" href="#_2、安装" aria-hidden="true">#</a> 2、安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="固定项目的包管理器版本" tabindex="-1"><a class="header-anchor" href="#固定项目的包管理器版本" aria-hidden="true">#</a> 固定项目的包管理器版本</h3><p>在<code>nodev16.9.0</code>版本后就默认安装了，如果没有安装则手动全局安装即可</p><ul><li><p>全局安装<code>npm i -g corepack</code></p></li><li><p>启用关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启用</span>
corepack <span class="token builtin class-name">enable</span> <span class="token function">npm</span>
<span class="token comment"># 关闭</span>
corepack disable <span class="token function">npm</span>

<span class="token comment"># 启用</span>
corepack <span class="token builtin class-name">enable</span> <span class="token function">pnpm</span>
<span class="token comment"># 关闭</span>
corepack disable <span class="token function">pnpm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>固定项目的<code>pnpm</code>版本</p><p>默认固定当前正在使用的版本，固定之后<code>package.json</code>中就会回增加<code>packageManager</code>的配置项用于记录固定版本**&lt;包管理器名称&gt;@&lt;版本&gt;+&lt;哈希&gt;**，如果项目中的<code>pnpm</code>版本已经被固定了，那么再次执行这个命令会将固定的版本改为当前全局最新的版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>corepack use pnpm@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="查询-pnpm-安装的位置" tabindex="-1"><a class="header-anchor" href="#查询-pnpm-安装的位置" aria-hidden="true">#</a> 查询 pnpm 安装的位置</h3><p>在<code>git bash</code>中执行<code>which pnpm</code>即可得到安装的位置路径。</p><h3 id="故障排查" tabindex="-1"><a class="header-anchor" href="#故障排查" aria-hidden="true">#</a> 故障排查</h3><p>在执行<code>pnpm install</code>报错时，先查询<code>pnpm</code>安装的位置，然后删除所有关于<code>pnpm</code>文件，重新安转<code>pnpm</code>即可。</p><h2 id="_3、pnpm-cli" tabindex="-1"><a class="header-anchor" href="#_3、pnpm-cli" aria-hidden="true">#</a> 3、pnpm cli</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ol><li><p><code>-C &lt;path&gt;</code>和<code>--dir &lt;path&gt;</code></p><p>两者是等价的，用于将包安装到指定的<code>path</code>下面，或者运行指定目录下面的命令。</p><ul><li><p>把包安装到指定目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将包安装到packages/components下，前提是这个文件也是一个包，有自己的package.json</span>
<span class="token function">pnpm</span> <span class="token function">add</span> axios <span class="token parameter variable">-C</span> packages/components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行指定包下面的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行example目录下面package.json配置build命令</span>
<span class="token function">pnpm</span> <span class="token parameter variable">-C</span> example build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>-w</code></p><p>执行<code>pnpm</code>是在根目录，而不是当前目录，就是你在<code>packages/components</code>开了终端要安装包，那么加入<code>-w</code>就会安装到根目录的包中，而不是安装在<code>packages/components</code>文件的包中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 无论在包任何目录下执行该命令，都会将包安装到根目录下面</span>
<span class="token function">pnpm</span> remove axios <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4、cli-命令" tabindex="-1"><a class="header-anchor" href="#_4、cli-命令" aria-hidden="true">#</a> 4、CLI 命令</h2>`,17)),a("p",null,[e[1]||(e[1]=d("**注意： ** 部分命令的配置项并不全，因为不是经常用到，查看其他配置项，参考")),a("a",r,[e[0]||(e[0]=d("官网")),l(s)])]),e[3]||(e[3]=n(`<h3 id="pnpm-add-pkg" tabindex="-1"><a class="header-anchor" href="#pnpm-add-pkg" aria-hidden="true">#</a> pnpm add &lt;pkg&gt;</h3><p>安装依赖包，默认情况安装为生产的依赖包</p><table><thead><tr><th>命令</th><th>含义</th></tr></thead><tbody><tr><td><code>pnpm add sax</code></td><td>保存到 <code>dependencies</code> 配置项下</td></tr><tr><td><code>pnpm add -D sax</code></td><td>保存到 <code>devDependencies</code> 配置项下</td></tr><tr><td><code>pnpm add -O sax</code></td><td>保存到 <code>optionalDependencies</code> 配置项下</td></tr><tr><td><code>pnpm add -g sax</code></td><td>安装软件包到全局环境中</td></tr><tr><td><code>pnpm add sax@next</code></td><td>安装标记为 <code>next</code> 的版本</td></tr><tr><td><code>pnpm add sax@3.0.0</code></td><td>安装指定版本 <code>3.0.0</code></td></tr><tr><td><code>pnpm add react@&quot;&gt;=0.1.0 &lt;0.2.0&quot;</code></td><td>安装<code>react</code> 包的版本将会在 <code>0.1.0</code> 和 <code>0.2.0</code> 之间，但不包括 <code>0.2.0</code></td></tr></tbody></table><ol><li><p>从 npm 注册表中安装包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>从本地文件系统上安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装压缩包</span>
<span class="token function">pnpm</span> <span class="token function">add</span> ./package.tar.gz
<span class="token comment"># 安装一个目录</span>
<span class="token function">pnpm</span> <span class="token function">add</span> ./some-directory
<span class="token comment"># 将E盘下面的lin-note作为包安装进来</span>
<span class="token function">pnpm</span> <span class="token function">add</span> E:<span class="token punctuation">\\</span>lin-note
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装远端的压缩包</p><p>URL 必须是一个以 &quot;http://&quot; 或 &quot;https://&quot; 开头的网络地址。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> https://github.com/indexzero/forever/tarball/v0.5.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>从 git 仓库安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将仓库的dev分支作为库引入</span>
<span class="token function">pnpm</span> <span class="token function">add</span> git+https://gitee.com/linda-lang/vue3-ts-base.git<span class="token comment">#dev</span>

<span class="token comment"># 将仓库的指定commit作为库引入</span>
<span class="token function">pnpm</span> <span class="token function">add</span> git+https://gitee.com/linda-lang/vue3-ts-base.git<span class="token comment">#4a9d4642e70cb4069a883fe8407c8faa1284a1cc</span>

<span class="token comment"># 也可以使用用户名+仓库名的方式安装，但是要配置ssh</span>
<span class="token function">pnpm</span> <span class="token function">add</span> git+ldlang/lin-admin<span class="token comment">#master</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置项</p><ul><li><code>--save-prod, -P</code>，安装指定的软件包并添加到 <code>dependencies</code> （生产依赖）配置项中。</li><li><code>--save-dev, -D</code>，安装指定的软件包并添加到 <code>devDependencies</code> （开发依赖）配置项中。</li><li><code>--save-optional, -O</code>，安装指定的软件包并添加到 <code>optionalDependencies</code> （可选依赖）配置项中。</li><li><code>--save-exact, -E</code>，保存的依赖项将使用确切的版本进行配置，而不是使用 pnpm 的默认 semver 范围运算符。</li><li><code>--save-peer</code>，使用 <code>--save-peer</code> 会添加一个或多个包并将它们 <code>peerDependencies</code> 作为开发依赖项安装。</li><li><code>--ignore-workspace-root-check</code>，除非使用 <code>--ignore-workspace-root-check</code> or <code>-w</code> 标志，否则向根工作区包添加新依赖项将失败。</li><li><code>--global, -g</code>，将软件包安装都全局环境中。</li><li><code>--workspace</code>，仅添加能在 workspace 中找到的依赖包。</li></ul></li></ol><h3 id="pnpm-install" tabindex="-1"><a class="header-anchor" href="#pnpm-install" aria-hidden="true">#</a> pnpm install</h3><p>安装所有依赖包</p><p><strong>别名：</strong> <code>i</code></p><table><thead><tr><th>Command</th><th>Meaning</th></tr></thead><tbody><tr><td><code>pnpm i --offline</code></td><td>仅从本地缓存中安装，但本地缓存中要有才行</td></tr><tr><td><code>pnpm i --frozen-lockfile</code></td><td>不更新 <code>pnpm-lock.yaml</code></td></tr><tr><td><code>pnpm i --lockfile-only</code></td><td>只更新 <code>pnpm-lock.yaml</code></td></tr></tbody></table><p><strong>配置项</strong></p><ul><li><code>--force</code>，强制重新安装依赖：重新获取并修改缓存中的包，由不兼容版本的 pnpm 重新创建的 lock 文件和（或）模块目录。 安装所有 optionalDependencies，即使它们不满足当前环境。</li><li><code>-offline</code>，pnpm 会仅使用已经在缓存中的包。 如果缓存中没有找不到这个包，那么就会安装失败。</li><li><code>--prefer-offline</code>，如果为 true，缺失的数据将会从服务器获取，并绕过缓存数据的过期检查。 想强制使用离线模式, 请使用 <code>--offline</code>。</li><li><code>--prod, -P</code>，如果环境变量中<code>NODE_ENV</code>被设置为 production，那么 pnpm 不会安装任何属于 <code>devDependencies</code> 的包，如果有相关的包已经被安装了，则会清除这些包。 使用这个指令 pnpm 会忽略<code>NODE_ENV</code> ，强制 pnpm 以 production 的方式执行 install 命令。</li><li><code>--dev, -D</code>，仅安装<code>devDependencies</code>并删除已安装的<code>dependencies</code>，无论 <code>NODE_ENV</code>是什么。</li><li><code>--no-optional</code>，不安装 <code>optionalDependencies</code> 依赖。</li><li><code>--fix-lockfile</code>，自动修复损坏的 lock 文件入口。</li></ul><h3 id="pnpm-update" tabindex="-1"><a class="header-anchor" href="#pnpm-update" aria-hidden="true">#</a> pnpm update</h3><p><code>pnpm update</code> 根据指定的范围更新软件包的最新版本。在不带参数的情况下使用时，将更新所有依赖关系。</p><p><strong>别名：</strong> <code>up</code>, <code>upgrade</code></p><table><thead><tr><th>命令</th><th>意义</th></tr></thead><tbody><tr><td><code>pnpm up</code></td><td>更新所有依赖项，遵循 <code>package.json</code>指定的范围</td></tr><tr><td><code>pnpm up --latest</code></td><td>将所有依赖项更新到最新版本</td></tr><tr><td><code>pnpm up foo@2</code></td><td><code>foo</code> 更新到 v2 上的最新版本</td></tr><tr><td><code>pnpm up &quot;@babel/*&quot;</code></td><td>更新 <code>@babel</code> 范围内的所有依赖项</td></tr></tbody></table><p>例： 更新所有 <code>babel</code> 程序包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> update <span class="token string">&quot;@babel/*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新所有依赖项，除了 <code>axios</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> update <span class="token string">&quot;!axios&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>模式也可以组合，因此下一个命令将更新所有 <code>babel</code> 包，但以下情况除外 <code>core</code> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> update <span class="token string">&quot;@babel/*&quot;</span> <span class="token string">&quot;\\!@babel/core&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>配置项</strong></p><ul><li><code>--recursive, -r</code>，同时更新所有带有<code>package.json</code>的依赖包，任意深度的依赖项都会被更新</li><li><code>--latest, -L</code>，忽略在 <code>package.json</code> 中指定的版本范围。 相反，版本将被指定为 <code>latest</code> 被使用 (可能会导致跨主版本的升级) 。</li><li><code>--global, -g</code>，更新全局安装的依赖包。</li><li><code>--workspace</code>，尝试链接工作区中所有的包。 版本将更新至与工作区内的包匹配的版本。如果更新了特定的包，而在工作区内也找不到任何可更新的 依赖项，则命令将会失败。</li><li><code>--prod, -P</code>，仅更新在 <code>dependencies</code> 和 <code>optionalDependencies</code> 中的依赖项。</li><li><code>--dev, -D</code>，仅更新在 <code>devDependencies</code>中的依赖项。</li><li><code>--no-optional</code>，忽略在 <code>optionalDependencies</code> 中的依赖项。</li><li><code>--interactive, -i</code>，显示过时的依赖项并选择要更新的依赖项。</li></ul><h3 id="pnpm-remove" tabindex="-1"><a class="header-anchor" href="#pnpm-remove" aria-hidden="true">#</a> pnpm remove</h3><p>从 <code>node_modules</code> 目录下和 <code>package.json</code> 文件中删除软件包。</p><p><strong>别名：</strong> <code>rm</code>、<code>uninstall</code>、<code>un</code></p><p>**配置项： **</p><ul><li><code>--recursive, -r</code>，当不在 workspace 下使用时，将在 子目录下寻找所有软件包并删除指定的一个或多个依赖包。</li><li><code>--global, -g</code>，从全局环境中删除指定的软件包。</li><li><code>--prod, -P</code>，仅删除 <code>dependencies</code> 中列出的依赖包。</li><li><code>--dev, -D</code>，仅删除 <code>devDependencies</code> 中列出的依赖包。</li><li><code>--no-optional</code>，仅删除 <code>optionalDependencies</code> 中列出的依赖包。</li></ul><h3 id="pnpm-link" tabindex="-1"><a class="header-anchor" href="#pnpm-link" aria-hidden="true">#</a> pnpm link</h3><p>让当前目录下的软件包在系统范围内或其它位置都可访问。</p><p>作用：当你开发一个包的时候，又不想每次都传到<code>npm</code>上再下下来，就可以将包<code>link</code>到自己电脑的上，此时在你电脑任意一个项目里面再<code>link &lt;包名&gt;</code>即可使用刚刚的包。</p><p>**別名： ** <code>ln</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">link</span> <span class="token operator">&lt;</span>dir<span class="token operator">&gt;</span>
<span class="token function">pnpm</span> <span class="token function">link</span> <span class="token parameter variable">--global</span>
<span class="token function">pnpm</span> <span class="token function">link</span> <span class="token parameter variable">--global</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**配置项： **</p><p><code>--dir &lt;dir&gt;, -C</code>， 将链接的目标位置修改为 <code>&lt;dir&gt;</code>。</p><h3 id="pnpm-unlink" tabindex="-1"><a class="header-anchor" href="#pnpm-unlink" aria-hidden="true">#</a> pnpm unlink</h3><p>断开某个软件包在全局范围内的链接（与 <code>pnpm link</code> 命令的功能相反）。</p><p>如果不指定参数的话，当前项目下的所有已经链接的依赖项都将被切断链接。</p><h3 id="pnpm-audit" tabindex="-1"><a class="header-anchor" href="#pnpm-audit" aria-hidden="true">#</a> pnpm audit</h3><p>检查已安装包的已知安全问题。如果发现安全问题，请尝试通过 <code>pnpm update</code> 更新您的依赖项。 如果简单的更新不能解决所有问题，请使用 <code>overrides</code> 来强制使用 不易受攻击的版本，或者<code>pnpm audit --fix</code></p><h3 id="pnpm-list" tabindex="-1"><a class="header-anchor" href="#pnpm-list" aria-hidden="true">#</a> pnpm list</h3><p>此命令会以一个树形结构输出所有的已安装<code>package</code>的版本及其依赖。</p><p><strong>别名：</strong> <code>ls</code></p><h3 id="pnpm-outdated" tabindex="-1"><a class="header-anchor" href="#pnpm-outdated" aria-hidden="true">#</a> pnpm outdated</h3><p>检查过期的 <code>packages</code>。 此命令可以通过提供参数来限制为已安装 <code>packages</code>的一个子集(支持 <code>patterns</code>)</p>`,44))])}const v=o(t,[["render",m],["__file","pnpm.html.vue"]]);export{v as default};
