---
sidebar: heading
---

> 回复【**手册**】获取大彬精心整理的**大厂面试手册**。

## 面试开始

旁白：通过微信聊天方式模拟现场面试

**面试官**：**看你简历上写了做过扫码登录的功能**

**面试官**：**详细介绍下怎么设计的？**

大彬：嗯，扫码登录功能主要分为三个阶段：**待扫描、已扫描待确认、已确认**。

大彬：整体流程图如下图。

![](http://img.dabin-coder.cn/image/整个流程.png)

大彬：下面分阶段来看看设计原理。

**1、待扫描阶段**

首先是待扫描阶段，这个阶段是 PC 端跟服务端的交互过程。

每次用户打开PC端登陆请求，系统返回一个**唯一的二维码ID**，并将二维码ID的信息绘制成二维码返回给用户。

这里的二维码ID一定是唯一的，后续流程会将二维码ID跟身份信息绑定，不唯一的话就会造成你登陆了其他用户的账号或者其他用户登陆你的账号。

此时在 PC 端会启动一个定时器，**轮询查询二维码是否被扫描**。

如果移动端未扫描的话，那么一段时间后二维码将会失效。

这个阶段的交互过程如下图所示。

![](http://img.dabin-coder.cn/image/第一阶段.png)

**2、已扫描待确认阶段**

第二个阶段是已扫描待确认阶段，主要是移动端跟服务端交互的过程。

首先移动端扫描二维码，获取二维码 ID，然后**将手机端登录的凭证（token）和 二维码 ID 作为参数发送给服务端**

此时的手机在之前已经是登录的，不存在没登录的情况。

服务端接受请求后，会将 token 与二维码 ID 关联，然后会生成一个临时token，这个 token 会返回给移动端，临时 token 用作确认登录的凭证。

PC 端的定时器，会轮询到二维码的状态已经发生变化，会将 PC 端的二维码更新为已扫描，请在手机端确认。

**面试官**：**打断一下，这里为什么要有手机端确认的操作？**

大彬：假设没有确认这个环节，很容易就会被坏人拦截token去冒充登录。所以二维码扫描一定要有这个确认的页面，让用户去确认是否进行登录。

大彬：另外，二维码扫描确认之后，再往用户app或手机等发送登录提醒的通知，告知如果不是本人登录的，则建议用户立即修改密码。

大彬：这个阶段是交互过程如下图所示。

![](http://img.dabin-coder.cn/image/20220411002823.png)

**3、已确认**

扫码登录的最后阶段，用户点击确认登录，移动端携带上一步骤中获取的临时 token访问服务端。

服务端校对完成后，会更新二维码状态，并且给 PC 端生成一个正式的 token。

后续 PC 端就是持有这个 token 访问服务端。

这个阶段是交互过程如下图所示。

![](http://img.dabin-coder.cn/image/20220411002832.png)

大彬：以上就是整个扫码登录功能的详细设计！

**面试官**：**点赞！**



## 点关注，不迷路

大彬，**非科班出身，自学Java**，校招斩获京东、携程、华为等offer。作为一名转码选手，深感这一路的不易。

希望我的分享能帮助到更多的小伙伴，**我踩过的坑你们不要再踩**。想与大彬交流的话，可以到公众号后台获取大彬的微信~

后台回复『 **笔记**』即可领取大彬斩获大厂offer的**面试笔记**。

![](http://img.dabin-coder.cn/image/公众号.jpg)
