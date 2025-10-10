---
sidebar: auto
---

# javaWeb

## 1、tomcat

下载后随意放到一个文件夹解压即可，本机要装好 JDK 环境

1. 启动服务

   访问：http://localhost:8080 能正确打开页面则表示 tomcat 服务启动成功

   ![启动tomcat](/java/tomcat-setup.png)

2. 配置文件

   ![img](/java/tomcat-server.png)

   可以配置主机的名称，访问的文件夹等

   ![img](/java/tomcat-detail.png)

3. 网站存放目录

   ![img](/java/tomcat-web.png)

   网站的入口文件，修改这个就能修改页面内容

   ![img](/java/tomcat-index.png)

## 2、Maven

### 配置maven

maven 就是帮助我们管理 jar 包的工具，[下载地址](https://maven.apache.org/)

1. 安装

   - 下载后随意放置在一个目录解压即可

   - 配置环境变量

     ![image](/java/maven-sys.png)

     ![image](/java/maven-user.png)

   - maven --version 查看是否配置成功

2. 设置阿里镜像

   ![image](/java/maven-setting.png)

   ```java
   <mirrors>
       <mirror>
       	<id>aliyunmaven</id>
       	<mirrorOf>*</mirrorOf>
       	<name>阿里云公共仓库</name>
       	<url>https://maven.aliyun.com/repository/public</url>
   	</mirror>
   </mirrors>
   ```

3. 设置本地仓库的存储地址

   同上的`settings.xml`文件中，并建立对应文件夹maven-repo

   ```java
   <localRepository>D:\maven\apache-maven-3.9.11\maven-repo</localRepository>
   ```

### 在idea中如何使用maven

## 3、Servlet

### servletContext

1. 共享数据

   * HelloServlet中在servletContext存入数据（必须先调这个请求才能有数据）

     ```java
     import javax.servlet.ServletContext;
     import javax.servlet.ServletException;
     import javax.servlet.http.HttpServlet;
     import javax.servlet.http.HttpServletRequest;
     import javax.servlet.http.HttpServletResponse;
     import java.io.IOException;
     import java.io.PrintWriter;
     
     public class HelloServlet extends HttpServlet {
         @Override
         protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
             System.out.println("进入了get方法");
     
             // 存入数据
             ServletContext servletContext = this.getServletContext();
             servletContext.setAttribute("name", "张三");
     
             resp.setContentType("text/html");
             resp.setCharacterEncoding("utf-8");
             PrintWriter writer = resp.getWriter();
             writer.print("nihao");
         }
     
         @Override
         protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
             doGet(req,resp);
         }
     }
     ```

   * nameSevlet读取servletContext之前存储的数据

     ```java
     import javax.servlet.ServletContext;
     import javax.servlet.ServletException;
     import javax.servlet.http.HttpServletRequest;
     import javax.servlet.http.HttpServletResponse;
     import java.io.IOException;
     
     public class NameServlet extends HelloServlet{
         @Override
         protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
             ServletContext servletContext = this.getServletContext();
             // 读取数据
             String name = (String) servletContext.getAttribute("name");
             resp.setContentType("text/html");
             resp.setCharacterEncoding("utf-8");
     
             resp.getWriter().print("上下文中的name："+name);
         }
     }
     ```
     

## 4、cookie和session

### cookie

* 保存在浏览器中的

### session

* 保存在服务端，由session对象创建
* session把用户的数据写到用户独占的session中，服务端保存

1. 创建session

   ```java
   import javax.servlet.ServletException;
   import javax.servlet.http.HttpServlet;
   import javax.servlet.http.HttpServletRequest;
   import javax.servlet.http.HttpServletResponse;
   import javax.servlet.http.HttpSession;
   import java.io.IOException;
   
   public class SessionDemo extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           resp.setCharacterEncoding("utf-8");
           resp.setContentType("text/html;charset=utf-8");
           req.setCharacterEncoding("utf-8");
   
           // 获取session
           HttpSession session = req.getSession();
           // 存入值
           session.setAttribute("name", "我是session的值");
           // 获取session 的id
           String sessionId = session.getId();
           // 判断是否是新创建的
           if (session.isNew()) {
               resp.getWriter().write("session创建成功，id为："+sessionId);
           }else {
               resp.getWriter().write("session创建成功，id为："+sessionId);
           }
       }
   }
   ```

2. 读取session

   ```java
   import javax.servlet.ServletException;
   import javax.servlet.http.HttpServlet;
   import javax.servlet.http.HttpServletRequest;
   import javax.servlet.http.HttpServletResponse;
   import javax.servlet.http.HttpSession;
   import java.io.IOException;
   
   public class getSession extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           resp.setCharacterEncoding("utf-8");
           resp.setContentType("text/html;charset=utf-8");
           req.setCharacterEncoding("utf-8");
   
           HttpSession session = req.getSession();
   
           String name = (String) session.getAttribute("name");
           System.out.println("获取到了值：" + name);
       }
   }
   ```

3. 删除session

   ```java
   import javax.servlet.ServletException;
   import javax.servlet.http.HttpServlet;
   import javax.servlet.http.HttpServletRequest;
   import javax.servlet.http.HttpServletResponse;
   import javax.servlet.http.HttpSession;
   import java.io.IOException;
   
   public class removeSession extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           HttpSession session = req.getSession();
           // 删除指定的
           session.removeAttribute("name");
           // 注销，删除所有
           session.invalidate();
       }
   }
   ```

4. 设置session过期时间

   ```xml
   <session-config>
       <session-timeout>1</session-timeout>
   </session-config>
   ```


## 5、过滤器和监听器

### 过滤器

所有路径为`/filter`的路径都会先走到过滤器

1. 创建过滤器

   ```java
   import javax.servlet.*;
   import java.io.IOException;
   
   public class FilterDemo implements Filter {
   
       @Override
       public void init(FilterConfig filterConfig) throws ServletException {
           System.out.println("init---------");
       }
   
       @Override
       public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
           servletRequest.setCharacterEncoding("utf-8");
           servletResponse.setCharacterEncoding("utf-8");
           servletResponse.setContentType("text/html;charset=utf-8");
   
           System.out.println("doFilter 之前");
           // 放行，被过滤的接口才能继续走
           filterChain.doFilter(servletRequest,servletResponse);
           System.out.println("doFilter 之后");
       }
   
       @Override
       public void destroy() {
           System.out.println("destroy---------");
       }
   }
   ```

2. 注册过滤器

   ```xml
   <filter>
       <filter-name>FilterDemo</filter-name>
       <filter-class>com.ldlang.FilterDemo</filter-class>
   </filter>
   <filter-mapping>
       <filter-name>FilterDemo</filter-name>
       <url-pattern>/filter/*</url-pattern>
   </filter-mapping>
   ```

   

