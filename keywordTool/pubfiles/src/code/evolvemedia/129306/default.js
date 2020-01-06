integration.meta = {
    'sectionID' : '129306',
    'siteName' : 'Total Beauty - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072217',
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
        $('html').addClass('inskinLoaded');
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'html.inskinLoaded {overflow: visible;}';
        stylesCSS += '.inskinLoaded #wrapper{overflow: hidden; height: auto;}';
        stylesCSS += '.inskinLoaded .ism-close{padding-right: 10px;}';
        stylesCSS += '.inskinLoaded #siq_mobile .siq_searchicon_wrap{right: ' + integration.custom.PageSkinRightPanel + 'px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
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
        $(".snap-drawers").css({
            "margin-top" : newheight
        });
    }else{
        $(".snap-drawers").css({
            "margin-top" : "0px"
        });
    }
}

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100"
    });
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});
