/*个人信息*/
window.onload=function(){
	perList("notice-tit","notice-con");
}
function $(id){
	return typeof id == 'string'?document.getElementById(id):id;
}

function perList(titles,divs){
	var titles=$(titles).getElementsByTagName('li');
	var divs=$(divs).getElementsByTagName('div');
	if(titles.length!=divs.length){
		return;
	}else{
		for(var i=0;i<titles.length;i++){
			titles[i].id=i;
			titles[i].onclick=function(){
				for(var j=0;j<titles.length;j++){
					titles[j].className='';
					divs[j].style.display='none';
				}
				this.className='courseActive';
				divs[this.id].style.display='block';
			}
		}
	}

}