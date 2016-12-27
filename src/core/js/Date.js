/**
 * @author zgf
 * @date 2015.11
 * @name Date.js
 * 功能：时间对象的扩展，时间格式处理，计时器
 */

/***
功能：format：格式化时间。
用法：
yourdate.format("你的日期格式");
例子:
	obj0 = new Date("Sun May 04 2008").format("yyyy-MM-dd");
	obj1 = new Date().format("yyyy-MM-dd hh:mm:ss");
	obj2 = new Date().format("yyyy-MM-dd");
	obj3 = new Date().format("yyyy/MM/dd");
	obj4 = new Date().format("MM/dd/yyyy");
*****/
Date.prototype.format = function(format){   
   var o = {   
     "M+" : this.getMonth()+1, //month   
     "d+" : this.getDate(),    //day   
     "h+" : this.getHours(),   //hour   
     "m+" : this.getMinutes(), //minute   
     "s+" : this.getSeconds(), //second   
     "q+" : Math.floor((this.getMonth()+3)/3), //quarter   
     "S" : this.getMilliseconds() //millisecond   
   }   
	if(/(y+)/.test(format)){
		format=format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	}   
	for(var k in o){
		if(new RegExp("("+ k +")").test(format)){   
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));   
		}
	}
	return format;   
} 

/***
功能：获取某年某月的天数，月份是从0开始
用法：jscomGetMonthDays(2008 , 4)
***/
function GetMonthDays(year,month){
	if(month<0 || month>11){
		return 30;
	}
	var arrMon = new Array(12);
	arrMon[0] = 31;
	if(year % 4 == 0){
		arrMon[ 1] =29;
	}else{
		arrMon[ 1] =28;
	}	
	arrMon[ 2] = 31;	arrMon[ 3] = 30;
	arrMon[ 4] = 31;	arrMon[ 5] = 30;
	arrMon[ 6] = 31;	arrMon[ 7] = 31;
	arrMon[ 8] = 30;	arrMon[ 9] = 31;
	arrMon[10] = 30;	arrMon[11] = 31;	
	return arrMon[month];
}

/***
功能：计时器。
用法：
<div id="martin">aaa</div>
<script>
	var test = document.getElementById("martin");
	//测试一个例子，3秒后隐藏div。
	function hideDiv(){
		test.style.color = "red";
	}
	//参数：最大时间秒数 和 完成后调用函数
	var cs = new timerPerActive(3 , hideDiv );   
	cs.callback();
</script>
***/ 
function timerPerActive(timer,comfunc) { 
	this.times=0;//定时器对象 ，初始化为0
	this.change=function() { 
		this.times++; 
		test.innerHTML = this.times;//测试用的
		if(this.times==timer) { 
			clearInterval(times); 
			this.complete();    //最终要回调的函数
		} 
	} 
	this.callback=function(){	//每过1秒，调用 
		var css=this; 
		times=setInterval(function(){css.change();},1000); 
	} 
	this.complete=function(){	//完成后，调用
    	comfunc();
    }
} 

//JS判断两个日期大小 适合 2012-09-09 与2012-9-9 两种格式的对比
//得到日期值并转化成日期格式，replace(/\-/g, "\/")是根据验证表达式把日期转化成长日期格式，这样再进行判断就好判断了
function ValidateDate(beginDate,endDate) {
	if (beginDate.length > 0 && endDate.length>0) {
		var sDate = new Date(beginDate.replace(/\-/g, "\/"));
		var eDate= new Date(endDate.replace(/\-/g, "\/"));
		return sDate < eDate?true:false;
	}
}

/***
功能：计算某日为当年的第几周     
用法：weekOfYear(2008 , 7 , 5);  //2008-7-5  为当年的第几周     //28
***/     
function weekOfYear(year,   month,   day){     
	//   year       年     
	//   month     月     
	//   day         日     
	//   每周从周日开始     
	var   date1   =   new   Date(year,   0,   1);     
	var   date2   =   new   Date(year,   month-1,   day,   1);     
	var   dayMS   =   24*60*60*1000;     
	var   firstDay   =   (7-date1.getDay())*dayMS;     
	var   weekMS   =   7*dayMS;     
	date1   =   date1.getTime();     
	date2   =   date2.getTime();     
	return   Math.ceil((date2-date1-firstDay)/weekMS)+1;     
}   

/***
功能：通过周数和星期计算日期  
用法：2005年第37周的周六的日期。(0-6,0代表周日)
	  dateFromWeek(2005, 37, 6);        //2005年9月10号     
***/ 
function dateFromWeek(year, week, day){     
	//   year       年     
	//   week       周     
	//   day         星期   (0-6,   0代表周日)     
	var   date1   =   new   Date(year,   0,   1);     
	var   dayMS   =   24*60*60*1000;     
	var   firstDay   =   (7-date1.getDay())*dayMS;     
	var   weekMS   =   (week-2)*7*dayMS;     
	var   result   =   date1.getTime()+firstDay+weekMS+day*dayMS;     
	date1.setTime(result);     
	return   date1.toLocaleDateString();     
}  


/***
功能：日期减去天数 得到 第二个日期 。
用法: data_sub_day("12/23/2002",30)
***/
function data_sub_day(dd,dadd){
	//可以加上错误处理
	var a = new Date(dd)
	a = a.valueOf()
	a = a - dadd * 24 * 60 * 60 * 1000
	a = new Date(a)
	return (a.getFullYear() + "年" + (a.getMonth() + 1) + "月" + a.getDate() + "日")
}


/***
功能：根据年和月取当月的最后一天.（也就是当月有多少天）
用法：getLastDay(2008,5)
***/
function getLastDay(year,month){
	//取年
	var new_year = year;
	//取到下一个月的第一天,注意这里传入的month是从1～12 
	var new_month = month++;
	//如果当前是12月，则转至下一年
	if(month>12){
		new_month -=12;
		new_year++;
	}
	var new_date = new Date(new_year,new_month,1);
	return (new Date(new_date.getTime()-1000*60*60*24)).getDate();
}

/***
功能：验证日期 yyyy/mm/dd  或  yyyy.mm.dd 格式
用法：<input id="txtdata" /> <input type="button" onclick="dateCheck()" value="test"/>
***/
function dateCheck(value,callback,callback2){
    var str = value;	
    //这里写死了，如果需要可以自己抽象化。
    var re = new RegExp("^([0-9]{4})[./]{1}([0-9]{1,2})[./]{1}([0-9]{1,2})$");    
    var ar;
    var res = true;    
    if ((ar = re.exec(str)) != null){
        var i;
        i = parseFloat(ar[3]);
        if (i <= 0 || i > 31){
            res = false;
        }
        i = parseFloat(ar[2]);
        if (i <= 0 || i > 12){
            res = false;
        }
    }else{
        res = false;
    }
    if (!res){
    	callback();
        //alert('情输入类似格式 ： 2000/11/25');
    }else{
    	callback2();
     	//alert("success");
    }
    return res;
}

//获取当前时间
function GetCurrentDate() {
	var d = new Date();
	var y = d.getYear()+1900;
	month = add_zero(d.getMonth() + 1),
	days = add_zero(d.getDate()),
	hours = add_zero(d.getHours());
	minutes = add_zero(d.getMinutes()),
	seconds = add_zero(d.getSeconds());
	var str = y + '-' + month + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds;
	return str;
};
function add_zero(temp) {
	if (temp < 10){
		 return "0" + temp;
	}else{ 
		return temp;
	}
}
