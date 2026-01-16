---
sidebar: auto
---

# Redis

[官网](https://redis.io/)

[中文翻译版](https://www.redis.net.cn/)

## 1、安装

使用 docker 进行安装

1. 拉取镜像

   ```bash
   docker pull redis:8.0.2
   ```

2. 更改`/data/redis/conf/redis.conf`文件

   ```bash
   # 允许所有IP访问（生产环境可改为内网IP，如 192.168.1.0/24）
   bind 0.0.0.0
   # 关闭保护模式（否则仅本地能访问）
   protected-mode no
   # 端口（默认6379，可自定义）
   port 6379
   # 设置Redis密码（必填，避免未授权访问）
   requirepass 123456
   # 持久化：开启AOF（追加日志，比RDB更安全）
   appendonly yes
   # 每秒刷盘一次（平衡性能和数据安全）
   appendfsync everysec
   # 持久化：RDB快照（兜底，每5分钟/至少1个修改触发快照）
   save 300 1
   # 数据存储目录（容器内路径，需和挂载目录对应）
   dir /data
   # 日志文件路径
   logfile /logs/redis.log
   # 内存限制（按需设置，如 1GB，避免占满服务器内存）
   maxmemory 1gb
   # 内存淘汰策略（内存满时删除最少使用的Key）
   maxmemory-policy allkeys-lru
   # 容器内无需后台运行（由Docker -d参数接管）
   daemonize no
   ```

3. 启动容器

   ```bash
   docker run -d \
     --name redis \                  # 容器名称（自定义，如 redis-7.2）
     --restart=always \              # 开机自启 + 容器异常时自动重启
     -p 6379:6379 \                  # 端口映射：宿主机6379 → 容器6379
     -v /data/redis/conf/redis.conf:/etc/redis/redis.conf \  # 挂载自定义配置
     -v /data/redis/data:/data \     # 挂载数据目录（持久化核心）
     -v /data/redis/logs:/logs \     # 挂载日志目录
     --privileged=true \             # 赋予容器特权（解决目录权限问题）
     redis:8.0.2 \                     # 使用的镜像版本
     redis-server /etc/redis/redis.conf  # 指定配置文件启动（覆盖默认配置）

   # 纯享版
   docker run -d \
     --name redis \
     --restart=always \
     -p 6379:6379 \
     -v /data/redis/conf/redis.conf:/etc/redis/redis.conf \
     -v /data/redis/data:/data \
     -v /data/redis/logs:/logs \
     --privileged=true \
     redis:8.0.2 \
     redis-server /etc/redis/redis.conf
   ```

4. 查看是否启动成功

   ```bash
   docker ps
   ```

5. 查看是否安装成功

   ```bash
   docker exec -it redis redis-cli

   # 登录redis
   AUTH 123456

   # 验证是否连接成功
   ping
   # 如果控制台返回 pong 则代表成功
   ```

## 2、数据类型

| 数据类型             | 示例结构                  |
| -------------------- | ------------------------- |
| **String**           | `hello world`             |
| **Hash**             | `{name: "Jack", age: 21}` |
| **List**             | `[A -> B -> C -> C]`      |
| **Set**              | `{A, B, C}`               |
| **SortedSet (Zset)** | `{A: 1, B: 2, C: 3}`      |
| **GEO**              | `{A: (120.3, 30.5)}`      |
| **BitMap**           | `0110110101110101011`     |
| **HyperLog**         | `0110110101110101011`     |

## 3、通用命令

| 命令       | 说明                                                               | 语法示例                                                                   |
| ---------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| **KEYS**   | 查看符合模板的所有 key，不建议在生产环境设备上使用（会阻塞服务器） | `KEYS *`（匹配所有 key）<br>`KEYS user:*`（匹配所有以 `user:` 开头的 key） |
| **DEL**    | 删除一个或多个指定的 key                                           | `DEL mykey`<br>`DEL key1 key2 key3`（批量删除）                            |
| **EXISTS** | 判断 key 是否存在，返回 1 表示存在，0 表示不存在                   | `EXISTS mykey`                                                             |
| **EXPIRE** | 给一个 key 设置有效期（单位：秒），到期后自动删除                  | `EXPIRE mykey 60`（设置 `mykey` 60 秒后过期）                              |
| **TTL**    | 查看 key 的剩余有效期（单位：秒），-1 表示永不过期，-2 表示已过期  | `TTL mykey`                                                                |

## 4、字符串命令

| 命令            | 说明                                                            | 语法示例                                                             |
| --------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| **SET**         | 添加或者修改已存在的一个 String 类型的键值对                    | `SET username "zhangsan"`                                            |
| **GET**         | 根据 key 获取 String 类型的 value                               | `GET username`                                                       |
| **MSET**        | 批量添加多个 String 类型的键值对                                | `MSET key1 "value1" key2 "value2" key3 "value3"`                     |
| **MGET**        | 根据多个 key 获取多个 String 类型的 value                       | `MGET key1 key2 key3`                                                |
| **INCR**        | 让一个整型的 key 自增 1                                         | `INCR num`                                                           |
| **INCRBY**      | 让一个整型的 key 自增并指定步长                                 | `INCRBY num 2`（让 `num` 值自增 2）                                  |
| **INCRBYFLOAT** | 让一个浮点类型的数字自增并指定步长                              | `INCRBYFLOAT score 1.5`                                              |
| **SETNX**       | 添加一个 String 类型的键值对，前提是这个 key 不存在，否则不执行 | `SETNX lock "1"`（常用于分布式锁场景）                               |
| **SETEX**       | 添加一个 String 类型的键值对，并且指定有效期                    | `SETEX session 3600 "session_id_123"`（设置 `session` 1 小时后过期） |

### key 的分级存储

推荐存储格式

```bash
ldlang:order:1 张三
ldlang:order:2 李四
```

这样就会得到分组的 key

![分组存储](/Redis/keys.png)

## 5、hash 类型命令

在字符串类型命令前面加个`H`就是`hash`的命令，但是指定 key 的同时还是指定`字段名`和`值`

```bash
HSET user:1 name "zhangsan"

user:1 # key
name # 字段
"zhangsan" #值
```

| 命令        | 说明                                                                      | 语法示例                                     |
| ----------- | ------------------------------------------------------------------------- | -------------------------------------------- |
| **HSET**    | 添加或者修改 hash 类型 key 的 field 的值                                  | `HSET user:1 name "zhangsan"`                |
| **HGET**    | 获取一个 hash 类型 key 的 field 的值                                      | `HGET user:1 name`                           |
| **HMSET**   | 批量添加多个 hash 类型 key 的 field 的值                                  | `HMSET user:1 age 25 city "beijing"`         |
| **HMGET**   | 批量获取多个 hash 类型 key 的 field 的值                                  | `HMGET user:1 name age city`                 |
| **HGETALL** | 获取一个 hash 类型的 key 中的所有的 field 和 value                        | `HGETALL user:1`                             |
| **HKEYS**   | 获取一个 hash 类型的 key 中的所有的 field                                 | `HKEYS user:1`                               |
| **HVALS**   | 获取一个 hash 类型的 key 中的所有的 value                                 | `HVALS user:1`                               |
| **HINCRBY** | 让一个 hash 类型 key 的字段值自增并指定步长                               | `HINCRBY user:1 score 10`                    |
| **HSETNX**  | 添加一个 hash 类型的 key 的 field 值，前提是这个 field 不存在，否则不执行 | `HSETNX user:1 email "zhangsan@example.com"` |

## 6、List 类型命令

| 命令       | 说明                                                                      | 语法示例                                                                       |
| ---------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **LPUSH**  | 向列表左侧插入一个或多个元素                                              | `LPUSH mylist "a" "b" "c"`                                                     |
| **LPOP**   | 移除并返回列表左侧的第一个元素，没有则返回 `nil`                          | `LPOP mylist`                                                                  |
| **RPUSH**  | 向列表右侧插入一个或多个元素                                              | `RPUSH mylist "x" "y" "z"`                                                     |
| **RPOP**   | 移除并返回列表右侧的第一个元素                                            | `RPOP mylist`                                                                  |
| **LRANGE** | 返回一段索引范围内的所有元素（`0` 表示第一个元素，`-1` 表示最后一个元素） | `LRANGE mylist 0 -1`（获取所有元素）<br>`LRANGE mylist 0 2`（获取前 3 个元素） |
| **BLPOP**  | 与 `LPOP` 类似，列表为空时会阻塞等待指定时间（单位：秒），超时返回 `nil`  | `BLPOP mylist 10`（等待 10 秒）                                                |
| **BRPOP**  | 与 `RPOP` 类似，列表为空时会阻塞等待指定时间（单位：秒），超时返回 `nil`  | `BRPOP mylist 10`（等待 10 秒）                                                |

## 7、Set 类型命令

| 命令          | 说明                                                            | 语法示例                 |
| ------------- | --------------------------------------------------------------- | ------------------------ |
| **SADD**      | 向 set 中添加一个或多个元素                                     | `SADD myset "a" "b" "c"` |
| **SREM**      | 移除 set 中的指定元素                                           | `SREM myset "b"`         |
| **SCARD**     | 返回 set 中元素的个数                                           | `SCARD myset`            |
| **SISMEMBER** | 判断一个元素是否存在于 set 中                                   | `SISMEMBER myset "a"`    |
| **SMEMBERS**  | 获取 set 中的所有元素                                           | `SMEMBERS myset`         |
| **SINTER**    | 求多个 set 的交集                                               | `SINTER myset1 myset2`   |
| **SDIFF**     | 求多个 set 的差集（存在于第一个 set 但不存在于其他 set 的元素） | `SDIFF myset1 myset2`    |
| **SUNION**    | 求多个 set 的并集                                               | `SUNION myset1 myset2`   |

## 8、SortedSet (ZSet) 类型命令

| 命令                      | 说明                                                           | 语法示例                                                                       |
| ------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **ZADD**                  | 添加一个或多个元素到 sorted set，若元素已存在则更新其 score 值 | `ZADD myzset 1 "a" 2 "b" 3 "c"`                                                |
| **ZREM**                  | 删除 sorted set 中的一个指定元素                               | `ZREM myzset "b"`                                                              |
| **ZSCORE**                | 获取 sorted set 中指定元素的 score 值                          | `ZSCORE myzset "a"`                                                            |
| **ZRANK**                 | 获取 sorted set 中指定元素的排名（按 score 升序，从 0 开始）   | `ZRANK myzset "a"`                                                             |
| **ZCARD**                 | 获取 sorted set 中的元素个数                                   | `ZCARD myzset`                                                                 |
| **ZCOUNT**                | 统计 score 值在给定范围内的所有元素的个数                      | `ZCOUNT myzset 1 3`                                                            |
| **ZINCRBY**               | 让 sorted set 中的指定元素自增，步长为指定的 increment 值      | `ZINCRBY myzset 2 "a"`                                                         |
| **ZRANGE**                | 按照 score 升序排序后，获取指定排名范围内的元素                | `ZRANGE myzset 0 -1`（获取所有元素）<br>`ZRANGE myzset 0 2`（获取前 3 个元素） |
| **ZRANGEBYSCORE**         | 按照 score 排序后，获取指定 score 范围内的元素                 | `ZRANGEBYSCORE myzset 1 3`                                                     |
| **ZDIFF、ZINTER、ZUNION** | 求多个 sorted set 的差集、交集、并集                           | `ZINTER myzset1 myzset2`<br>`ZUNION myzset1 myzset2`                           |

## 9、SpringBoot 使用 Redis

### 安装使用

1. 添加依赖

   ```xml
   <!--redis相关依赖-->
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-redis</artifactId>
   </dependency>
   <dependency>
       <groupId>org.apache.commons</groupId>
       <artifactId>commons-pool2</artifactId>
       <version>2.11.1</version>
   </dependency>
   <!--json序列化相关依赖-->
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-test</artifactId>
       <scope>test</scope>
   </dependency>
   <dependency>
       <groupId>com.fasterxml.jackson.core</groupId>
       <artifactId>jackson-core</artifactId>
       <version>2.14.2</version>
   </dependency>
   <dependency>
       <groupId>com.fasterxml.jackson.module</groupId>
       <artifactId>jackson-module-jaxb-annotations</artifactId>
       <version>2.14.2</version>
   </dependency>
   <dependency>
       <groupId>com.fasterxml.jackson.core</groupId>
       <artifactId>jackson-databind</artifactId>
       <version>2.14.2</version>
   </dependency>
   ```

2. 配置连接

   ```yaml
   spring:
     data:
       redis:
         host: 127.0.0.1
         port: 6379
         database: 0
         password: 123456 # 密码
         timeout: 10s
         lettuce:
           pool:
             # 最大活跃连接数
             max-active: 8
             # 最大空闲连接数
             max-idle: 8
             # 最小空闲连接数
             min-idle: 0
             # 连接池最大阻塞等待时间（-1 表示无限制）
             max-wait: -1ms
   ```

3. 设置 redis 的序列化

   ```java
   import org.springframework.cache.annotation.EnableCaching;
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;
   import org.springframework.data.redis.cache.RedisCacheConfiguration;
   import org.springframework.data.redis.cache.RedisCacheManager;
   import org.springframework.data.redis.cache.RedisCacheWriter;
   import org.springframework.data.redis.connection.RedisConnectionFactory;
   import org.springframework.data.redis.core.RedisTemplate;
   import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
   import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
   import org.springframework.data.redis.serializer.RedisSerializationContext;
   import org.springframework.data.redis.serializer.StringRedisSerializer;

   @Configuration
   @EnableCaching
   public class RedisConfig {

       // 配置 RedisTemplate，用于操作 Redis 数据库
       @Bean
       public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
           // 创建 RedisTemplate 对象，用于执行 Redis 操作
           RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
           // 设置连接工厂，用于与 Redis 建立连接
           redisTemplate.setConnectionFactory(factory);

           // 设置 key 的序列化器，使用 StringRedisSerializer 将 key 序列化为字符串
           redisTemplate.setKeySerializer(new StringRedisSerializer());
           // 设置 value 的序列化器，使用 GenericJackson2JsonRedisSerializer 将对象序列化为 JSON
           redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());

           // 设置 hash key 的序列化器，使用 StringRedisSerializer 序列化 hash 的 key
           redisTemplate.setHashKeySerializer(new StringRedisSerializer());
           // 设置 hash value 的序列化器，使用 Jackson2JsonRedisSerializer 将 hash 值序列化为 JSON
           redisTemplate.setHashValueSerializer(new Jackson2JsonRedisSerializer<Object>(Object.class));

           // 返回配置好的 RedisTemplate
           return redisTemplate;
       }

       // 配置 RedisCacheManager，用于管理 Redis 缓存
       @Bean
       public RedisCacheManager redisCacheManager(RedisTemplate redisTemplate) {
           // 创建 RedisCacheWriter，nonLockingRedisCacheWriter 表示不使用锁机制进行缓存操作
           RedisCacheWriter redisCacheWriter = RedisCacheWriter.nonLockingRedisCacheWriter(redisTemplate.getConnectionFactory());

           // 配置 RedisCacheConfiguration，指定缓存值的序列化方式，使用 RedisTemplate 中配置的 ValueSerializer 进行序列化
           RedisCacheConfiguration redisCacheConfiguration = RedisCacheConfiguration.defaultCacheConfig()
                   .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(redisTemplate.getValueSerializer()));

           // 返回配置好的 RedisCacheManager
           return new RedisCacheManager(redisCacheWriter, redisCacheConfiguration);
       }
   }
   ```

4. 注入 bean

   ```java
   @Autowired
   private RedisTemplate<String, Object> redisTemplate;
   ```

5. 使用

   ```java
   redisTemplate.opsForValue().set("str", 90);
   ```

### 方法介绍

| API                               | 返回值类型        | 说明                          |
| --------------------------------- | ----------------- | ----------------------------- |
| **`redisTemplate.opsForValue()`** | `ValueOperations` | 操作 String 类型数据          |
| **`redisTemplate.opsForHash()`**  | `HashOperations`  | 操作 Hash 类型数据            |
| **`redisTemplate.opsForList()`**  | `ListOperations`  | 操作 List 类型数据            |
| **`redisTemplate.opsForSet()`**   | `SetOperations`   | 操作 Set 类型数据             |
| **`redisTemplate.opsForZSet()`**  | `ZSetOperations`  | 操作 SortedSet 类型数据       |
| **`redisTemplate`**               | -                 | 通用的命令（如 key 相关操作） |

1. 操作 String 类型

- **API**：`redisTemplate.opsForValue()`
- **返回值类型**：`ValueOperations`
- **说明**：用于操作 Redis 中的字符串（String）类型数据。

  ```java
  @Autowired
  private RedisTemplate<String, Object> redisTemplate;

  // 写入 String 数据
  ValueOperations<String, Object> valueOps = redisTemplate.opsForValue();
  valueOps.set("username", "zhangsan");
  valueOps.set("age", 25, 1, TimeUnit.HOURS); // 设置过期时间 1 小时

  // 读取 String 数据
  String username = (String) valueOps.get("username");
  Integer age = (Integer) valueOps.get("age");

  // 递增/递减
  valueOps.increment("visitCount", 1); // visitCount 自增 1
  valueOps.decrement("visitCount", 1); // visitCount 自减 1
  ```

2. 操作 Hash 类型

- **API**：`redisTemplate.opsForHash()`
- **返回值类型**：`HashOperations`
- **说明**：用于操作 Redis 中的哈希（Hash）类型数据，适合存储对象的多个字段。

  ```java
  HashOperations<String, Object, Object> hashOps = redisTemplate.opsForHash();

  // 写入 Hash 数据
  hashOps.put("user:1001", "name", "lisi");
  hashOps.put("user:1001", "email", "lisi@example.com");
  hashOps.putAll("user:1002", Map.of("name", "wangwu", "age", 30));

  // 读取 Hash 数据
  String name = (String) hashOps.get("user:1001", "name");
  Map<Object, Object> userMap = hashOps.entries("user:1002");

  // 删除 Hash 字段
  hashOps.delete("user:1001", "email");
  ```

3. 操作 List 类型

- **API**：`redisTemplate.opsForList()`
- **返回值类型**：`ListOperations`
- **说明**：用于操作 Redis 中的列表（List）类型数据，基于链表实现，支持双向操作。

  ```java
  ListOperations<String, Object> listOps = redisTemplate.opsForList();

  // 写入 List 数据（左插/右插）
  listOps.leftPush("messageList", "Hello");
  listOps.rightPush("messageList", "World");
  listOps.leftPushAll("messageList", "Hi", "There");

  // 读取 List 数据
  Object first = listOps.leftPop("messageList"); // 弹出左侧元素
  Object last = listOps.rightPop("messageList"); // 弹出右侧元素
  List<Object> messages = listOps.range("messageList", 0, -1); // 获取全部元素

  // 获取列表长度
  Long size = listOps.size("messageList");
  ```

4. 操作 Set 类型

- **API**：`redisTemplate.opsForSet()`
- **返回值类型**：`SetOperations`
- **说明**：用于操作 Redis 中的集合（Set）类型数据，元素唯一且无序。

  ```java
  SetOperations<String, Object> setOps = redisTemplate.opsForSet();

  // 写入 Set 数据
  setOps.add("tags", "java", "spring", "redis");
  setOps.add("tags", "mysql");

  // 读取 Set 数据
  Set<Object> allTags = setOps.members("tags");
  Boolean isMember = setOps.isMember("tags", "java");

  // 集合运算
  Set<Object> union = setOps.union("tags", "otherTags"); // 并集
  Set<Object> intersect = setOps.intersect("tags", "otherTags"); // 交集
  ```

5. 操作 Sorted Set (ZSet) 类型

- **API**：`redisTemplate.opsForZSet()`
- **返回值类型**：`ZSetOperations`
- **说明**：用于操作 Redis 中的有序集合（ZSet）类型数据，元素唯一且按分数排序。

  ```java
  ZSetOperations<String, Object> zSetOps = redisTemplate.opsForZSet();

  // 写入 ZSet 数据
  zSetOps.add("ranking", "zhangsan", 95.0);
  zSetOps.add("ranking", "lisi", 88.0);
  zSetOps.add("ranking", "wangwu", 92.0);

  // 读取 ZSet 数据
  Set<Object> top2 = zSetOps.range("ranking", 0, 1); // 按分数升序取前 2 名
  Set<Object> top2Desc = zSetOps.reverseRange("ranking", 0, 1); // 按分数降序取前 2 名
  Double score = zSetOps.score("ranking", "zhangsan"); // 获取元素分数

  // 递增分数
  zSetOps.incrementScore("ranking", "lisi", 5.0);
  ```

6. RedisTemplate 通用命令

- **API**：`redisTemplate`
- **说明**：提供 Redis 通用操作，如删除、过期、判断存在等。

  ```java
  // 删除 key
  Boolean deleted = redisTemplate.delete("username");

  // 设置过期时间
  Boolean expire = redisTemplate.expire("messageList", 30, TimeUnit.MINUTES);

  // 判断 key 是否存在
  Boolean exists = redisTemplate.hasKey("tags");

  // 重命名 key
  redisTemplate.rename("oldKey", "newKey");

  // 获取 key 的剩余过期时间
  Long ttl = redisTemplate.getExpire("ranking");
  ```
