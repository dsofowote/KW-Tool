integration.meta = {
  "sectionID": "125146",
  "siteName": "HD Blog",
  "publisher": "piemme",
  "platform": "desktop"
};

integration.testParams = {
  "desktop_resolution": [0]
};

integration.params = {
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1210,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=aswift_],[id^=gad]"
};


integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("footer").css({
			"max-width" : "1270px",
			"margin" : "0 auto"
		});
	}
});
