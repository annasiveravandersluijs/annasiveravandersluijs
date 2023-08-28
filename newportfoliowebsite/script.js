function show(){
	document.getElementById("arttab").style.display ="block";
}

function hide(){
	document.getElementById("arttab").style.display ="none";
}

function link(){
	window.open('https://www.linkedin.com/in/anna-sivera-van-der-sluijs/');
}


window.onload=function(){

	// const myNodeList = document.querySelectorAll("p");
	// myNodeList[1]
	
	document.querySelector("nav div").onclick=function(){
		show(this);
	}

	document.getElementById("art").onclick=function(){
		show(this);
	}
	document.getElementById("arttab").onclick=function(){
		hide(this);
	}
	document.getElementById("link").onclick=function(){
		link(this);
	}
}