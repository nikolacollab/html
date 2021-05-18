if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"С|",
					"С |",
					"С д|",
					"С д |",
					"С д е|",
					"С д е |",
					"С д е л|",
					"С д е л |",
					"С д е л a|",
					"С д е л a |",
					"С д е л a е|",
					"С д е л a е |",	
					"С д е л a е м|",
					"С д е л a е м |",	
					"С д е л a е м В|",
					"С д е л a е м В |",	
					"С д е л a е м В а|",
					"С д е л a е м В а |",	
					"С д е л a е м В а м|",
					"С д е л a е м В а м |",	
					"С д е л a е м В а м С|",
					"С д е л a е м В а м С |",	
					"С д е л a е м В а м С а|",
					"С д е л a е м В а м С а |",
					"С д е л a е м В а м С а й|",
					"С д е л a е м В а м С а й |",		
					"С д е л a е м В а м С а й т|",
					"С д е л a е м В а м С а й т |",
					"С д е л а е м В а м С а й т|"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}