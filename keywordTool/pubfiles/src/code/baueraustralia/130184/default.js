integration.meta = {
    'sectionID' : '130184',
    'siteName' : 'Women\'s Weekly Food - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105491',
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
        var headHeight = $(".uniheader").outerHeight();
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .off-canvas{z-index: 100001 !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('pagelead:layoutChange', function (e) {
    if (e.data.fixedTop == false) {
      integration.custom.headHeight = $(".header").outerHeight();
      integration.custom.pl_indState1 = $(".header.header--hide").outerHeight();
      integration.custom.pl_closeState1 = $(".header.header--hide").outerHeight();
      integration.custom.pl_behaviour = "class";
      integration.custom.pl_class = ".header--hide";
      integration.custom.pl_indState2 = $(".header").outerHeight();
      integration.custom.pl_closeState2 = $(".header").outerHeight();
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $(".page--home .header--pinned, .page--section .header--pinned").css({
            "position" : "relative"
        });
    }else{
        $(".page--home .header--pinned, .page--section .header--pinned").css({
            "position" : "fixed"
        });
    }
}


integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100000"
    });
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
