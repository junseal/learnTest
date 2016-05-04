/*个人信息*/
window.onload = function() {
	//考虑IE兼容性
	if (!document.getElementsByClassName) {
		document.getElementsByClassName = function(cls) {
			var ret = [];
			var els = document.getElementsByTagName('*');
			for (var i = 0, len = els.length - 1; i < len; i++) {
				if (els[i].className === cls 
					|| els[i].className.indexOf(cls) >= 0 
					|| els[i].className.indexOf(' ' + cls) 
					|| els[i].className.indexOf(' ' + cls + ' ') 
					|| els[i].className.indexOf(cls + ' ')) {
					ret.push(els[i]);
				}
			}
			return ret;
		}
	}
	//获取相应值
	var userTr = $('userTable').children[1].rows;
	var courseTr = $('courseTable').children[1].rows;
	var uselectedTotal = $('userAll');
	var cselectedTotal = $('courseAll');
	var titles = $('notice-tit').getElementsByTagName('li');
	var divs = $('notice-con').getElementsByTagName('div');
	var ucheckInputs = $('usersMan').getElementsByClassName('check');
	var ucheckAllInputs = $('usersMan').getElementsByClassName('check_all');
	var ccheckInputs = $('coursesMan').getElementsByClassName('check');
	var ccheckAllInputs = $('coursesMan').getElementsByClassName('check_all');
	var udeleteAll=$('udeleteAll');
	var cdeleteAll=$('cdeleteAll');
	

	// 判断列表选择
	if (titles.length != divs.length) {
		return;
	} else {
		for (var i = 0; i < titles.length; i++) {
			titles[i].id = i;
			titles[i].onclick = function() {
				for (var j = 0; j < titles.length; j++) {
					titles[j].className = '';
					divs[j].style.display = 'none';
				}
				this.className = 'courseActive';
				divs[this.id].style.display = 'block';
				//判断当前显示界面，用于执行不同方法
				if (this.id == '1') {
					allSelect(ucheckInputs, ucheckAllInputs, userTr, uselectedTotal);
					listDelete(userTr,udeleteAll,uselectedTotal);
				} else if (this.id == '2') {
					allSelect(ccheckInputs, ccheckAllInputs, courseTr, cselectedTotal);
					listDelete(courseTr,cdeleteAll,cselectedTotal);
				}
			}
		}
	}
	//判断使用userTr或者courseTr	
}

function $(id) {
	return typeof id == 'string' ? document.getElementById(id) : id;
}

//计算并显示选择数量
function getTotal(tr,selectedTotal) {
	var selected = 0;
	for (var i = 0; i < tr.length; i++) {
		if (tr[i].getElementsByTagName('input')[0].checked) {
			selected++;
		}
	}
	selectedTotal.innerHTML = selected;
}

//全选判断
function allSelect(checkInputs, checkAllInputs, tr, selectedTotal) {
	for (var i = 0; i < checkInputs.length; i++) {
		checkInputs[i].onclick = function() {
			//判断是否全选
			if (this.className === 'check_all check') {
				for (var j = 0; j < checkInputs.length; j++) {
					checkInputs[j].checked = this.checked;
				}
			}
			//判断是否取消全选
			if (this.checked == false) {
				for (var k = 0; k < checkAllInputs.length; k++) {
					checkAllInputs[k].checked = false;
				}
			}
			//计算选择数目
			getTotal(tr, selectedTotal);
			// console.log(selectedTotal.innerHTML);
			// 判断是否全部单选完
			if (selectedTotal.innerHTML == tr.length) {
				for (var l = 0; l < checkAllInputs.length; l++) {
					checkAllInputs[l].checked = true;
				}
			}

		}
	}
}

//删除
function listDelete(tr,deleteAll,selectedTotal) {
	for (var i = 0; i < tr.length; i++) {
		tr[i].onclick = function(e) {
			e = e || window.event;
			var el = e.srcElement;
			var cls = el.className;
			switch (cls) {
				case 'delete':
					var conf = confirm('确定要删除吗？');
					if (conf) {
						this.parentNode.removeChild(this);
					}
					break;
				default:
					break;
			}

		}
	}
	deleteAll.onclick = function() {
		if (selectedTotal.innerHTML != '0') {
			var conf = confirm('确定要删除吗？');
			if (conf) {
				for (var j = 0; j < tr.length; j++) {
					var input = tr[j].getElementsByTagName('input')[0];
					if (input.checked) {
						tr[j].parentNode.removeChild(tr[j]);
						j--;
					}
				}
			}
		}
	}
}