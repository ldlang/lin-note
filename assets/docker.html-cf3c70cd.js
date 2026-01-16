import{_ as r,r as i,o as d,c as o,e as a,b as n,d as t,a as l}from"./app-63ba67c3.js";const c="/lin-note/docker/commands.png",u="/lin-note/docker/data.png",m={},p={style:{"text-align":"left"}},v={href:"https://docs.docker.com/engine/reference/commandline/pull/",target:"_blank",rel:"noopener noreferrer"},b={style:{"text-align":"left"}},k={href:"https://docs.docker.com/engine/reference/commandline/push/",target:"_blank",rel:"noopener noreferrer"},g={style:{"text-align":"left"}},f={href:"https://docs.docker.com/engine/reference/commandline/images/",target:"_blank",rel:"noopener noreferrer"},y={style:{"text-align":"left"}},x={href:"https://docs.docker.com/engine/reference/commandline/rmi/",target:"_blank",rel:"noopener noreferrer"},h={style:{"text-align":"left"}},q={href:"https://docs.docker.com/engine/reference/commandline/run/",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"left"}},S={href:"https://docs.docker.com/engine/reference/commandline/stop/",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"left"}},R={href:"https://docs.docker.com/engine/reference/commandline/start/",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"left"}},D={href:"https://docs.docker.com/engine/reference/commandline/restart/",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"left"}},P={href:"https://docs.docker.com/engine/reference/commandline/rm/",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"left"}},T={href:"https://docs.docker.com/engine/reference/commandline/ps/",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"left"}},V={href:"https://docs.docker.com/engine/reference/commandline/logs/",target:"_blank",rel:"noopener noreferrer"},w={style:{"text-align":"left"}},A={href:"https://docs.docker.com/engine/reference/commandline/exec/",target:"_blank",rel:"noopener noreferrer"},Y={style:{"text-align":"left"}},_={href:"https://docs.docker.com/engine/reference/commandline/save/",target:"_blank",rel:"noopener noreferrer"},j={style:{"text-align":"left"}},Q={href:"https://docs.docker.com/engine/reference/commandline/load/",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"left"}},C={href:"https://docs.docker.com/engine/reference/commandline/inspect/",target:"_blank",rel:"noopener noreferrer"},F={style:{"text-align":"left"}},U={href:"https://docs.docker.com/engine/reference/commandline/volume_create/",target:"_blank",rel:"noopener noreferrer"},W={style:{"text-align":"left"}},X={href:"https://docs.docker.com/engine/reference/commandline/volume_ls/",target:"_blank",rel:"noopener noreferrer"},Z={style:{"text-align":"left"}},z={href:"https://docs.docker.com/engine/reference/commandline/volume_prune/",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"left"}},H={href:"https://docs.docker.com/engine/reference/commandline/volume_inspect/",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"left"}},K={href:"https://docs.docker.com/engine/reference/commandline/volume_prune/",target:"_blank",rel:"noopener noreferrer"};function $(ee,e){const s=i("ExternalLinkIcon");return d(),o("div",null,[e[62]||(e[62]=a(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="_1、docke安装" tabindex="-1"><a class="header-anchor" href="#_1、docke安装" aria-hidden="true">#</a> 1、docke安装</h2><h3 id="验证并卸载旧版" tabindex="-1"><a class="header-anchor" href="#验证并卸载旧版" aria-hidden="true">#</a> 验证并卸载旧版</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
    docker-client <span class="token punctuation">\\</span>
    docker-client-latest <span class="token punctuation">\\</span>
    docker-common <span class="token punctuation">\\</span>
    docker-latest <span class="token punctuation">\\</span>
    docker-latest-logrotate <span class="token punctuation">\\</span>
    docker-logrotate <span class="token punctuation">\\</span>
    docker-engine <span class="token punctuation">\\</span>
    docker-selinux 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置docker的yum库" tabindex="-1"><a class="header-anchor" href="#配置docker的yum库" aria-hidden="true">#</a> 配置Docker的yum库</h3><ol><li><p>首先要安装一个yum工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置Docker的yum源（阿里云）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment"># 忽略</span>
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s+download.docker.com+mirrors.aliyun.com/docker-ce+&#39;</span> /etc/yum.repos.d/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更新yum，建立缓存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>udo yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h3><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker" aria-hidden="true">#</a> 启动docker</h3><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置docker的镜像加速" tabindex="-1"><a class="header-anchor" href="#配置docker的镜像加速" aria-hidden="true">#</a> 配置docker的镜像加速</h3><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 创建目录
mkdir -p /etc/docker

# 复制内容
tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
    &quot;registry-mirrors&quot;: [
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://mirrors.tuna.tsinghua.edu.cn&quot;,
        &quot;http://mirrors.sohu.com&quot;,
        &quot;https://ustc-edu-cn.mirror.aliyuncs.com&quot;,
        &quot;https://ccr.ccs.tencentyun.com&quot;,
        &quot;https://docker.m.daocloud.io&quot;,
        &quot;https://docker.awsl9527.cn&quot;
    ]
}
EOF

# 重新加载配置
systemctl daemon-reload

# 重启Docker
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、命令解析" tabindex="-1"><a class="header-anchor" href="#_2、命令解析" aria-hidden="true">#</a> 2、命令解析</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123</span> <span class="token punctuation">\\</span>
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>docker run</p><p>创建并运行一个容器</p><p>-d 让容器在后台运行</p></li><li><p>--name mysql</p><p>给容器起个名字，必须是唯一的</p></li><li><p>-p 3306:3306</p><p>端口映射，由于mysql只是docker开辟的一个容器，mysql都相当于是一个系统，他有自己的网络和环境，相当于是一个独立的系统，所以外部要连接mysql要先连接docker才能在连接到mysql，因此前一个3306是docker开辟的端口，后一个3306是docker要连接mysql的端口，前后端口可以不一致。</p></li><li><p>-e</p><p>设置环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置root的密码为123</span>
<span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mysql</p><p>指定运行的镜像的名字</p></li></ul><h2 id="_3、常见命令" tabindex="-1"><a class="header-anchor" href="#_3、常见命令" aria-hidden="true">#</a> 3、常见命令</h2><p><img src="`+c+'" alt="常见命令"></p>',17)),n("table",null,[e[45]||(e[45]=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},[n("strong",null,"命令")]),n("th",{style:{"text-align":"left"}},[n("strong",null,"说明")]),n("th",{style:{"text-align":"left"}},[n("strong",null,"文档地址")])])],-1)),n("tbody",null,[n("tr",null,[e[1]||(e[1]=n("td",{style:{"text-align":"left"}},"docker pull",-1)),e[2]||(e[2]=n("td",{style:{"text-align":"left"}},"拉取镜像",-1)),n("td",p,[n("a",v,[e[0]||(e[0]=t("docker pull",-1)),l(s)])])]),n("tr",null,[e[4]||(e[4]=n("td",{style:{"text-align":"left"}},"docker push",-1)),e[5]||(e[5]=n("td",{style:{"text-align":"left"}},"推送镜像到DockerRegistry",-1)),n("td",b,[n("a",k,[e[3]||(e[3]=t("docker push",-1)),l(s)])])]),n("tr",null,[e[7]||(e[7]=n("td",{style:{"text-align":"left"}},"docker images",-1)),e[8]||(e[8]=n("td",{style:{"text-align":"left"}},"查看本地镜像",-1)),n("td",g,[n("a",f,[e[6]||(e[6]=t("docker images",-1)),l(s)])])]),n("tr",null,[e[10]||(e[10]=n("td",{style:{"text-align":"left"}},"docker rmi",-1)),e[11]||(e[11]=n("td",{style:{"text-align":"left"}},"删除本地镜像",-1)),n("td",y,[n("a",x,[e[9]||(e[9]=t("docker rmi",-1)),l(s)])])]),n("tr",null,[e[13]||(e[13]=n("td",{style:{"text-align":"left"}},"docker run",-1)),e[14]||(e[14]=n("td",{style:{"text-align":"left"}},"创建并运行容器（不能重复创建）",-1)),n("td",h,[n("a",q,[e[12]||(e[12]=t("docker run",-1)),l(s)])])]),n("tr",null,[e[16]||(e[16]=n("td",{style:{"text-align":"left"}},"docker stop",-1)),e[17]||(e[17]=n("td",{style:{"text-align":"left"}},"停止指定容器",-1)),n("td",O,[n("a",S,[e[15]||(e[15]=t("docker stop",-1)),l(s)])])]),n("tr",null,[e[19]||(e[19]=n("td",{style:{"text-align":"left"}},"docker start",-1)),e[20]||(e[20]=n("td",{style:{"text-align":"left"}},"启动指定容器",-1)),n("td",E,[n("a",R,[e[18]||(e[18]=t("docker start",-1)),l(s)])])]),n("tr",null,[e[22]||(e[22]=n("td",{style:{"text-align":"left"}},"docker restart",-1)),e[23]||(e[23]=n("td",{style:{"text-align":"left"}},"重新启动容器",-1)),n("td",N,[n("a",D,[e[21]||(e[21]=t("docker restart",-1)),l(s)])])]),n("tr",null,[e[25]||(e[25]=n("td",{style:{"text-align":"left"}},"docker rm",-1)),e[26]||(e[26]=n("td",{style:{"text-align":"left"}},"删除指定容器",-1)),n("td",B,[n("a",P,[e[24]||(e[24]=t("docs.docker.com",-1)),l(s)])])]),n("tr",null,[e[28]||(e[28]=n("td",{style:{"text-align":"left"}},"docker ps",-1)),e[29]||(e[29]=n("td",{style:{"text-align":"left"}},"查看运行中的容器，-a 所有容器",-1)),n("td",L,[n("a",T,[e[27]||(e[27]=t("docker ps",-1)),l(s)])])]),n("tr",null,[e[31]||(e[31]=n("td",{style:{"text-align":"left"}},"docker logs",-1)),e[32]||(e[32]=n("td",{style:{"text-align":"left"}},"查看容器运行日志",-1)),n("td",M,[n("a",V,[e[30]||(e[30]=t("docker logs",-1)),l(s)])])]),n("tr",null,[e[34]||(e[34]=n("td",{style:{"text-align":"left"}},"docker exec",-1)),e[35]||(e[35]=n("td",{style:{"text-align":"left"}},"进入容器",-1)),n("td",w,[n("a",A,[e[33]||(e[33]=t("docker exec",-1)),l(s)])])]),n("tr",null,[e[37]||(e[37]=n("td",{style:{"text-align":"left"}},"docker save",-1)),e[38]||(e[38]=n("td",{style:{"text-align":"left"}},"保存镜像到本地压缩文件",-1)),n("td",Y,[n("a",_,[e[36]||(e[36]=t("docker save",-1)),l(s)])])]),n("tr",null,[e[40]||(e[40]=n("td",{style:{"text-align":"left"}},"docker load",-1)),e[41]||(e[41]=n("td",{style:{"text-align":"left"}},"加载本地压缩文件到镜像",-1)),n("td",j,[n("a",Q,[e[39]||(e[39]=t("docker load",-1)),l(s)])])]),n("tr",null,[e[43]||(e[43]=n("td",{style:{"text-align":"left"}},"docker inspect",-1)),e[44]||(e[44]=n("td",{style:{"text-align":"left"}},"查看容器详细信息",-1)),n("td",I,[n("a",C,[e[42]||(e[42]=t("docker inspect",-1)),l(s)])])])])]),e[63]||(e[63]=n("h2",{id:"_4、数据卷",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4、数据卷","aria-hidden":"true"},"#"),t(" 4、数据卷")],-1)),e[64]||(e[64]=n("p",null,"数据卷是一个虚拟的目录，是容器内目录与宿主机目录之间映射的桥梁。",-1)),e[65]||(e[65]=n("h3",{id:"如何创建数据卷",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何创建数据卷","aria-hidden":"true"},"#"),t(" 如何创建数据卷")],-1)),e[66]||(e[66]=n("blockquote",null,[n("p",null,[t("容器与数据卷的挂载要在创建容器时配置，对于创建好的容器，是不能设置数据卷的。而且"),n("strong",null,"创建容器的过程中，数据卷会自动创建"),t("。")])],-1)),n("table",null,[e[61]||(e[61]=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},[n("strong",null,"命令")]),n("th",{style:{"text-align":"left"}},[n("strong",null,"说明")]),n("th",{style:{"text-align":"left"}},[n("strong",null,"文档地址")])])],-1)),n("tbody",null,[n("tr",null,[e[47]||(e[47]=n("td",{style:{"text-align":"left"}},"docker volume create",-1)),e[48]||(e[48]=n("td",{style:{"text-align":"left"}},"创建数据卷",-1)),n("td",F,[n("a",U,[e[46]||(e[46]=t("docker volume create",-1)),l(s)])])]),n("tr",null,[e[50]||(e[50]=n("td",{style:{"text-align":"left"}},"docker volume ls",-1)),e[51]||(e[51]=n("td",{style:{"text-align":"left"}},"查看所有数据卷",-1)),n("td",W,[n("a",X,[e[49]||(e[49]=t("docs.docker.com",-1)),l(s)])])]),n("tr",null,[e[53]||(e[53]=n("td",{style:{"text-align":"left"}},"docker volume rm",-1)),e[54]||(e[54]=n("td",{style:{"text-align":"left"}},"删除指定数据卷",-1)),n("td",Z,[n("a",z,[e[52]||(e[52]=t("docs.docker.com",-1)),l(s)])])]),n("tr",null,[e[56]||(e[56]=n("td",{style:{"text-align":"left"}},"docker volume inspect",-1)),e[57]||(e[57]=n("td",{style:{"text-align":"left"}},"查看某个数据卷的详情",-1)),n("td",G,[n("a",H,[e[55]||(e[55]=t("docs.docker.com",-1)),l(s)])])]),n("tr",null,[e[59]||(e[59]=n("td",{style:{"text-align":"left"}},"docker volume prune",-1)),e[60]||(e[60]=n("td",{style:{"text-align":"left"}},"清除数据卷",-1)),n("td",J,[n("a",K,[e[58]||(e[58]=t("docker volume prune",-1)),l(s)])])])])]),e[67]||(e[67]=a(`<div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre class="language-PowerShell"><code># 1.首先创建容器并指定数据卷，注意通过 -v 参数来指定数据卷
docker run -d --name nginx -p 80:80 -v html:/usr/share/nginx/html nginx

# 2.然后查看数据卷
docker volume ls
# 结果
DRIVER    VOLUME NAME
local     29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f
local     html

# 3.查看数据卷详情
docker volume inspect html
# 结果
[
    {
        &quot;CreatedAt&quot;: &quot;2024-05-17T19:57:08+08:00&quot;,
        &quot;Driver&quot;: &quot;local&quot;,
        &quot;Labels&quot;: null,
        &quot;Mountpoint&quot;: &quot;/var/lib/docker/volumes/html/_data&quot;,
        &quot;Name&quot;: &quot;html&quot;,
        &quot;Options&quot;: null,
        &quot;Scope&quot;: &quot;local&quot;
    }
]

# 4.查看/var/lib/docker/volumes/html/_data目录
ll /var/lib/docker/volumes/html/_data
# 可以看到与nginx的html目录内容一样，结果如下：
总用量 8
-rw-r--r--. 1 root root 497 12月 28 2021 50x.html
-rw-r--r--. 1 root root 615 12月 28 2021 index.html

# 5.进入该目录，并随意修改index.html内容
cd /var/lib/docker/volumes/html/_data
vi index.html

# 6.打开页面，查看效果

# 7.进入容器内部，查看/usr/share/nginx/html目录内的文件是否变化
docker exec -it nginx bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="数据卷"></p><h3 id="挂载本地目录" tabindex="-1"><a class="header-anchor" href="#挂载本地目录" aria-hidden="true">#</a> 挂载本地目录</h3><ul><li>挂载<code>/root/mysql/data</code>到容器内的<code>/var/lib/mysql</code>目录</li><li>挂载<code>/root/mysql/init</code>到容器内的<code>/docker-entrypoint-initdb.d</code>目录（初始化的SQL脚本目录）</li><li>挂载<code>/root/mysql/conf</code>到容器内的<code>/etc/mysql/conf.d</code>目录（这个是MySQL配置文件目录）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.删除原来的MySQL容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> mysql

<span class="token comment"># 2.进入root目录</span>
<span class="token builtin class-name">cd</span> ~

<span class="token comment"># 3.创建并运行新mysql容器，挂载本地目录</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> ./mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> ./mysql/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> ./mysql/init:/docker-entrypoint-initdb.d <span class="token punctuation">\\</span>
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、dockerfile" tabindex="-1"><a class="header-anchor" href="#_5、dockerfile" aria-hidden="true">#</a> 5、Dockerfile</h2><table><thead><tr><th style="text-align:left;"><strong>指令</strong></th><th style="text-align:left;"><strong>说明</strong></th><th style="text-align:left;"><strong>示例</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><strong>FROM</strong></td><td style="text-align:left;">指定基础镜像</td><td style="text-align:left;"><code>FROM centos:6</code></td></tr><tr><td style="text-align:left;"><strong>ENV</strong></td><td style="text-align:left;">设置环境变量，可在后面指令使用</td><td style="text-align:left;"><code>ENV key value</code></td></tr><tr><td style="text-align:left;"><strong>COPY</strong></td><td style="text-align:left;">拷贝本地文件到镜像的指定目录</td><td style="text-align:left;"><code>COPY ./xx.jar /tmp/app.jar</code></td></tr><tr><td style="text-align:left;"><strong>RUN</strong></td><td style="text-align:left;">执行Linux的shell命令，一般是安装过程的命令</td><td style="text-align:left;"><code>RUN yum install gcc</code></td></tr><tr><td style="text-align:left;"><strong>EXPOSE</strong></td><td style="text-align:left;">指定容器运行时监听的端口，是给镜像使用者看的</td><td style="text-align:left;">EXPOSE 8080</td></tr><tr><td style="text-align:left;"><strong>ENTRYPOINT</strong></td><td style="text-align:left;">镜像中应用的启动命令，容器运行时调用</td><td style="text-align:left;">ENTRYPOINT java -jar xx.jar</td></tr></tbody></table>`,7))])}const te=r(m,[["render",$],["__file","docker.html.vue"]]);export{te as default};
