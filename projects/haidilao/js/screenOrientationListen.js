//通过监测横竖屏来动态改变con_bd的高度
//屏幕方向标识，0横屏，其他值竖屏
var orientation = 0;

//转屏事件，内部功能可以自定义

//监测屏幕，如果为竖屏或者竖屏，则将con_bd的高度设置为屏幕高度减去其余部分高度
function screenOrientationEvent() {
    var conBd = document.getElementsByClassName('con_bd')[0];
    // 如果有conBd元素时才执行屏幕检测
    if(conBd){
        if (orientation == 0) {

            var cH = document.body.clientHeight;
            var tableBox = document.getElementsByClassName('table_box')[0];
            //为了解决表格列表过长不能滚动，进行判断，并将高度进行屏幕匹配。
            if(tableBox){
                tableBox.style.height = cH - 295 + 'px';
            }
            conBd.style.height = cH - 295 + 'px';
        }
        else {
            var cH = document.body.clientHeight;
            var tableBox = document.getElementsByClassName('table_box')[0];
            if(tableBox){
                tableBox.style.height = cH - 295 + 'px';
            }
            conBd.style.height = cH - 295 + 'px';
        }
    }
}

var innerWidthTmp = window.innerWidth;

//横竖屏事件监听方法
function screenOrientationListener() {
    try {
        var iw = window.innerWidth;
        //屏幕方向改变处理
        if (iw != innerWidthTmp) {
            if (iw > window.innerHeight) orientation = 90;
            else orientation = 0;
            //调用转屏事件
            screenOrientationEvent();
            innerWidthTmp = iw;
        }
    } catch (e) {
        alert(e);
    }
    ;
    //间隔固定时间检查是否转屏，默认500毫秒
    setTimeout("screenOrientationListener()", 500);
}

//启动横竖屏事件监听
screenOrientationListener();