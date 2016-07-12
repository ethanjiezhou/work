(function(){
	var rotate=true;
	$(".menubar").on("click", function(){
		
		if(rotate){
			$(".main").addClass("block");
			rotate=false;
		}else{
			$(".main").removeClass("block");
			rotate=true;
		}
	});

	$(".sideMenu li").on("click", function(){
		if($(this).html().includes("Home")){
			$(".home").css('display','block');
			$(".about").css('display','none');
			$(".tech").css('display','none');
			$(".contact").css('display','none');
		}else if($(this).html().includes("About")){
			$(".home").css('display','none');
			$(".about").css('display','block');
			$(".tech").css('display','none');
			$(".contact").css('display','none');
		}else if($(this).html().includes("Technic")){
			$(".home").css('display','none');
			$(".about").css('display','none');
			$(".tech").css('display','block');
			$(".contact").css('display','none');
		}else if($(this).html().includes("Contact")){
			$(".home").css('display','none');
			$(".about").css('display','none');
			$(".tech").css('display','none');
			$(".contact").css('display','block');
			$(".contact h2").eq(0).css('display','block');
			$(".contact h2").eq(1).css('display','none');
		}
			$(".main").removeClass("block");
			rotate=true;
	});

	var flag=true;
	var currIndex=0;
	$(".insideleft").eq(currIndex).css('display','block').css('opacity','1');
	$(".insideright").eq(currIndex).css('display','block').css('opacity','1');
	$("#next").on("click", function(e){
		if(!flag){
			e.preventDefault();
		}else{
		flag=false;
		var nextIndex;
		if(currIndex!==7){
			nextIndex=currIndex+1;
		}else{
			nextIndex=0;
		}
		$(".insideleft").eq(currIndex).css('opacity','0').css('top','50px');
		$(".insideleft").eq(nextIndex).css('display','block').css('opacity','1');
		$(".insideright").eq(currIndex).css('opacity','0').css('top','-50px');
		$(".insideright").eq(nextIndex).css('opacity','1').css('display','block');
		$(".insideleft").eq(currIndex).one('transitionend', function(){
			$(".insideleft").eq(currIndex).css('display','none').css('top','0px');
			$(".insideright").eq(currIndex).css('display','none').css('top','0px');
			currIndex=nextIndex;
			flag=true;
		});
		};
	});
	$("#send").on("click", function(e){
		$(".contact h2").eq(0).css('display','none');
		$(".contact h2").eq(1).css('display','block');
	});
})();