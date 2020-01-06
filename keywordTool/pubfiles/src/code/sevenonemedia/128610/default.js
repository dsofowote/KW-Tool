integration.meta = {
	'sectionID' : '128610',
	'siteName' : 'SAT1 - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1026213',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".post-header").height();
		integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
		var wwidth = $(window).width();
		var wheight = $(window).height();
		var cwidth = wwidth - integration.custom.PageSkinRightPanel;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .navigation-menu .nav{justify-content: left;}';
		stylesCSS += '.inskinLoaded #ad-mbanner1{display: none !important;}';
		stylesCSS += '.inskinLoaded .ReactModal__Overlay--after-open{top: 50px !important;}';
		stylesCSS += '.inskinLoaded .search-modal .portal-content-wrapper .portal-content{height: ' + wheight + 'px !important;}';
		stylesCSS += 'body.inskinLoaded.portal-open .navigation-upper-bar{position: fixed; top:0; width: ' + wwidth + 'px;}';
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

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

integration.on('layoutChange', function(e) {
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
