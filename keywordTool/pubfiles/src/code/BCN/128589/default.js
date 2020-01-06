integration.meta = {
	'sectionID' : '128589',
	'siteName' : 'Freundin - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1024437',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1128,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 50,
		'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#menu-main-navigation').removeClass('stuck');
		$("head").append("<style>.outbrain_div_container .OUTBRAIN{width: 98% !important; margin-left: 1% !important;} margin-right: 1% !important;}</style>");
		$('#page-wrapper').css({
			"max-width" : "1128px",
			"margin" : "0 auto"
		});
		$('.container-fixed-content.container-marketing').css({
			"padding" : "0",
			"margin" : "0",
			"height" : "0"
		});


		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			$('body').addClass('PageSkinEdgeTablet');
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>#page-wrapper{margin: 0 !important;} .PageSkinEdgeTablet .outbrain_div_container .OUTBRAIN{margin-left: 1% !important; margin-right: 0 !important;}</style>");
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel || height === 0) {
		$('#menu-main-navigation').removeClass('stuck');
	} else {
		$('#menu-main-navigation').addClass('stuck');
	}
};
