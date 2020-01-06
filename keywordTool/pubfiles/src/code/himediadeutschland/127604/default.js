integration.meta = {
	'sectionID' : '127604',
	'siteName' : 'Musik Express - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1348]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '764877',
	'plr_PageAlignment' : 'center',
	//'plr_FramePositionCSS' : 'margin: 0 auto; border-left: transparent solid 150px;',
	'plr_ContentW' : 1028,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',	
    "plr_StartScrollOnAnchor" : true,
    'plr_ScrollAdjustment' : 40
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -40
			});
		}
		$(".grid-container").css({
			"padding-left" : "0px"
		});
		$("html").css({
			"background-color" : "transparent"
		});
		$("#content, .grid-container-title, .plistaHl").css({
			"width" : "1018",
			"margin" : "0 auto"
		});
		$("body > footer").css({
			"width" : "1028px",
			"margin" : "0 auto"
		});
		$(".single .ph-ad-billboard").css({
			"padding-left" : "0px",
			"margin-top" : "10px"
		});
	}
});
