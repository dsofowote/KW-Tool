integration.meta = {
	'sectionID' : '124946',
	'siteName' : 'HerWorld Plus - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706286',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".womnet.visible-lg").height();
		if ($(".womnet.visible-lg").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".womnet.visible-lg");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -51
			});
		}
		$("#inskinanchor").css({
			"position" : "relative"
		});
		$('head').append('<style type="text/css">#inskinanchor {top : '+ headHeight +'px !important;}</style>');
		$(".visible-lg").css({
			"width" : "1060px",
			"margin" : "0 auto"
		});
	}
});
