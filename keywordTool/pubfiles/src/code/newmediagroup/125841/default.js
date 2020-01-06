integration.meta = {
   'sectionID' : '125841',
   'siteName' : ' Economic Digest - Desktop - (HK) ',
   'platform' : 'desktop'
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
   'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '919961',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1240,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});
