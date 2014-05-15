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
							"2dot":"゛",
                            "dot-hollow":"○",
							"doline":"‖"
                };
			elements.each(function(){
                var self = $(this),
				    type=self.data("style"),
				    len=this.innerHTML.length,
			        item=$("<span class='em-in'>"+styles[type]+"</span>"),
			        temp=$("<span class='em-wrap-in'></span>");
				for (var i = 0; i < len; i++) {
					temp.append(item.clone());
				}
				self.append(temp);
                self.find(".em-in").each(function(index){
                    $(this).css("top",""+1.5*index+"em");
                });
			});
		}
		this.init();
	}

})(jQuery);