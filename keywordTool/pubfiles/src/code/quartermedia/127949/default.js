integration.meta = {
	'sectionID' : '127949',
	'siteName' : 'Hausgarten - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '954490',
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
		stylesCSS += '.inskinLoaded.page #contentwrapper .content img{}';
		stylesCSS += '.inskinLoaded .o-area__wrapper{overflow: visible;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		var headHeight = $(".o-area__header").outerHeight();
		if ($(".o-area__header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".o-area__header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var newValue = '.inskinLoaded.page #contentwrapper #content img{max-width: ' + contentWidth + 'px;}';
	document.getElementById("inskinStyles").innerHTML = newValue;
}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
