integration.meta = {
   'sectionID' : '126893',
   'siteName' : ' Sundayworld - Desktop - (IE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707515',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 970,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('#root, body > div.outer-wrap > nav').css({
		  'width' : '970px', 
		  'margin' : '0 auto'
	   }); 
   }
});

