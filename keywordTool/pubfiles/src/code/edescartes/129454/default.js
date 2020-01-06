integration.meta = {
    'sectionID' : '129454',
    'siteName' : 'Tagsis - (PageLead) - Smartphone - (HK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1078284',
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
        stylesCSS += '.inskinLoaded  .ism-frame:nth-of-type(1){z-index: 1000!important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
        integration.custom.indicatorPos = $(".header-container").outerHeight();
        integration.custom.closePos = $(".header-container").outerHeight();
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
    if( height < integration.custom.PageSkinTopPanel){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $("#header").css({
            "position" : "relative"
        });
        $("#header.fixed-top + .header-fixed-top-container").css({
            "height" : "0px"
        });
    }else{
        $("#header").css({
            "position" : "fixed"
        });
    }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
