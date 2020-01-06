integration.meta = {
	'sectionID' : '126881',
	'siteName' : 'Young Parents - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [407]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707802',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true,
	'plr_FixedCloseButton' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #anchor-carousel > li {width: 100% !important;}';
		stylesCSS += '.inskinLoaded .grid-thumbnail {width: 100%;}';
		stylesCSS += '.inskinLoaded .slide-caption{margin-top: 35px;}';
		stylesCSS += '.inskinLoaded #events-promos-carousel li{width: 100% !important;}';
		stylesCSS += '.inskinLoaded #post-gallery-slider li{width: auto !important;}';
		stylesCSS += 'body.inskinLoaded{padding-right: 0px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	$("head").append("<style>.inskinLoaded .airkit_sidebar-menu .navbar-default{top : " + integration.custom.PageSkinTopPanel + "px;}</style>");
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});
