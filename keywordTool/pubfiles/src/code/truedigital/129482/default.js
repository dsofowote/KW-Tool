integration.meta = {
    'sectionID' : '129482',
    'siteName' : 'TrueID Ent - Smartphone - (TH)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1080204',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
        integration.custom.PageSkinBottomSide = e.data.plr_FrameBottom;
        var headHeight = $('.main-nav').outerHeight();
        var wwidth = $(window).width();
        var contentWidth = wwidth - integration.custom.FrameSideRight;
        integration.base.setCfg({
            plr_PageHeightAdjustment : -headHeight
        });
        stylesCSS += '.inskinLoaded .trueid-main-nav, .inskinLoaded .w-100, .inskinLoaded .main-nav{width: ' + contentWidth + 'px !important}';
        stylesCSS += '.inskinLoaded .cd-top, #back-top{right: ' + integration.custom.PageSkinFrameSide + 'px !important; bottom: ' + integration.custom.PageSkinBottomSide + 'px !important}';
        stylesCSS += '.inskinLoaded .ins-hamburger-menu-button{bottom: ' + integration.custom.PageSkinBottomSide + 'px !important}';
        stylesCSS += '.inskinLoaded #menu-trueid-web > header > div:nth-child(3){height: 0px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    var headHeight = $('.main-nav').outerHeight();
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        $("#menu-trueid-web .main-nav").css({
            "position" : "relative"
        });
        integration.base.setCfg({
            plr_ScrollAdjustment: 0
        });
    }else{
        $("#menu-trueid-web .main-nav").css({
            "position" : "fixed"
        });
        integration.base.setCfg({
            plr_ScrollAdjustment: headHeight
        });
    }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
