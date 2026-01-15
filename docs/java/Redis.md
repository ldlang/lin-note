---
sidebar: auto
---

# Redis

[官网](https://redis.io/)

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
