integration.meta = {
    'sectionID' : '129555',
    'siteName' : 'An-Nahar - Smartphone (MENA)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085998',
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
        var width = $(window).width();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var cwidth = width - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .share-bar{width: ' + cwidth + 'px !important;}';
        stylesCSS += '.inskinLoaded .main{max-width: ' + cwidth + 'px !important;}';
        stylesCSS += '.inskinLoaded .toTop{right: ' + integration.custom.FrameSideRight + 'px !important;}';
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
        $("header section.main").css({
          "position" : "relative"
        });
    }else{
        $("header section.main").css({
          "position" : "fixed",
          "top" : "0"
        });
    }
}


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
