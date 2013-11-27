var curIndex=0;
var timeInterval=5000;
var arr=new Array();
arr[0]="rdj1.png";
arr[1]="rdj2.jpg";
arr[2]="rdj3.jpg";
arr[3]="rdj4.jpg";
setInterval(changeImg,timeInterval);
function changeImg()
{
var obj=document.getElementById("showpic");
if (curIndex==arr.length-1)
{
curIndex=0;
}
else
{
curIndex+=1;
}
obj.src="../img/"+arr[curIndex];
}