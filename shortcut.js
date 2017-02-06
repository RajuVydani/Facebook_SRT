log("Facebook SRT/contentscripts.......");

chrome.runtime.onMessage.addListener(	
  function(request, sender, sendResponse) {  	
		if("COMBINATION_1" === request.combination) {
			log(request.combination);
		} else if ("COMBINATION_2" === request.combination) {
			COMBINATION_2();
		} else if ("COMBINATION_3" === request.combination) {
			COMBINATION_3();
		} else if ("COMBINATION_4" === request.combination) {
			COMBINATION_4();
		} else if ("COMBINATION_5" === request.combination) {
			COMBINATION_5();
		} else if ("COMBINATION_6" === request.combination) {
			COMBINATION_6();
		}    
  });

function COMBINATION_1() {
	log("Executing--->COMBINATION_1");
	var radios = document.getElementsByTagName('input');
	    for (i = 0; i < radios.length; i++) {
	        if (radios[i].type == 'radio' ) {
	            
	            if("Low Risk - misleading, fraudulent, deceptive or offensive" === radios[i].value) {	            	
	            	document.getElementById(radios[i].id).checked = false;
	            	document.getElementById(radios[i].id).click();
	            }
	        }
	    }//&& radios[i].checked

	   
	   setTimeout(function(){ 

        log("2");

        var radios = document.getElementsByTagName('input');
	    for (i = 0; i < radios.length; i++) {
	        if (radios[i].type == 'radio' ) {
	            
	            if("Non products" === radios[i].value) {	            	
	            	document.getElementById(radios[i].id).checked = false;
	            	document.getElementById(radios[i].id).click();
	            }
	        }
	    }//&& radios[i].checked

    }, 200);

	//3rd Option
    setTimeout(function(){ 

        log("3");

        var radios = document.getElementsByTagName('input');
	    for (i = 0; i < radios.length; i++) {
	        if (radios[i].type == 'radio' ) {
	            
	            if("Others" === radios[i].value) {	            	
	            	document.getElementById(radios[i].id).checked = false;
	            	document.getElementById(radios[i].id).click();
	            	document.getElementsByTagName('button')[0].click(); //breakpoint.
	            }
	        }
	    }//&& radios[i].checked
	    log("completed");
    }, 200);
}

function COMBINATION_2() {
	log("Executing--->COMBINATION_2");
}

function COMBINATION_3() {
	log("Executing--->COMBINATION_3");
}

function COMBINATION_4() {
	log("Executing--->COMBINATION_4");
}

function COMBINATION_5() {
	log("Executing--->COMBINATION_5");
}

function COMBINATION_6() {
	log("Executing--->COMBINATION_6");
}

function log(message) {
	//alert(message);
	console.log(message);
}

