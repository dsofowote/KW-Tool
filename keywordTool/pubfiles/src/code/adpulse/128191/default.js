integration.meta = {
   'sectionID' : '128191',
   'siteName' : 'Ohmirevista - Desktop - ( ES )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '988073',
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
   	$("header#header, #wrapper, footer, #signup-holder").css({
		   "max-width" : "980px",
		   "margin" : "0 auto"
	   });
	   
	   $(".post-dock.fixed").css({
		   "margin-left" : "260px"
	   });
   }
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	
});