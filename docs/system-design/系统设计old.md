1. 设计一个聊天服务
2. 设计拼车服务
3. 设计一个URL缩短服务
4. 设计一个社交媒体服务
5. 设计一个社交留言板
6. 设计文件存储服务
7. 设计一个视频流媒体服务
8. 设计一个API速率限制器
9. 设计一个邻近服务器
10. 设计一个预输入服务



## 秒杀系统

rabbitmq是为了削峰，如果是有1000件商品参与秒杀，每个商品有10件，那么系统的最大并发就是1万，db扛不住这么大的并发的，如果商品数量更大，这个并发量会更大。
通过Redis预减库存减少到DB的请求，通过消息队列异步写库缓解数据库的压力。用消息队列来缓冲瞬时流量，把同步的直接调用转换成异步操作。

把判断库存扣减库存的操作封装成lua脚本，实现原子性操作，避免超卖。

![](http://img.dabin-coder.cn/image/20220509004840.jpg)



