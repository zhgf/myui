/**
 * @author zgf
 * @date 2015.11
 * @name Dom.js
 * 功能：dom操作处理
 */

/***
功能：DOM的insertAfter()（DOM没有提供insertAfter(),只提供了一个insertBefore()方法。）
用法：
	插入到 div b 的后面 
	window.onload=function(){
	   var a =document.createElement("span");
	   var b =document.createTextNode("martin");
	   a.appendChild(b);
	   var mubiao = document.getElementById("b");
	   insertAfter(a,mubiao);	 
	}
	<div id="b">bbbbbbbbb</div>
	<div>dddddd</div>
***/
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {// 如果最后的节点是目标元素，则直接添加。因为默认是最后
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);//如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面。
	}
}

/***
功能：解决 style 外嵌样式 用js 获取不到 的问题。
用法：
window.onload = function(){
	var e1 = document.getElementById("exep1");
	alert(getStyle(e1,"fontSize"));
	alert(getStyle(e1,"backgroundColor"));
}
<!--
	currentStyle 对象返回了元素上的样式表，但是 style 对象只返回通过 STYLE 标签属性应用到元素的内嵌样式。
	因此，通过 currentStyle 对象获取的样式值可能与通过 style 对象获取的样式值不同。
	例如，如果段落的 color 属性值通过链接或嵌入样式表设置为红色( red )，
	而不是内嵌的话，对象.currentStyle.color 将返回正确的颜色，
	而对象 style.color 不能返回值。
	但是，如果用户指定了 <P STYLE="color:'red'">，currentStyle 和 STYLE 对象都将返回值 red。
-->
<body>
	<div id="exep1">c</div>
</body>
***/
function getStyle(elem, name){
	if(elem.style[name])
		return elem.style[name];
	else if(elem.currentStyle)//ie
		return elem.currentStyle[name];
	else if(document.defaultView && document.defaultView.getComputedStyle){//w3c
		name = name.replace(/([A-Z])/g,"-$1");
		name = name.toLowerCase();
		
		var s = document.defaultView.getComputedStyle(elem,"");
		return s && s.getPropertyValue(name);
	} else{
		return null
	}
}


/***
功能：获取当前元素的元素节点
如果想获取当前元素的下一个节点，那么可以扩展下：
var elem = getNextElement( node.nextSibling );
用法;
var elem = getNextElement( node );
***/
function getNextElement(node) {//获取当前元素的元素节点
	if(node.nodeType == 1) {
		return node;
	}
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);//如果不是，继续查询下一个，直到  if(node.nodeType == 1) .
	}
	return null;
}

/***
功能：追加class。（默认的 element.className = "" ;是替换样式）
用法：addClass(element,"classname");	//

***/
function addClass(element,value) { //追加样式，而不是替换样式
	if (!element.className) {
		element.className = value;
	} else {
		element.className+= " ";
		element.className+= value;
	}
}

/***
功能：表格隔行变色。
注意：引入 我们自己写的 addClass()函数。
***/
function stripeTables(tables) {
	if (!tables){
		return false;
	}
	for (var i=0; i<tables.length; i++) {
		var odd = false;
		var rows = tables[i].getElementsByTagName("tr");
		for (var j=0; j<rows.length; j++) {
			if (odd == true) {
				addClass(rows[j],"odd");//odd为样式名
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}

/***
功能：表格滑过变色.
注意：引入 我们自己写的 addClass()函数。
***/
function highlightRows(tablesTr) {
	if(!document.getElementsByTagName){
		return false;
	}
	var rows = tablesTr;
	for (var i=0; i<rows.length; i++) {
		rows[i].oldClassName = rows[i].className
		rows[i].onmouseover = function() {
			addClass(this,"highlight");//highlight为样式名
		}
		rows[i].onmouseout = function() {
			this.className = this.oldClassName
		}
	}
}

/***
功能：隔行变色 + 滑过变色 
参数设置：
id 为表格的id
class1为奇数行的颜色
class2为偶数行的颜色
class3为鼠标滑过颜色
用法：
sti_table("martin" , "c" , "a" ,"d" ); 
<style>
	.a{background-color : #eee;}
	.c{background-color : #96dd33;}
	.d{background-color : #456577;}
</style>
<TABLE id="martin" >
	<TR>
		<TD>1</TD>
	</TR>
</table>
***/
function sti_table( id , class1 , class2 , class3  ){
	var para = document.getElementById(id);
	var tr  = para.getElementsByTagName("tr");
	var odd = false;
	for(var i=0 ; i < tr.length ; i++ ){
		if(odd==true){
			tr[i].className = class1;      
			odd=false;
			tr[i].onmouseover =function(){
				this.className = class3;
			}
			tr[i].onmouseout =function(){
				this.className = class1;
			}
		}else{
			tr[i].className = class2;   
			odd=true;
			tr[i].onmouseover =function(){
				this.className = class3;
			}
			tr[i].onmouseout =function(){
				this.className = class2;
			}
		}
	}
}

//JS 加载到顶部LoadJS
function loadJS (url, fn) {
	var ss = document.getElementsByName('script'),
		loaded = false;
	for (var i = 0, len = ss.length; i < len; i++) {
		if (ss[i].src && ss[i].getAttribute('src') == url) {
			loaded = true;
			break;
		}
	}
	if (loaded) {
		if (fn && typeof fn != 'undefined' && fn instanceof Function) fn();
		return false;
	}
	var s = document.createElement('script'),
		b = false;
	s.setAttribute('type', 'text/javascript');
	s.setAttribute('src', url);
	s.onload = s.onreadystatechange = function () {
		if (!b && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
			b = true;
			if (fn && typeof fn != 'undefined' && fn instanceof Function) fn();
		}
	};
	document.getElementsByTagName('head')[0].appendChild(s);
}
function JSLoad (args) {
	s = document.createElement("script");
	s.setAttribute("type", "text/javascript");
	s.setAttribute("src", args.url);
	s.onload = s.onreadystatechange = function () {
		if (!s.readyState || s.readyState == "loaded" || s.readyState == "complete") {
			if (typeof args.callback == "function") args.callback(this, args);
			s.onload = s.onreadystatechange = null;
			try {
				s.parentNode && s.parentNode.removeChild(s);
			} catch (e) { }
		}
	};
	document.getElementsByTagName("head")[0].appendChild(s);
}

//清空 LoadJS 加载到顶部的js引用
function ClearHeadJs  (src) {
	var js = document.getElementsByTagName('head')[0].children;
	var obj = null;
	for (var i = 0; i < js.length; i++) {
		if (js[i].tagName.toLowerCase() == "script" && js[i].attributes['src'].value.indexOf(src) > 0) {
			obj = js[i];
		}
	}
	document.getElementsByTagName('head')[0].removeChild(obj);
};