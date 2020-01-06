integration.meta = {
	'sectionID' : '127653',
	'siteName' : 'L\'Equipe -Smartphone- (FR)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '775804',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
		var headerHeight = $('header').height();
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .container{min-width: 300px !important;}';
		stylesCSS += '.inskinLoaded .container__view{padding-top: 0px !important;}';
		stylesCSS += '.inskinLoaded .footernav{z-index: 2 !important;}';
		if ($('.footernav__button').length == 1) {
			stylesCSS += '.inskinLoaded .footernav{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		}
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	var headerHeight = $('header').height();
	$(".ism-frame").parent().css({
		"margin-top" : headerHeight
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
