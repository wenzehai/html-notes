window.yx = {
	g:function(name){
		return document.querySelector(name);
	},
	ga:function(name){
		return document.querySelectorAll(name);
	},
	//工具类函数
	addEvent: function(obj,ev,fn){
		if(obj.addEventListener){
			obj.addEventListener(ev,fn);
		} else {
			obj.attachEvent('on' + ev, fn);
		}
	},
	removeEvent: function(obj,ev,fn){
		if(obj.removeEventListener){
			obj.removeEventListener(ev,fn);
		} else {
			obj.dettachEvent('on' + ev, fn);
		}
	},
	public:{
//		navFn:function(){
//			var lis = yx.ga('.navBar li');
//			var subNav = yx.ga('.subNav');
//			for(var i=0; i<lis.length; i++) {
//				lis[i].index = subNav[i].index = i;		//统一索引值
//				console.log(lis[i])
//				lis[i].onmouseenter = subNav[i].onmouseenter = function(){
//					lis[this.index].className = "active";
//					subNav[this.index].style.display = "block";
//				}
//				lis[i].onmouseleave = subNav[i].onmouseleave = function(){
//					lis[this.index].className = "";
//					subNav[this.index].style.display = "none";
//				}
//			}
//			
//		}
	}
	
	
	/*
	 * public:{
		navFn:function(){
			var mainNav = yx.g('.mainNav');
			var lis = yx.ga('.navBar li');
			var subNav = yx.g('.subNav');
			var uls = yx.ga('.subNav ul');
			var newLis = [];		//存储实际有用的li
			//首页是没有hover状态的，所以要从1开始循环，后面3个也没有hover状态
			for(var i=1; i<lis.length-3; i++) {
				newLis.push(lis[i]);		//把循环到的元素放到空数组中
			}
			
			for(var i=0; i<newLis.length; i++) {
				newLis[i].index = uls[i].index = i;		//统一索引值
				newLis[i].onmouseenter = uls[i].onmouseenter = function(){
					newLis[this.index].className = "active";
					subNav.style.opacity = 1;
					uls[this.index].style.display = "block";
				}
				newLis[i].onmouseleave = uls[i].onmouseleave = function(){
					newLis[this.index].className = "";
					subNav.style.opacity = 0;
					uls[this.index].style.display = "none";
				}
			}
			
		}
	}
	 */
}









































