var TimeOut         = 300;
var currentLayer    = null;
var currentitem     = null;
var currentLayerNum = 0;
var noClose         = 0;
var closeTimer      = null;

function mopen(n) {
  var l  = document.getElementById("menu"+n);
  var mm = document.getElementById("mmenu"+n);
	
  if(l) {
	mcancelclosetime();l.style.visibility='visible';
	    if(currentLayer && (currentLayerNum != n))
	      	currentLayer.style.visibility='hidden';
		    currentLayer = l;
		    currentitem = mm;
		    currentLayerNum = n;			
  		} else if(currentLayer) {
		    currentLayer.style.visibility='hidden';
		    currentLayerNum = 0;
		    currentitem = null;
		    currentLayer = null;
		 }
}

function mclosetime() {
  closeTimer = window.setTimeout(mclose, TimeOut);
}

function mcancelclosetime() {
  if(closeTimer) {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function mclose() {
  if(currentLayer && noClose!=1) {
	    currentLayer.style.visibility='hidden';
	    currentLayerNum = 0;
	    currentLayer = null;
	    currentitem = null;
  	} else {
    	noClose = 0;
  	}
  currentLayer = null;
  currentitem = null;
}

document.onclick = mclose; 
















//***MOST IMPORTANT THING OF THE DAY**start all javascript files with:

//$(document).ready(function(){
//all code goes in here
//i.e.	
//	console.log("I'm ready");







//})



