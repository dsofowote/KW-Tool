integration.meta = {
   'sectionID' : '127479',
   'siteName' : 'Mittelbayerische Zeitung - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '726475',
   'plr_PageAlignment' : 'custom',
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FramePositionCSS' : 'margin:0 auto;right:70px;'
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   		$("body").css({
			   "overflow" : "visible"
		   });
		   
		   $(".advertising-outside").css({
			   "height" : "0px"
		   });
   }
});
