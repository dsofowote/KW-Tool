integration.meta = {
	'sectionID' : '127011',
	'siteName' : 'NFL.com - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707100',
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
		if ($("#content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#content");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				'plr_PageHeightAdjustment' : -48
			});
		}
		if ($("#wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#wrap");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				'plr_PageHeightAdjustment' : -96
			});
		}

	}
});

integration.on("adClose", function(e) {
	$("html").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html.inskinLoaded {overflow:visible !important;}';
		stylesCSS += '.inskinLoaded #content{margin-top: 48px !important;}';
		stylesCSS += '.inskinLoaded .rmq-7a177422{padding-top:0px !important;}';
		stylesCSS += '.inskinLoaded iframe{max-width: 100% !important;}';
		stylesCSS += '.inskinLoaded [data-container-id*="home-page"] {overflow-x:hidden;}';
		stylesCSS += '.inskinLoaded {overflow:visible;}';
		stylesCSS += '.inskinLoaded [aria-live*="polite"] {position:relative;left:-20px;}';
		stylesCSS += '.inskinLoaded #page-footer [aria-live*="polite"] {position:relative;left:0px;}';
		stylesCSS += '.inskinLoaded #modal-carousel{overflow-x:hidden;}';
		stylesCSS += '.inskinLoaded .winners-widget {overflow-x: hidden;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	var homePage = $(".nfl-mobile").length;
	if (homePage >= 1) {
		$(".ism-frame").parent().css({
			"top" : "96px"
		});
	} else {
		$(".ism-frame").parent().css({
			"top" : "48px"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var header2 = $(".links-container").parent().next();

	$(header2).css({
		"max-width" : windowWidth
	});

	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .links-container {max-width: ' + windowWidth + 'px}';
	stylesCSS += '.inskinLoaded [role*="radiogroup"] {max-width:' + contentWidth + 'px}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

