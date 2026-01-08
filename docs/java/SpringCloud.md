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
