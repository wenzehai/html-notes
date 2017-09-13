//公用方法调用
yx.public.navFn();
//yx.public.toggleFn();


//banner轮播图
var bannerPic = new Carousel();
bannerPic.init({
	id:"bannerPic",	
	autoplay:true,		
	intervalTime:3000,	
	loop:true,			
	totalNum:3,			
	moveNum:1,			
	circle:true,		
	moveWay:"opacity"	
});

//新品首发轮播图
var newProduct = new Carousel();
newProduct.init({
	id:"newProduct",	
	autoplay:false,		
	intervalTime:3000,	
	loop:true,			
	totalNum:8,			
	moveNum:4,			
	circle:false,		
	moveWay:"position"	
});

//轮播图添加自定义事件
newProduct.on("rightEnd",function(){
	//alert("右边到头了");
	this.nextBtn.style.background = "#e7e2d7";
});

newProduct.on("leftEnd",function(){
	//alert("左边到头了");
	this.prevBtn.style.background = "#e7e2d7";
});
newProduct.on("rightClick",function(){
	//alert("右边点击了");
	this.prevBtn.style.background = "#d0c4af";
});
newProduct.on("leftClick",function(){
	//alert("左边点击了");
	this.nextBtn.style.background = "#d0c4af";
});



//人气推荐选项卡
//自执行函数避免变量污染
(function(){
	var titles = yx.ga(".msg_hd li");
	var contents = yx.ga(".msg_bd");
	
	for(var i=0; i<titles.length; i++) {
		titles[i].index = i;
		titles[i].onclick = function(){
			for(var i=0; i<titles.length; i++){
				titles[i].className = "";
				contents[i].style.display = "none";
			}
			titles[this.index].className = "active";
				contents[this.index].style.display = "block";
		}
	}
})();

//限时购





