integration.meta = {
    'sectionID' : '129419',
    'siteName' : 'NRL Australia - (Pagelead) - Smartphone (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077011',
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
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 10000 !important; top: 0px !important;}';
        stylesCSS += '.inskinLoaded .ism-arrow, .inskinLoaded .ism-close{top: 0px !important;}';
        stylesCSS += '.inskinLoaded .l-page-primary{padding-top: 0px;}';
        stylesCSS += '.inskinLoaded .navigation{position: relative;}';
        stylesCSS += 'body.inskinLoaded{overflow-x: visible;}';
        stylesCSS += '.inskinLoaded .hero.js-parallax.hero-size--default{background-position-y:' + integration.custom.PageSkinTopPanel + 'px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    var stylesCSS = '<style id="inskinStyles" type="text/css">';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
    $( document ).scroll(function() {
      var height = $(document).scrollTop();
      var newheight = integration.custom.PageSkinTopPanel - height;
      var newStyles = ".inskinLoaded .hero.js-parallax.hero-size--default{background-position-y: " + newheight + "px !important;}";
      document.getElementById("inskinStyles").innerHTML = newStyles
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
