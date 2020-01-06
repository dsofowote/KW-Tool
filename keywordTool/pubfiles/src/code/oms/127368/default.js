integration.meta = {
   'sectionID' : '127368',
   'siteName' : 'Westfalenpost - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '715129',
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
   	$(".ad__superbanner").css({
		   "padding-top" : "15px",
		   "margin" : "0 auto"
	   });
	   
	   $(".footer").css({
		   "margin-bottom" : "0px"
	   });
   }
});
