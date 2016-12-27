/**
 * @author zgf
 * @date 2015.11
 * @name fullscreen.js
 * 功能：全屏事件
 */

//使用全屏
function questFullScreen(){
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {    //W3C  
        docElm.requestFullscreen();  
    }else if (docElm.mozRequestFullScreen) {  //FireFox  
        docElm.mozRequestFullScreen();  
    }else if (docElm.webkitRequestFullScreen) {  //Chrome等  
        docElm.webkitRequestFullScreen();  
    }else if (elem.msRequestFullscreen) { //IE11
      elem.msRequestFullscreen();
    }
}

//退出全屏
function exitFullScreen(){
    if (document.exitFullscreen) {  
        document.exitFullscreen();  
    }else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
    }else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
    }else if (document.msexitFullscreen) {
          document.msexitFullscreen();
    }
}

//事件监听
 
document.addEventListener("fullscreenchange", function () {  
    fullscreenState.innerHTML = (document.fullscreen)? "" : "not ";}, false);  
}
document.addEventListener("mozfullscreenchange", function () {  
    fullscreenState.innerHTML = (document.mozFullScreen)? "" : "not ";}, false);  
}
document.addEventListener("webkitfullscreenchange", function () {  
    fullscreenState.innerHTML = (document.webkitIsFullScreen)? "" : "not ";}, false);
}
document.addEventListener("msfullscreenchange", function () {
    fullscreenState.innerHTML = (document.msFullscreenElement)? "" : "not ";}, false);
}

//全屏样式设置
//在浏览器全屏的使用我们还可以进行样式设置
// <style>
//     html:-moz-full-screen { 
//         background: red;  
//     }  
//     html:-webkit-full-screen {  
//         background: red;  
//     }  
//     html:fullscreen {  
//         background: red;  
//     }
// </style>