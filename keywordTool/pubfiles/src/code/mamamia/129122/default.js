integration.meta = {
    'sectionID' : '129122',
    'siteName' : 'MamaMia - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1056740',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var navHeight = $('.nav-pwa').height();
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){top : ' + navHeight + 'px !important}';
        stylesCSS += '.inskinLoaded .ism-indicator{top : ' + navHeight + 'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index: 1000000 !important}';
        stylesCSS += '.inskinLoaded #__nuxt{margin-top : 80px !important}';
        stylesCSS += '.inskinLoaded #leaderboard_pos1{display : none}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        window.unloadPageskin = function () {
        try {
          integration.destroy();
        } catch (e) {}
      };

    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
