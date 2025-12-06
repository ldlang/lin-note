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

  要注册的`bean`对象来自于第三方（不是自定义的），是无法使用`@Component`及衍生注解注册`bean`的，需要使用`@Bean`将其注册到`IOC`容器中

- @Import

  一般用于将整个文件的进行`bean`注入

