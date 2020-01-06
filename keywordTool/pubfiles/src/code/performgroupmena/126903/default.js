integration.meta = {
	'sectionID' : '126903',
	'siteName' : 'Goal.com - Smartphone - (UAE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707388',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("header.widget-header.widget-header--top").height();
		if ($("header.widget-header.widget-header--top").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.widget-header.widget-header--top");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}

		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html.inskinLoaded{direction: ltr; overflow-x: visible;}';
		stylesCSS += '.inskinLoaded body{direction: rtl;}';
		stylesCSS += '.inskinLoaded body > div.page-wrapper > div > header > div{position: relative;}';
		stylesCSS += '.inskinLoaded .ad-leaderboard{display: none;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});