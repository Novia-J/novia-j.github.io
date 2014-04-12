var nowPos = null;
var afterPos = window.scrollY;
//alert(afterPos);
window.requestAnimationFrame(scrollPos);
function scrollPos(){
 	if (nowPos == null) { nowPos = afterPos};
 	if (nowPos !== window.scrollY) {
 		//alert(nowPos);
 		textAnimation(); 
 		nowPos = window.scrollY
 	};
 	window.requestAnimationFrame(scrollPos);
 }

function textAnimation(){
	var textPos_1 = document.getElementsByClassName('main1_text')[0].style;
	var imgPos = document.getElementsByClassName('main_logo')[0].style;
	var textPos_2 = document.getElementsByClassName('main2_text')[0].style;
	var imgPos_2 = document.getElementsByClassName('main3_pic')[0].style;
	var detail_8 = document.getElementsByClassName('detail_8')[0].style;
	var detail_6 = document.getElementsByClassName('detail_6')[0].style;
	var detail_0 = document.getElementsByClassName('detail_0')[0].style;
	var detail_1 =document.getElementsByClassName("detail_1")[0].style;
	var detail_7_1 = document.getElementsByClassName('detail_7_1')[0].style;
	var detail_7 =document.getElementsByClassName("detail_7")[0].style;
	var detail_2 =document.getElementsByClassName("detail_2")[0].style;
	var main6_text = document.getElementsByClassName("main6_text")[0].style;
	var outro_2_s1 = document.getElementsByClassName("outro_2_s1")[0].style;
	var outro_2_1 = document.getElementsByClassName("outro_2_1")[0].style;
	var outro_2_s2_ico = document.getElementsByClassName("outro_2_s2_ico")[0].style;
	var outro_3_s1_ico1 = document.getElementsByClassName("outro_3_s1_ico1")[0].style;
	var outro_3_s1 = document.getElementsByClassName("outro_3_s1")[0].style;
	var outro_3_title = document.getElementsByClassName("outro_3_title")[0].style;
	var outro_3_2 = document.getElementsByClassName("outro_3_2")[0].style;
	
	if (nowPos<window.scrollY && parseFloat(window.scrollY)<820) {
		imgPos.top = parseFloat(imgPos.top) + 1 + '%';
		textPos_1.top = parseFloat(textPos_1.top) + 0.9 + '%';
	};

	if (nowPos>window.scrollY) {
		imgPos.top = parseFloat(imgPos.top) - 1 + '%';
		textPos_1.top = parseFloat(textPos_1.top) - 0.9 + '%';
	};

	if (nowPos<window.scrollY && parseFloat(window.scrollY)<1100) {
		textPos_2.top = parseFloat(textPos_2.top) + 6 + "px";
	};

	if (nowPos>window.scrollY) {
		textPos_2.top = parseFloat(textPos_2.top) - 6 + "px";
	};

	if (nowPos<window.scrollY) {
		imgPos_2.left= parseFloat(imgPos_2.left) - 3 + "px";
	};

	if (nowPos<window.scrollY && parseFloat(window.scrollY)>3851 && parseFloat(detail_2.left)>1110 ) {
		detail_0.left = parseFloat(detail_0.left) - 20 + "px";
		detail_7.left = parseFloat(detail_7.left) - 16 + 'px';
		detail_2.left = parseFloat(detail_2.left) - 16 + 'px';
		detail_7.backgroundPosition = parseFloat(detail_7.backgroundPosition) + 16 + 'px';
		detail_8.left = parseFloat(detail_8.left) - 16 + 'px';
		detail_8.backgroundPosition = parseFloat(detail_8.backgroundPosition) + 16 + 'px';
		detail_6.left = parseFloat(detail_6.left) - 16 + 'px';
		detail_6.backgroundPosition = parseFloat(detail_6.backgroundPosition) + 16 + 'px';
		detail_1.left = parseFloat(detail_1.left) - 16 + 'px';
		detail_1.backgroundPosition = parseFloat(detail_1.backgroundPosition) + 16 + 'px';
		detail_7_1.left = parseFloat(detail_7_1.left) - 16 + 'px';
		window.scrollTo(0,3851); //跳到改坐标
	};

	if (nowPos>window.scrollY && parseFloat(window.scrollY)<3851 && parseFloat(detail_2.left)<6300) {
		detail_0.left = parseFloat(detail_0.left) + 20 + "px";
		detail_7.left = parseFloat(detail_7.left) + 16 + 'px';
		detail_2.left = parseFloat(detail_2.left) + 16 + 'px';
		detail_7.backgroundPosition = parseFloat(detail_7.backgroundPosition) - 16 + 'px';
		detail_8.left = parseFloat(detail_8.left) + 16 + 'px';
		detail_8.backgroundPosition = parseFloat(detail_8.backgroundPosition) - 16 + 'px';
		detail_6.left = parseFloat(detail_6.left) + 16 + 'px';
		detail_6.backgroundPosition = parseFloat(detail_6.backgroundPosition) - 16 + 'px';
		detail_1.left = parseFloat(detail_1.left) + 16 + 'px';
		detail_1.backgroundPosition = parseFloat(detail_1.backgroundPosition) - 16 + 'px';
		detail_7_1.left = parseFloat(detail_7_1.left) + 16 + 'px';
		window.scrollTo(0,3851); //跳到改坐标
	};

	if (nowPos>window.scrollY && parseFloat(window.scrollY)>3851) {
		main6_text.top = parseFloat(main6_text.top) - 5 + "px";
	};

	if (nowPos<window.scrollY && parseFloat(window.scrollY)>3851 && parseFloat(main6_text.top)< 40) {
		main6_text.top = parseFloat(main6_text.top) + 5 + "px";
	};

	if (nowPos < window.scrollY && parseFloat(window.scrollY) > 4651 && parseFloat(outro_2_s1.top)<110) {
		outro_2_s1.top = parseFloat(outro_2_s1.top) + 5 + "px";
	};

	if (nowPos > window.scrollY && parseFloat(window.scrollY) > 4651) {
		outro_2_s1.top = parseFloat(outro_2_s1.top) - 5 + "px";
	};

	if (nowPos <window.scrollY && parseFloat(window.scrollY)>5051) {
		outro_2_1.opacity = parseFloat(outro_2_1.opacity) + 0.01;
	};

	if (nowPos > window.scrollY && parseFloat(window.scrollY) > 4951){
		outro_2_s2_ico.top = parseFloat(outro_2_s2_ico.top) - 0.5 + "%";
		outro_2_s2_ico.opacity = parseFloat(outro_2_s2_ico.opacity) + 0.05;
	};

	if (nowPos < window.scrollY && parseFloat(window.scrollY) > 5651 && parseFloat(outro_3_s1_ico1.top)<9) {
		outro_3_s1_ico1.top = parseFloat(outro_3_s1_ico1.top) + 0.8 + "%";
	};

	if (nowPos < window.scrollY && parseFloat(window.scrollY) > 5651 && parseFloat(outro_3_s1.top)<10) {
		outro_3_s1.top = parseFloat(outro_3_s1.top) + 1.2 + "%";
	};

	if (nowPos < window.scrollY && parseFloat(window.scrollY) > 5651 && parseFloat(outro_3_title.top)<45) {
		outro_3_title.top = parseFloat(outro_3_title.top) + 1.5 + "%";
	};

	if (nowPos <window.scrollY && parseFloat(window.scrollY)>5900) {
		outro_3_2.opacity = parseFloat(outro_3_2.opacity) + 0.01;
	};

}
