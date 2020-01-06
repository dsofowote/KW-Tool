integration.meta = {
	'sectionID' : '125594',
	'siteName' : 'Menshealth',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706477',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_ScrollAdjustment' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.mps-header').height();
		if ($(".mps-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".mps-header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : (-headerHeight - 13),
				"plr_StartScrollOnAnchor" : true
			});
		}
		/*
		$("#inskinanchor").css({
			"margin-top" : "40px"
		});
		*/
		$(".mps-wrap").css({
			"padding-right" : "0px"
		});
		$('body > div.mps-wrap > div > header').css({
			'position' : 'relative',
			'margin-bottom' : '0px'
		});
		$("head").append("<style>body > div.mps-wrap > div > section, body > div.mps-wrap > div > footer{top: 0px !important}</style>");
	}
});

integration.on("layoutChange", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1"
	});
});

integration.on('adServed', function(e) {
	$(".mps-billboard").hide();
}); 