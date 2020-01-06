integration.meta = {
	'sectionID' : '128043',
	'siteName' : 'Creative Blog - Smartphone - (AU) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '971043',
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
		$('body').addClass('inskinLoaded');

		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .listingResult.sponsored-post div{position: relative;}';
		stylesCSS += '.inskinLoaded .inskinMPU{margin-right:40px;}'
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		var windowWidth = $(window).width();
		var adUnit = "[id*='Design_CreativeBloQ/article']";
		if (windowWidth == 375) {
			$(adUnit).parent().addClass("inskinMPU");
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	integration.custom.laychange();

	$(window).on('resize', function() {
		$("head").append("<style>.next-prev-container.position-sticky, .box.pagination.internal{width:100% !important} body{overflow-x:hidden;}</style>");
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var newValue = ".inskinLoaded .listingResult.sponsored-post div, .inskinLoaded .news-article{max-width: " + contentWidth + "px}";
	newValue = ".inskinLoaded .button-search.masthead-item{margin-right:" + integration.custom.FrameSideRight + "px; margin-top:" + integration.custom.FrameTop + "px}"
	document.getElementById("inskinStyles").innerHTML = newValue;
}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

