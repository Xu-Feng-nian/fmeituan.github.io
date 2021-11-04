 //节点获取
 var carousel = document.getElementById("carousel");
 var image = document.getElementById("image");
 var left = document.getElementById("carousel-left");
 var right = document.getElementById("carousel-right");
 var link = document.getElementById("links");
 var numberList = document.getElementById("carousel-number").getElementsByTagName("li");
 //初始化准备
 var add =0;
 image.src="./images/ad01.jpg";
 // numberList[0].style.background="#fff";
 numberList[0].style.opacity=1;
 var arr = ["http://www.baidu.com","http://www.jd.com","http://www.taobao.com","http://www.tianmao.com","http://www.meituan.com"]
 link.href="http://www.baidu.com";
 //轮播效果
 function lunbo(){
     //函数内的局部变量  不用var声明就是全局变量
     lun = setInterval(function(){
         add+=1;
         if(add>5){
             add=1;
         }
         image.src = "./images/ad0"+add+".jpg";
         //绑定网址
         link.href=arr[add-1];
         //封装成函数调用
         var x =add-1;
         for(var j=0;j<numberList.length;j++){
             numberList[j].style.background="#fff";
             numberList[j].style.opacity=0.5;
             if(x==j){
                 numberList[j].style.opacity=1;
             }
         }


     },3000)
 }
 //移动到轮播区域停止调用
 carousel.onmouseover=function(){
     clearInterval(lun);
 }
 carousel.onmouseout=function(){
     lunbo();
 }
 //点击左右箭头切换图片
 left.onclick=function(){
     add-=1;
         if(add<1){
             add=5;
         }
         image.src = "./images/ad0"+add+".jpg";
         var x =add-1;
         for(var j=0;j<numberList.length;j++){
             numberList[j].style.background="#fff";
             numberList[j].style.opacity=0.5;
             if(x==j){
                 numberList[j].style.opacity=1;
             }
         }
 }
 right.onclick=function(){
     add+=1;
         if(add>5){
             add=1;
         }
         image.src = "./images/ad0"+add+".jpg";
         var x =add-1;
         for(var j=0;j<numberList.length;j++){
             numberList[j].style.background="#fff";
             numberList[j].style.opacity=0.5;
             if(x==j){
                 numberList[j].style.opacity=1;
             }
         }
 }
 //移动到对应的li上面切换图片
 // numberList[0].onmouseover=function(){
 //     image.src = "./images/ad0"+1+".jpg";
 // }
 for(var i=0;i<numberList.length;i++){
     numberList[i].onmouseover=function(){
         add = this.innerHTML;
         image.src = "./images/ad0"+add+".jpg";
         var x =add-1;
         for(var j=0;j<numberList.length;j++){
             numberList[j].style.background="#fff";
             numberList[j].style.opacity=0.5;
             if(x==j){
                 numberList[j].style.opacity=1;
             }
         }
     }
 }   
 //调用轮播函数
 lunbo();
 
 //下拉菜单
var dropdown = document.getElementById("dropdown");

var dropdownList = dropdown.getElementsByTagName("li");

console.log(dropdownList[0]);

for(var i=0;i<dropdownList.length;i++){
    // console.log(1);
    if(i == 1){
        continue;
    }
    dropdownList[i].onmouseover=function(){
        this.classList.add('show');
    }
    dropdownList[i].onmouseout=function(){
        this.classList.remove('show');
    }
}

//分类菜单
var dropRight = document.getElementById("dropright");
var dropRightList = dropRight.getElementsByTagName("li");

for(var i=0;i<dropRightList.length;i++){
    dropRightList[i].onmouseover=function(){
        this.classList.add('show');
    }
    dropRightList[i].onmouseout=function(){
        this.classList.remove('show');
    }
}
//猫眼电影
var movieCenterBottom = document.getElementById("movie-center-bottom");
var movieLeft = document.getElementById("movie-left");
var movieRight = document.getElementById("movie-right");
var posters = document.getElementById("posters");

movieCenterBottom.onmouseover=function(){
    movieLeft.style.display="block";
    movieRight.style.display="block";
}
movieCenterBottom.onmouseout=function(){
    movieLeft.style.display="none";
    movieRight.style.display="none";
}
movieRight.onclick=function(){
    posters.style.left="-1190px";
}