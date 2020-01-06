/**
 * @author kingsley.ankomah
 */
integration.meta = {
	'sectionID' : '126364',
	'siteName' : 'Unilad - Tablet - (INT)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '706810',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1120,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	'plr_PageScanExclude' : '#sidebar, .ob-widget-section.ob-first, script'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
			$('#nav, #content-wrapper').css({'margin-left': -(integration.custom.FrameSideRight)/2});
			$('#content-wrapper').css({'margin-left': -integration.custom.FrameSideRight});
			$('.large-teaser, .prl-container').css({
				'margin' : '0px 0px'
			});
			$('#nava').css({
				'max-width' : '1118px',
				'margin' : '100px 0px 0px',
				'left' : '22px'
			});
		} else {
			$('.large-teaser, #nava').css({
				'max-width' : '1120px',
				'margin' : '0 auto'
			});
		}
		$('body').css({
			'margin-top' : '0px'
		});
		$('.prl-grid').css({
			'margin' : 'auto'
		});
		$('.site-wrapper').css({
			'margin-top' : '70px'
		});
	}
});

/**** Constrain Top Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#nava").css({
			"margin-top" : newheight
		});
	} else {
		$("#nava").css({
			"margin-top" : "0px"
		});
	}
}
