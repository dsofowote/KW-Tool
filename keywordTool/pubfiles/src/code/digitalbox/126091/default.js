integration.meta = {
   'sectionID' : '126091',
   'siteName' : 'Entertainment Daily - Tablet',

   'platform' : 'tablet',
   'restrictions' : ''
};

integration.channelHome = ['/', 'news/', 'tv/', 'real-life/', 'style/', 'quizzes-polls/', 'video/'];

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '681698',
   'plr_PageAlignment' : 'center',
   'plr_Responsive' : true,
   'plr_Fluid' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_FastInit" : true,
   'plr_PageScanExclude' : ' #nav, .homepage-sidebar, .footer, .sidebar '
//    "plr_PageScanExclude" : ".sidebar, #ad-articlefooter, script"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		// $("#header_wrapper, #footer").css({
		// 	"max-width" : "960px"
		// });
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.custom.isEdge = true;
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}else{
			$("#header_wrapper, #footer").css({
				"margin" : "0 auto"
			});
		}
	}
});


integration.on('layoutChange', function(e) {
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	if(integration.custom.isEdge){
		$("body > div.wrapper, #footer").css({
			"margin-left" : "-" + integration.custom.PageSkinRightPanel + "px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/108455924/EDUK_SKIN1X1_PASSBACK_A', [1, 1]).display();\n<\\script>";
};
