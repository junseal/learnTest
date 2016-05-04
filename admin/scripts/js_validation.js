/**
 * [description]
 * @param  {[type]} ){	$("#Button").bind('click',function() {		var       $name [description]
 * @return {[type]}                                          [description]
 */
$(function(){
	$("#Button_login").bind('click',function() {
		var $name = $('#userName');
		var $pass = $('#Paword');
		if(judgeLength($name,$pass)==true){
			console.log("success");
		}
	});
});


/**
 * [description]
 * @param  {[type]} ){	$("#Button").bind('click',function() {		var       $name [description]
 * @return {[type]}                                          [description]
 */
$(function(){
	$("#Button_regi").bind('click',function() {
		var $name = $('#userName');
		var $pass = $('#Paword');
		var $passCon=$('#pawordCon');
		if(judgeLength($name,$pass)==true&&judgePass($pass,$passCon)==true){
			console.log("success");
		}
	});
});

/**
 * [isLeAndNum description]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
function isLeAndNum(value){
	var strExp=/^[A-Za-z0-9]+$/g;
	if(strExp.test(value)){
		return true;
	}else{
		return false;
	}
}

/**
 * [judegeLength description]
 * @param  {[type]} name [description]
 * @param  {[type]} pass [description]
 * @return {[type]}      [description]
 */
function judgeLength(name,pass){
	if(name.val() == ""){
		alert("用户名不能为空！");
	}else{
		if(isLeAndNum(name.val())==false){
			alert("用户名含有特殊字符！");
		}else{
			if(name.val().length > 10 ||name.val().length < 4){
				alert("用户名长度不符合要求！");
			}else{
				if (pass.val() == "") {
					alert("密码不能为空！");
				} else {
					if (isLeAndNum(pass.val()) == false) {
						alert("密码含有特殊字符！");
					} else {
						if (pass.val().length > 16 || pass.val().length < 6) {
							alert("密码长度不符合要求！");
						} else {
							return true;
						}
					}
				}
			}	
		}
	}
}
/**
 * [judgePass description]
 * @param  {[type]} pass    [description]
 * @param  {[type]} passCon [description]
 * @return {[type]}         [description]
 */
function judgePass(pass,passCon){
	if(pass.val()!=passCon.val()){
		alert("密码与确认密码不一致!");
	}else{
		return true;
	}
}