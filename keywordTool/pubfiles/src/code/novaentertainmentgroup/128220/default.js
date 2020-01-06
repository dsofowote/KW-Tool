integration.meta = {
	'sectionID' : '128220',
	'siteName' : 'Smooth - Smartphone- (AU) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '992059',
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
		var headerHeight = $('.navbar').height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($("body #header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body #header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : 0,
				plr_ScrollAdjustment : headerHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {min-width: 300px !important; overflow-x: visible !important;}';
		stylesCSS += '.inskinLoaded #header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px);}';
		stylesCSS += '.inskinLoaded.sticky #header{width: 100%;}';
		stylesCSS += '.inskinLoaded .at4-visually-hidden{position: fixed !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	$('.navbar-toggle').click(function() {
		if ($('body').hasClass('no-scroll')) {
			$('.inskinLoaded').css({
				"padding" : "0"
			});
		} else {
			$('.inskinLoaded').css({
				"padding" : "0 74px 0 0"
			});
		}
	});
	$(window).scroll(function() {
		if ($('body').hasClass('sticky-share')) {
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : 0,
				plr_ScrollAdjustment : 102
			});
		}
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/7426/SmoothFM', [[1,1]]).setTargeting(\"Keyword\", \"passback\") .setTargeting(\"pos\", \"1\").display();\n<\\script>";
}; 