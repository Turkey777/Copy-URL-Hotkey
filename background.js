function getURL() {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let url = tabs[0].url;
		var urlTemp = document.createElement("textarea");
		var div = document.body;
		div.appendChild(urlTemp);
		urlTemp.value = url;
		urlTemp.select();
		document.execCommand('copy');
		urlTemp.setAttribute("hidden", true);
	});
}

chrome.commands.onCommand.addListener(function(command) {
	getURL();
});
