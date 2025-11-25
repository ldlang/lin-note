---
sidebar: auto
---

# SpringBoot

## 1、核心文件

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

2.
