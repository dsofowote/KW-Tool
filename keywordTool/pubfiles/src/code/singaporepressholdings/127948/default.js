integration.meta = {
	'sectionID' : '127948',
	'siteName' : 'Shape - (Creative Approval) - Smartphone - ( SG )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '957248',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_PageHeightAdjustment" : -50,
	"plr_FixedCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded {padding-right: 0 !important;}';
		stylesCSS += '.inskinLoaded {z-index:10;}';
		stylesCSS += '.inskinLoaded .grid-thumbnail{width:100%;}';
		stylesCSS += '.inskinLoaded .col-xs-12, .col-md-4, .col-sm-6, .col-lg-12, .col-md-8, .col-md-4{padding:0px !important;}';
		stylesCSS += '.inskinLoaded #post-gallery-slider > li{width:100% !important;}';
		stylesCSS += '.inskinLoaded div[id^=div-gpt-ad]{width:100% !important;margin-top:35px !important;}';
		stylesCSS += '.inskinLoaded .container, #main{padding-left:1px;padding-right:1px;}';
		stylesCSS += '.inskinLoaded .row{margin:0px;}'
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	var wWidth = $("body").width() / 2;
	$("head").append("<style>.inskinLoaded #anchor-carousel > li{width:100% !important;}</style>");
	$("head").append("<style>.inskinLoaded #menu-main-menu{margin-top:" + integration.custom.FrameTop + "px;}</style>");
	$("head").append("<style>.inskinLoaded #ab-outside-thumbnail-slides > li, .inskinLoaded .ts-sidebar-element > div {width:calc(" + wWidth + "px - 5px) !important;}</style>");
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

