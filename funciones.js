
window.onscroll = function() {
    var doc = document.getElementById("header");
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if(top < 499) {
		doc.classList.add("rojo");
		doc.classList.remove("verde");
		}
    else {
		doc.classList.add("verde");
		doc.classList.remove("rojo");
    }
} 
