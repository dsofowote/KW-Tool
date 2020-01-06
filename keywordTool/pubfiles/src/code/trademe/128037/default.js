integration.meta = {
   'sectionID' : '128037',
   'siteName' : 'Trade Me - Desktop - (NZ) ',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '970864',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$('body').css({
   		"width" : "980px",
   		"margin" : "0 auto"
   	});
   }
});
