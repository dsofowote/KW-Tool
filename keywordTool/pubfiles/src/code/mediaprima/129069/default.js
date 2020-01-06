integration.meta = {
    'sectionID' : '129069',
    'siteName' : 'Berita Harian - (Pagelead/Creative Appr.) - Smartphone - ( MY )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047356',
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
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 11 !important;}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 1000 !important;}';
        stylesCSS += '.inskinLoaded .is-sticky{z-index: 10 !important}';
        stylesCSS += '.inskinLoaded .ins-backtotop{z-index: 999 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});


// integration.meta = {
//     'sectionID': '129069',
//     'siteName': 'Berita Harian  - (Pagelead) - Smartphone - ( MY )',
//     'platform': 'smartphone'
// };
//
// integration.testParams = {
//     'mobile_resolution': [0]
// };
//
// integration.flaggedTests = [];
//
// integration.params = {
//     'mf_siteId': '1047356',
//     'plr_FluidAnchor': true,
//     'plr_Fluid': true,
//     'plr_Responsive': true,
//     'plr_ShowCloseButton': true,
//     'plr_ContentType': 'PAGESKINEXPRESS',
//     'plr_UseFullVersion': true,
//     'plr_UseCreativeSettings': true,
//     'plr_HideElementsByID': '',
//     'plr_HideElementsByClass': '',
//     'plr_FastInit' : true
// };
//
//
// integration.on('adCallResult', function (e) {
//     if (e.data.hasSkin) {
//         $('body').addClass('inskinLoaded');
//         var stylesCSS = '<style type="text/css">';
//         stylesCSS += 'body.inskinLoaded {padding-top:0px !important;}';
//         stylesCSS += '.inskinLoaded .main-container{padding-top:45px !important;}';
//         stylesCSS += '.inskinLoaded .ins-backtotop{z-index:5 !important;}';
//         stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index: 11 !important;}';
//         stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 6 !important;}';
//         stylesCSS += '.inskinLoaded #block-bh-googledfp-mobile-mrec-320x250, .inskinLoaded #block-bh-googledfp-mobile-banner-320x50{display: none !important;}';
//         stylesCSS += '</style>'
//         $('head').append(stylesCSS);
//         integration.custom.socPos = $(".social-wrapper").offset();
//         integration.custom.headHeight = $("#navbar").outerHeight(); //$(".social-wrapper").height();
//     }
//
//     if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
//         integration.custom.pl_initState = integration.custom.headHeight
//         integration.base.setCfg({
//             'plr_FixedTop': true,
//             'plr_EnableSwipe': true
//         });
//     }
//
// });
//
// integration.on('layoutChange', function (e) {
//     integration.custom.pl_behaviour = "distance";
//     integration.custom.pl_scroll = integration.custom.socPos.top
//     integration.custom.pl_scrollState1 = integration.custom.headHeight + 4;
//     integration.custom.pl_scrollState2 = 0;
// });
//
// integration.on('adClose', function (e) {
//     integration.custom.pl_behaviour = "n/a";
//     $('body').removeClass('inskinLoaded');
// });
