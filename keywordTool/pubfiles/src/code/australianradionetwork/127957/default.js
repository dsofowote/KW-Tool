integration.meta = {
	'sectionID' : '127957',
	'siteName' : 'iHeart Radio- Smartphone- (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '956476',
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
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.header-leaderboard-wrapper {display: none !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});

});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	
	if (windowWidth < 321) {
		var newValue = ".inskinLoaded .module-article.module-reccomended, .inskinLoaded .module-article-m-transparent, .inskinLoaded .module-article-m-background, .inskinLoaded .module-article-lg-background{left:-30px}";
		newValue += ".inskinLoaded .live-radio .radio-item .img-block {width:90px;height:100%}";
		newValue += ".inskinLoaded .live-radio .radio-item .content-block {width:100px;}";
		newValue += ".inskinLoaded .live-radio .radio-item {width:225px;}";
		
	} else if (windowWidth < 376) {
		var newValue = ".inskinLoaded .module-article.module-reccomended, .inskinLoaded .module-article-m-transparent, .inskinLoaded .module-article-m-background, .inskinLoaded .module-article-lg-background{left:-10px}";
	}

	document.getElementById("inskinStyles").innerHTML = newValue;
}