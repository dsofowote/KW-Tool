integration.meta = {
	'sectionID' : '127457',
	'siteName' : 'Pocket Lint - Smartphone - ( Int ex UK/US )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '990247',
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
		var wWidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var totalWidth = wWidth - integration.custom.FrameSideRight;
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded, .inskinLoaded body{width: '+ totalWidth +'px !important; overflow: visible !important;}';
		stylesCSS += '.inskinLoaded #container{padding: 0 5px;}';
		stylesCSS += '.inskinLoaded .powerbar h2{position: relative !important;}';
		stylesCSS += '.inskinLoaded #article .comments .block{margin-left: 0px;}';
		stylesCSS += '.inskinLoaded #article .thumbnails a{margin-right: 5px;}';
		stylesCSS += '.inskinLoaded .back{margin-left: 0px; margin-right: 0px;}';
		stylesCSS += '.inskinLoaded #header > div{padding-left: 0px; padding-right: 0px;}';
		stylesCSS += '.inskinLoaded .powerbar, .inskinLoaded #cookie-notice{overflow: hidden;}';
		stylesCSS += '.inskinLoaded #footer{margin-left: -24px; margin-right: -28px;}';
		stylesCSS += '.inskinLoaded .i-amphtml-layout-size-defined .i-amphtml-fill-content{left: 55px;}';
		stylesCSS += '@media screen and (min-width: 376px) {.inskinLoaded .i-amphtml-layout-size-defined .i-amphtml-fill-content{left: 64px;}}';
		stylesCSS += '.inskinLoaded .i-amphtml-slide-item>*{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded #header a.home{margin-left: 10px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	var minHeight = 0;
	$(".hotbox > a > h3").each(function() {
		if ($(this).height() > minHeight) {
			minHeight = $(this).height();
		}
	});
	$("head").append("<style>.inskinLoaded .hotbox > a{min-height: " + minHeight + "px;}</style>");
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded #cookie-notice a{top: 20px; right: 50px; padding: 1px;}</style>");
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

