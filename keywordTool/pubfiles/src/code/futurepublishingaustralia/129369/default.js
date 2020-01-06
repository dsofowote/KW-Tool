integration.meta = {
    'sectionID' : '129369',
    'siteName' : 'Cycling News - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074566',
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
        stylesCSS += '.inskinLoaded .nav-panel{z-index:100;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS)
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
        integration.custom.indicatorPos = $(".global-header").outerHeight();
        integration.custom.closePos = $(".global-header").outerHeight();
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
        $(".nav-panel").css({
            "margin-top" : newheight
        });
    }else{
        $(".nav-panel").css({
            "margin-top" : "0px"
        });
    }
}

integration.on("adServed", function(e) {
  if ($(".ism-frame:first").css("position") === "fixed") {
     $(".ism-frame").parent().css({
       "z-index" : "200"
     });
   }
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
