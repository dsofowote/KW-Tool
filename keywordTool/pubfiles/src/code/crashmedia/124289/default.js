integration.meta = {
	'sectionID' : '124289',
	'siteName' : 'Crash - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }
  

integration.params = {
	'mf_siteId' : '681692',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1015,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("head").append("<style>.mc-modal{right: " + (integration.custom.FrameSideRight + 10) + "px;}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#page-wrapper{margin: 0 !important;}</style>");
			$("head").append("<style>.mc-modal{right: " + (integration.custom.FrameSideRight + 30) + "px;}</style>");
		}
	}
});

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/122227034/CRASH', [[1,1]]).setClickUrl('%%CLICK_URL_UNESC%%').display();\n<\\script>";
};
