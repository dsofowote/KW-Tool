integration.meta = {
	'sectionID' : '128330',
	'siteName' : 'Asian Correspondent - Smartphone - ASIA',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1003872',
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
		var headerHeight = $("header.header").height();
		if ($("header.header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
				plr_ScrollAdjustment : -headerHeight
			});
		}

		var wwidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var cwidth = $(window).width() - integration.custom.FrameSideRight;
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html.inskinLoaded, .inskinLoaded body{min-width: ' + cwidth + 'px;}';
		stylesCSS += '.inskinLoaded .mob-mpu.trc_rbox_container.article-mpu{padding: 0 !important;}';
		stylesCSS += '.inskinLoaded header.header{width: ' + wwidth + 'px;}';
		stylesCSS += '.inskinLoaded .mobile-advert, .inskinLoaded .r1pi--toggle{display: none !important;}';
		stylesCSS += '.inskinLoaded .article-mpu{margin-right: 6px;}';
		stylesCSS += '.inskinLoaded .sidebar .top-stories article.sidebar-teaser figure{margin-right: 0px;}';
		stylesCSS += '.inskinLoaded .sidebar .top-stories article.sidebar-teaser .entry-title{padding-left: 3px;}';
		stylesCSS += '.inskinLoaded #nav-search{top: 15px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	$(".r1pi--toggle").click();
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});
