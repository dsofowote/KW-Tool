integration.meta = {
   'sectionID' : '126262',
   'siteName' : 'SZBZ Desktop',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706787',
   'plr_PageAlignment' : 'left',
   'plr_ContentW': 1320,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#website").css({
		   "width" : "1320px"
	   });
   }
});

integration.on('adServed', function(e) {
	$("#omsv_sky_DhtmlLayer, #oms_gpt_superbanner").hide();
});