window.onload=function(){
    /*向下滑动顶部搜索栏透明效果js*/
    changeBgColor();
//    /*秒杀倒计时*/
    skTime();
};
function changeBgColor(){
    var banner=document.querySelector(".jd_banner");
    var bannerHeight=banner.offsetHeight;/*获取banner高度*/
    var jdHeader=document.querySelector(".jd_header-box");
    window.onscroll=function(){
        var scrollTop=document.documentElement.scrollTop;
        var opacity=0;
        if(scrollTop<=bannerHeight){
            opacity= scrollTop/bannerHeight;
            jdHeader.style.backgroundColor="rgba(233,35,34,"+opacity+")";
        }
    }
}
function skTime(){

    var sk_span=document.querySelector(".jd_sk_time ").querySelectorAll("span");
    var initTime=1*24*60*60;/*默认设置一天,以秒为单位*/
    // 开启定时器
    var intervalId=setInterval(function () {
        initTime--;
        if(initTime<0)
        {
            clearInterval(intervalId)/*停止*/
            return;
        }
        var hour=Math.floor(initTime/3600);
        var min=Math.floor(initTime%3600/60);
        var second=initTime%60;
        sk_span[0].innerHTML=Math.floor(hour/10);
        sk_span[1].innerHTML=Math.floor(hour%10);
        sk_span[3].innerHTML=Math.floor(min/10);
        sk_span[4].innerHTML=Math.floor(min%10);
        sk_span[6].innerHTML=Math.floor(second/10);
        sk_span[7].innerHTML=Math.floor(second%10);
    },1000)

}








/*
function sk_time(){
   var time_span= document.querySelector("jd_sk_time").querySelectorAll("span");

}
*/

