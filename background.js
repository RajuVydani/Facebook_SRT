
chrome.commands.onCommand.addListener(function(command) {		   

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    		//sending command name (COMBINATION_*)
			chrome.tabs.sendMessage(tabs[0].id, {combination: command}, function(response) {});
	});
 });



