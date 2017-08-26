chrome.browserAction.onClicked.addListener(function(activeTab) {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		// get vendor url
		var vendor = tabs[0].url;
		// remove garbage from url
		vendor = vendor.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
		// remove .com or .ca address
		vendor = vendor.replace(".com", "");
		vendor = vendor.replace(".ca", "");
		// new url with vendor param
		var newURL = "http://share-ship.herokuapp.com?vendor=" + vendor;
		// open the tab
		chrome.tabs.create({ url: newURL });
	});
});
