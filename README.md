Raccoon.css
=======

汉字垂直排版


###todo

* 诗歌排版

    - 英文数字字符翻转

         暂时先定义显式css标签


	- 标点符号

	- 加粗显示 		
		
* [fixed]<span style='text-decoration:line-through'>着重符号 </span>
* 文章排版 more


###down
- 引用：

    * 用法(必须引用js)

        	<script src='jquery-2.1.1.min.js'></script>
        	<script src='jquery.raccoon.js'></script>
        	<div class='poetry'>
        	    <span class='cite cite-parent'>我在括号里面</span>
	  	</div>
        	<script>$(document).raccoon();</script>
        
    * 样式

	         cite :更改字体
	         cite-parent : ()
	         cite-bracket : {}
	         cite-le-mo : < >
	         cite-square : []
	         cite-fe-quotes :《》
	         cite-single-marks : ﹁, ﹂
	         cite-double-marks : ﹃,﹄
	         cite-double-quotes : 【】

- 着重：

    * 着重符号将出现在文字的右边
    * 用法：

	        <div class='poetry'>
	            <span class='em' data-style='dot'>我</span>
	        </div>

    * 样式(data-style)：

	        "dot":"●",
	        "line":"|",
	        "wave":"︴",
	        "2dot":"゛",
	        "dot-hollow":"○",
	        "doline":"‖"
	
	  
