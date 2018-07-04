/**
 * Created by Administrator on 2018/7/4/004.
 */
window.onload = function(){
  var oImg = document.getElementById('img_1');
  var oTxt = document.getElementById('txt');
  var onOff = true;
  oImg.onclick = function(){
    if(onOff){
      oTxt.style.color = "red";
      onOff = false;
    }else{
      oTxt.style.color = "black";
      onOff = true;
    }

  }
};
