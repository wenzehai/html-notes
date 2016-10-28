// 图文混排选项卡
onload = function() {
	var e, i =0;
	while (e = document.getElementById('gallery').getElementsByTagName('DIV')[i++]) {
		if (e.className == 'on' || e.className == "off") {
			e.onclick = function () {
				var getEls = document.getElementsByTagName('DIV');
					for (var z = 0; z<getEls.length; z++) {
						getEls[Z].className=getEls[z].className.replace('show','hide');
						getEls[Z].className=getEls[z].className.replace('on','off');
					}
				this.className = 'on';
				var target = this.getAttribute('title');
				document.getElementById(target).className = 'show';
			}
		}
	}
}