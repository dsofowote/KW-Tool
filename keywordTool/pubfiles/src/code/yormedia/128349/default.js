integration.meta = {
	'sectionID' : '128349',
	'siteName' : 'Football 365 - Smartphone- (INT) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1005227',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var wwidth = $(window).width();
		integration.custom.FrameTop = e.data.plr_FrameTop;
		var topHeight = $("#live_score").height();
		if ($("#live_score").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#live_score");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -topHeight,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : 70
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .advert--leaderboard{display: none;}';
		stylesCSS += '.inskinLoaded #live_score{min-width: ' + wwidth + 'px;}';
		stylesCSS += '.inskinLoaded .siteContainer__content{overflow: visible;}';
		stylesCSS += '.inskinLoaded #siteContainer{top: 0 !important;}';
		stylesCSS += '.inskinLoaded #mega-menu-wrap-header-menu{top: 0 !important; z-index: 10; max-width: 192px;}';
		stylesCSS += '.inskinLoaded .newsletter-trigger{left: 130px;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .content, .inskinLoaded aside.sidebar, .inskinLoaded .articleList__list--dark{padding: 0px;}}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>  googletag.pubads().definePassback('/134356868/Planet_Sports/Football365/Inskin_Mobile_Passback_F365', [320, 50]).display();\n<\\script>";
};
