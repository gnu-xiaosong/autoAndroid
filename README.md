# 安卓自动化脚本软件
## 说明:
本软件无任何病毒！可能由于所需权限过高，在部分机型会有报毒提示，忽略即可。
目前正在测试机型中，欢迎大家加入测试行列中，本软件完全来源，部分接口来源于网络，请勿破解二开用于监控用于隐私信息，否则将追究其责任。
也提醒用于下载官方的软件，确保其安全性。
我的邮箱📭:2328755970@qq.com
## 软件功能
* 自动化答题(学习通，智慧树)
* 手机通知栏监控记录------本功能记录的状态栏信息在其sd卡下notifaction.txt文件中。
* QQ(包含qq刷屏，qq机器人)
* 第三方支付软件监控(具体监听到的支付订单状态信息记录在sd卡下的payLog.txt文件中)
* 未完待续…
## 部分手机型号不兼容的解决办法
* 方法一(推荐):在vmos虚拟机中运行，解决机型不兼容的问题(注意要版本大于7.0)，具体使用步骤如上(注意要导入所要监控的软件)
* 方法二:下载集成压缩包，该包在integration目录下，该包包含autojs脚本运行环境软件和autoAndroid工程，将autoAndroid工程导入目录导入到sd卡目录下的脚本目录下即可(没有即创建)，然后打开autojs软件刷新就能看到autoAndroid的工程文件点击进入，点击main.js运行即可。
## 功能说明介绍:
### 自动化答题
#### 多种模式选择搜题
* 控制台模式(包含多种模式，命令行控制)
* 配合学小易模式
* 屏幕自动获取题目搜索模式
### 通知栏监听
* 监听状态栏信息记录下SD卡下的notifaction.txt文件中
* 控制台模式显示通知栏信息内容
### 第三方支付监听软件
* 目前只监听支付宝，具体后端支付系统源码在另外的仓库pay中，需要的下载即可
* 填写相关信息启动即可，注意确保支付宝开启了收钱语音提示并保证音量没有关闭
* 监听的订单信息在sd卡下的payLog.txt文件中
### QQ
#### qq刷屏
* qq刷词
* qq刷图
#### qq机器人
##### 建议安装vmos虚拟机，安装pro版本(更加轻量不占用内存)，百度搜索即可下载，注意在下载rom虚拟机的时候请选择安卓版本大于7.0的版本，否则功能无法使用！！详细安装vmos并导入软件
###### 安装步骤如下:
* 1.下载vmos虚拟机:http://www.vmos.cn/product_center_vmospro.htm
* 2.添加并选择安装安卓虚拟机(版本一定要大于7.0)
* 3.打开虚拟机并导入软件autoAndroid和QQ
* 4.打开软件获取通知权限和无障碍权限
* 5.登陆qq(建议用自己的小号登陆)，并且确保qq拥有通知栏权限。
* 6.最后就可以正常使用软件了。
* 注意:如果在上述步骤完成后软件报错或任然无法正常使用请联系我。
* 演示教程:

## 版权声明:
严禁任何人借助本软件二次开发从事用户隐私监听等从事违法犯罪行为。
## 目录
* [支付监控](#pay)
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
## 支付监控
* 接口:http://103.152.170.170:8088/corn.php
* 方法:GET
* 参数:
### 
|参数|含义|说明|
 |:--:|:--:| :--:|
  |id|商户id|必传|
  |key|商户密钥|必传|
  |money|支付宝监听参数|必传|
* 备注:前后端源码在另外的仓库pay中，包含核心源码等
## 2020.12.15-修复支付监控后端重大漏洞，及监控bug(强制更新！)，现在可正常使用，添加直接跳转到支付宝app支付界面。
## 2020.12.18-修改题库接口，原来接口已失效，请下载最新版本，并添加了qq机器人功能
