---
sidebar: auto
---

# SpringMVC

ssm：Spring + SpringMVC + mybatis

MVC：模型（dao，service）、视图（jsp）、控制器（Servlet）

## 1、搭建一个 SpringMVC 程序

1. 导入 jar 包支持

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <project xmlns="http://maven.apache.org/POM/4.0.0"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
       <modelVersion>4.0.0</modelVersion>

       <groupId>com.ldlang</groupId>
       <artifactId>SpringMVC</artifactId>
       <version>1.0-SNAPSHOT</version>
       <packaging>pom</packaging>
       <modules>
           <module>SpringMVC01</module>
           <module>SpringMVC02</module>
       </modules>

       <properties>
           <maven.compiler.source>8</maven.compiler.source>
           <maven.compiler.target>8</maven.compiler.target>
           <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
       </properties>

       <dependencies>
           <dependency>
               <groupId>junit</groupId>
               <artifactId>junit</artifactId>
               <version>4.12</version>
           </dependency>
           <dependency>
               <groupId>org.springframework</groupId>
               <artifactId>spring-webmvc</artifactId>
               <version>5.1.9.RELEASE</version>
           </dependency>
           <dependency>
               <groupId>javax.servlet</groupId>
               <artifactId>servlet-api</artifactId>
               <version>2.5</version>
           </dependency>
           <dependency>
               <groupId>javax.servlet.jsp</groupId>
               <artifactId>jsp-api</artifactId>
               <version>2.2</version>
           </dependency>
           <dependency>
               <groupId>javax.servlet</groupId>
               <artifactId>jstl</artifactId>
               <version>1.2</version>
           </dependency>
       </dependencies>
   </project>
   ```

2. 配置 web.xml

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
            version="4.0">

       <servlet>
           <servlet-name>spring</servlet-name>
           <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
           <!--绑定spring的配置文件-->
           <init-param>
               <param-name>contextConfigLocation</param-name>
               <!--导入resources文件的springmvc配置文件-->
               <param-value>classpath:springmvc-servlet.xml</param-value>
           </init-param>
           <!--和服务器同时启动-->
           <load-on-startup>1</load-on-startup>
       </servlet>

       <!--/ 会匹配所有的请求-->
       <servlet-mapping>
           <servlet-name>spring</servlet-name>
           <url-pattern>/</url-pattern>
       </servlet-mapping>
   </web-app>
   ```

3. 配置 springmvc-servlet.xml

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xmlns:context="http://www.springframework.org/schema/context"
          xmlns:mvc="http://www.springframework.org/schema/mvc"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
          http://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/context
          https://www.springframework.org/schema/context/spring-context.xsd
          http://www.springframework.org/schema/mvc
          https://www.springframework.org/schema/mvc/spring-mvc.xsd">

       <!-- 自动扫描包，让指定包下的注解生效,由IOC容器统一管理 -->
       <context:component-scan base-package="com.ldlang.controller"/>
       <!-- 让Spring MVC不处理静态资源 -->
       <mvc:default-servlet-handler />
       <!--
       支持mvc注解驱动
           在spring中一般采用@RequestMapping注解来完成映射关系
           要想使@RequestMapping注解生效
           必须向上下文中注册DefaultAnnotationHandlerMapping
           和一个AnnotationMethodHandlerAdapter实例
           这两个实例分别在类级别和方法级别处理。
           而annotation-driven配置帮助我们自动完成上述两个实例的注入。
        -->
       <mvc:annotation-driven />

       <!-- 视图解析器 -->
       <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"
             id="internalResourceViewResolver">
           <!-- 前缀 -->
           <property name="prefix" value="/WEB-INF/jsp/" />
           <!-- 后缀 -->
           <property name="suffix" value=".jsp" />
       </bean>
   </beans>
   ```

4. 使用注解开发 Controller

   ```java
   package com.ldlang.controller;

   import org.springframework.stereotype.Controller;
   import org.springframework.ui.Model;
   import org.springframework.web.bind.annotation.RequestMapping;

   @Controller // 代表这个类被Spring接管
   // 相当于配置了一个bean文件 <bean id="/hello" class="com.ldlang.controller.helloController" />
   // 被这个注解的类中所有的方法，如果返回值是String，并且有相应jsp文件，那么就会被视图解析器解析
   public class HelloController {

       // 请求路径
       @RequestMapping("/he")
       public String hello(Model model) {
           model.addAttribute("msg", "hello，SpringMVC");
           return "hello"; // 跳转jsp文件，拼接上前缀才是完整的路径 /WEB-INF/jsp/hello.jsp
       }
   }
   ```

5. jsp 页面

   ```jsp
   <%@ page contentType="text/html;charset=UTF-8" language="java" %>
   <html>
   <head>
       <title>Title</title>
   </head>
   <body>
   <%--这里的msg就会被替换--%>
   ${msg}
   </body>
   </html>
   ```

6. 使用`tomcat`访问页面`localhost:8080/he`就能访问到上面的 jsp 页面

## 2、注解说明

- `@Controller`
  - 代表这个类被 Spring 接管
  - 相当于配置了一个 bean 文件 `<bean id="/hello" class="com.ldlang.controller.helloController" />`
  - 被这个注解的类中所有的方法，如果返回值是 String，并且有相应 jsp 文件，那么就会被视图解析器解析
- `@RequestMapping`
  - @RequestMapping 注解用于映射 url 到控制器类或一个特定的处理程序方法。可用于类或方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。

### 不同请求方式

- 方式一：通过注解参数

  ```java
  @Controller
  public class RestFul {

      // value是请求地址 method是请求方法
      @RequestMapping(value = "/get", method = RequestMethod.POST)
      public String test(int a, int b, Model model) {
          model.addAttribute("msg", a + b);
          return "hello";
      }
  }
  ```

  支持的请求方法：

  ```java
  GET,
  HEAD,
  POST,
  PUT,
  PATCH,
  DELETE,
  OPTIONS,
  TRACE;
  ```

- 通过衍生注解

  ```java
  @Controller
  public class RestFul {

      // 请求方式是post路径是get
      @PostMapping("/get")
      public String test1(int a, int b, Model model){
          model.addAttribute("msg", a + b);
          return "hello";
      }
  }
  ```

  支持的注解同上

  ```java
  @PostMapping
  @GetMapping
  ...
  ```

### 路径参数注解

`@PathVariable`将路径参数直接变成路径

```java
@Controller
public class RestFul {

    // 原本的请求 http://localhost:8080/add?a=1&b=2
    // 通过@PathVariable 修改的请求 http://localhost:8080/add/1/3
    @GetMapping("/add/{a}/{b}")
    public String test2(@PathVariable int a, @PathVariable int b, Model model){
        model.addAttribute("msg", a + b);
        return "hello";
    }
}
```

## 3、请求参数

1. 直接书写

   ```java
   // 请求 http://localhost:8080/get?name=张三

   @GetMapping("/get")
   public String test(String name, Model model){
       model.addAttribute("msg", name);
       return "he";
   }
   ```

2. 通过注解重命名 `@RequestParam`

   ```java
   // // 请求 http://localhost:8080/get1?userName=张三

   @GetMapping("get1")
   public String test1(@RequestParam("userName") String name, Model model){
       model.addAttribute("msg", name);
       return "he";
   }
   ```

3. 通过对象接收

   ```java
   // http://localhost:8080/get2?id=2&name=张三&age=10

   @GetMapping("get2")
   public String test2(User user, Model model){
       System.out.println("user" + user);
       model.addAttribute("msg", user);
       return "he";
   }
   ```
