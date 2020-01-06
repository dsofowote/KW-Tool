integration.meta = {
    'sectionID' : '128702',
    'siteName' : 'Zero Hanger - Smartphone - (AU) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1030961',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.td-header-menu-wrap-full').height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($(".td-header-menu-wrap-full").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".td-header-menu-wrap-full");
			integration.base.setCfg({
				'plr_AnchorParent' : '#inskinanchor',
				'plr_PageHeightAdjustment' : -headerHeight
			});
		}
		$('body').addClass('inskinLoaded');
		$('div.td-header-menu-wrap').addClass('td-affix');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '@media only screen and (max-width: 400px) {.inskinLoaded #div-gpt-ad-mobile-mrec-1, .inskinLoaded #div-gpt-ad-mobile-mrec-2{margin-left: -20px !important; margin-right: -20px !important;}}';
    stylesCSS += '.inskinLoaded #td-outer-wrap{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded.td-menu-mob-open-menu #td-mobile-nav, .inskinLoaded.td-search-opened .td-search-wrap-mob{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0) {
			$('div.td-header-menu-wrap').addClass('td-affix');
		} else {
			$('div.td-header-menu-wrap').addClass('td-affix');
		}
	});
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});


integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});
