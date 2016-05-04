

/*main列表操控*/
$(function(){
	$("#nav_top1 a").bind('click','a',function(){
		$("#nav_top1 a").removeClass('active');
		$(this).addClass('active');
	});
	$("#nav_top2 a").bind('click','a',function(){
		$("#nav_top2 a").removeClass('active');
		$(this).addClass('active');
	});
})

