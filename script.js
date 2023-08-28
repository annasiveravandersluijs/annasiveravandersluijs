function show(iconElement){
	let elementId = iconElement.id;
	let tabElement = document.getElementById(elementId + "tab")
	if(tabElement != null){
		tabElement.style.display ="block";
	}
}

function hide(element){
	element.style.display ="none";
}

function link(){
	window.open('https://www.linkedin.com/in/anna-sivera-van-der-sluijs/');
}


window.onload=function(){

	for (let icon of document.querySelectorAll("nav > *")) {
		icon.onclick = function(){
			show(icon);
		}
	}

	for (let tab of document.querySelectorAll("#content > section")) {
		tab.onclick = function(){
			hide(tab);
		}
	}
	document.getElementById("arttab").onclick=function(){
		hide(this);
	}
	document.getElementById("link").onclick=function(){
		link(this);
	}
}