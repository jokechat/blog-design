var $ = require('jquery');

/*鼠标摁下事件  */
function down(event)
{
  var profile_left = event.clientX -200 + "px";
  var profile_top  = event.clientY - 8 + "px";
  $(".profile").animate({
    left : profile_left,
    top  : profile_top ,
  },500);
}

/*鼠标移动事件  */
function move(event)
{
  var profile_left = event.clientX + "px";
  var profile_top  = event.clientY + "px";
  $(".profile").animate({
    left : profile_left,
    top  : profile_top ,
  },10);
}

  document.addEventListener("mousedown",down);
 /* document.addEventListener("mousemove",move);  */
/*点击头控制移动开关  */
var is_move = true;
$(".move_div").click(function(){
    is_move = is_move ? false : true; 
  if(is_move)
  {
    document.addEventListener("mousedown",down);
  }else
  {
    document.removeEventListener("mousedown",down);
  }
});
