---
sidebar: auto
---

# SpringBoot

## 1、核心文件说明

1. `application.properties`配置文件

   可以改为`application.yaml`就可以使用`yaml`的语法

   - `application.properties`使用的是 `k=v` 的语法

     ```java
     server.port=8080
     ```

   - `yaml`是`k:(空格)v`的语法，以空格的缩进来表示层级关系，左对齐的就属于同一层级，对大小写敏感，严格要求空格

     ```yaml
     server:
       port: 8080

     # 对象
     student:
       name: zhang
       age: 12

     student: {name: li,age: 2}

     # 数组
     hobby:
       - playGame
       - study

     hobby: [playGame,study]
     ```

## 2、给实体类注入属性

### 通过 yaml 文件进行注入

1. 实体

   ```java
   package com.ldlang.pojo;

   import org.springframework.boot.context.properties.ConfigurationProperties;
   import org.springframework.stereotype.Component;

   import java.util.List;
   import java.util.Map;

   // 注册为一个组件
   @Component
   // 指定要使用application.yaml中的那个对象
   @ConfigurationProperties(prefix = "user")
   public class User {
       private int age;
       private String names;
       private boolean isHave;
       private List<String> hobby;
       private Map<Object, Object> kvs;
       private Dog dog;
       // getter和setter必须要有，但这里省略
   }
   ```

2. `application.yaml`

   ```yaml
   user:
     age: ${random.int} # 随机值
     names: ${random.uuid} # uuid
     boo: true
     isHave: ${user.boo} # 使用其他变量
     hobby:
       - 抽烟
       - 喝酒
       - 烫头
     kvs:
       k: v
       a: v
     dog:
       name: 旺财
       age: 2
   ```

3. 测试

   ```java
   import com.ldlang.pojo.User;
   import org.junit.jupiter.api.Test;
   import org.springframework.beans.factory.annotation.Autowired;
   import org.springframework.boot.test.context.SpringBootTest;

   @SpringBootTest
   class BootApplicationTests {
       @Autowired
       private User user;

       @Test
       void contextLoads() {
           System.out.println(user.toString());
           // User{age=-1407422968, names='ecab8521-af3b-4775-947f-1d8f7a9f3f49', isHave=true, hobby=[抽烟, 喝酒, 烫头], kvs={k=v, a=v}, dog=null}
       }

   }
   ```

### 通过普通的 properties 文件注入

1.  实体类

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
// 指定使用那个properties文件
@PropertySource(value = "classpath:ldlang.properties")
public class Dog {
    // 必须明确指定属性名
    @Value("${name}")
    private String name;

    @Value("${age}")
    private int age;
    // getter和setter必须要有，但这里省略
}
```

2. properties 文件

   ```properties
   name=wan
   age=10
   ```

3. 测试

   ```java
   import com.ldlang.pojo.Dog;
   import org.junit.jupiter.api.Test;
   import org.springframework.beans.factory.annotation.Autowired;
   import org.springframework.boot.test.context.SpringBootTest;

   @SpringBootTest
   class BootApplicationTests {

       @Autowired
       private Dog dog;

       @Test
       void contextLoads() {
           System.out.println(user.toString());
           // Dog{name='wan', age=10}
       }
   }
   ```

## 3、jsr303 验证

1. 导入支持包

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-validation</artifactId>
   </dependency>
   ```

2. 使用

   - 方式一

     ```java
     import jakarta.validation.constraints.Max;
     import org.springframework.validation.annotation.Validated;

     @Validated
     public class User {
         // 自定义最大值和错误提示信息
         @Max(value = 12, message = "最大值不能超过12")
         private int age;
     }
     ```

   - 方式二

     ```java
     @PostMapping("/register")
     public Result register(
         // 正则校验字符
         @Pattern(regexp = "^.{5,16}$", message = "账号长度必须5-16位")
         String username,
         @Pattern(regexp = "^.{5,16}$", message = "密码长度必须5-16位")
         String password
     ) {
         User user = userService.findUser(username);

         if (user != null) {
             return Result.error("该用户已注册");
         }

         int res = userService.register(username, password);
         if (res <= 0) return Result.error("注册失败");

         return Result.success("注册成功");
     }
     ```

## 4、配置文件说明

### 配置文件支持的路径

按优先级排序

> 说明：classpath 就是 resources 目录

1. jar 包同级目录的 config 目录下

2. jar 包同级目录的 application.property

3. classpath 下的/config 目录

4. classpath 下根目录的配置文件

### 多环境配置

比如开发环境、生产环境等

```yaml
server:
  port: 8080
spring:
  profiles:
    active: pro ## 指定激活的环境

---
server:
  port: 8081
spring:
  config:
    activate:
      on-profile: dev

---
server:
  port: 8081
spring:
  config:
    activate:
      on-profile: pro
```

## 5、注册 Bean

将第三方或者`jar`包中的`class`注册到`ioc`容器中

- @Bean
- @Import

## 6、全局异常处理

原理：使用`@RestControllerAdvice`注解对所有的`RestController`和`Controller`进行错误的捕获

- #### `@RestControllerAdvice`

  组合注解，等价于`@ControllerAdvice + @ResponseBody`

  作用是：

  - **全局生效**：对整个项目中所有 `@RestController`（或 `@Controller`）注解的控制器生效；
  - **异常捕获载体**：标记当前类是「全局异常处理类」，Spring 会自动扫描并注册；
  - **返回 JSON**：通过 `@ResponseBody` 将处理结果（`Result` 对象）直接序列化为 JSON 返回给客户端。

- #### `@ExceptionHandler(Exception.class)`

  异常处理注解，用于标记「处理特定异常的方法」:

  - `Exception.class` 表示该方法处理 **所有类型的异常**（`Exception` 是所有受检异常和非受检异常的父类）；
  - 当 Controller 中抛出任何 `Exception` 及其子类异常时，Spring 会自动调用该注解标记的方法。

```java
import com.ldlang.utils.Result;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // BusinessException异常处理
    // @ExceptionHandler(BusinessException.class)
    // public Result handleBusinessException(BusinessException e) {
        // 返回业务异常的状态码和消息（假设 Result 有带 code 的构造方法）
       	// return Result.error(e.getMessage());
    // }

    // 捕获所有的异常
    @ExceptionHandler(Exception.class)
    public Result handleException(Exception e){
        return Result.error(StringUtils.hasLength(e.getMessage()) ? e.getMessage() : "操作失败");
    }
}
```

## 7、全局拦截器

1. 实现拦截器

   ```java
   import com.ldlang.utils.JwtUtil;
   import jakarta.servlet.http.HttpServletRequest;
   import jakarta.servlet.http.HttpServletResponse;
   import org.springframework.stereotype.Component;
   import org.springframework.web.servlet.HandlerInterceptor;

   //全局拦截实现
   @Component
   public class LoginInterceptors implements HandlerInterceptor {

       // 请求之前的拦截处理
       @Override
       public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
           try {
               String token = request.getHeader("Authorization");
               JwtUtil.parseToken(token); // 这里报错则代表token解析错误
               // 返回 true 表示放行，false 表示拒绝
               return true;
           } catch (Exception e) {
               // 设置响应状态码为401
               response.setStatus(401);
               return false;
           }
       }

       // 请求之后的处理
       @Override
       public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
           // 清除线程池
           ThreadLocalUtil.remove();
       }
   }
   ```

2. 注册拦截器

   ```java
   import com.ldlang.interceptors.LoginInterceptors;
   import org.springframework.beans.factory.annotation.Autowired;
   import org.springframework.context.annotation.Configuration;
   import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
   import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

   // 将全局拦截器注册进来
   @Configuration
   public class WebConfig implements WebMvcConfigurer {

       private final LoginInterceptors loginInterceptors;

       @Autowired
       public WebConfig(LoginInterceptors loginInterceptors) {
           this.loginInterceptors = loginInterceptors;
       }

       @Override
       public void addInterceptors(InterceptorRegistry registry) {
           // 注册拦截器 registry.addInterceptor(loginInterceptors)
           // excludePathPatterns("/user/login", "/user/register") 拦截直接放行的接口
           registry.addInterceptor(loginInterceptors).excludePathPatterns("/user/login", "/user/register");
       }
   }

   ```

## 8、使用线程池共享状态

1. 实现线程池工具类

   ```java
   package com.ldlang.utils;

   /**
    * ThreadLocal 工具类
    */
   @SuppressWarnings("all")
   public class ThreadLocalUtil {
       // 提供ThreadLocal对象,
       private static final ThreadLocal THREAD_LOCAL = new ThreadLocal();

       // 根据键获取值
       public static <T> T get() {
           return (T) THREAD_LOCAL.get();
       }

       // 存储键值对
       public static void set(Object value) {
           THREAD_LOCAL.set(value);
       }

       // 清除ThreadLocal 防止内存泄漏
       public static void remove() {
           THREAD_LOCAL.remove();
       }
   }
   ```

2. 往线程池存入数据

   ```java
   @Override
   public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
       try {
           String token = request.getHeader("Authorization");
           Map<String, Object> claims = JwtUtil.parseToken(token);
           // 将解析出来token的Map存入线程中
           ThreadLocalUtil.set(claims);
           // 返回 true 表示放行，false 表示拒绝
           return true;
       } catch (Exception e) {
           // 设置响应状态码为401
           response.setStatus(401);
           return false;
       }
   }
   ```

3. 读取线程池的数据

   ```java
   // 从线程池中获取token存入的信息
   Map<String, Object> tokenMap = ThreadLocalUtil.get();
   String username = (String) tokenMap.get("username");
   ```

4. 销毁线程池

   ```java
   // 请求之后的处理
   @Override
   public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
       // 清除线程池
       ThreadLocalUtil.remove();
   }
   ```
