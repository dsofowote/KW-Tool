integration.meta = {
    'sectionID' : '129570',
    'siteName' : 'Cycling News - (Pagelead) - Smartphone - ( ASIA ) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085472',
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
        stylesCSS += '.inskinLoaded #page-canvas{margin-top:0 !important}';
        stylesCSS += '.inskinLoaded .global-banner{display: none}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});


// integration.on("layoutChange", function(e) {
//     integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
//     integration.custom.InSkinTopNav();
//     $( document ).scroll(function() {
//         integration.custom.InSkinTopNav();
//     });
// });

// integration.custom.InSkinTopNav = function() {
//     var height = $(document).scrollTop();
//     if( height < integration.custom.PageSkinTopPanel ){
//         var newheight = integration.custom.PageSkinTopPanel - height;
//         $(".nav-panel").css({
//             "margin-top" : newheight
//         });
//     }else{
//         $(".nav-panel").css({
//             "margin-top" : "0px"
//         });
//     }
// }

integration.on("adServed", function(e) {
    var headHeight = $(".global-header").height();
     $(".ism-frame").parent().css({"margin-top" : headHeight});
     integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    })

});



integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});