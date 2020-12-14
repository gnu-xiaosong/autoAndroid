# 安卓自动化脚本软件
## 说明:
本软件无任何病毒！可能由于所需权限过高，在部分机型会有报毒提示，忽略即可。
目前正在测试机型中，欢迎大家加入测试行列中，
我的邮箱📭:2328755970@qq.com
## 版权声明:
严禁任何人借助本软件二次开发从事用户隐私监听等从事违法犯罪行为。
### 介绍:
 一款适用于安卓的自动化软件工具。无需root权限。内置丰富自动化场景需求，满足您的日常需求。
## 应用场景
 * 1.可用于大学网课自动答题搜索(学习通，智慧树)，去除视频弹窗等自动化结合学小易实现答案自动获取搜索。
 * 2.实用的第三方支付软件监控(暂时仅支付宝)，可自定义监控url
 * 3.实用小工具，eg:qq刷屏，qq消息监控等自动化场景
# 下载
apk在apk目录下，点击下载即可
工程脚本源码在src目录下
# 演示
事例1:
[![DlOAld.md.gif](https://s3.ax1x.com/2020/11/21/DlOAld.md.gif)](https://imgchr.com/i/DlOAld)
事例2:
[![DlON7V.md.gif](https://s3.ax1x.com/2020/11/21/DlON7V.md.gif)](https://imgchr.com/i/DlON7V)
事例3:
[![D1S1pT.md.gif](https://s3.ax1x.com/2020/11/21/D1S1pT.md.gif)](https://imgchr.com/i/D1S1pT)
# 权限
 * 需要开启无障碍模式
 * 部分功能需要后台弹出界面权限
 * 悬浮球
 * 允许屏幕显示
 * 安卓版本7以上
# 目前已测机型
 |机型|版本|对应版本|更新时间|
|  ----  | ----  | ----   |  ----   |
  |小米|9|v1.0|2020.10.15|
  |vivo|待测|待测|暂未|
  |华为|部分可用|v1.0|2020.10.15|
## 解决方案:
 * 1.拷贝源码导入到autojs中运行，可以减少机型的不适配问题
# Bug:
 * 1.大部分机型不适配，最新适配小米10
 * 2.在其他机型部分功能失效
 * 3.打包后部分功能不可用
# 更新日志
## 2020.10.15-添加去除安卓端智慧树刷课弹题脚本
## 2020.10.16-添加智慧树+学小易自动答题模式，并且添加暴力获取智慧树控件文本。
## 2020.12.12-添加题库接口api  基本都能查到，优化查询方法
## 2020.12.13-修复获取粘贴板信息自动搜索bug
## 2020.12.14-修复支付监控bug，增强其安全性
* 接口:http://103.152.170.170:8088/corn.php
* 方法:GET
* 参数:
*|参数|含义|说明|
|  ----  | ---- | ---- |
  |id|商户id|必传|
  |key|商户密钥|必传|
  |money|支付宝监听参数|必传|
