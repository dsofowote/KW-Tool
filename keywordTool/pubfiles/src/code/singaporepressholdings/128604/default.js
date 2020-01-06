integration.meta = {
    'sectionID' : '128604',
    'siteName' : 'HerWorldPlus - (Unbpub Until Approv - Pagelead) - Smartphone - ( SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1026021',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #navbar .affix{z-index: 9999;}';
        $('head').append(stylesCSS);
    }
    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }

});

integration.on("adServed", function(e) {
    var topPanel = $(".ism-frame")[0][0];
    topPanel.css({
        "z-index" : "3 !important"
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
