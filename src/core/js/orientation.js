/**
 * @author zgf
 * @date 2015.11
 * @name orientation.js
 * 功能：设配方向信息
 */

var updateOrientation =function(fun1,fun2){
    if(window.orientation=='-90'|| window.orientation=='90'){
    	fun1();
        console.log('横屏执行函数1');
     }else{
     	fun2();
        console.log('竖屏执行函数2');
    }
};

// 调用
var supportsOrientationChange = "onorientationchange" in window,
	// 监听事件兼容处理
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
window.addEventListener(orientationEvent,updateOrientation(fun1,fun2));