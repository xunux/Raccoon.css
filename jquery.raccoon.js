(function($){
	$.fn.raccoon=function(){
		this.init = function(){
			var ems = $(".em");
			this.bulidEms(ems);	
		},
		this.bulidEms =function(elements){
			var styles ={
							"dot":"●",
							"line":"|",
							"wave":"︴",
							"sline":"¦",
							"doline":"‖"
						}
			elements.each(function(index,e){
				var type=$(this).data("style"),				
				    a=this.innerHTML.length,
			        item=$("<span class='em-in'>"+styles[type]+"</span>"),
			        temp=$("<span class='em-wrap-in'></span>");
			        console.log(a);
				for (var i = 0; i < a; i++) {
					temp.append(item.clone());
				};
				$(this).append(temp);
			});
		},
		this.init();
	}

})(jQuery);