/**
 * @author zgf
 * @date 2015.11
 * @name Array.js
 * 功能：arry方法扩展
 */

/***
功能：去掉数组中重复的元素
用法：
	var arr=["abc",85,"abc",85,8,8,1,2,5,4,7,8];
	alert(  arr.strip()  );
***/
Array.prototype.strip = function(){
	if(this.length<2) {
		return [this[0]]||[];
	}
	var arr=[];
	for(var i=0;i<this.length;i++){
		arr.push(this.splice(i--,1));
		for(var j=0;j<this.length;j++){
			if(this[j]==arr[arr.length-1]){
				this.splice(j--,1);
			}
		}
	}
	return arr;
}


/***
功能：指定array是否包含指定的item
用法：
	var array1  = [1,2,3,4,5,"a","b"];
	var b1  =  array1.exists("b") 
	//包含true;
	//不包含false;
	alert(b1)
***/
Array.prototype.exists = function( item ){
	for( var i = 0 ; i < this.length ; i++ ){
		if( item == this[i] )
		{
			return true;
		}
	}
	return false;
}

/***
功能:删除数组指定的item
用法：
	var array1  = [1,2,3,4,5,"a","b"];
	array1.remove("2");
	alert( array1[1] );
***/
Array.prototype.remove = function( item ){
	for( var i = 0 ; i < this.length ; i++ ){
		if( item == this[i] ){
			break;
		}
	}
	if( i == this.length ){
		return;
	}
	for( var j = i ; j < this.length - 1 ; j++ ){
		this[ j ] = this[ j + 1 ];
	}
	this.length--;
}

/**
* 判断一个对象是否是数组，参数不是对象或者不是数组，返回false
*
* @param {Object} arg 需要测试是否为数组的对象
* @return {Boolean} 传入参数是数组返回true，否则返回false
*/
function isArray(arg) {
	if (typeof arg === 'object') {
		return Object.prototype.toString.call(arg) === '[object Array]';
	}
	return false;
}