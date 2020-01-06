integration.meta = {
	'sectionID' : '128343',
	'siteName' : 'Team Talk - Smartphone- (INT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1005608',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -15
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var windowWidth = $(window).width();
		var contentWidth = windowWidth - e.data.plr_FrameSideRight;

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .advert--leaderboard{display:none}';
		//stylesCSS += '.inskinLoaded .inskinwrapper < .siteContainer.active{position:relative;left:500px}';
		stylesCSS += '.inskinLoaded .mega-menu-wrap.active{top:0px !important}';
		stylesCSS += '.inskinLoaded .header__menuToggle, .header__close{top:62px !important;}';
		stylesCSS += '.inskinLoaded [id*="innerWrapperId"]{position:relative;left:-15px}';
		stylesCSS += '.inskinLoaded .right-banner-ad, .inskinLoaded [id*="ff-comp-widget-mpu-target"]{position:relative;left:-9px}';
		stylesCSS += '@media only screen and (max-width: 395px) {.inskinLoaded #banner_shop{margin-left: -8px;} .inskinLoaded #custom_html-11 {margin-left: -7px;}}';
		stylesCSS += '@media only screen and (max-width: 395px) {.inskinLoaded div[id^=browsi_wrapper_]{margin-left: -16px !important;}}';
		stylesCSS += '@media only screen and (max-width: 395px) {.inskinLoaded .live_widget_ads{margin-left: -13px !important;}}';
		if (windowWidth >= 375) {
			stylesCSS += '.inskinLoaded .header__logo{max-width:195px;top:3px;}';
			stylesCSS += '.inskinLoaded .newsletter-trigger{left:130px;}';
		}
		stylesCSS += '.inskinLoaded #siteContainer{top:0px !important;}';
		stylesCSS += '.inskinLoaded .owl-item{width:' + contentWidth + 'px !important}';
		stylesCSS += '.inskinLoaded .hero__item figcaption{height:auto !important}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	$('.ism-frame').parent().addClass("inskinwrapper");
	$(".inskinwrapper").css({
		"z-index" : "100"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\nÂ googletag.pubads().definePassback('/134356868/Planet_Sports/Team_Talk/Inskin_Mobile_Passback_TT', [320, 50]).display();\n<\\script>";
};
