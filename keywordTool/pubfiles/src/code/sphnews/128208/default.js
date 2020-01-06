integration.meta = {
	'sectionID' : '128208',
	'siteName' : 'AsiaOne - Smartphone - ( SG )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '989606',
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
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -45
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();
	var totalwidth = (windowWidth - integration.custom.FrameSideRight) - 20;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
	stylesCSS += '.inskinLoaded #mobile-social{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; z-index: 9 !important;}';
	stylesCSS += '.inskinLoaded .widget.black{width: ' + totalwidth + 'px !important; margin: 10px auto 0;}';
	stylesCSS += '.inskinLoaded .cnwidget.cnhw .cnitem.cnitem-wrapper{width: ' + (totalwidth - 10) + 'px !important;}';
	stylesCSS += '.inskinLoaded .queryly_searchplus_visible{overflow: visible !important;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	$('div#inskinanchor').remove();
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});
