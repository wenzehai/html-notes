
$(function() {
	
	//弹出列表框  
    $("#suplier").click(function () {  
        $("#suplier_items").css('display', 'block');  
        var top = $(this).offset().top
        $(window).scrollTop(top);
        return false;  
    });  
  
    //隐藏列表框  
    $("body").click(function () {  
        $("#suplier_items").css('display', 'none');  
    });  
  
  
    //文本框输入  
    $("#suplier").keyup(function () {  
        $("#suplier_items").css('display', 'block');//只要输入就显示列表框  
  
        if ($("#suplier").val().length <= 0) {  
            $(".suplier_item").css('display', 'block');//如果什么都没填，跳出，保持全部显示状态  
            return;  
        }  
  
        $(".suplier_item").css('display', 'none');//如果填了，先将所有的选项隐藏  
  
        for (var i = 0; i < $(".suplier_item").length; i++) {  
            //模糊匹配，将所有匹配项显示  
            if ($(".suplier_item").eq(i).text().substr(0, $("#suplier").val().length) == $("#suplier").val()) {  
                $(".suplier_item").eq(i).css('display', 'block');  
            }  
        }  
    });  
  
    //项点击  
    $(".suplier_item").click(function () {  
        $("#suplier").val($(this).text());  
    });  

});