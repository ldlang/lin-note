---
sidebar: auto
---

# SpringCloud

## 1、调用其他服务的接口

### 核心概念：RestTemplate

`RestTemplate`是 Spring Web 模块提供的**同步 RESTful HTTP 客户端**，封装了底层的 HTTP 连接（基于 JDK 的`HttpURLConnection`或第三方的`HttpClient`/`OkHttp`），提供了简洁的 API 来发送 GET/POST/PUT/DELETE 等请求，并自动处理请求 / 响应的序列化与反序列化（比如 JSON ↔ Java 对象）。

**核心定位：**

- **同步调用**：发送请求后会阻塞当前线程，直到收到响应（区别于 Spring WebFlux 的`WebClient`异步客户端）。
- **简化 HTTP 操作**：无需手动处理连接建立、参数拼接、响应解析、异常处理等底层细节。
- **适配 REST 风格**：完美契合 RESTful API 的设计（GET 查、POST 增、PUT 改、DELETE 删）。

### 基本使用前提（SpringBoot）

SpringBoot 中使用`RestTemplate`首先需要**注入 Bean**（SpringBoot 不会自动配置，需手动声明）：

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfig {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate(); // 基础版，后续会讲定制化配置
    }
}
```

注入后即可在 Service/Controller 中使用：

```java
@Autowired
private RestTemplate restTemplate;
```

### 核心方法分类与使用示例

`RestTemplate`的方法分为两大类：**专用方法**（按 HTTP 方法分类）和**通用方法**（`exchange`/`execute`），下面是最常用的方法详解。

1. 专用方法（简洁，适合常规场景）

| HTTP 方法 |  RestTemplate 方法  |                        作用                         |                     返回值                     |
| :-------: | :-----------------: | :-------------------------------------------------: | :--------------------------------------------: |
|    GET    |  `getForObject()`   |            获取远程数据，直接返回响应体             | 目标 Java 对象（如`List<ItemDTO>`、`UserDTO`） |
|    GET    |  `getForEntity()`   |          获取包含响应头、状态码的完整响应           |              `ResponseEntity<T>`               |
|   POST    |  `postForObject()`  |             发送 POST 请求，返回响应体              |                 目标 Java 对象                 |
|   POST    |  `postForEntity()`  |            发送 POST 请求，返回完整响应             |              `ResponseEntity<T>`               |
|   POST    | `postForLocation()` | 发送 POST 请求，返回响应头中的 Location（资源地址） |                     `URI`                      |
|    PUT    |       `put()`       |               发送 PUT 请求，无返回值               |                      void                      |
|  DELETE   |     `delete()`      |             发送 DELETE 请求，无返回值              |                      void                      |

示例 1：GET 请求（getForObject - 仅获取响应体）

```java
// 场景：根据ID获取单个商品
String url = "http://localhost:8081/items/{id}";
// 参数1：URL模板；参数2：目标类型；参数3：URL占位符参数
ItemDTO item = restTemplate.getForObject(url, ItemDTO.class, 1001);
```

示例 2：GET 请求（getForEntity - 获取完整响应）

```java
String url = "http://localhost:8081/items/{id}";
ResponseEntity<ItemDTO> response = restTemplate.getForEntity(url, ItemDTO.class, 1001);

// 可获取状态码、响应头、响应体
HttpStatus statusCode = response.getStatusCode(); // 比如200 OK
HttpHeaders headers = response.getHeaders(); // 响应头（如Content-Type）
ItemDTO body = response.getBody(); // 响应体（商品数据）
```

示例 3：POST 请求（发送 JSON 请求体）

```java
// 场景：创建新商品，发送POST请求
String url = "http://localhost:8081/items";
// 1. 构建请求体（会自动序列化为JSON）
ItemCreateDTO request = new ItemCreateDTO("手机", 2999.99);
// 2. 发送POST请求，参数1：URL；参数2：请求体；参数3：响应类型
ItemDTO result = restTemplate.postForObject(url, request, ItemDTO.class);
```

示例 4：PUT/DELETE 请求

```java
// PUT：更新商品
String putUrl = "http://localhost:8081/items/{id}";
ItemUpdateDTO updateRequest = new ItemUpdateDTO("新款手机", 3999.99);
restTemplate.put(putUrl, updateRequest, 1001); // 参数3：URL中的id占位符

// DELETE：删除商品
String deleteUrl = "http://localhost:8081/items/{id}";
restTemplate.delete(deleteUrl, 1001);
```

2. 通用方法（灵活，适合复杂场景）

**`exchange()`**：支持任意 HTTP 方法，可自定义请求头、请求体，指定响应类型（解决泛型擦除问题），是你之前代码中用到的核心方法。

```java
// 场景：GET请求，传递逗号分隔的ID列表，获取商品列表（泛型响应）
String url = "http://localhost:8081/items?ids={ids}";
// 1. 构建URL参数
String idsStr = "1001,1002,1003";
// 2. 发送请求，指定响应类型为List<ItemDTO>（解决泛型擦除）
ResponseEntity<List<ItemDTO>> response = restTemplate.exchange(
        url,
        HttpMethod.GET,
        null, // GET请求无请求体，传null
        new ParameterizedTypeReference<List<ItemDTO>>() {}, // 保留泛型信息
        idsStr // 替换URL中的{ids}占位符
);
List<ItemDTO> itemList = response.getBody();
```

**`execute()`**：比`exchange()`更底层，支持自定义请求处理和响应处理（极少用，除非需要极致定制）。

### 关键进阶知识点

1. 解决泛型擦除问题（ParameterizedTypeReference）

当响应体是`List<ItemDTO>`、`Map<String, UserDTO>`等泛型类型时，直接传`List.class`会导致 Spring 无法解析泛型，必须用`ParameterizedTypeReference`：

```java
// 正确写法：匿名内部类保留泛型信息
ParameterizedTypeReference<List<ItemDTO>> typeRef =
    new ParameterizedTypeReference<List<ItemDTO>>() {};
ResponseEntity<List<ItemDTO>> response = restTemplate.exchange(url, HttpMethod.GET, null, typeRef);
```

2. 自定义请求头（HttpEntity）

比如添加 Token、指定 Content-Type：

```java
String url = "http://localhost:8081/items";
// 1. 构建请求头
HttpHeaders headers = new HttpHeaders();
headers.set("Authorization", "Bearer " + token); // Token认证
headers.setContentType(MediaType.APPLICATION_JSON); // 指定JSON格式

// 2. 封装请求体+请求头（HttpEntity）
ItemCreateDTO request = new ItemCreateDTO("手机", 2999.99);
HttpEntity<ItemCreateDTO> httpEntity = new HttpEntity<>(request, headers);

// 3. 发送请求
ItemDTO result = restTemplate.postForObject(url, httpEntity, ItemDTO.class);
```

3. 配置超时时间（ClientHttpRequestFactory）

默认的`SimpleClientHttpRequestFactory`超时时间过长（无明确限制），建议手动配置：

```java
@Bean
public RestTemplate restTemplate() {
    SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
    factory.setConnectTimeout(5000); // 连接超时：5秒
    factory.setReadTimeout(10000); // 读取超时：10秒
    return new RestTemplate(factory);
}
```

4. 替换底层 HTTP 客户端（提升性能）

默认的`HttpURLConnection`性能一般，可替换为`Apache HttpClient`或`OkHttp`：

```xml
<!-- 引入Apache HttpClient依赖（pom.xml） -->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.14</version>
</dependency>
```

```java
@Bean
public RestTemplate restTemplate() {
    // 使用HttpClient作为底层连接
    HttpClient httpClient = HttpClientBuilder.create()
            .setMaxConnTotal(100) // 最大连接数
            .setMaxConnPerRoute(20) // 每个路由最大连接数
            .build();
    HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory(httpClient);
    factory.setConnectTimeout(5000);
    factory.setReadTimeout(10000);
    return new RestTemplate(factory);
}
```

5. 异常处理

`RestTemplate`会将 HTTP 非 2xx 状态码转为`RestClientException`子类，常见异常：

- `HttpClientErrorException`：4xx 错误（如 404 Not Found、400 Bad Request）
- `HttpServerErrorException`：5xx 错误（如 500 Internal Server Error）
- `ResourceAccessException`：连接超时、拒绝连接等网络问题

建议捕获异常并处理：

```java
try {
    ItemDTO item = restTemplate.getForObject(url, ItemDTO.class, 1001);
} catch (HttpClientErrorException.NotFound e) {
    // 处理404：商品不存在
    log.error("商品ID{}不存在", 1001, e);
} catch (ResourceAccessException e) {
    // 处理连接超时/服务不可用
    log.error("调用商品接口失败，服务不可用", e);
} catch (RestClientException e) {
    // 兜底处理所有RestTemplate异常
    log.error("调用商品接口异常", e);
}
```

### RestTemplate vs WebClient

|   特性   |            RestTemplate            |               WebClient               |
| :------: | :--------------------------------: | :-----------------------------------: |
|   异步   |            同步（阻塞）            |            异步（非阻塞）             |
|  响应式  |               不支持               |         支持（基于 Reactor）          |
|   性能   |          普通（阻塞 IO）           |            高（非阻塞 IO）            |
| 适用场景 | 简单同步请求、传统 Spring MVC 项目 | 高并发、异步场景、Spring WebFlux 项目 |

> 注意：Spring 官方已标注`RestTemplate`为**维护模式**（不再新增功能），推荐新项目使用`WebClient`，但`RestTemplate`仍可正常使用，适合入门和简单场景。

### 完整示例

1. 将`RestTemplate`注入到`spring`的容器内

   在启动文件中注入`Bean`

   ```java
   import org.mybatis.spring.annotation.MapperScan;
   import org.springframework.boot.SpringApplication;
   import org.springframework.boot.autoconfigure.SpringBootApplication;
   import org.springframework.context.annotation.Bean;
   import org.springframework.web.client.RestTemplate;

   @MapperScan("com.ldlang.cart.mapper")
   @SpringBootApplication
   public class CartApplication {
       public static void main(String[] args) {
           SpringApplication.run(CartApplication.class, args);
       }

       // 注入 RestTemplate bean
       @Bean
       public RestTemplate restTemplate(){
           return new RestTemplate();
       }
   }
   ```

2. 装配

   在使用的地方

   ```java
   @Autowired
   private RestTemplate restTemplate;
   ```

3. 使用

   ```java
   ResponseEntity<List<ItemDTO>> response = restTemplate.exchange(
       "http://localhost:8081/items?ids={ids}", // 请求地址
       HttpMethod.GET, // 请求方法
       null,
       new ParameterizedTypeReference<List<ItemDTO>>() {}, // 参数响应类型
       Map.of("ids", itemIds.stream().map(Object::toString).collect(Collectors.joining(","))) // 请求参数
   );
   // 获取请求结果
   response.getBody()
   ```

## 2、nocas

注册中心，将所有的服务都进行统一的管理，自动感知服务的启停，并解决服务相互之间调用，请求地址写死的问题，可以自动获取同一个服务的不用请求地址。

### 安装 nocas

1. 创建 nocas 需要的数据库表

   ```sql
   /******************************************/
   /*   数据库全名 = nacos_config   */
   /*   表名称 = config_info   */
   /******************************************/
   CREATE TABLE `config_info` (
     `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
     `data_id` varchar(255) NOT NULL COMMENT 'data_id',
     `group_id` varchar(255) DEFAULT NULL,
     `content` longtext NOT NULL COMMENT 'content',
     `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
     `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
     `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
     `src_user` text COMMENT 'source user',
     `src_ip` varchar(20) DEFAULT NULL COMMENT 'source ip',
     `app_name` varchar(128) DEFAULT NULL,
     `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
     `c_desc` varchar(256) DEFAULT NULL,
     `c_use` varchar(64) DEFAULT NULL,
     `effect` varchar(64) DEFAULT NULL,
     `type` varchar(64) DEFAULT NULL,
     `c_schema` text,
     PRIMARY KEY (`id`),
     UNIQUE KEY `uk_configinfo_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info';

   /******************************************/
   /*   数据库全名 = nacos_config   */
   /*   表名称 = config_info_aggr   */
   /******************************************/
   CREATE TABLE `config_info_aggr` (
     `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
     `data_id` varchar(255) NOT NULL COMMENT 'data_id',
     `group_id` varchar(255) NOT NULL COMMENT 'group_id',
     `datum_id` varchar(255) NOT NULL COMMENT 'datum_id',
     `content` longtext NOT NULL COMMENT '内容',
     `gmt_modified` datetime NOT NULL COMMENT '修改时间',
     `app_name` varchar(128) DEFAULT NULL,
     `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
     PRIMARY KEY (`id`),
     UNIQUE KEY `uk_configinfoaggr_datagrouptenantdatum` (`data_id`,`group_id`,`tenant_id`,`datum_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='增加租户字段';

   /******************************************/
   /*   数据库全名 = nacos_config   */
   /*   表名称 = config_info_beta   */
   /******************************************/
   CREATE TABLE `config_info_beta` (
     `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
     `data_id` varchar(255) NOT NULL COMMENT 'data_id',
     `group_id` varchar(128) NOT NULL COMMENT 'group_id',
     `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
     `content` longtext NOT NULL COMMENT 'content',
     `beta_ips` varchar(1024) DEFAULT NULL COMMENT 'betaIps',
     `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
     `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
     `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
     `src_user` text COMMENT 'source user',
     `src_ip` varchar(20) DEFAULT NULL COMMENT 'source ip',
     `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
     PRIMARY KEY (`id`),
     UNIQUE KEY `uk_configinfobeta_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_beta';

   /******************************************/
   /*   数据库全名 = nacos_config   */
   /*   表名称 = config_info_tag   */
   /******************************************/
   CREATE TABLE `config_info_tag` (
     `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
     `data_id` varchar(255) NOT NULL COMMENT 'data_id',
     `group_id` varchar(128) NOT NULL COMMENT 'group_id',
     `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',
     `tag_id` varchar(128) NOT NULL COMMENT 'tag_id',
     `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
     `content` longtext NOT NULL COMMENT 'content',
     `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
     `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
     `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
     `src_user` text COMMENT 'source user',
     `src_ip` varchar(20) DEFAULT NULL COMMENT 'source ip',
     PRIMARY KEY (`id`),
     UNIQUE KEY `uk_configinfotag_datagrouptenanttag` (`data_id`,`group_id`,`tenant_id`,`tag_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_tag';

   /******************************************/
   /*   数据库全名 = nacos_config   */
   /*   表名称 = config_tags_relation   */
   /******************************************/
   CREATE TABLE `config_tags_relation` (
     `id` bigint(20) NOT NULL COMMENT 'id',
     `tag_name` varchar(128) NOT NULL COMMENT 'tag_name',
     `tag_type` varchar(64) DEFAULT NULL COMMENT 'tag_type',
     `data_id` varchar(255) NOT NULL COMMENT 'data_id',
     `group_id` varchar(128) NOT NULL COMMENT 'group_id',
     `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',
     `nid` bigint(20) NOT NULL AUTO_INCREMENT,
     PRIMARY KEY (`nid`),
     UNIQUE KEY `uk_configtagrelation_configidtag` (`id`,`tag_name`,`tag_type`),
     KEY `idx_tenant_id` (`tenant_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_tag_relation';

   /******************************************/
   /*   数据库全名 = nacos_config   */
   /*   表名称 = group_capacity   */
   /******************************************/
   CREATE TABLE `group_capacity` (
     `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
     `group_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Group ID，空字符表示整个集群',
     `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
     `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
     `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
     `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数，，0表示使用默认值',
     `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
     `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
     `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
     `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
     PRIMARY KEY (`id`),
     UNIQUE KEY `uk_group_id` (`group_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='集群、各Group容量信息表';

   /******************************************/
   /*   数据库全名 = nacos_config   */
   /*   表名称 = his_config_info   */
   /******************************************/
   CREATE TABLE `his_config_info` (
     `id` bigint(64) unsigned NOT NULL,
     `nid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
     `data_id` varchar(255) NOT NULL,
     `group_id` varchar(128) NOT NULL,
     `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
     `content` longtext NOT NULL,
     `md5` varchar(32) DEFAULT NULL,
     `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
     `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
     `src_user` text,
     `src_ip` varchar(20) DEFAULT NULL,
     `op_type` char(10) DEFAULT NULL,
     `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
     PRIMARY KEY (`nid`),
     KEY `idx_gmt_create` (`gmt_create`),
     KEY `idx_gmt_modified` (`gmt_modified`),
     KEY `idx_did` (`data_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='多租户改造';

   /******************************************/
   /*   数据库全名 = nacos_config   */
   /*   表名称 = tenant_capacity   */
   /******************************************/
   CREATE TABLE `tenant_capacity` (
     `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
     `tenant_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Tenant ID',
     `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
     `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
     `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
     `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数',
     `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
     `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
     `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
     `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
     PRIMARY KEY (`id`),
     UNIQUE KEY `uk_tenant_id` (`tenant_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='租户容量信息表';

   CREATE TABLE `tenant_info` (
     `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
     `kp` varchar(128) NOT NULL COMMENT 'kp',
     `tenant_id` varchar(128) default '' COMMENT 'tenant_id',
     `tenant_name` varchar(128) default '' COMMENT 'tenant_name',
     `tenant_desc` varchar(256) DEFAULT NULL COMMENT 'tenant_desc',
     `create_source` varchar(32) DEFAULT NULL COMMENT 'create_source',
     `gmt_create` bigint(20) NOT NULL COMMENT '创建时间',
     `gmt_modified` bigint(20) NOT NULL COMMENT '修改时间',
     PRIMARY KEY (`id`),
     UNIQUE KEY `uk_tenant_info_kptenantid` (`kp`,`tenant_id`),
     KEY `idx_tenant_id` (`tenant_id`)
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='tenant_info';

   CREATE TABLE `users` (
   	`username` varchar(50) NOT NULL PRIMARY KEY,
   	`password` varchar(500) NOT NULL,
   	`enabled` boolean NOT NULL
   );

   CREATE TABLE `roles` (
   	`username` varchar(50) NOT NULL,
   	`role` varchar(50) NOT NULL,
   	UNIQUE INDEX `idx_user_role` (`username` ASC, `role` ASC) USING BTREE
   );

   CREATE TABLE `permissions` (
       `role` varchar(50) NOT NULL,
       `resource` varchar(512) NOT NULL,
       `action` varchar(8) NOT NULL,
       UNIQUE INDEX `uk_role_permission` (`role`,`resource`,`action`) USING BTREE
   );

   INSERT INTO users (username, password, enabled) VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', TRUE);

   INSERT INTO roles (username, role) VALUES ('nacos', 'ROLE_ADMIN');

   ```

2. 拉取并配置启动 nocas

   ```bash
   docker run -d \
   --name nacos \
   -p 8848:8848 \
   -p 9848:9848 \
   -p 9849:9849 \
   --restart=always \
   -e PREFER_HOST_MODE=hostname \
   -e MODE=standalone \
   -e NACOS_DATASOURCE_PLATFORM=mysql \
   -e MYSQL_SERVICE_HOST=127.0.0.1 \  # ip地址替换为服务器的地址
   -e MYSQL_SERVICE_DB_NAME=nacos \
   -e MYSQL_SERVICE_PORT=3306 \
   -e MYSQL_SERVICE_USER=root \
   -e MYSQL_SERVICE_PASSWORD=123 \
   -e MYSQL_SERVICE_DB_PARAM="characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Shanghai" \
   # 补充内存优化参数，避免JVM内存不足导致连接重置，服务器内存大可要不加
   -e JVM_XMS=512m \
   -e JVM_XMX=512m \
   -e JVM_XMN=256m \
   nacos/nacos-server:v2.1.0-slim
   ```

3. 连接 nocas

   在浏览器打开 127.0.0.1:8848/nocas，即可进入 nocas

### 项目中使用 nocas

1. 加入依赖

   ```xml
   <dependency>
       <groupId>com.alibaba.cloud</groupId>
       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
   </dependency>
   ```

2. `application.yaml`加入配置

   ```yaml
   spring:
     application:
       name: cart-service # 微服务名称必须唯一
     cloud:
       nacos:
         server-addr: 127.0.0.0:8848 # 配置为服务器的ip
   ```

3. 调用其他服务接口

   > 前提是当前服务和被调用的服务都注册到了 nocas 中

   ```java
   @Autowired
   private final DiscoveryClient discoveryClient;

   // 通过服务名获取所有的服务实例
   List<ServiceInstance> instances = discoveryClient.getInstances("item-service");
   if (CollUtils.isEmpty(instances)) return;
   // 使用随机数，随机挑选一个服务
   ServiceInstance serviceInstance = instances.get(RandomUtil.randomInt(instances.size()));

   ResponseEntity<List<ItemDTO>> response = restTemplate.exchange(
       // 将得到的服务地址进行拼接
       serviceInstance.getUri() + "/items?ids={ids}",
       HttpMethod.GET,
       null,
       new ParameterizedTypeReference<List<ItemDTO>>() {},
       Map.of("ids", itemIds.stream().map(Object::toString).collect(Collectors.joining(",")))
   );
   ```

## 3、OpenFeign

配置`nocas`实现不同服务之间快速简单的调用

1. 添加依赖

   ```xml
   <!--openFeign-->
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-openfeign</artifactId>
   </dependency>
   <!--负载均衡器-->
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-loadbalancer</artifactId>
   </dependency>
   ```

2. 在启动类上添加注解

   ```java
   @EnableFeignClients  // 加入这个注解
   @SpringBootApplication
   public class CartApplication {
       public static void main(String[] args) {
           SpringApplication.run(CartApplication.class, args);
       }
   }
   ```

3. 编写对应服务的接口

   ```java
   import com.hmall.cart.domain.dto.ItemDTO;
   import org.springframework.cloud.openfeign.FeignClient;
   import org.springframework.web.bind.annotation.GetMapping;
   import org.springframework.web.bind.annotation.RequestParam;

   import java.util.List;

   // item-services服务中所有的接口都可以写这里面
   @FeignClient("item-service")
   public interface ItemClient {

       @GetMapping("/items")
       List<ItemDTO> queryItemByIds(@RequestParam("ids") List<Long> ids);
   }
   ```

4. 注入

   ```java
   @Autowired
   private final ItemClient itemClient;
   ```

5. 使用

   就像调`service`服务一样，调用对应接口即可

   ```java
   List<ItemDTO> items = itemClient.queryItemByIds(itemIds);
   ```

### 最佳实践

将所有需要对外暴露的接口，dto 等全部放在一个新的模块中，进行统一的管理，那个服务需要就去这个公共的服务中去拿

1. 新建公共的 api 模块，将上面的服务接口和类型文件抽离到这个模块中（**模块名称 ldlang-api**）

2. 在需要调用公共导入这个模块

   ```xml
   <dependency>
       <groupId>com.heima</groupId>
       <artifactId>ldlang-api</artifactId>
       <version>1.0.0</version>
   </dependency>
   ```

3. 更改启动文件中的`@EnableFeignClients`，指定扫描的包，之后就像调用`service`一样正常调用即可

   ```java
   @EnableFeignClients(basePackages = "com.ldlang.api.client")
   ```

### 日志

1. 添加日志配置文件

   ```java
   import feign.Logger;
   import org.springframework.context.annotation.Bean;

   public class DefaultFeignConfig {
       @Bean
       public Logger.Level feignLoggerLevel(){
           return Logger.Level.FULL;
       }
   }
   ```

2. 开启日志

   ```java
   @EnableFeignClients(basePackages = "com.hmall.api.client", defaultConfiguration = DefaultFeignConfig.class)
   ```

## 4、网关

当服务被拆分成多个的时候，就有很多个端口，这样前端就不知道要请求那个接口了，这时候就需要网关进行服务的统一调度，所有的请求都请求到网关，再由[网关](https://spring.io/projects/spring-cloud-gateway#learn)进行路由的转发，网关所有转发后的请求都是去到 nacos。

### 安装使用

1. 需要新建一个模块进行网关服务的统一管理

2. 添加依赖

   ```xml
   <!--网关-->
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-gateway</artifactId>
   </dependency>
   <!--nacos discovery-->
   <dependency>
       <groupId>com.alibaba.cloud</groupId>
       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
   </dependency>
   <!--负载均衡-->
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-loadbalancer</artifactId>
   </dependency>
   </dependencies>
   ```

3. 配置`application.yaml`

   ```yaml
   server:
     port: 8080 # 请求的端口号
   spring:
     application:
       name: gateway # 服务名称
     cloud:
       nacos:
         server-addr: 127.0.0.1:8848 # nacos的地址
       gateway:
         routes:
           - id: user-service # 路由规则id，自定义，唯一，最好和服务名对应
             uri: lb://user-service # 路由的目标服务，lb代表负载均衡，会从注册中心拉取服务列表，user-service拉取nacos的服务名
             predicates: # 路由断言，判断当前请求是否符合当前规则，符合则路由到目标服务
               - Path=/items/**,/search/** # 这里是以请求路径作为判断规则
   ```

### 配置

1. [predicates](https://docs.spring.io/spring-cloud-gateway/docs/3.1.9/reference/html/#gateway-request-predicates-factories)的配置，处理路由匹配

   | **名称**   | **说明**                        | **示例**                                                                                               |
   | :--------- | :------------------------------ | :----------------------------------------------------------------------------------------------------- |
   | After      | 是某个时间点后的请求            | - After=2037-01-20T17:42:47.789-07:00[America/Denver]                                                  |
   | Before     | 是某个时间点之前的请求          | - Before=2031-04-13T15:14:47.433+08:00[Asia/Shanghai]                                                  |
   | Between    | 是某两个时间点之前的请求        | - Between=2037-01-20T17:42:47.789-07:00[America/Denver], 2037-01-21T17:42:47.789-07:00[America/Denver] |
   | Cookie     | 请求必须包含某些 cookie         | - Cookie=chocolate, ch.p                                                                               |
   | Header     | 请求必须包含某些 header         | - Header=X-Request-Id, \d+                                                                             |
   | Host       | 请求必须是访问某个 host（域名） | - Host=**.somehost.org,**.anotherhost.org                                                              |
   | Method     | 请求方式必须是指定方式          | - Method=GET,POST                                                                                      |
   | Path       | 请求路径必须符合指定规则        | - Path=/red/{segment},/blue/\*\*                                                                       |
   | Query      | 请求参数必须包含指定参数        | - Query=name, Jack 或者- Query=name                                                                    |
   | RemoteAddr | 请求者的 ip 必须是指定范围      | - RemoteAddr=192.168.1.1/24                                                                            |
   | weight     | 权重处理                        |                                                                                                        |

2. [filter](https://docs.spring.io/spring-cloud-gateway/docs/3.1.9/reference/html/#gatewayfilter-factories)的配置，统一的请求头，重写路径等

### 请求拦截

在网关中实现`GlobalFilter`和`Ordered`接口即可

```java
package com.hmall.gateway.filters;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class MyGlobalFilter implements GlobalFilter, Ordered {

    // 所有的请求都会先走到这里
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        // 获取请求
        ServerHttpRequest request = exchange.getRequest();
        HttpHeaders headers = request.getHeaders();
        System.out.println(headers);
        // 将处理过后的请求返回回去
        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        // 过滤器执行的时机，值越小，越先执行
        return 0;
    }
}

```
