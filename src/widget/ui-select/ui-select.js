;(function($, window, undefined) {
    $.fn.SelectBox = function(options){
    	var options = $.extend({},$.fn.SelectBox.defaults,options);
    	return this.each(function(){
    		var _this = this;
    		var rnd = Math.random().toString().replace('.', '');
				_this.box; 
				_this.boxid = '#SelectBox_' + rnd;				
				_this.val='';
				_this.text=''; 
				options.valueTo = $(options.valueTo);						
				_this.data = getdata();

			//替换select //format
			var def_id = _this.id||'';
			var def_class = $(_this).attr('class')||'';
			var def_val = _this.data[0][0];
			var def_text = _this.data[0][1];
			_this.replaceHtml = $('<div id="'+def_id+'" class="'+def_class+'">').text(def_text).attr('data-val',def_val).addClass(options.elAddClass);
			console.log($(_this),$(_this.replaceHtml))
			$(_this).hide().after($(_this.replaceHtml));
			
			var html = '';
				html += '<ul>';
				for (var i = 0; i < _this.data.length; i++) {
					if(_this.data[i].length>1){
						html += '<li data-val="'+ _this.data[i][0] +'">'+ _this.data[i][1] +'</li>';
					}else{
						html += '<li>'+ _this.data[i][0] +'</li>';
					}						
				};					
				html += '</ul>';
			_this.box = $('<div id="'+_this.boxid+'" class="SelectBox">').html(html).addClass(options.boxAddClass);
						
			$(_this.replaceHtml).on(options.event,function(){
				//插入到body				
				_this.box.appendTo('body');
				//position										
				position(options.position);
				//lock
				if(options.islock){					
					_this.lock = $('<div id="layer" class="layer">').appendTo('body');										
				}
				//select
				_this.box.find('li').each(function(){			
					$(this).on(options.event,function(){
						//val text
						var select_val = $(this).attr('data-val');
						var select_text = $(this).text();						
						if(options.valueTo && options.valueTo.nodeType==1){
							options.valueTo.text(select_text);
							options.valueTo.attr('data-val',select_val);
							$(_this).val(select_val);
						}else{
							_this.replaceHtml.text(select_text);
							_this.replaceHtml.attr('data-val',select_val);
							$(_this).val(select_val);
						}
						//remove
						_this.box.remove();
						if(options.islock){
							_this.lock.remove();
						}
						//callback			
						if(options.callback){
							options.callback();
						}
					})
				})
				//点击空白remove dom
				$(document).on(options.event,function(e){		
					var target = e.target;
					if(target!=_this.replaceHtml[0]){
						_this.box.remove();
						if(options.islock){
							_this.lock.remove();
						}
					}
				})	
			})
			function getdata(){
				var data = [];
				for (var i = 0; i < $(_this).find('option').length; i++) {
					data[i] = [$(_this).find('option').eq(i).val(),$(_this).find('option').eq(i).text()];
				};
				return data;					
			}
			function position(type){
				var this_left = $(_this.replaceHtml).offset().left;
				var this_top = $(_this.replaceHtml).offset().top;
				var this_w = $(_this.replaceHtml).innerWidth();
				var this_h = $(_this.replaceHtml).innerHeight();
				console.log(this_w,this_h)
				if(type=='center'){
					var left = ($(window).width()-_this.box.width())/2;
					var top = ($(window).height()-_this.box.height())/2;
					_this.box.css({position:'absolute',top:'50%',left:left,top:top})
				}else if(type=='bottom'){
					_this.box.css({position:'absolute',bottom:'0',left:'0',width:'100%'})
				}else{
					_this.box.css({position:'absolute',left:this_left,top:this_top+this_h+1,width:this_w})
				}
			}	
				
    	})
   	}
    $.fn.SelectBox.defaults = {
    	elAddClass: '',
    	boxAddClass: '',
    	event : 'click',               
        valueTo: '',
        islock:false,
        position:'',//''|center|bottom
        callback : null
	};

})(window.jQuery || window.Zepto, window);