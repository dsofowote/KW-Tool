integration.meta = {
	'sectionID' : '128130',
	'siteName' : 'SFR - Desktop - ( FR )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '980778',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			var headHeight = $("body > header").outerHeight();
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight + 20
			});
		}
		$(".SFR_Section_content, #lame1, .SFR_MainContent, footer, .SFR_TabInfosProduit.SFR_TabInfosProduit-presentation").css({
			"max-width" : "1340px",
			"margin" : "auto"
		});
		setTimeout(function() {
			window.dispatchEvent(new Event('resize'));
		}, 300);
		$("#mobileListContainer, .SFR_Section_content.SFR_Section_content-infoUser").css({
			"padding" : "0"
		});
	}
});
