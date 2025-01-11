let currentIndex=1;
function nextSlide(){
  document.getElementById("one").style.zIndex=0;
  document.getElementById("two").style.zIndex=0;
  document.getElementById("three").style.zIndex=0;
  if(currentIndex==1){
    document.getElementById("one").style.zIndex=1;
 }else if (currentIndex==2){
   document.getElementById("two").style.zIndex=1;
 }else if (currentIndex==3){
   document.getElementById("three").style.zIndex=1;
}
 if(currentIndex==3){
   currentIndex=1;
}else{
 (currentIndex+=1)
}
}
 function qwer(){
  document.getElementById("one").style;
  document.getElementById("two").style;
  document.getElementById("three").style;
  if(currentIndex==1){
  document.getElementById("one").style.right;
  document.getElementById("two").style.right;
  document.getElementById("three").style.right;
 }
  else{
 (currentIndex=1)
}
 }