integration.meta = {
    'sectionID' : '130167',
    'siteName' : 'Vogue - Pagelead - Smartphone - (HK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105145',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".site-head").outerHeight();
		if ($(".site-head").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".site-head");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .adv-wrap--header {display: none}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index" : "1000000"});
          $('.site-head--mobile-btn').on('click', function() {
            $('.ism-anchor').toggleClass('opened');
          });
          $('head').append('<style type="text/css">.opened {z-index : 3 !important;}</style>');

    });


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

