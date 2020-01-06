integration.meta = {
   'sectionID' : '126765',
   'siteName' : 'Yahoo! UK Finance - Desktop - (UK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 970,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : -55
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$(".yog-page").css({
		   "max-width" : "970px",
		   "margin" : "0 auto"
	   });
   }
});
