integration.meta = {
	'sectionID' : '126750',
	'siteName' : 'The Courier - (SSL) - Smartphone - (UK)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707161',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		var windowWidth = $(window).width();
		if (windowWidth < 321) {
			stylesCSS += ".inskinLoaded .sd-social-icon .sd-content ul li[class*='share-'] {margin-right: 3px !important;}";
		}
		stylesCSS += ".inskinLoaded leaderboard, .inskinLoaded > main > section.block.advertising {display : none !important;}"
		stylesCSS += ".inskinLoaded .promotion a, .inskinLoaded .promotion a img{max-width: 100%;}";
		stylesCSS += ".inskinLoaded .article .category{overflow: hidden;}";
		stylesCSS += ".inskinLoaded #PDI_container9446368{min-width: 100%;}";
		stylesCSS += ".inskinLoaded .cycle-carousel-wrap, .inskinLoaded .cycle-slide-active{width: 100%;}";
		stylesCSS += ".inskinLoaded .ad-wrap.leaderboard.mobile{height: 0px;}";
		stylesCSS += ".inskinLoaded #gpt_unit_/4987/eveningexpress_1_ad_container, .inskinLoaded [id^=google_ads_iframe]{display: none;}";
		stylesCSS += ".inskinLoaded #gpt_unit_/4987/eveningexpress_1_ad_container, .inskinLoaded > main > section.non-block.advertising{display: none;}";
		stylesCSS += ".inskinLoaded .billboard.-hide-print{display:none;}";
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		$('.prev, .next').click(function() {
			$("head").append("<style>.inskinLoaded .cycle-slide-active{width: 100%;}</style>");
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinSidePanel = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();
	var windowWidth2 = windowWidth - integration.custom.PageSkinSidePanel;
	$("head").append("<style>.inskinLoaded .sd-sharing-enabled{max-width: 51%;}</style>");
});

/**** Raise Z-index of PageSkin ****/
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/courier-passbacks/courier-inskin-passbacks', [[300, 250], [970, 250], [2, 2]]).display();\n<\\script>";
};
