
window.onscroll = function() {
    var doc = document.getElementById("header");
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if(top < 499) {
		doc.classList.add("top");
		doc.classList.remove("bottom");
		}
    else {
		doc.classList.add("bottom");
		doc.classList.remove("top");
    }
} 
