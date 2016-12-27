/**
 * @author zgf
 * @date 2015.11
 * @name Event.js
 * 功能：事件函数
 */

/***
功能：js 绑定事件 适用于任何浏览器的元素绑定
用法：eventBind(document, 'click', bodyClick);	
***/
function eventBind(obj, eventType, callBack) {
	if (obj.addEventListener) {
		obj.addEventListener(eventType, callBack, false);
	}
	else if (window.attachEvent) {
		obj.attachEvent('on' + eventType, callBack);
	}
	else {
		obj['on' + eventType] = callBack;
	}
};

/***
功能：移除事件
***/
function moveBind(objId, eventType, callBack) {
    var obj = document.getElementById(objId);
    if (obj.removeEventListener) {
        obj.removeEventListener(eventType, callBack, false);
    }
    else if (window.detachEvent) {
        obj.detachEvent('on' + eventType, callBack);
    }
    else {
        obj['on' + eventType] = null;
    }
}


/***
功能：用来window.load 多个函数。（原window.onload是不能同时加载多个函数的）
比如：
function t(){
    alert("t")
}
function b(){
    alert("b")
}
window.onload =t ;
window.onload =b ;
这样做 ，只会输出 b ；
addLoadEvent()这个函数 就是解决这个问题的。
用法：
addLoadEvent(t);
addLoadEvent(b);
***/
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {  
        window.onload = function() {
            oldonload();
            func();
        }
    }
}