integration.meta = {
	'sectionID' : '126797',
	'siteName' : 'Womenshealth - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708008',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
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
		var headHeight = $("body > header").height();
		integration.base.setCfg({
			plr_ScrollAdjustment : headHeight
		});

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #div-gpt-ad-topmobile{display: none;}';
		stylesCSS += '.inskinLoaded .commercial__leaderboard{overflow: hidden;}';
		stylesCSS += '.inskinLoaded #at-share-dock{z-index: 2 !important;}';
		stylesCSS += 'body.inskinLoaded{margin-bottom: 0px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
	$("head").append("<style>.inskinLoaded #at-share-dock, .inskinLoaded .cookie__hint{max-width: calc(100% - " + integration.custom.FrameSideRight + "px);}</style>");
	$("head").append("<style>.inskinLoaded #div-gpt-ad-interstitial iframe, .inskinLoaded .commercial__top, .inskinLoaded .commercial__leaderboard{height: 0px; margin: 0px;}</style>");
});

integration.custom.laychange = function() {
	var ioDiff = $('#container > header').outerWidth() - $('#container > header').width();
	$("head").append("<style>.inskinLoaded #container > header{min-width: calc(100% + " + (integration.custom.FrameSideRight - ioDiff) + "px);}</style>");
	$("head").append("<style>.inskinLoaded img{max-width: 100%;}</style>");
}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});
