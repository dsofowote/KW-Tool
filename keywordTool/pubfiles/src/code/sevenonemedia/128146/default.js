integration.meta = {
   'sectionID' : '128146',
   'siteName' : 'Songtexte  - Smartphone - ( AT CH DE )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '982746',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : -60,
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
	}
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var header = $(".header.row");
    var headerHeight = $(".header").outerHeight();
		$("body").prepend(header);

		if ($(".header.row").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header.row");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
        plr_ScrollAdjustment : -headerHeight,
        plr_PageHeightAdjustment : -headerHeight
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();

	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '.inskinLoaded #main{max-width:' + contentWidth + 'px}';
	stylesCSS += '.inskinLoaded .header.row{min-width:' + windowWidth + 'px;margin:0px;}';
	if (windowWidth <= 375) {
		stylesCSS += '.inskinLoaded [src*="https://www.youtube.com/embed"]{max-width:' + contentWidth + 'px;right:15px;position:relative;}';
	}
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});
