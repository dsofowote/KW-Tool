integration.meta = {
	'sectionID' : '127580',
	'siteName' : 'Singapore Women\'s Weekly - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '759302',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var scrollAdjust = $(".masthead").outerHeight();
		var pageAdjust = $(".masthead").outerHeight() + $("header").outerHeight();
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_ScrollAdjustment : -scrollAdjust,
				plr_PageHeightAdjustment : -pageAdjust
			});
		}

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded [id^="div-gpt-ad-lb-"] {max-width: 100% !important}';
		stylesCSS += '.inskinLoaded .masthead, .inskinLoaded header, .inskinLoaded .fix-top {width: calc(100% + 74px) !important}';
		stylesCSS += '.inskinLoaded .sticky-header {max-width: unset !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
	}
	window.unloadPageskin = function () {
		try {
			integration.destroy();
		} catch (e) {}
	};
});

integration.on('layoutChange', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});