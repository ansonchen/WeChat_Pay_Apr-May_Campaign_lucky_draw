
var enough 							= true;
var prize							= RandomNumBoth(0,5);    // 0开始
var winding_duration				= 4200; //上链时间 button_img的transition-duration;
var transmission_winding_duration	= 500; //gear_shaft 的 transition-duration;
var draw_duration					= 7000; // plate_outside 的 最终transition-duration;

console.log(prize);


window.onload=function(){

	document.querySelector(".onload").className = document.querySelector(".onload").className + " close"
	document.querySelector("body").className = document.querySelector("body").className + " game_onload"

	gamestart();


}

 function gamestart(){

 	//游戏加载完进入过渡动画
 	var start_animation_object = document.querySelectorAll(".transition_1x");

 	for (var i = 0; i < start_animation_object.length; i++) {

 		// 过渡时长时间差
 		start_animation_object[i].style.cssText = "transform: translate3d(0vw, 0vw, 0px) rotateZ(0deg);transition-duration: " + (i * 0.2) + "s";
 	}

 	// 够钱不够钱
 	if (enough) {
 		setTimeout(function(){
 				document.querySelector(".money").style.cssText = " transform: translate3d(0vw, -7vw, 0px) rotateZ(0deg);"
 				document.querySelector(".status").innerHTML = "点击";
 				document.querySelector(".status").style.cssText = " transform: translate3d(0vw, -7vw, 0px) rotateZ(0deg);"

 				document.querySelector(".button_img").addEventListener("click",drawStart);

 		},winding_duration)
 	}else{
 		setTimeout(function(){
 				document.querySelector(".money").style.cssText = " transform: translate3d(0vw, -7vw, 0px) rotateZ(0deg);"
 				document.querySelector(".status").innerHTML = "未达标";
 				document.querySelector(".status").style.cssText = " transform: translate3d(0vw, -7vw, 0px) rotateZ(0deg);"
 				document.querySelector(".button_mask").style.cssText = "opacity: 1;";
 		},winding_duration / 2)
 	}

 }

 function drawStart(){
 	document.querySelector(".button_img").className = document.querySelector(".button_img").className + " click";
 	document.querySelector(".gear_shaft").style.cssText = "transform: translate3d(0vw, 0vw, 0px);";
 	document.querySelector(".gear_shaft").className = document.querySelector(".gear_shaft").className + " gear_shaft_rotate";
 	
 	setTimeout(function(){
 		document.querySelector(".plate.gear_XL img").className = document.querySelector(".plate.gear_XL img").className + " rotateX4";

 	},transmission_winding_duration)

 	setTimeout(function(){
 		document.querySelector(".plate.gear_L img").className = document.querySelector(".plate.gear_XL img").className + " rotateX4-";

 	},transmission_winding_duration + 200)

 	setTimeout(function(){
 		document.querySelector(".plate.pendulum img").style.cssText = "animation-play-state: running;"

 	},transmission_winding_duration + 200 + 100)

 	setTimeout(function(){
 		//奖品转盘度数控制
 		var deg = (360 * 5) - 20 + ( 0 - 40 * prize ) + RandomNumBoth(10,30);
 		console.log(deg);
 		document.querySelector(".plate.plate_outside").style.cssText = 
 		" transition-timing-function: cubic-bezier(0.15, 0.01, 0.6, 1.14);transition-duration: " + draw_duration + "ms;transform: translate3d(0vw, 0vw, 0px) rotateZ(" +  deg + "deg)";

 		for (var i = 0; i < document.querySelectorAll(".beard img").length; i++) {
 			document.querySelectorAll(".beard img")[i].style.cssText = "transform: translate3d(2vw, 0vw, 0px) rotateZ(-360deg);"
 		}

 	},transmission_winding_duration + 200 + 100 + (4000*0.20))

 	setTimeout(function(){
 		document.querySelector(".show_prize").className = document.querySelector(".show_prize").className + " show";
 		document.querySelector(".show_prize").style.cssText = "display: block;"

 	},transmission_winding_duration + 200 + 100 + (4000*0.20) + draw_duration + 1000)



 }

 function RandomNumBoth(Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range); //四舍五入
      return num;
}










