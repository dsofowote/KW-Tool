integration.meta = {
   'sectionID' : '126415',
   'siteName' : 'Gartendialog - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1341]
};

integration.telemetry.setup({
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
	});

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707009',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1021,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : 20
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#footer-container, #main-container").css({
		   "max-width" : "960px",
		   "margin" : "0 auto"
	   });

	   $("#topposition .col-xs-12").css({
		   "height" : "0px"
	   });
	   $("body").css({
		   "overflow-x" : "visible"
	   });
	   $(".td-header-header").css({
		   "display" : "none"
	   });
   }
});
