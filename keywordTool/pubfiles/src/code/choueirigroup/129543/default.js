integration.meta = {
    'sectionID' : '129543',
    'siteName' : 'Supermama - Smartphone - (MENA) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086023',
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
        var stylesCSS = '<style type="text/css">';
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.PageSkinRightPanel;
        stylesCSS += '.inskinLoaded .main-header {min-width: ' + $(window).width() + 'px}';
        stylesCSS += '.inskinLoaded .share-icon  {width: '+ contentWidth +'px !important; right: unset !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 11 !important}';
        stylesCSS += 'html.inskinLoaded{direction:unset !important}.inskinLoaded .main-header, .inskinLoaded main.home{direction:rtl}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);

        var headHeight = $('.main-header').height();
        if ($(".main-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".main-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,

            });
        }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

// integration.on("adServed", function(e) {
//     var headHeight = $('.main-header ').height() ;
//       $(".ism-frame").parent().css({"top" : headHeight});
// 			integration.base.setCfg({
// 						plr_PageHeightAdjustment : -headHeight
// 				})
// });

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});