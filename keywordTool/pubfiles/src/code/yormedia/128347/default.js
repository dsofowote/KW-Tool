integration.meta = {
	'sectionID' : '128347',
	'siteName' : 'Planet F1 - Smartphone - (INT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1005225',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.header').height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($(".content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".content");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .content, .inskinLoaded .sidebar{padding: 0 !important;}}';
		stylesCSS += '.inskinLoaded div[id^="twitter-widget-"] {min-width: 300px !important; margin: 10px -10px !important;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .sidebar div[id*="innerWrapperId"], .inskinLoaded .article__body div[id*="innerWrapperId"]{margin-left: -10px !important;}}';
		stylesCSS += '.inskinLoaded #siteContainerInner{overflow: visible;}';
		stylesCSS += '.inskinLoaded header.header{margin-top: 0 !important;}';
		stylesCSS += '.inskinLoaded .advert--leaderboard{display: none !important;}';
		stylesCSS += '.inskinLoaded .siteContainer.active{position: relative; z-index: 0 !important;}';
		stylesCSS += '.inskinLoaded .header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded span[id^="ad_is_"]{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/134356868/Planet_Sports/Planet_F1/Inskin_Mobile_Passback_PlanetF1', [320, 50]).display();\n<\\script>";
};
