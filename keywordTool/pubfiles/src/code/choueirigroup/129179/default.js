integration.meta = {
    'sectionID' : '129179',
    'siteName' : 'Nawa3em - Smartphone - (MENA)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1061861',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 0
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        //sets nav to be fixed from when we're served
        $("nav").addClass("active");
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ctr-grid-view h4{display:-webkit-box}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
    var headHeight = $("nav").outerHeight();
    $('.ism-frame').parent().css({
        "top" : headHeight,
        "position" : "relative"
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

