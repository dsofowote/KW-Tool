integration.meta = {
    'sectionID' : '127338',
    'siteName' : 'MamaMia - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '713126',
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
      var contentW = $(window).width() - 74;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .full-width, .inskinLoaded .video-label-box {width: '+ contentW +'px}';
        stylesCSS += '.inskinLoaded #__nuxt {margin-top: 80px}';
        stylesCSS += '.inskinLoaded #leaderboard_pos1 {display: none}';
        stylesCSS += '.inskinLoaded .flex-desktop-row-mobile-column, .inskinLoaded .section-horizontal-scroll, .inskinLoaded .footer-row {margin-left: -50%}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        window.unloadPageskin = function() {
                    try {
                        integration.destroy();
                    } catch (e) {
                    }
                };
    }
    integration.on("adServed", function(e) {
    	var headHeight = $(".nav-pwa").outerHeight();
    	$(".ism-frame").parent().css({"z-index" : "999999", "top": headHeight});
    	integration.base.setCfg({
    		plr_PageHeightAdjustment : -headHeight,
        plr_ScrollAdjustment : headeHeight,
    	});
    });

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
