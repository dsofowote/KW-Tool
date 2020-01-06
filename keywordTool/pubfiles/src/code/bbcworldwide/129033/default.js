integration.meta = {
    'sectionID' : '129033',
    'siteName' : 'BBC.com - (Publisher Booking - HP, Sport) - Smartphone - ( INT )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045865',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		if ($("#orb-banner").length == 1) {
			if ($(".nav-top").length == 1) {
				$("<div id='inskinanchor'></div>").insertAfter(".nav-top");
				var headHeight = $(".nav-top").height() + $("#orb-banner").height();
			} else {
				$("<div id='inskinanchor'></div>").insertAfter("#orb-banner");
				var headHeight = $("#orb-banner").height();
			}

			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : -headHeight
			});
		}

		var wwidth = $(window).width();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #orb-banner, .inskinLoaded .nav-top, .inskinLoaded #cookiePrompt, .inskinLoaded #blq-global{width: ' + wwidth + 'px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		$("#inskinanchor").attr("aria-hidden", "true");
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});

