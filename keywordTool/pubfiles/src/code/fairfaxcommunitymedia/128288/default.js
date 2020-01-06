integration.meta = {
	'sectionID' : '128288',
	'siteName' : ' Fairfax Community Media Titles - (Template 1) - Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1000349',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration._addPixel();
		$("#ismIMG").css({
			"height" : "0px"
		});
		if ($(".zone.zone-navigation.zone-editable.zone-danger").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".zone.zone-navigation.zone-editable.zone-danger");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -2,
				plr_ScrollAdjustment : 43 + 55 + 13
			});
		}
		$("#nav--secondary__wrap").css({
			"margin-bottom" : "0"
		});
		$(".footer").css({
			"max-width" : "960px",
			"margin" : "auto"
		});
		$("#adspot-996x120_970x250_940x250_940x120-pos1, #adspot-996x120_970x250_940x250_940x120_728x90-pos1").css({
			"display" : "none"
		});
		if ($("#nav--secondary__wrap").length < 1){
			$(".header-wrap").css({
				"margin-bottom" : "0"
			});
		} else {
			$(".header-wrap").css({
				"margin-bottom" : "25px"
			});
		}
	}
});
