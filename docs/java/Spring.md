---
sidebar: auto
---

# Spring

是一个轻量级的控制翻转（IOC）和面向切面编程的（AOP）框架

## 1、IOC

对象由 Spring 来创建，管理，装配

### 创建一个 HelloSpring

1. 导入包

   ```xml
   <dependencies>
       <!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc -->
       <dependency>
           <groupId>org.springframework</groupId>
           <artifactId>spring-webmvc</artifactId>
           <version>5.2.20.RELEASE</version>
       </dependency>
       <!-- https://mvnrepository.com/artifact/org.springframework/spring-jdbc -->
       <dependency>
           <groupId>org.springframework</groupId>
           <artifactId>spring-jdbc</artifactId>
           <version>5.2.20.RELEASE</version>
       </dependency>
   </dependencies>
   ```

2. 创建 hello 类

   > 下面使用的是 property 标签，所以必须要有无参构造

   ```java
   package com.ldlang.pojo;

   public class Hello {
       private String str;

       public Hello(String str) {
           this.str = str;
       }

       public Hello() {}

       public String getStr() {
           return str;
       }

       public void setStr(String str) {
           this.str = str;
       }

       @Override
       public String toString() {
           return "Hello{" +
                   "str='" + str + '\'' +
                   '}';
       }
   }
   ```

3. 创建配置文件，并设置对象（`beans.xml`）

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
           https://www.springframework.org/schema/beans/spring-beans.xsd">
       <!--
           bean 相当于是一个对象
           id new出来的的变量名
           class 需要被实例化的对象
           property
               name 需要被设置值的变量名
               value 设置的值
       -->
       <bean id="hello" class="com.ldlang.pojo.Hello" >
           <property name="str" value="哈哈" />
       </bean>
   </beans>
   ```

4. 创建并使用对象

   ```java
   import com.ldlang.pojo.Hello;
   import org.springframework.context.ApplicationContext;
   import org.springframework.context.support.ClassPathXmlApplicationContext;

   public class myTest {
       public static void main(String[] args) {
           // 获取上下文
           ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
           // 获取hello对象
           Hello hello = (Hello) context.getBean("hello");
           // 读取属性
           System.out.println(hello.getStr());
       }
   }
   ```

## 2、IOC 创建对象

1. class 必须要有无参构造

   ```xml
   <bean id="hello" class="com.ldlang.pojo.Hello" >
       <property name="str" value="哈哈" />
   </bean>
   ```

2. 使用有参构造

   - 使用索引传递值

     ```xml
     <bean id="hello" class="com.ldlang.pojo.Hello" >
         <constructor-arg index="0" value="索引方式"/>
     </bean>
     ```

   - 属性类型传递值（如果有相同类型的多个属性就无法使用）

     ```xml
     <bean id="hello" class="com.ldlang.pojo.Hello" >
         <constructor-arg type="java.lang.String" value="属性类型传递值" />
     </bean>
     ```

   - 属性名传递值

     ```xml
     <bean id="hello" class="com.ldlang.pojo.Hello" >
         <constructor-arg name="str" value="属性名传递值" />
     </bean>
     ```

## 3、配置

1. alias（别名）

   ```xml
   <!--给 hello 取个别名为 hello2 ，此时不管是hello还是hello2都能正确的得到对象-->
   <alias name="hello" alias="hello2"/>
   ```

2. bean

   ```xml
   <!--name属性也能设置别名，并且能够同时设置多个别名-->
   <bean id="hello" class="com.ldlang.pojo.Hello" name="hello2,hello3">
       <constructor-arg name="str" value="属性名传递值" />
   </bean>
   ```

3. import

   一般项目会有一个总的配置文件叫`applicationContext.xml`，拆分各个模块后，都可以使用`import`导入到这里，在使用的地方都从这个`xml`文件中取即可，同名的对象他都会帮你处理

   ```xml
   <import resource="beans.xml"/>
   ```

## 4、依赖注入

### 构造器注入

```xml
<bean id="hello" class="com.ldlang.pojo.Hello" name="hello2,hello3">
    <constructor-arg name="str" value="属性名传递值" />
</bean>
```

### set 注入（各种类型的值注入）

- 实体类

  ```java
  import java.util.*;

  public class Student {
      private String name;
      private Address address;
      private String[] books;
      private List<String> hobbys;
      private Map<String, String> card;
      private Set<String> games;
      private String wife;
      private Properties info;
      // 后面省略getter和setter方法
  }

  // address类
  public class Address {
      private String address;
      // 后面省略getter和setter方法
  }
  ```

- beans

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://www.springframework.org/schema/beans
          https://www.springframework.org/schema/beans/spring-beans.xsd">

      <bean id="student" class="com.ldlang.pojo.Student" >
          <property name="name" value="张三"/>
          <!--引用对象-->
          <property name="address" ref="address"/>

          <!--数组-->
          <property name="books">
              <array>
                  <value>三国演义</value>
                  <value>西游记</value>
              </array>
          </property>

          <!--list-->
          <property name="hobbys">
              <list>
                  <value>打游戏</value>
              </list>
          </property>

          <!--map-->
          <property name="card">
              <map>
                  <entry key="idCard" value="439853y491"/>
              </map>
          </property>

          <!--set-->
          <property name="games">
              <set>
                  <value>LOL</value>
              </set>
          </property>

          <!--null-->
          <property name="wife">
              <null/>
          </property>

          <!--Properties-->
          <property name="info">
              <props>
                  <prop key="学号" >12321</prop>
              </props>
          </property>
      </bean>

      <bean id="address" class="com.ldlang.pojo.Address">
          <property name="address" value="云南"/>
      </bean>
  </beans>
  ```

- 读取

  ```java
  import com.ldlang.pojo.Student;
  import org.springframework.context.ApplicationContext;
  import org.springframework.context.support.ClassPathXmlApplicationContext;

  public class myTest {
      public static void main(String[] args) {
          ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
          Student student = (Student) context.getBean("student");
          System.out.println(student.toString());
          // Student{name='张三', address=Address{address='云南'}, books=[三国演义, 西游记], hobbys=[打游戏], card={idCard=439853y491}, games=[LOL], wife='null', info={学号=12321}}

      }
  }
  ```

### 拓展方式注入（命名空间注入）

- p 命名空间注入（**属性值注入 property**）

  > beans 中要加入
  > xmlns:p="http://www.springframework.org/schema/p"

  ```xml
  <!--直接赋值-->
  <bean id="user" class="com.ldlang.pojo.User" p:name="张三" p:age="19"/>
  ```

- c 命名空间注入（**构造器注入 constructor-arg**）

  > beans 中要加入
  > xmlns:c="http://www.springframework.org/schema/c"

  ```xml
  <bean id="user" class="com.ldlang.pojo.User" c:name="李四" c:age="20" />
  ```

## 5、作用域

| Scope                                                                                                                                        | 描述                                 |
| :------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| [singleton](https://docs.spring.io/spring-framework/docs/5.2.25.RELEASE/spring-framework-reference/core.html#beans-factory-scopes-singleton) | 默认模式，每次创建的对象都是同一个   |
| [prototype](https://docs.spring.io/spring-framework/docs/5.2.25.RELEASE/spring-framework-reference/core.html#beans-factory-scopes-prototype) | 原型模式，每次创建的对象都不是同一个 |

```xml
<bean id="user" class="com.ldlang.pojo.User" scope="singleton" />
```

## 6、自动装配

- 未自动装配

  ```xml
  <bean id="dog" class="com.ldlang.pojo.Dog"/>

  <bean id="people" class="com.ldlang.pojo.People">
      <property name="name" value="张三" />
      <!--需要显示的引用-->
      <property name="dog" ref="dog" />
  </bean>
  ```

- byName 自动装配

  通过 set 方法后面的值对应的 beanId 自动查找

  ```xml
  <bean id="dog" class="com.ldlang.pojo.Dog"/>

  <bean id="people" class="com.ldlang.pojo.People" autowire="byName">
      <property name="name" value="张三" />
  </bean>
  ```

- byType 自动装配

  自动查找有相同类型的值，但是要保证同一类型的唯一性

  ```xml
  <bean class="com.ldlang.pojo.Dog"/>

  <bean id="people" class="com.ldlang.pojo.People" autowire="byType">
      <property name="name" value="张三" />
  </bean>
  ```

- 使用注解装配

  必须要加入指定配置才可以使用

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns:context="http://www.springframework.org/schema/context"
         xsi:schemaLocation="http://www.springframework.org/schema/beans
          https://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/context
          https://www.springframework.org/schema/context/spring-context.xsd">

  	<!--固定配置-->
      <context:annotation-config/>

      <!--下面使用到的-->
      <bean id="dog" class="com.ldlang.pojo.Dog"/>
      <bean id="people" class="com.ldlang.pojo.People" />
  </beans>
  ```

  - `@Autowired`

    直接在属性上加入注解，或者在 setter 上加入注解都行，一般在属性上加，如果在属性上加，那么对应的 setter 都可以不用写了（通过 byName 实现）

    ```java
    import org.springframework.beans.factory.annotation.Autowired;

    public class People {
        // 加入注解自动装配
        @Autowired
        private Dog dog;
        private String name;

        public Dog getDog() {
            return dog;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
    ```

  - `@Autowired` + `@Qualifier("dog")`

    如果 bean 文件中相同类型属性的配置有多个，那么可以使用`Qualifier`来指定对应的`id`

    ```java
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.beans.factory.annotation.Qualifier;

    public class People {
        @Autowired
        @Qualifier("dog")
        private Dog dog;
        private String name;
        // getter 和 setter 省略
    }
    ```

  - `@Resource`

    java 自带的注解，性能不如`@Autowired`，通过`byName`查找，找不到就通过`byType`

    ```java
    import javax.annotation.Resource;

    public class People {
        @Resource
        private Dog dog;
        private String name;
        // getter 和 setter 省略
    }
    ```

## 7、注解开发

1. bean 指定要扫描的包

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xmlns:context="http://www.springframework.org/schema/context"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
           https://www.springframework.org/schema/beans/spring-beans.xsd
           http://www.springframework.org/schema/context
           https://www.springframework.org/schema/context/spring-context.xsd">

       <context:annotation-config/>
       <!--配置要扫描的包，只有被扫描的包里面的注解才能生效-->
       <context:component-scan base-package="com.ldlang"/>
   </beans>
   ```

2. 属性如何注入

   ```java
   import org.springframework.beans.factory.annotation.Value;
   import org.springframework.stereotype.Component;

   // @Component 相当于 <bean id="user" class="com.ldlang.pojo.User" />
   @Component
   public class User {
       // @Value("张三") 相当于 <property name="name" value="张三" />
       @Value("张三")
       private String name;

       public String getName() {
           return name;
       }

       public void setName(String name) {
           this.name = name;
       }
   }
   ```

3. 衍生注解

   @Component

   - dao：@Repository
   - service：@Service
   - controller：@Controller

   以上 4 个注解功能是一样的

4. 作用域

   ```java
   import org.springframework.context.annotation.Scope;
   import org.springframework.stereotype.Component;

   @Component
   @Scope("singleton")
   public class User {
   }
   ```

## 8、javaConfig

可以替代`beans.xml`文件，所有的配置都使用 java 代码开发

1. 实体类

   ```java
   import org.springframework.beans.factory.annotation.Value;
   import org.springframework.stereotype.Component;

   @Component
   public class User {
       @Value("张三")
       private String name;

       public String getName() {
           return name;
       }
   }
   ```

2. 配置文件

   ```java
   import com.ldlang.pojo.User;
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.ComponentScan;
   import org.springframework.context.annotation.Configuration;
   import org.springframework.context.annotation.Import;

   // @Configuration就代表这是一个配置类，相当于是一个beans.xml
   @Configuration

   // @ComponentScan 可以手动指定要扫描的包，也可以不指定
   @ComponentScan("com.ldlang.pojo")

   // 还可以引入其他的config
   //@Import()
   public class Myconfig {

       // 注册一个bean，方法名就是相当于bean标签的id，返回值就相当于是class
       @Bean
       public User user(){
           return new User();
       }
   }
   ```

3. 使用方式

   ```java
   import com.ldlang.config.Myconfig;
   import com.ldlang.pojo.User;
   import org.springframework.context.ApplicationContext;
   import org.springframework.context.annotation.AnnotationConfigApplicationContext;

   public class test05 {
       public static void main(String[] args) {
           // 使用javaConfig方式去取代配置的话，就要使用这种方式获取上下文
           ApplicationContext context = new AnnotationConfigApplicationContext(Myconfig.class);

           User user = context.getBean("user", User.class);
           System.out.println(user.getName());

       }
   }
   ```

## 9、AOP 切面编程

就是在一个方法之前，或者之后等做一些操作。

1. 导入包

   ```xml
   <dependency>
       <groupId>org.aspectj</groupId>
       <artifactId>aspectjweaver</artifactId>
       <version>1.9.4</version>
   </dependency>
   ```

2. beans 文件中加入配置

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xmlns:aop="http://www.springframework.org/schema/aop"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
           http://www.springframework.org/schema/beans/spring-beans.xsd
           http://www.springframework.org/schema/aop
           http://www.springframework.org/schema/aop/spring-aop.xsd">
   </beans>
   ```

### 使用 Spring 的方式执行

- 接口

  ```java
  public interface UserService {
      public void add();
      public void delete();
      public void update();
      public void select();
  }
  ```

- 实现类

  ```java
  package com.ldlang.service;

  public class UserServiceImpl implements UserService {
      @Override
      public void add() {
          System.out.println("增加");
      }

      @Override
      public void delete() {
          System.out.println("删除");
      }

      @Override
      public void update() {
          System.out.println("修改");
      }

      @Override
      public void select() {
          System.out.println("查询");
      }
  }
  ```

- 之前切面

  ```java
  import org.springframework.aop.MethodBeforeAdvice;
  import java.lang.reflect.Method;

  public class Log implements MethodBeforeAdvice {

      // method 要实现的方法
      // objects 传入的参数
      // target 目标对象
      @Override
      public void before(Method method, Object[] objects, Object target) throws Throwable {
          System.out.println("我是之前执行--------" + target.getClass().getName() + "的" + method.getName() + "被执行了");
      }
  }
  ```

- 之后切面

  ```java
  import org.springframework.aop.AfterReturningAdvice;
  import java.lang.reflect.Method;

  public class AfterLog implements AfterReturningAdvice {

      @Override
      public void afterReturning(Object returnValue, Method method, Object[] objects, Object target) throws Throwable {
          System.out.println("我是之后执行-----------，执行了" + method.getName() + "方法，返回结果为" + returnValue);
      }
  }
  ```

- 配置文件

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns:aop="http://www.springframework.org/schema/aop"
         xsi:schemaLocation="http://www.springframework.org/schema/beans
          http://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/aop
          http://www.springframework.org/schema/aop/spring-aop.xsd">

      <bean id="userService" class="com.ldlang.service.UserServiceImpl"/>
      <bean id="afterLog" class="com.ldlang.log.AfterLog"/>
      <bean id="log" class="com.ldlang.log.Log"/>

      <!--使用原生的Spring API接口-->
      <aop:config>
          <!--切入点：pointcut，表达式：expression-->
          <aop:pointcut id="pointcut" expression="execution(* com.ldlang.service.UserServiceImpl.*(..))"/>

          <!-- 执行环绕增强-->
          <aop:advisor advice-ref="log" pointcut-ref="pointcut"/>
          <aop:advisor advice-ref="afterLog" pointcut-ref="pointcut"/>
      </aop:config>
  </beans>
  ```

- 测试

  ```java
  import com.ldlang.service.UserService;
  import org.springframework.context.ApplicationContext;
  import org.springframework.context.support.ClassPathXmlApplicationContext;

  public class test07 {
      public static void main(String[] args) {
          ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
          // 动态代理 代理的是接口
          UserService userService = (UserService) context.getBean("userService");

          userService.add();
          // 我是之前执行--------com.ldlang.service.UserServiceImpl的add被执行了
  		// 增加
          // 我是之后执行-----------，执行了add方法，返回结果为null
      }
  }
  ```

### 自定义类方式

接口和实现类同上

- 自定义类

  ```java
  package com.ldlang.coustom;

  public class Custom {
      public void customBefore() {
          System.out.println("方法调用之前----------");
      }

      public void customAfter() {
          System.out.println("方法调用之后--------------------");
      }
  }
  ```

- 配置文件

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns:aop="http://www.springframework.org/schema/aop"
         xsi:schemaLocation="http://www.springframework.org/schema/beans
          http://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/aop
          http://www.springframework.org/schema/aop/spring-aop.xsd">

      <bean id="userService" class="com.ldlang.service.UserServiceImpl"/>
      <bean id="custom" class="com.ldlang.coustom.Custom" />

      <aop:config>
          <aop:aspect ref="custom">
              <!--切入点-->
              <aop:pointcut id="point" expression="execution(* com.ldlang.service.UserServiceImpl.*(..))"/>
              <!--通知-->
              <aop:before method="customBefore" pointcut-ref="point" />
              <aop:after method="customBefore" pointcut-ref="point" />
          </aop:aspect>
      </aop:config>
  </beans>
  ```

- 测试

  ```java
  import com.ldlang.service.UserService;
  import org.springframework.context.ApplicationContext;
  import org.springframework.context.support.ClassPathXmlApplicationContext;

  public class test07 {
      public static void main(String[] args) {
          ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
          // 动态代理 代理的是接口
          UserService userService = (UserService) context.getBean("userService");

          userService.add();
          // 方法调用之前----------
  		// 增加
  		// 方法调用之前----------
      }
  }
  ```

### 注解方式

接口和实现类同上

- 注解类

  ```java
  package com.ldlang.coustom;

  import org.aspectj.lang.ProceedingJoinPoint;
  import org.aspectj.lang.annotation.After;
  import org.aspectj.lang.annotation.Around;
  import org.aspectj.lang.annotation.Aspect;
  import org.aspectj.lang.annotation.Before;
  import org.springframework.stereotype.Component;

  // 标记为是一个切面类
  @Aspect
  @Component
  public class AnnotationPoint {

      @Before("execution(* com.ldlang.service.UserServiceImpl.*(..))")
      public void bofore(){
          System.out.println("-----------------执行之前");
      }

      @After("execution(* com.ldlang.service.UserServiceImpl.*(..))")
      public void after(){
          System.out.println("-----------------执行之后");
      }

      @Around("execution(* com.ldlang.service.UserServiceImpl.*(..))")
      public void around(ProceedingJoinPoint pj) throws Throwable {
          System.out.println("环绕前，在before之前执行");
          pj.proceed(); // 调用方法，如果不掉用真实的方法就不会执行
          System.out.println("环绕后，在after之后执行");

      }
  }
  ```

- 配置文件

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns:aop="http://www.springframework.org/schema/aop"
         xmlns:context="http://www.springframework.org/schema/context"
         xsi:schemaLocation="http://www.springframework.org/schema/beans
          http://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/aop
          http://www.springframework.org/schema/aop/spring-aop.xsd 						http://www.springframework.org/schema/context 						    		https://www.springframework.org/schema/context/spring-context.xsd">

  	<!--开启注解支持配置-->
      <context:annotation-config/>
      <!--配置要扫描的包，只有被扫描的包里面的注解才能生效-->
      <context:component-scan base-package="com.ldlang"/>
      <!--开启aop注解支持-->
      <aop:aspectj-autoproxy />
  </beans>
  ```

- 测试

  ```java
  import com.ldlang.service.UserService;
  import org.springframework.context.ApplicationContext;
  import org.springframework.context.support.ClassPathXmlApplicationContext;

  public class test07 {
      public static void main(String[] args) {
          ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
          // 动态代理 代理的是接口
          UserService userService = (UserService) context.getBean("userService");

          userService.add();
  		// 环绕前，在before之前执行
  		// -----------------执行之前
  		// 增加
  		// -----------------执行之后
  		// 环绕后，在after之后执行
      }
  }
  ```
