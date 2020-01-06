integration.meta = {
	'sectionID' : '127569',
	'siteName' : 'Lost At E Minor - Smartphone - (AU)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '750248',
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
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .bodywrap{padding-top: 0;}';
		stylesCSS += '.inskinLoaded #mobile-banner-a{height: 0; padding: 0 !important;}';
		stylesCSS += '.inskinLoaded .tile-play-icon{width: 64px !important; left: 35%;}';
		stylesCSS += 'html.inskinLoaded, .inskinLoaded body{min-width: 0px;}';
		stylesCSS += '.inskinLoaded #catlist ul li{margin: 0 2px 11px;}';
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
	$("head").append("<style>.inskinLoaded body .post .images .mainimage img{height: initial; width: calc(100% - " + integration.custom.FrameSideRight + "px);}</style>");
});

integration.custom.laychange = function() {
	var winWidth = $(window).width();
	//var winHeight = $(window).outerHeight();
	var contentWidth = winWidth - integration.custom.FrameSideRight;
	$("head").append("<style>.inskinLoaded #navwrap, .inskinLoaded .bodywrap{max-width: " + contentWidth + "px;}</style>");
}

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/1005256/LAEM-ROS-ATF-Middle-Mobile-300x50', [[320,\n50], [300, 50]]).setTargeting('passback', 'true').display().set(\"page_url\", \"lostateminor.com\");\n<\\script>";
};
