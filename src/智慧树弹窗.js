//智慧树防弹窗脚本
setInterval(()=>{
threads.start(function(){
var t=className("android.webkit.WebView").exists();
log(t);
if(t){
//对弹窗进行操作
sleep(500);
className("android.widget.ListView").findOne().children().forEach(child => {
var target = child.findOne(className("android.widget.TextView"));
target.click();
});
sleep(500);
//关闭弹窗
className("android.view.View").text("关闭").findOne().click();
}
});
},2000);