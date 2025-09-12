import{_ as n,o as s,c as i,e as l}from"./app-343a20be.js";const a={};function d(t,e){return s(),i("div",null,[...e[0]||(e[0]=[l(`<p>启动与停止</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>net start mysql80
net stop mysql80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>连接数据库</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mysql <span class="token operator">-</span>h127<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token number">.1</span> <span class="token operator">-</span>p3306 <span class="token operator">-</span>u root <span class="token operator">-</span>p
mysql  <span class="token operator">-</span>u 账号 <span class="token operator">-</span>p 密码 <span class="token comment">//[-h127.0.0.1] [-p3306]可以省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Sql分类</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DDL		用来定义数据库对象（数据库，表，字段）
DML		数据的操作，用来对数据库表中的数据进行增删改查
DQL		数据库查询语言，用来查询数据库中表的记录
DCL		数据控制语言，用来创建数据库用户，控制数据库的访问权限

语句不区分大小写，语句结束时一定要记的加分号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DDL语句</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show databases;									显示所有的数据库
create databases 数据库名;	 					 创建一个数据库
create databases if not exists 数据库名; 		 如果创建的数据库名不存在，才创建
drop database test;								删除名为test的数据库
drop database if exists test; 					如果test存在就删除
use test;										使用test数据库
select database();								显示当前真正使用的数据库
show tables;									查询当前使用数据库的所有表
desc address; (address是当前数据中的一张表)		 查询到address的表结构

创建一张表
	 create table user_shop(
    	id int comment &#39;id&#39;, 字段名，字段类型，comment是可选的，后面的是对字段的说明；
        name varchar(50) comment &#39;姓名&#39;,
    	age int comment &#39;年龄&#39;
     )comment &#39;用户店铺表&#39;; 对整张表的说明
     注意：最后一个字段后面不能加&#39;,&#39;
     
show create table user_shop;				查询user_shop这张表的创建语句

新增字段
	alter table user_shop add nickname varchar(20) comment &#39;昵称&#39;; 向user_shop添		加一个nickname的字段，注释为昵称；
	
修改字段名
	alter table user_shop change nickname username varchar(30) comment &#39;昵称&#39;;将		字段名nickname修改为username，同时将varchar修改为(30)
	
	alter table user_shop modify nickname char(30); 修改字段类型
	
删除字段
	 alter table user_shop drop username; 删除user_shop表下面的username字段
	 
重命名表名
	 alter table user_shop rename to usershop; 将表名user_shop修改为usershop

删除表
	drop table if exists user_shop  删除user_shop表
	
删除表，并创建一个同名的表
	truncate table user_shop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据类型</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>具体参考https://www.runoob.com/mysql/mysql-data-types.html

数值类型
    TINYINT			1 Bytes		小整数值
    SMALLINT		2 Bytes		大整数值
    MEDIUMINT		3 Bytes		大整数值
    INT或INTEGER		4 Byte	   大整数值
    BIGINT			8 Bytes		极大整数值
    FLOAT			4 Bytes		单精度浮点数值
    DOUBLE			8 Bytes		双精度浮点数值
    DECIMAL	对DECIMAL(M,D) ，如果M&gt;D，为M+2否则为D+2	小数值

字符串类型
    CHAR		0-255 bytes				定长字符串
    VARCHAR		0-65535 bytes			变长字符串
    TINYBLOB	0-255 bytes				不超过 255 个字符的二进制字符串
    TINYTEXT	0-255 bytes				短文本字符串
    BLOB		0-65 535 bytes			二进制形式的长文本数据
    TEXT		0-65 535 bytes			长文本数据
    MEDIUMBLOB	0-16 777 215 bytes		二进制形式的中等长度文本数据
    MEDIUMTEXT	0-16 777 215 bytes		中等长度文本数据
    LONGBLOB	0-4 294 967 295 bytes	二进制形式的极大文本数据
    LONGTEXT	0-4 294 967 295 bytes	极大文本数据

日期类型
    DATE		3	YYYY-MM-DD				日期值
    TIME		3	HH:MM:SS				时间值或持续时间
    YEAR		1	YYYY					年份值
    DATETIME	8	YYYY-MM-DD hh:mm:ss		混合日期和时间值
    TIMESTAMP	4	YYYY-MM-DD hh:mm:ss 	混合日期和时间值，时间戳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DML语句 ===&gt;对数据增删改查</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>注意：
	插入数据时，指定的字段顺序需要与值的顺序是一一对应的。
	字符串和日期类型的数据应包含在引号中。
	插入的数据大小，应该在字段的规定范围内。
	
INSERT	插入语句
	insert into usershop(id, name, age) values (1,&#39;男&#39;,15); 
		(id, name, age)和(1,&#39;男&#39;,15)必须一一对应，多一个少一个都不行。给指定字段插入数据 		===&gt; 往usershop表的id, name,age三个字段分别插入1,&#39;男&#39;,15
			
	insert into usershop values (1,&#39;男&#39;,15);
		给表中所有字段插入数据 ===&gt;往usershop的所有字段插入数据
		
	insert into usershop values (1,&#39;男&#39;,15),(2,&#39;女&#39;,35);
		同时插入多条数据
		
UPDATE 
	UPDATE usershop SET name = &#39;张三&#39; WHERE id = 1;
		修改usershop表中 name字段 为 张三 条件是id为1的那条数据，没有条件会将所有的name字		段里的值都改为张三
		
	UPDATE usershop SET name = &#39;张三&#39;，age = 15 WHERE id = 1; 同时修改多个字段
	
DELETE
	DELETE from usershop WHERE name = &#39;张三&#39;;	  删除name为张三的所有数据
	
	DELETE from usershop;		清空usershop表
	
	**注意** 不能删除指定字段的值，可以用update将指定的字段修改为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="dql-查询语句" tabindex="-1"><a class="header-anchor" href="#dql-查询语句" aria-hidden="true">#</a> DQL 查询语句</h1><ol><li><p><strong>SELECT</strong> 查询语句</p><ul><li><p>查询部分字段</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> workaddress <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>  	查询emp表中name和workaddress字段的所有数据

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>						查询emp表中所有字段的所有数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>**as ** 重命名</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> <span class="token string">&#39;姓名&#39;</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>  查询name字段的所有数据，并将name通过<span class="token keyword">AS</span>关键字改为‘姓名’

<span class="token keyword">AS</span>关键字可以省略
	<span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token string">&#39;姓名&#39;</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>   	
		查询name字段的所有数据，并将name改为‘姓名’

	<span class="token keyword">SELECT</span> name <span class="token string">&#39;名字&#39;</span><span class="token punctuation">,</span> age <span class="token string">&#39;年龄&#39;</span> <span class="token keyword">from</span> employees
		查询name和age字段的所有数据，并将name通过改为‘姓名’，age改为年龄
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>disinct</strong> 去重</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">distinct</span> workaddress <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span> 
	查询workaddress字段的内容，并且通过<span class="token keyword">distinct</span>，将重复的过滤掉

<span class="token keyword">SELECT</span> <span class="token keyword">distinct</span> name <span class="token string">&#39;名字&#39;</span><span class="token punctuation">,</span> age <span class="token keyword">from</span> employees
	查询name和age字段，并通过disinct将重复的字段去除，只有age和name同时相同才认为是相同的才会被去除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>select</strong> 条件查询语句</p><ul><li><p><strong>where</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>语法：  <span class="token keyword">SELECT</span> 列名称 <span class="token keyword">FROM</span> 表名称 <span class="token keyword">WHERE</span> 列 运算符 值

可以在<span class="token keyword">where</span>中使用的运算符
	<span class="token operator">=</span>			等于
    <span class="token operator">&lt;&gt;</span>			不等于
    <span class="token operator">&gt;</span>			大于
    <span class="token operator">&lt;</span>			小于
    <span class="token operator">&gt;=</span>			大于等于
    <span class="token operator">&lt;=</span>			小于等于
    <span class="token operator">BETWEEN</span>		在某个范围内
    <span class="token operator">LIKE</span>		搜索某种模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>between...(最小值)and...(最大值) 	在某个范围之内，包括最大和最小两个值
in(...)		在in之后的列表中的值多选一
like 占位符	模糊匹配(_匹配单个字符，%匹配任意个字符)
is null  是null

以下和js运算符一致
    and = &amp;&amp;
    or = ||
    not = !
    &lt;&gt; = !=
    &gt;
    &gt;=
    &lt;
    &lt;=
    
练习&gt; &lt;
SELECT * FROM emp WHERE age=88;		在emp表中查询age为88的所有字段
SELECT * FROM emp WHERE age&lt;20;		在emp表中查询age小于20的所有字段

练习is null  和not
select * from emp where idcard is null;		在emp表中查询idcard为null的所有字段
select * from emp where idcard is not null; 在emp表中查询idcard不为null的所有字段
select * from emp where age &gt;= 15 &amp;&amp; age &lt;= 20; 查询年龄在15到20之间的；&amp;&amp; = and

练习between 15 and 20 
select * from emp where age between 15 and 20;	查询年龄在15到20之间的
select * from emp where gender = &#39;女&#39; and age &lt; 20; 查询性别为女并且年龄小于20的

练习in
select * from emp where age in(20,30,40);  查询年龄为20或30或40的字段

练习like
select * from emp where name like &#39;__&#39;;  查询name为两个字符的  一个_代表一个字符
select * from emp where idcard like &#39;%X&#39;;  查询idcard最后一位是x的； 
	%代表不论有多少位字符
select * from emp where name like &#39;%春%&#39;; 查询name包含春的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>聚合函数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>将一列数据作为一个整体，进行纵向计算
	所有的null不参与聚合函数的计算
count	统计数量		
max		最大值
min		最小值
avg		平均值
sum		求和

count练习
select count(*) from emp;		查询emp表的总条数
select count(id) from emp;		查询emp表中id的总条数

avg练习
select avg(age) from emp;		查询emp中age的平均数

max和min练习
select min(age) from emp;		查询年龄的最小值
select max(age) from emp;		查询年龄的最大值

sum练习
select sum(age) from emp where gender=&#39;女&#39;; 查询 gender为女的所有age的和
select *, sum(age) from emp where gender=&#39;女&#39;; 查询 gender为女的所有age的和
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>分组查询 group by</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select 字段列表 from 表名 [where 条件] group by 分组字段名 [having 分组后的过滤条件] []中的为可选参数

where和having的区别
where是在分组之前进行过滤，不满足where条件的不参与分组，而having是分组之后对结果进行过滤。where不能对聚合函数进行判断，而having可以

select gender , count(*) from emp group by gender; 根据性别分组，统计男和女的人数

select workaddress,	COUNT(*) from emp WHERE age &lt; 45 group by workaddress HAVING COUNT(*) &gt;3;
	查询年龄小于45，并且根据工作地址分组，获取人数大于3的地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>排序查询 order by</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select 字段名称 from 表名 order by 字段1 排序方式1， 字段2，排序方式2；

排序方式
	asc 升序 默认
	desc 降序
	
select name from emp order by age desc;  在emp表汇总查询name字段，根据age降序排列
select * from emp order by age desc;  在emp表汇总查询所有字段，根据age降序排列
多字段排序
select * from emp order by age desc,entrydate asc; 如果age相同时，再去排entrydate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>分页查询 limit</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select 字段列表 from 表名 limit 起始索引，查询记录数；
注意
	页码从0开始，但是起始索引的计算是 = 查询页码-1  *  每页记录数
	limit语句必须写在语句的最后
	
查询第一页的10条
select * from emp LIMIT 0,10;
查询第二页的10条  ===&gt; 第二页的起始索引  =  2-1   *   10   ==》所以起始索引是10
select * from emp LIMIT 10,10;DEL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="del-管理用户" tabindex="-1"><a class="header-anchor" href="#del-管理用户" aria-hidden="true">#</a> DEL 管理用户</h1><ol><li><p>查询用户</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>打开mysql数据库，查看user表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建用户</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create user &#39;用户名&#39;@&#39;主机名&#39; identified by &#39;密码&#39;；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改用户密码</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter user &#39;用户名&#39;@&#39;主机名&#39; identified with mysql_native_password by &#39;新密码&#39;；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除用户</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop user &#39;用户名&#39;@&#39;主机名&#39;；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong></p><p>任意主机名可以使用%通配</p></li></ol><h1 id="dcl权限控制" tabindex="-1"><a class="header-anchor" href="#dcl权限控制" aria-hidden="true">#</a> DCL权限控制</h1><ol><li><p>查询权限</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show grants for &#39;用户名&#39;@&#39;主机名&#39;；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>授予权限</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>grant 权限列表 on 数据库名.表名 to &#39;用户名&#39;@&#39;主机名&#39;；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>撤销权限</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>revoke 权限列表 no 数据库名.表名 from &#39;用户名&#39;@&#39;主机名&#39;；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>函数是指一段可以直接被另一段程序调用的程序或代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>字符串函数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CONCAT(str1,str2,...,strn)		将str1,str2,...,strn连接为一个完整的字符串
INSERT(str,x,y,instr)		将字符串str从第x开始，y个字符串长度的子串替换为字符串instr
LOWER(str)					将字符串str中的所有字母变成小写
UPPER(str)					将字符串str中的所有字母变成大写
LEFT(str,x)					返回字符串最左边的x个字符
RIGHT(str,x)				返回字符串最右边的x个字符
LPAD(str,n,pad)				使用字符串pad对字符串str最左边填充，直到长度为n个字符长度
RPAD(str,n,pad)				使用字符串pad对字符串str最右边填充，直到长度为n个字符长度
LTRIM(str)					去掉str左边的空格
RTRIM(str)					去掉str右边的空格
REPEAT(str,x)				返回字符串str重复x次的结果
REPLACE(str,a,b)			使用字符串b替换字符串str中所有出现的字符串a
STRCMP(str1,str2)			比较字符串str1和str2
TRIM(str)					去掉字符串行头和行尾的空格
SUBSTRING(str,x,y)			返回字符串str中从x位置起y个字符串长度的字符串

具体参考 https://www.runoob.com/mysql/mysql-functions.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数值函数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>具体参考 https://www.runoob.com/mysql/mysql-functions.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>日期函数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>具体参考 https://www.runoob.com/mysql/mysql-functions.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>流程函数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>if(boolean , val1, val2)	如果布尔值为true则返回第一个，否则返回第二个
ifnull(&#39;ok&#39;,&#39;err&#39;) 			第一个值为空则返回第二个，否则返回第一个 空不是null

具体参考 https://www.runoob.com/mysql/mysql-functions.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h1><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1.非空约束
not null		限制该字段的数据不能为null

2.唯一约束
unique			保证该字段的所有数据都是唯一，不重复的

3.主键约束
primary key		主键是一行数据的唯一标识，要求非空且唯一

4.默认约束
default			保存数据时，如果未指定该字段的值，则采用默认值

5.检测
check			保证字段值满足某一个条件

6.外键约束
foreign key		用来让两张表的数据之间建立连接，保证数据的一致性和完整性
	有外键的那张表称之为字表，被引用的那张表称之为父表
	
添加外键
alter table 字表名	add constraint 外键名称 foreign key (外键字段名) references 主表列名

删除外键
ALTER TABLE &lt;表名&gt; DROP CONSTRAINT &lt;外键名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>外键行为控制</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>NO ACTION	在父表中删除/更新记录时，首先检查记录中是否有外键，有则不允许删除/更新
RESTRICT	当在父表中删除/更新记录时，首先检查记录中是否有外键,有则不允许删除/更新
CASCADE 当在父表中删除/更新记录时，首先检查该记录是否有对应的外键，如果有，则也删除/更新外键在子表中的记录
set NULL当在父表中删除对应记录时，首先检查该记录是否有对应外键，如果有则设置子表中外键值为null
set default	父表变更时，子表将外键列设置成一个默认的值(Innodb不支持)

例如cascade
alter table emp add constraint fk_emp_dept_id foreign key(dept_id) references dept(id) on update cascade on delete cascade ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h1><ol><li><p>多表 关系</p><div class="language-mydql line-numbers-mode" data-ext="mydql"><pre class="language-mydql"><code>一对多(多对一)
在多的一方建立外键，指向一的一方的主键

多对多
建立第三张中间表，中间表至少包含两个外键，分别关联两方主键

一对一
在任意的一方加入外键，关联另一方的主键，并且设置外键为唯一的unique
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多表查询</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM emp , dept WHERE emp.dept_id = dept.id;
	同时查询emp，dept两张表，并且emp.dept_id = dept.id的值，防止出现笛卡尔积的问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>连接查询-内连接</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>查询两张表交集的部分

隐式内连接
	select 字段列表 from 表1 ， 表2 where 条件 ；
	
显式内连接
	select 字段列表	from biao1 [inner] join 表2 on 连接条件  ；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>外连接</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>左外连接
	select 字段列表 from 表1 left [outer] jion 表2 on 条件
	相当于查询表1(左表)的所有数据，包涵表1
	
右外连接
	select 字段列表 from 表1 right [outer] jion 表2 on 条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自连接</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select 字段列表 from 表A 别名A  join 表A 别名B on 条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>联合查询</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>union 对查询的结果去重后合并
union all 直接合并
把多次查询的结果合并起来，形成一个新的查询结果集

select 字段列表 from 表A...
union [all] 
select 字段列表 from 表B...;   sql语句可以多行写

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>子查询</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from t1 where column1 = (select column1 from t2)
子查询的外部语句可以使insert/updata/delete/select的任意一个。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h1><p>是一组操作的集合，他是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作的请求，即这些操作要么同时成功，要么同时失败。</p><p>在操作之前开启事务，操作如果出现异常，那么就回滚事务，如果都成功了再提交事务</p><ol><li><p>设置事务</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select @@autocommit; 查看当前事务，1为自动提交，0为手动提交

set @@autocommit = 0；设置为手动提交
此时业务操作完成后得手动执行commit，事务才能提交；

commit 提交事务
rollback 回滚事务

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,31)])])}const v=n(a,[["render",d],["__file","mysql.html.vue"]]);export{v as default};
