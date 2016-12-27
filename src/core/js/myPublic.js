// JavaScript Document
/*
 * @name:	public.js
 * @author:	zhgf
 * @time:	2016.5
 */

/*
 * 校验正则
 */
var telReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; //手机号正则
var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //邮箱正则
var idCardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; //身份证正则
var phoneReg = /^0[0-9]{2,3}[2-9][0-9]{6,7}$/; //固定电话正则
var ipReg = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$/; //ip地址
var siteReg = /^([a-zA-Z0-9][-a-zA-Z0-9]{0,62}\.)+([a-zA-Z]{0,63})\.?$/; //域名正则
// 校验
var check = {
	// 浏览器名称
	BrowserUserAgent: navigator.userAgent.toLowerCase(),
	// android
    isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
    // iphone
    isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
    // ipad
    isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
    // wechat
    isWechat: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
    // 是否相等 isEquals(str1, str2)
    isEquals: function(str1, str2){   
	    return str1 == str2?true:false;   
	},
	// 是否相等(忽略大小写) isEequalsIgnoreCase(str1, str2)
	isEequalsIgnoreCase: function(str1,str2){   
	    return str1.toUpperCase() == str2.toUpperCase()?true:false;  
	},
	// 是否中文 isChinese(str)
	isChinese: function(str){   
	  var str = str.replace(/(^\s*)|(\s*$)/g,'');   
	  if( !(/^[\u4E00-\uFA29]*$/.test(str)&&(!/^[\uE7C7-\uE7F3]*$/.test(str))) ){   
	      return false;   
	  }   
	  return true;   
	},
	//是否是手机号码 isTellPhone(str)	 
	isTellPhone: function(str){   
	    if(telReg.test(str)){   
	          return true;   
	    }   
	    return false;   
	},
	// 是否是(座机)电话号码必须包含区号,可以含有分机号 isPhone(str)	
	isPhone: function(str){   
	    if(/^(0[1-9]\d{1,2}-)\d{7,8}(-\d{1,8})?/.test(str)){   
	        return true;   
	    }   
	    return false;   
	}, 
	//是否电子邮件 isEmail(strEmail)
	isEmail: function(str){   
	    if(emailReg.test(str)){   
	        return true  
	    }   
	    return false;   
	},
	//是否是身份证号 isIdCard(idNumber)  
	isIdCard: function(IDCardNo){
		if(idCardReg.test(IDCardNo)){
			return true;
		}
		return false;
	},
	// 是否合法的QQ号码 isQQ(str)
	isQQ: function(str){   
	    if(/^\d{5,9}$/.test(str)){   
	        return true;   
	    }   
	    return false;   
	},
	//是否邮编(1位至6位）isZipCode(str)
	isZipCode: function(str){   
	    if(/^\d{1,6}$/.test(str)){   
	        return true;   
	    }   
	    return false;   
	}, 
	// 是否是图片格式文件jpg|jpeg|swf|gif isImg(str)
	isImg: function(str){   
	    var objReg = new RegExp("[.]+(jpg|jpeg|swf|gif)$", "gi");   
	    if(objReg.test(str)){   
	        return true;   
	    }   
	    return false;   
	},
	// 是否整数 isInteger(str)
	isInteger: function(str){   
	    if(/^-?\d+$/.test(str))   {   
	        return true;   
	    }   
	    return false;   
	},
	// 是否浮点数 isFloat(str)
	isFloat: function(str){   
	    if(/^(-?\d+)(\.\d+)?$/.test(str)){   
	        return true;   
	    }   
	    return false;   
	}, 
	//是否合法的IP  isIP(str)
	isIP: function(str){   
	    var reg = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;   
	    if(reg.test(str)){   
	        return true;   
	    }   
	    return false;   
	},
	//是否日期类型(例:2005-12-12)  isDate(str)
	isDate: function(str){   
	    var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/;   
	    if(reg.test(str)){   
	        return true;   
	    }   
	    return false;     
	},

}
   


//JS StringBuilder 用法
function StringBuilder() {
    this.strings = new Array;
};
StringBuilder.prototype.append = function (str) {
    this.strings.push(str);
};
StringBuilder.prototype.toString = function () {
    return this.strings.join('');
};
　　


//JS 替换非法字符主要用在密码验证上出现的特殊字符
function URLencode(sStr) {
    return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F'); //分别是 + “ ” / 特殊符号
};

//回车提交表单
function formSubmit(event,form) {
    event = (event) ? event : ((window.event) ? window.event : "")
    keyCode = event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode);
    if (keyCode == 13) {
        form.submit();
    }
}

//按Ctrl + Entert 直接提交表单　
document.onkeydown = function (evt) {
    evt = evt ? evt : (window.event ? window.event : null);
    if (13 == evt.keyCode && evt.ctrlKey) {
        evt.returnValue = false;
        evt.cancel = true;
        PostData();
    }
};


/***
功能：得到选中的多选框值的Array
用法：
window.onload = function(){
    var a = document.getElementsByName("a");
	var get_a =  getCheckBoxArray(a);
    alert(get_a +  " |  "  + get_a[1] )
}
<input type="checkbox" value="1" name="a" checked/>
<input type="checkbox" value="2" name="a" />
<input type="checkbox" value="3" name="a" checked/>
***/
function getCheckBoxArray(element){
    var values = new Array();
    if(null == element){
        //alert("no data!");
    }else if(null == element.length){
        if(element.checked){
            values.push(element.value);
        }
    }else{
        for(i=0; i<element.length; i++){
            if(element[i].checked){
                 values.push(element[i].value);
            }
        }
    }
    return values;
}

//全选/全不选
function checkAll_1(objSelect) {
	if (objSelect.checked == true) {
		$("input[name='chkId']").attr("checked", true);
		$("input[name='chkAll']").attr("checked", true);
	}
	else if (objSelect.checked == false) {
		$("input[name='chkId']").attr("checked", false);
		$("input[name='chkAll']").attr("checked", false);
	}
}

/***
功能：复选框全选/不选/反选
用法：
<form id="form_a">
	<input type="checkbox"  value="1" name="a"/>
	<input type="checkbox"  value="2" name="a" checked/>
	<input type="checkbox"  value="3" name="a"/>
	<input type="button" value="全选" onclick="checkAll(document.getElementById('form_a'),'all')"/>
	<input type="button" value="不选" onclick="checkAll(document.getElementById('form_a'),'none')"/>
	<input type="button" value="反选" onclick="checkAll(document.getElementById('form_a'),'')"/>
</form>
***/
function checkAll_2(form, sel) {
	for (i = 0, n = form.elements.length; i < n; i++) {
		if(form.elements[i].type == "checkbox") {
			if(form.elements[i].checked == true) {
				form.elements[i].checked = (sel == "all" ? true : false);
			} else {
				form.elements[i].checked = (sel == "none" ? false : true);
			}
		}
	}
}


/***
功能：复选框检查是否选中。（如果没一个选中，会返回false.）
用法：
<form id="form_a" name="form_a">
	<input type="checkbox"  value="1" name="a"/>
	<input type="checkbox"  value="2" name="a" checked/>
	<input type="checkbox"  value="3" name="a"/>
	<input type="button" value="全选" onclick="alert( SCheckBox('form_a','a') )"/>
</form>
***/
function SCheckBox(_formName,_checkboxName){
	var selflag = {'checked':0,'cvalues':[]};
	_scheckbox = eval('document.'+_formName+'.'+_checkboxName);
	if(_scheckbox){
		if(eval(_scheckbox.length)){
			for(i=0;i<_scheckbox.length;i++){
				if(_scheckbox[i].checked){
					selflag.checked++;
					selflag.cvalues.push(_scheckbox[i].value);
				}
			};
		}else if(_scheckbox.checked){
			selflag.checked++;
			selflag.cvalues.push(_scheckbox.value);
		}
		if(selflag.checked){
			return selflag;
		}
	}
	return false;
}


/***
功能：使按钮有效/无效。
用法:
<form name="form_a">
	<INPUT TYPE="button" NAME="aa"  value="test" onclick="input_disabled()" />
	<INPUT TYPE="button" NAME="bb" value="martin" />
	<INPUT TYPE="button" NAME="bb" value="martin" />
</form>
***/
function input_disabled(){
	for(var i=0;i<document.form_a.elements.length;i++){
		if(document.form_a.elements[i].name.indexOf("bb")!=-1){
			document.form_a.elements[i].disabled=!document.form_a.elements[i].disabled;
		}
	}
}

/***
功能：textarea自适应文字的行数 .
注意：此方法不兼容FF，(onpropertychange)
参数：当前对象 和 最小高度
用法:
<textarea rows=5 name=s1 cols=27 onpropertychange="textarea_scroll(this,60)" style="overflow-y:hidden">
</textarea>
***/
function textarea_scroll(obj,min){
	if(obj.scrollHeight<min){
		obj.style.posHeight=min
	}else{
		obj.style.posHeight=obj.scrollHeight
	}
}

/***
功能：大写金额转换函数。 把数字转成中文 -- “零壹” 这种。
用法：
小写金额：<input type="text" name="aaa" id="aaa" onkeyup="nst_convert(this)"><br>
大写金额：<input type="text" name="bbb" id="bbb" size=80>
***/
function convertCurrency(currencyDigits) {
	// Constants:
	var MAXIMUM_NUMBER = 99999999999.99;
	// Predefine the radix characters and currency symbols for output:
	var CN_ZERO = "零";
	var CN_ONE = "壹";
	var CN_TWO = "贰";
	var CN_THREE = "叁";
	var CN_FOUR = "肆";
	var CN_FIVE = "伍";
	var CN_SIX = "陆";
	var CN_SEVEN = "柒";
	var CN_EIGHT = "捌";
	var CN_NINE = "玖";
	var CN_TEN = "拾";
	var CN_HUNDRED = "佰";
	var CN_THOUSAND = "仟";
	var CN_TEN_THOUSAND = "万";
	var CN_HUNDRED_MILLION = "亿";
	var CN_SYMBOL = "人民币";
	var CN_DOLLAR = "元";
	var CN_TEN_CENT = "角";
	var CN_CENT = "分";
	var CN_INTEGER = "整";
	
	// Variables:
	var integral; // Represent integral part of digit number. 
	var decimal; // Represent decimal part of digit number.
	var outputCharacters; // The output result.
	var parts;
	var digits, radices, bigRadices, decimals;
	var zeroCount;
	var i, p, d;
	var quotient, modulus;
	
	// Validate input string:
	currencyDigits = currencyDigits.toString();
	if (currencyDigits == "") {
		alert("Empty input!");
		return "";
	}
	if (currencyDigits.match(/[^,.\d]/) != null) {
		alert("Invalid characters in the input string!");
		return "";
	}
	if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
		alert("Illegal format of digit number!");
		return "";
	}
 
	// Normalize the format of input digits:
	currencyDigits = currencyDigits.replace(/,/g, ""); // Remove comma delimiters.
	currencyDigits = currencyDigits.replace(/^0+/, ""); // Trim zeros at the beginning. 
	// Assert the number is not greater than the maximum number.
	if (Number(currencyDigits) > MAXIMUM_NUMBER) {
		alert("Too large a number to convert!");
		return "";
	}
	// http://www.knowsky.com/ Process the coversion from currency digits to characters:
	// Separate integral and decimal parts before processing coversion:
	parts = currencyDigits.split(".");
	if (parts.length > 1) {
		integral = parts[0];
		decimal = parts[1];
		// Cut down redundant decimal digits that are after the second.
		decimal = decimal.substr(0, 2);
	}else {
		integral = parts[0];
		decimal = "";
	}
	// Prepare the characters corresponding to the digits:
	digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT,CN_NINE);
	radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
	bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
	decimals = new Array(CN_TEN_CENT, CN_CENT);
	// Start processing:
	outputCharacters = "";
	// Process integral part if it is larger than 0:
	if (Number(integral) > 0) {
		zeroCount = 0;
		for (i = 0; i < integral.length; i++) {
			p = integral.length - i - 1;
			d = integral.substr(i, 1);
			quotient = p / 4;
			modulus = p % 4;
			if (d == "0") {
				zeroCount++;
			}else {
				if (zeroCount > 0){
					outputCharacters += digits[0];
				}
				zeroCount = 0;
				outputCharacters += digits[Number(d)] + radices[modulus];
			}
			if (modulus == 0 && zeroCount < 4) { 
				outputCharacters += bigRadices[quotient];
			}
		}
		outputCharacters += CN_DOLLAR;
	}
	// Process decimal part if there is:
	if (decimal != "") {
		for (i = 0; i < decimal.length; i++) {
			d = decimal.substr(i, 1);
			if (d != "0") {
				outputCharacters += digits[Number(d)] + decimals[i];
			}
		}
	}
	// Confirm and return the final output string:
	if (outputCharacters == "") {
		outputCharacters = CN_ZERO + CN_DOLLAR;
	}
	if (decimal == "") {
		outputCharacters += CN_INTEGER;
	}
	//outputCharacters = CN_SYMBOL + outputCharacters;
	outputCharacters = outputCharacters;
	return outputCharacters;
}// 
var stmp = "";
function nst_convert(t){
   if(t.value==stmp) return;//如果等于上次输入则返回
   var ms = t.value.replace(/[^\d\.]/g,"").replace(/(\.\d{2}).+$/,"$1").replace(/^0+([1-9])/,"$1").replace(/^0+$/,"0");
   //replace(/[^\d\.]/g,"")去掉输入当中不是数字和.的字符
   //replace(/(\.\d{2}).+$/,"$1") 
   //匹配从字符开始的第一个.后面的所有字符,由于没有使用g标记，
   //所以只匹配开始第一次   然后用小数点和后两位进行替换以确定数值最后的格式正确 高.
   //replace(/^0+([1-9])/,"$1") 匹配以多个0开头的数值替换为去掉0后的数值做为数字的第一位 也是匹配开始的一次.
   //replace(/^0+$/,"0") 匹配以0开始和结束的多个0为一个0 也就是0000000 输入->转换成一个0
   //以下确定输入的为过滤后的合法数字
   //alert(ms);
   var txt = ms.split(".");
   //alert(txt[0]);
   //如果ms值不小数点存在则txt[0]=小数点前的值否则等于ms
   //regexp:/\d{4}(,|$)/ 匹配四位数字和,的集合或者四位数字和字符结尾的集合
   while(/\d{4}(,|$)/.test(txt[0]))//如果为txt[0]=4123
     txt[0] = txt[0].replace(/(\d)(\d{3}(,|$))/,"$1,$2");
   //txt[0].replace(/(\d)(\d{3}(,|$))/,"$1,$2")是将txt[0]进行替换后再赋给它
   //regexp:/(\d)(\d{3}(,|$))/ 将四个数字份为两组第一个数字为第一位，后三位和其他结尾为每二位
   //并替换成 第一位,第二位 注意 ,的使用很好.   也就是将4123先替换成4,123
   //由于此表达式默认采用贪婪匹配所以从数值后向前匹配再通过循环进行再匹配替换从而可以将
   //12345678分成你想要的123,456,78 楼主彩用(,|$)很精典，因为它略去了第二次匹配时的,问题
   t.value = stmp = txt[0]+(txt.length>1?"."+txt[1]:"");
   //最终赋值到输入框中  
   //如果有小数点则加上并购成最终数字否则显示替换后的txt[0]
   bbb.value = convertCurrency(ms-0);
   //将ms转换为数字送到number2num1去转换
}

/*
 * 功能：大写金额转换函数。 把数字转成中文 -- “零壹” 这种。
 * 用法：
 * digitUppercase(951434677682.00); //玖仟伍佰壹拾肆亿叁仟肆佰陆拾柒万柒仟陆佰捌拾贰
*/
var digitUppercase = function(n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

/***
功能：收藏到书签.(兼容IE和FF)。
用法:
<input type="button" value="收藏" onclick="addBookmark('martin(前端开发)','http://www.martin.cn')"/> 
***/
function addBookmark(title,url) {
	if (window.sidebar) {
		window.sidebar.addPanel(title, url,"");
	} else if( document.all ) {
		window.external.AddFavorite( url, title);
	} else if( window.opera && window.print ) {
		return true;
	}
}

/***
功能：拷贝/复制文本框内容。（兼容IE和FF）
用法:
1：
<input type="text"  name="d" id="d" value="&lt;http://www.martin.cn&gt;&lt;http://www.martin.cn&gt;" />
<input id="Button1" type="button" onclick="copyText(document.getElementById('d'));" value="复制" />
2：
<textarea name="c"  id="c" rows="4" cols="20">&lt;http://www.martin.cn&gt;</textarea>
<input id="Button2" type="button" onclick="copyText(document.getElementById('c'));" value="复制" />
***/
function copyText(obj){
    if( obj.type !="hidden" ){
        obj.focus();
    }
    obj.select(); 
    copyToClipboard(obj.value);
    alert("拷贝成功！");
}
function copyToClipboard(txt) {  
    if(window.clipboardData)  {  
        window.clipboardData.clearData();  
        window.clipboardData.setData("Text", txt);  
    }else if(navigator.userAgent.indexOf("Opera") != -1)  {  
        window.location = txt;  
    }else if (window.netscape){  
        try {  
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  
        }  
        catch (e)  
        {  
            alert("您使用的浏览器不支持此复制功能，请使用ctrl+c或者浏览器右键复制");  
        }  
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);  
        if (!clip)  
            return;  
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);  
        if (!trans)  
            return;  
        trans.addDataFlavor('text/unicode');  
        var str = new Object();  
        var len = new Object();  
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);  
        var copytext = txt;  
        str.data = copytext;  
        trans.setTransferData("text/unicode",str,copytext.length*2);  
        var clipid = Components.interfaces.nsIClipboard;  
        if (!clip)  
            return false;  
        clip.setData(trans,null,clipid.kGlobalClipboard);  
    }  
    return true;  
}


/***
功能：图片，超链接提示效果   tooltips
用法:
Demo1：<img src="a.gif" onmouseover="showToolTip(event,'<font style=font-size:14px;font-weight:bold;color:#000000>测试1</font><img src=b.gif  border=0 align=absmiddle>');" alt="" onmouseout="hideToolTip();" />
引用此方法注意 在页面上需要加入:
<div id="frDiv_martin" style="overflow: visible; position: absolute; visibility: hidden;z-index: 500">
	<iframe id="ifr_martin" src="javascript:null" style="overflow: visible; position: relative;z-index: 500; width: 342px;height:0px;" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe>
</div>
***/
function hideToolTip(){
    parent.document.getElementById("frDiv_martin").style.visibility="hidden";
}
function showToolTip(event,msg){ 
	var event =event || window.event;
	var ifr_martin = getIFrameDocument("ifr_martin");  
	var e_html = ifr_martin.createElement("html");
	var e_body = ifr_martin.createElement("body");
	e_body.style.marginLeft = "0px"; 
	e_body.style.marginTop = "0px"; 
	e_body.style.marginBottom = "0px"; 
	e_body.style.marginRight = "0px"; 
	var e_div = ifr_martin.createElement("div");
	e_div.id = "divContent"; 
	e_div.style.wordWrap="break-word"; 
	e_div.style.backgroundColor="#aad5ff";
	e_div.style.borderStyle="solid"; 
	e_div.style.borderWidth="1px"; 
	e_div.style.borderColor="#336699"; 
	e_div.style.paddingLeft = "3px"; 
	e_div.style.paddingTop = "3px"; 
	e_div.style.paddingBottom = "3px"; 
	e_div.style.paddingRight = "3px"; 
	e_div.innerHTML = msg; 
	e_body.appendChild(e_div); 
	e_html.appendChild(e_body);      
	ifr_martin.body.innerHTML = e_body.innerHTML; 
	var oBody = ifr_martin.getElementById("divContent"); 
	var oFrame = document.getElementById("ifr_martin"); 
	var oFrDiv = document.getElementById("frDiv_martin"); 
	oFrame.style.height = oBody.offsetHeight; 
	//oFrame.style.width = oBody.offsetWidth;
	oFrDiv.style.visibility="visible"; 
	/*event.x与event.y问题
	说明:IE下,even对象有x,y属性,但是没有pageX,pageY属性;
	Firefox下,even对象有pageX,pageY属性,但是没有x,y属性. 
	解决方法:
	使用mX(mX = event.x ? event.x : event.pageX;)
	来代替IE下的event.x或者Firefox下的event.pageX. 
	*/
	oFrDiv.style.left =  ((event.x ? event.x : event.pageX)+1)+"px"; 
	oFrDiv.style.top =  ((event.y ? event.y : event.pageY)+1)+"px";  
}
function   getIFrameDocument(aID)   { 
	var   rv   =   null;   
	if(document.getElementById(aID).contentWindow){ 
		rv   =   document.getElementById(aID).contentWindow.document; 
	}else{ 
		//   IE 
		rv   =   document.frames[aID].document; 
	} 
	return   rv; 
} 

/***
功能：获取显示的高度和宽度；必须等页面加载完后，才能获取。 及onload后。
***/
// 获取显示高度
function getViewportHeight() {
	if (window.innerHeight!=window.undefined){ return window.innerHeight;}
	if (document.compatMode=='CSS1Compat'){ return document.documentElement.clientHeight;}
	if (document.body){ return document.body.clientHeight; }else{return window.undefined;} 
}
// 获取显示宽度
function getViewportWidth() {
	if (window.innerWidth!=window.undefined) return window.innerWidth; 
	if (document.compatMode=='CSS1Compat') return document.documentElement.clientWidth; 
	if (document.body) return document.body.clientWidth; 
	return window.undefined; 
}


//获取地理位置
function getLocation(callback){
  	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
	      	function(p){
	          	callback(p.coords.latitude, p.coords.longitude);
	      	},
	      	function(e){
	          	var msg = e.code + "\n" + e.message;
	      	}
      	);
  	}
}

/***
功能：从URL地址中提取文件名
用法：
var a =url_filename("http://www.martin.cn/abc.rar");
alert( a  ) ;// "abc"
***/
function url_filename(string){
	string=string.replace(/(.*\/){0,}([^\.]+).*/ig,"$2")
	return string;
}

/***
功能：获取域名.
***/
function getDomainName(){
	var s,siteUrl;
	s=document.location+"";
	return s.substring(7,s.indexOf('/',7));
}




/***
功能：文本框限制只能输入数字。
用法:
<input onkeyup="limit_num(this)" onbeforepaste="limit_num_paste()" />
***/
function limit_num(obj){
	obj.value=obj.value.replace(/[^\d]/g,'');
}
//复制限制
function limit_num_paste(){
	clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''));
}

/***
功能：文本框限制只能输入数字和英文。
用法:
<input onkeyup="limit_num_letter(this)" onbeforepaste="limit_num_letter_paste()" />
***/
function limit_num_letter(obj){
	obj.value=obj.value.replace(/[\W]/g,'');
}
function limit_num_letter_paste(){
	clipboardData.setData('text',clipboardData.getData('text').replace(/[\W]/g,''));
}

/***
功能：文本框输入字符控制。 控制只能输入汉字。
用法:
<input onkeyup="limit_Chinese(this)" onbeforepaste="limit_Chinese_paste()" />
***/
function limit_Chinese(obj){
	obj.value=obj.value.replace(/[^\u4E00-\u9FA5]/g,'');
}
function limit_Chinese_paste(){
	clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''));
}

/***
功能：文本框输入字符控制。 控制只能输入全角。
用法:
<input onkeyup="input_quanjiao(this)" onbeforepaste="limit_quanjiao_paste()" />
***/
function limit_quanjiao(obj){
	obj.value=obj.value.replace(/[^\uFF00-\uFFFF]/g,'');
}
function limit_quanjiao_paste(){
	clipboardData.setData('text',clipboardData.getData('text').replace(/[^\uFF00-\uFFFF]/g,''));
}

/***
功能：把字符串中 的 半角 转换为全角。
用法：
	var a  =  "d'd'd'd()%[]";
	alert(toSafe(a));
	当然可以用于表单的值转换。
***/
function toSafe(str){
	var re;
	re = /'/g;
	str = str.replace(re,"＇");
	re =/\)/g;
	str = str.replace(re,"）");
	re = /\(/g;
	str = str.replace(re,"（");
	re = /%/g;
	str = str.replace(re,"％");
	re = /\[/;
	str = str.replace(re,"［");
	re = /\]/;
	str = str.replace(re,"］");
	return str;
}
function makeToSafe(formName){
	var i,form;
	form = eval(formName);
	for(i=0;i<form.elements.length;i++){
		if(form.elements[i].type=="text" || form.elements[i].type=="textarea"){
			form.elements[i].value = toSafe(form.elements[i].value);
		}
	}
}

/***
功能：只允许输入数字和小数点。
用法：
<input type=text  onkeyup="clearNoNum(this)"/>
***/
function clearNotNum(obj){
	//先把非数字的都替换掉，除了数字和.
	obj.value = obj.value.replace(/[^\d.]/g,"");
	//必须保证第一个为数字而不是.
	obj.value = obj.value.replace(/^\./g,"");
	//保证只有出现一个.而没有多个.
	obj.value = obj.value.replace(/\.{2,}/g,".");
	//保证.只出现一次，而不能出现两次以上
	obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
}



/***
功能：实时检测输入框的字数长度
用法：
	<input type="text" name="explain" id="explain" onkeyup="check_input_Length(this)" >
	<small>文字最大长度: 20. 还剩: <span id="chLeft">20</span>.</small>
***/
function check_input_Length(which){
	var maxChars = 20;
	if (which.value.length > maxChars){
		which.value = which.value.substring(0,maxChars);
		var curr = maxChars - which.value.length;
		return curr.toString();
	}
}

/***
功能：字符串截取方法  重开始处截取
用法：
	var str = "1646434";
	getCharactersLen(str,3); //164
***/
function getCharactersLen(charStr, cutCount) {
	if (charStr == null || charStr == '') return '';
	var totalCount = 0;
	var newStr = '';
	for (var i = 0; i < charStr.length; i++) {
		var c = charStr.charCodeAt(i);
		if (c < 255 && c > 0) {
			totalCount++;
		} else {
			totalCount += 2;
		}
		if (totalCount >= cutCount) {
			newStr += charStr.charAt(i);
			break;
		}
		else {
			newStr += charStr.charAt(i);
		}
	}
	return newStr;
}

/***
功能：检查输入的值，小数点后的位数大于num
用法：checknumber('21.34',1 );
***/
function checknumber(value,num){
  	if(value!=""){
       if(value.indexOf(".")>0){
            var temp=value.length-(value.indexOf(".")+1);
            if(temp>num){
                 return num;
            }
       }
  	}
  	return false;
}


/***
功能：判断两个object的值是不是相同
用法：
var a=new Object();   
a["1"]="1"   
a["2"]="2"   
var c=new Object();   
c["1"]="2"   
c["2"]="3"   
alert(a.compare(c))   
***/
Object.prototype.compare = function(obj){   
	for(elements in this){   
		if(this[elements] != obj[elements]){ 
			return false; 
		}
	}   
	return true; 
}  

/***
功能：回车自动跳到下一个文本框。
注意：此方法不兼容FF，因为在FF下，event.keycode是只读属性，不能赋值。
用法:
<form action="#"  name="a" onkeydown="QuickNext()">
	<input   type="text" />   
	<input   type="text"   />   
	<input   type="button" value="test"  />  
</form>
***/
function QuickNext(){  
	//判断是否为button, 是因为在HTML上会有type="button"
	//判断是否为submit,是因为HTML上会有type="submit"
	//判断是否为reset,是因为HTML上的"重置"应该要被执行
	//判断是否为空,是因为对于HTML上的"<a>链接"也应该被执行,
	//这种情况发生的情况不多,可以使用"tabindex=-1"的方式来取消链接获得焦点.
    if(event.keyCode==13 && event.srcElement.type!='button' && event.srcElement.type!='submit' && event.srcElement.type!='reset' && event.srcElement.type!='textarea' && event.srcElement.type!=''){   
	  	event.keyCode = 9; 
	}
}  

/***
功能：按TAB键移动到下一个输入框时，光标停在文本框文字的最后，方便用户继续输入.
注意：IE默认是全部选中。此方法不兼容FF。
用法:
<input type='text' value='0592' onfocus="moveEnd()"> 
***/
function moveEnd(){
	var e=event.srcElement;
	var r=e.createTextRange();
	r.moveStart('character',e.value.length);
	r.collapse(true);
	r.select();
}


/***
功能：新窗口运行textarea内的代码（为w3c的预览功能）
用法：
<textarea id="a">aaaaaaaa</textarea>
<input type="button" value="运行" onclick="runEx('a')" />
***/
function runEx(id)  {
	var cod=document.getElementById(id)
	var code=cod.value;
	if (code!=""){
		  var newwin=window.open('','','');  
		  newwin.opener = null 
		  newwin.document.write(code);  
		  newwin.document.close();
	}
}

/***
功能：对表单中  textarea  中的空格 和 换行处理。
***/
function convertToHtml(str){
	var re;
	re  = / /g;
	str = str.replace(re,"&nbsp;");
	re  = /\r\n/g;
	str = str.replace(re,"<br>");
	return str;
}
function makeToHtml(formName){
	var form;
	form = eval(formName);
	for(i=0;i<form.elements.length;i++){
		if(form.elements[i].type=="textarea"){
			form.elements[i].value = convertToHtml(form.elements[i].value);
		}
	}
}

/***
功能：得到Form数据，以 & 号拼接起来。 在ajax传递数据中，经常用到这个方法。
用法:
<form id="cs">
	<input type="text" name="aa" value="aa"/>
	<input type="text" name="bb"  value="bb"/>
	<textarea name="cc">cc</textarea>
	<input type="button" value="test" name="btn" onclick="alert(  serializeFormData('cs')  )" />
</form>
***/
function serializeFormData(formN){
	if (!form || form.nodeName.toUpperCase() !== 'FORM') {
		return;
	}
	var str=""
	for(var i=0;i<document.forms[formN].elements.length;i++){
		if(document.forms[formN].elements[i].type!="button"){ //这里可以根据需求，来判断那些类型不要 还有disabled
			var e = document.forms[formN].elements[i];
			str+=e.name+"="+e.value+"&"
		}
	}
	str=str+"date="+new Date().getTime();
	return str;
}

/***
功能：字符串连接操作类
用法：
var str=new StringBuilder();
str.append("my ").append("name ").append("is ").append("martin! ");
alert( str.toString() );
*/
function StringBuilder(sString){ 
	this.length=0;
	this.append=function(sString){
  		this.length+=(this._parts[this._current++]=String(sString)).length;
		this._string=null;
		return this;
	}
	this.toString=function(){
		if(this._string!=null){
			return this._string;
		}
		var s=this._parts.join("");
		this._parts=[s];
		this._current=1;
		return this._string=s;
	}
	this._current=0;
	this._parts=[];
	this._string=null;
	if(sString!=null)
	this.append(sString);
}

/**
* 判断对象是否为函数，如果当前运行环境对可调用对象（如正则表达式）
* 的typeof返回'function'，采用通用方法，否则采用优化方法
*
* @param {Any} arg 需要检测是否为函数的对象
* @return {boolean} 如果参数是函数，返回true，否则false
*/
function isFunction(arg) {
	if (arg) {
		if (typeof (/./) !== 'function') {
			return typeof arg === 'function';
		} else {
			return Object.prototype.toString.call(arg) === '[object Function]';
		}
	} // end if
	return false;
}

// 同理  是否为正则表达式
function isRegExp(value){
	return Object.prototype.toString.call(value) == "[object RegExp]";
}