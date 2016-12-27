/**
 * @author zgf
 * @date 20165
 * @name Number.js
 * 功能：number对象的扩展，
 */

/*
 * 取整  下舍
 * (-5.236).integer();
 */
Number.prototype.integer = function(){
	console.log(Math);
	return Math[this<0?'ceil':'floor'](this);
}

/***
功能：小数 四舍五入
How  要保留的小数位数
用法:
var k = 22.55;
k.ForDight(1); //22.6
***/
Number.prototype.ForDight = function(How) {
	return Math.round(this*Math.pow(10,How))/Math.pow(10,How);  
}

/***
功能：加法函数，用来得到精确的加法结果 
说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。 
调用：accAdd(arg1,arg2) 
返回：arg1加上arg2的精确结果 
例子：给Number类型增加一个add方法
用法：(37).add(3);
***/
Number.prototype.add = function (arg){ 
	return this.accAdd(arg,this); 
}
Number.prototype.accAdd=function(arg1,arg2){ 
	var r1,r2,m; 
	try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
	try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
	m=Math.pow(10,Math.max(r1,r2)) 
	return (arg1*m+arg2*m)/m 
}


/***
功能：减法函数，用来得到精确的减法结果 
用法：(5.5).sub(37.5)
***/ 
Number.prototype.sub = function (arg){ 
	return this.subtr(arg,this); 
}
Number.prototype.subtr = function(arg1,arg2){
	 var r1,r2,m,n;
	 try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
	 try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
	 m=Math.pow(10,Math.max(r1,r2));
	 //last modify by deeka
	 //动态控制精度长度
	 n=(r1>=r2)?r1:r2;
	 return ((arg1*m-arg2*m)/m).toFixed(n);
}

/***
功能：乘法函数，用来得到精确的乘法结果 
说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。 
调用：accMul(arg1,arg2) 
返回：arg1乘以arg2的精确结果
例子：给Number类型增加一个mul方法
用法： (37).mul(3);
***/ 
Number.prototype.mul = function (arg){ 
	return thisaccMul(arg, this); 
}
Number.prototype.accMul = function(arg1,arg2){ 
	var m=0,s1=arg1.toString(),s2=arg2.toString(); 
	try{m+=s1.split(".")[1].length}catch(e){} 
	try{m+=s2.split(".")[1].length}catch(e){} 
	return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m) 
}

/***
功能：除法函数，用来得到精确的除法结果 
说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。 
调用：accDiv(arg1,arg2) 
返回：arg1除以arg2的精确结果
例子：给Number类型增加一个div方法
用法： (37).div(3);
***/
Number.prototype.division = function (arg){ 
	return accDiv(this, arg); 
}
Number.prototype.accDiv = function(arg1,arg2){ 
	var t1=0,t2=0,r1,r2; 
	try{t1=arg1.toString().split(".")[1].length}catch(e){} 
	try{t2=arg2.toString().split(".")[1].length}catch(e){} 
	with(Math){ 
		r1=Number(arg1.toString().replace(".","")) 
		r2=Number(arg2.toString().replace(".","")) 
		return (r1/r2)*pow(10,t2-t1); 
	} 
} 

//随机生成n~m之间的随机数
function randomNum(n,m){
	Math.random()*(n-m)+m;
}