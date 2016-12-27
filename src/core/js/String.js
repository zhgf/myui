/**
 * @author zgf
 * @date 2015.11
 * @name String.js
 * 功能：string方法扩展
 */

//Js 左右两头去掉空格方法
String.prototype.trim = function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

//js 左边 去掉空格
String.prototype.Ltrim = function(){
	return this.replace(/(^\s*)/g, "");
}

//  右边  去掉空格
String.prototype.Rtrim = function(){
	return this.replace(/(\s*$)/g, "");
}

/***
功能：replaceAll：替换字符串中的字符。
用法：
"martin".replaceAll("t", "g"); //margin
***/
String.prototype.replaceAll = function (AFindText,ARepText){
	raRegExp = new RegExp(AFindText,"g");
	return this.replace(raRegExp,ARepText);
}


/***
功能：得到字符串的字节数。
用法:
<input   type="text" name="a" />   
<input   type="button" value="test"  onclick="alert( document.getElementById('a').value.strlength )" />  
***/
//方法1
String.prototype.strLength = function(){
	var str="";
	str=this.replace(/[^\x00-\xff]/g,"**"); 
	return str.length;
}
//方法2
String.prototype.byteLength = function(){
	return this.replace(/[^\x00-\xff]/g,"00").length;	
}

/***
功能：计算字符串的真正长度  （可判断是否为空）
	String有个属性length，但是它不能区分英文字符，计算中文字符和全角字符。 但是在数据存储的时候中文和全角都是用两个字节来存储的，所有需要额外处理一下。
	用此函数，返回String真正的长度.
用法：
<input type="text" name="rain" id="rain" />
<input type="button" id="test" value="test" onclick="alert(  document.getElementById('rain').value.codeLength()  )"/>
***/
String.prototype.codeLength = function(){
	var len=0;
	if(this==null||this.length==0){
		return 0;
	}
	var str=this.replace(/(^\s*)|(\s*$)/g,"");//去掉空格
	for(i=0;i<str.length;i++){
		if(str.charCodeAt(i)>0&&str.charCodeAt(i)<128){
			len++;
		}else{ 
			len+=2;
			return len;
		}
	}
}

/***
功能：字串是否有值   
用法：isEmpty()	
***/
String.prototype.isEmpty = function(){   
	if(this != null && this.length > 0){   
		return true;   
	}   
	return false;   
}

/***
功能：编码HTML 和 解码Html。(在评论的时候为了防止用户提交带有恶意的脚本，可以先过滤HTML标签，过滤掉双引号，单引号，符号&，符号<，符号)
用法：
	<input type="text" name="rain" id="rain" />
	<input type="button" value="test" onclick=" document.getElementById('rain2').value= document.getElementById('rain').value.htmlEncode()  "/>
	<input type="text" name="rain2" id="rain2" />
	<input type="button" value="test" onclick=" document.getElementById('rain').value= document.getElementById('rain2').value.htmlDecode()  "/>
***/
String.prototype.htmlEncode = function(){
	return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&#34;").replace(/\'/g,"&#39;");
}
String.prototype.htmlDecode = function(){
	return this.replace(/\&amp\;/g, '\&').replace(/\&gt\;/g, '\>').replace(/\&lt\;/g, '\<').replace(/\&quot\;/g, '\'').replace(/\&\#39\;/g, '\'');
}

/***
功能:格式化字符串
用法：
	var cls="redclass";
	var text="My name is ";
	var str='<div class="{0}">{1} {2}</div>'.diy_format(cls, text,"martin");
	alert(str);
***/
String.prototype.diy_format = function(){
	var args=arguments;
	return this.replace(/\{(\d+)\}/g, function(m, i){
		return args[i];
	});
}

/*
 * 字符串倒序
 */
String.prototype.reserve = function(){
	return this.split('').reserve().jion('');
}