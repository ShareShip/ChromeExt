var btn = document.createElement("button"); 
document.body.appendChild(btn);
btn.setAttribute("id", "ss-checkout");
btn.style.width = "30%";
btn.style.height = "7%";
btn.style.position = "fixed";
btn.style.padding = "1%";
btn.style.top = "0";
btn.style.right = "0";
btn.style.textAlign = "center";
btn.style.borderBottom = "dashed 1pt grey";
btn.style.borderLeft = "dashed 1pt grey";
btn.style.backgroundColor = "white";
btn.innerText="Checkout with ShareShip!";
document.getElementById("ss-checkout").onmouseover = function() {
	this.style.backgroundColor = "#2f80ed";
	this.style.color = "white";
	this.style.borderBottom = "dashed 1pt white";
	this.style.borderLeft = "dashed 1pt white";


}
document.getElementById("ss-checkout").onmouseout = function() {
	this.style.backgroundColor = "white";
	this.style.color = "grey";
	this.style.borderBottom = "dashed 1pt grey";
	this.style.borderLeft = "dashed 1pt grey";

}
document.getElementById("ss-checkout").onclick = function() {
	var vendor = document.getElementsByClassName("logo__text")[0].innerText;
	vendor = vendor.split(' ').join('_');
	var newURL = "http://share-ship.herokuapp.com/vendor/" + vendor;
	window.open(newURL, "_blank");
}


