integration.meta = {
	'sectionID' : '127964',
	'siteName' : ' Pure Gold Classic Hits Network - Desktop - (AU)',
	'platform' : 'desktop'
 };

 integration.testParams = {
	'desktop_resolution' : [1400]
 };

 integration.flaggedTests = [];

 integration.params = {
	 'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '957428',
	'plr_PageAlignment' : 'center',
	'plr_ContentW': 1140,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
 };

 integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#content-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#content-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -140
			});
		}
	   $(".row.row--mobile-no-gutters").css({"display": "none"})
	   window.unloadPageskin = function () {
		try {
			integration.destroy();
		} catch (e) {}
	};
	}
});

integration.on('adServed', function(e) {
	$("#main-body-container").css({"padding-top": "0px"});
	$("#inskinanchor").css({"margin-top": "140px"});
});