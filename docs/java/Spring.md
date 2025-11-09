---
sidebar: auto
---

# Spring

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
