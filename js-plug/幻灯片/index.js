window.onload = function() {
	
	var slideIndex = 1;

	function showlide() {
		// 函数有个内置的对象 arguments 对象。argument 对象包含了函数调用的参数数组。
		var n = arguments[0];
		var x = document.getElementsByClassName("mySlide");
		var d = document.getElementsByClassName("dot");

		n = n < 1 ? x.length : n && n > x.length ? 1 : n;
		slideIndex = arguments[1] ? (slideIndex++ >= x.length ? 1 : slideIndex++) : n;

		for(var i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		for(var i = 0; i < d.length; i++) {
			d[i].className = d[i].className.replace(" active", " ");
		}

		x[n - 1].style.display = "block";
		d[n - 1].className += " active";

		if(arguments[1]) {
			setTimeout(showlide, 2000, slideIndex, true); // 间隔两秒后修改图片
		}
	}

	function autoShowlide() {
		setInterval(showlide, 1000);
	}

	showlide(1, true);

	document.getElementsByClassName("prev")[0].onclick = function() {
		showlide(slideIndex - 1);
	}
	document.getElementsByClassName("next")[0].onclick = function() {
		showlide(slideIndex + 1);
	}
}

