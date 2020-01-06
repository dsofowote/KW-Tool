integration.meta = {
    'sectionID' : '129873',
    'siteName' : 'Topbeauty - (Publisher Booking/Pagelead) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1094544',
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
        var headHeight = $("#header").outerHeight();
        var stylesCSS = '<style type="text/css">';
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.FrameBottom = e.data.plr_FrameBottom;
        var wwidth = $(window).width();
        var cwidth = wwidth - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded .back-top{right: ' + integration.custom.FrameSideRight + 'px !important; bottom:' + integration.custom.FrameBottom + 'px !important;}';
        stylesCSS += '.inskinLoaded #header {max-width: ' + cwidth + 'px !important; top: 0px !important;}';
        stylesCSS += '.inskinLoaded #page-wrap{padding-top: 0px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .back-top{right: 5% !important; bottom: 5% !important;}';
        stylesCSS += '.inskinLoaded #header {max-width: ' + wwidth + 'px !important; width: ' + wwidth + 'px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
    window.unloadPageskin = function() {
      try {
        integration.destroy();
      } catch (e) {
      }
    };
});

integration.on('pagelead:layoutChange', function (e) {
    if (e.data.fixedTop == false) {
      integration.custom.headHeight = $(".bottom-header").outerHeight();
      integration.custom.pl_indState1 = $(".top-header").outerHeight();
      integration.custom.pl_closeState1 = $(".top-header").outerHeight();
      integration.custom.pl_behaviour = "class";
      integration.custom.pl_class = ".bottom-hide";
      integration.custom.pl_indState2 = $(".top-header").outerHeight() + $(".bottom-header").outerHeight();
      integration.custom.pl_closeState2 =  $(".top-header").outerHeight() + $(".bottom-header").outerHeight();
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
        $("#header").css({
            "position" : "relative"
        });
        $("#sidebar").css({
            "margin-top" : newheight
        });
    }else{
        $("#header").css({
            "position" : "fixed"
        });
        $("#sidebar").css({
            "margin-top" : "0px"
        });
    }
}


integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "9001"
    });
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
