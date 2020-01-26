var i;
var nav = document.getElementsByClassName("Nav"); //获取Nav的Class，返回的是一个数组类型
var aa = new Array(nav.length); //定义一个数组记录每个Nav下的按钮是否被点击，
var w = Array(nav.length); //定义一个数组记录每个子菜单滑动的高度
for(var j = 0; j < nav.length; j++) {
	aa[j] = 0; //初始化每个按钮被点击的状态，0表示没有被点击，1表示被点击
	w[j] = 0; //初始化每个子菜单滑动的高度，没有滑动就是0，滑动了就是整个子菜单的高度
}
for(i = 0; i < nav.length; i++) {
	var ii = i;
	nav[i].index = i; //为每个nav数组元素设置下标
	nav[i].children[0].onclick = function() { //为每个nav中的span按钮添加点击事件
		var a_id = this.parentNode.index //获取当前点击nav数组的下标，其中parentNode是当前点击元素的父节点
		var tt = this.parentNode.nextElementSibling //获取当前点击的nav数组的下一个朋友节点ul
		var len = this.parentNode.nextElementSibling.children.length //获取朋友节点的子节点的长度
		if(aa[a_id] == 0) { //判断按钮是否被点击
			this.style.cssText = "transform:rotateZ(135deg)";
			aa[a_id] = 1; //按钮状态重置
			slide_nav(a_id, tt, len) //调用显示子菜单函数 
		} else {
			this.style.cssText = "transform:rotateZ(0deg)";
			slide_nav(a_id, tt, len) //调用显示子菜单函数
			aa[a_id] = 0 //按钮状态重置
		}
	}
}

function slide_nav(i, tt, len) //i为当前点击元素的下标，tt为ul元素，len为lu里的li的长度
{
	if(w[i] <= 1) { //判断子菜单是否被展开
		var add = setInterval(function() { //调用计时器，计时器中两个参数，一个是函数（委托），一个是执行操作的时间间隔，以毫秒计算
			if(w[i] > len * 50) {
				clearInterval(add);
			} else {
				w[i] += 10;
				tt.style.height = w[i] + "px"
			}
		}, 10)
	} else {
		var del = setInterval(function() {
			if(w[i] < 1) {
				clearInterval(del);
			} else {
				w[i] -= 10;
				tt.style.height = w[i] + "px"
			}
		}, 10)
	}
}