// var img = document.getElementsByClassName("chose");
// var imgArry = ["images/01.png","images/02.png","images/03.png","images/04.png","images/05.png"];
// var index = 0;
// var allIcon = document.getElementsByClassName("icon")
// img.src = "images/01.png";
// for(var i = 0;i<allIcon.length;i++){
//     allIcon[i].num = i;
//     allIcon[i].onclick(function () {
//         index = this.num;
//         $(".chose").src = imgArry[index];
//     });
// }
// var startIcon = document.getElementsByClassName("startIcon")
// console.log(startIcon);
// startIcon[0].addEventListener("click",function(){
//     // $("#startpage").css("display","none");
//     // $(".bg1 .onePage").css("display","block");
//     startIcon[0].style.display="none";
// });

// var replace = function(prevE,currE) {
//     $(prevE).remove();
//     $div = currE
//     // $("#jiedian").append;
//     $($div).appendTo($("#jiedian"));
// }

$(".startIcon").click(function(){
	$("#startpage").hide();
	$(".bg1").show();
	$(".onePage").show();
	$("p.title").fadeIn(5000);

})
$(document).on("click",".Icon1",function(){
	$(".onePage").hide();
	$(".twoPage").show();
})

//光明顶
$(document).on("click","#Icon2",function(){
	$(".bg1").css("display","none");
	$("#bg2").css("display","block");
	$(".twoPage").css("display","none");
	$("#fivePage").css("display","block");
});
$(document).on("click",".returnIcon1",function(){
	$("#fivePage").css("display","none");
	$("#bg2").css("display","none");
	$(".bg1").css("display","block");
	$(".twoPage").css("display","block");
});
//咕 山 派
$(document).on("click","#Icon3",function(){
	$(".bg1").css("display","none");
	$(".twoPage").css("display","none");
	$("#sixPage").css("display","block");
});
$(document).on("click",".pic7",function(){
	$("#sixPage").css("display","none");
	$(".bg1").css("display","block");
	$(".twoPage").css("display","block");
});
//日 月 神 教
$(document).on("click","#Icon4",function(){
	$(".bg1").css("display","none");
	$("#bg2").css("display","block");
	$(".twoPage").css("display","none");
	$("#fourPage").css("display","block");
});
$(document).on("click",".returnIcon1",function(){
	$("#fourPage").css("display","none");
	$("#bg2").css("display","none");
	$(".bg1").css("display","block");
	$(".twoPage").css("display","block");
});
//古 墓 派
$(document).on("click","#Icon5",function(){
	$(".bg1").css("display","none");
	$(".twoPage").css("display","none");
	$("#sevenPage").css("display","block");
});
$(document).on("click",".pic10",function(){
	$("#sevenPage").css("display","none");
	$(".bg1").css("display","block");
	$(".twoPage").css("display","block");
});
//五 林 盟 主 派
$(document).on("click","#Icon6",function(){
	$(".bg1").css("display","none");
	$("#bg2").css("display","block");
	$(".twoPage").css("display","none");
	$("#threePage").css("display","block");
});
$(document).on("click",".returnIcon1",function(){
	$("#threePage").hide();
	$("#bg2").css("display","none");
	$(".bg1").css("display","block");
	$(".twoPage").css("display","block");
});
//继续
$(document).on("click",".goonIcon",function(){
	$('.twoPage').css("display","none");
	$(".bg3").css("display","block");
	$("#eighthPage").css("display","block");
	// sleep(5000);
	setTimeout(function(){
		$(".content1").fadeOut(500);
		$("#eightPage2").fadeIn(1000);
	},6000);
});
//光明顶
$(document).on("click","#chose-icon2",function(){
	$('.twoPage').css("display","none");
	$("#eightPage2").css("display","none");
	$(".chose").attr('src',"images/01.png"); 
	$("#ninePage").show();
	setTimeout(function(){
		$(".chose").hide();
		$("#ninePage").hide();
		$("#bg4").show();
		$(".bg4").show();
		$("#tenPage").show();
		$(".bg1").css("display","none");
	},6000);
});
//咕 山 派
$(document).on("click","#chose-icon1",function(){
	$('.twoPage').css("display","none");
	$("#eightPage2").css("display","none");
	$(".chose").attr('src',"images/04.png"); 
	$("#ninePage").show();
	setTimeout(function(){
		$(".chose").hide();
		$("#ninePage").hide();
		$("#bg4").show();
		$("#tenPage").show();
		$(".bg1").css("display","none");
	},6000);
});
//日月神教
$(document).on("click","#chose-icon4",function(){
	$('.twoPage').css("display","none");

	$("#eightPage2").css("display","none");
	$(".chose").attr('src',"images/03.png"); 
	$("#ninePage").show();
	setTimeout(function(){
		$(".chose").hide();
		$("#ninePage").hide();
		$("#bg4").show();
		$("#tenPage").show();
		$(".bg1").css("display","none");
	},6000);
});
//古墓派
$(document).on("click","#chose-icon5",function(){
	$('.twoPage').css("display","none");
	
	$("#eightPage2").css("display","none");
	$(".chose").attr('src',"images/02.png"); 
	$("#ninePage").show();
	setTimeout(function(){
		$(".chose").hide();
		$("#ninePage").hide();
		$("#bg4").show();
		$("#tenPage").show();
		$(".bg1").css("display","none");
	},6000);
});
//武林盟主
$(document).on("click","#chose-icon3",function(){
	$('.twoPage').css("display","none");
	
	$("#eightPage2").css("display","none");
	$(".chose").attr('src',"images/05.png"); 
	$("#ninePage").show();
	setTimeout(function(){
		$(".chose").hide();
		$("#ninePage").hide();
		$("#bg4").show();
		$("#tenPage").show();
		$(".bg1").css("display","none");
	},6000);
});
$(document).on("click","#border2",function(){
	$("#tenPage").hide();
	$("#elevenPage").show();
});
$(document).on("click","#button",function(){
	location.reload();
});
$(document).on("click","#border3",function(){
	$("#tenPage").hide();
	$("#twelvePage").show();
});
$(document).on("click","#border4",function(){
	$("#twelvePage").hide();
	$("#thirteen").show();
});
$(document).on("click","#border9",function(){
	location.reload();
});
$(document).on("click","#border5",function(){
	$("#twelvePage").hide();
	$("#fourteen").show();
});
$(document).on("click","#border11",function(){
	$("#fourteen").hide();
	$("#fifteen").show();
});
$(document).on("click","#border12",function(){
	$("#fourteen").hide();
	$("#fifteen").show();
});
$(document).on("click","#border13",function(){
	$("#fourteen").hide();
	$("#fifteen").show();
});
$(document).on("click","#border15",function(){
	$("#fifteen").hide();
	$("#sixteen").show();
});
$(document).on("click","#returnBtn",function(){
	location.reload();
});
$(document).on("click","#border6",function(){
	$("#twelvePage").hide();
	$("#seventeen").show();
});
$(document).on("click","#border17",function(){
	$("#seventeen").hide();
	$("#eighteen").show();
});
$(document).on("click","#border18",function(){
	$("#seventeen").hide();
	$("#eighteen").show();
});
$(document).on("click","#border21",function(){
	location.reload();
});
$(document).on("click","#border19",function(){
	$("#seventeen").hide();
	$("#ninteen").show();
});
$(document).on("click","#border23",function(){
	$("#ninteen").hide();
	$("#twenty").show();
});
$(document).on("click",".border25",function(){
	location.reload();
});





// $(".twoPage").css("display","none");

	
// 	$("#startpage").fadeOut(500);
// 	$div = '<img src="images/bg1.png" class="onePage"><div class="onePage" style="display: none;"><p class="title"><b>我叫白锅，是个狠人 <br><br>从小听着前辈们接锅传锅<br><br>做锅发锅的英雄事迹长大<br><br>也想成为一名武学大明星<br><br>在“锅者大陆”这一江湖打下一片天地<br><br>于是，我收拾小小行囊<br><br>来到江湖第一大组织学生在线<br><br>准备拜入师门学习技艺<br><br>为将来浪迹江湖行侠仗义做好准备……</b></p><img src="images/shangShanBaiShi.png" class="Icon1"></div>'
// 	$("#jiedian").append($div);
// 	$('.bg1').css("display","block");
// 	$(".onePage").fadeIn(2000);




