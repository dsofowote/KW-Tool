integration.meta = {
	'sectionID' : '128147',
	'siteName' : 'Ran  - Smartphone - ( AT CH DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '982747',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var navHeight = $('.topbar-wrapper').height();
		integration.custom.FrameTop = e.data.plr_FrameTop;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('html').addClass('inskinLoaded');
		var headerHeight = $('#main_nav_mobile').height();
		if ($("#main").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .portal-overlay{top: ' + (integration.custom.FrameTop + navHeight) + 'px !important; width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; left: 0 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded article.slide.teaser-wrapper{width:' + (contentWidth - 20) + 'px}';
	stylesCSS += '.inskinLoaded #container{overflow: visible !important;}';
	stylesCSS += '.inskinLoaded .search-modal .search-form{width: 90% !important;}';
	stylesCSS += '.inskinLoaded #ad-mbanner1-outer, .inskinLoaded .middle .top-ad-slot-wrapper{display: none;}';
	stylesCSS += '.inskinLoaded #main_nav_mobile{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	$(window).bind('scroll', function() {
		if ($(window).scrollTop() > 50) {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 100
			});
		} else {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 0
			});
		}
	});
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

