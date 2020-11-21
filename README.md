## 一款适用于安卓的自动化软件工具。无需root权限。内置丰富自动化场景需求，满足您的日常需求。

# 添加智慧树+学小易自动答题模式，并且添加暴力获取智慧树控件文本。

# 权限
 *需要开启无障碍模式
 *部分功能需要后台弹出界面权限
 *悬浮球
 *允许屏幕显示
# 目前已测机型
 |机型|版本|对应版本|
|  ----  | ----  | ----   |
  |小米|10|v1.0|
# 关键代码
```
//控件暴力获取方法

function getControl(depth1,className1,indexInParent1,drawingOrder1){

/*****************控件获取↓↓↓↓↓↓↓↓************************************/

   

    

   /*@param depth 默认depth值

     *@param className 控件类名

      多重控件定位:

      ①depth值--------->采用暴力遍历判断，找一个确定的depth值，如果返回null再进行for i++遍历获取

      ②基于坐标的定位:bounds  先确定常用的bounds值依次获取判断

    */

    

   // ①depth值

   log(className1);

   var text;

   //确定值判断控件是否存在

   var  is=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).depth(depth1).exists();

   if(!is){

   //控件不存在

     for(var i=0;i<=99;i++){

     is=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).depth(i).exists();

     log(is);

     if(is){

     //匹配成功,获取text并退出循环

        text=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).depth(i).findOne().getText();

        break;

        }

        /***************bounds匹配控件↓↓↓↓↓↓↓**********/

        //修改对应bounds值即可

     if(i==99){

       //单行获取

       is=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).bounds(41,377,1039,451).exists();

       if(is){

       text=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).bounds(41,377,1039,451).findOne().getText();

       break;

       }

       //当遍历完还找到控件也采用bounds获取(两行)

       is=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).bounds(41,377,1039,523).exists();

       if(is){

       //匹配控件成功

       text=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).bounds(41,377,1039,523).findOne().getText();

       break;

       }

       //三行获取

       is=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).bounds(41,377,1039,592).exists();

       if(is){

       text=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).bounds(41,377,1039,592).findOne().getText();

       break;

       }

       }

     /***************bounds匹配控件↑↑↑↑↑↑**********/

     

     }

   }else{

   //控件存在

   text=className(className1).indexInParent(indexInParent1).drawingOrder(drawingOrder1).depth(depth1).findOne().getText();

   }

   return text;

}


```
# 添加去除安卓端智慧树刷课弹题脚本
