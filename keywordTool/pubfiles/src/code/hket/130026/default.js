integration.meta = {
    'sectionID' : '130026',
    'siteName' : 'Property Station - Smartphone - (HK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1100308',
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
        stylesCSS += '.inskinLoaded .hket-ui.page {z-index: 10 !important; min-width: 300px}';
        stylesCSS += '.inskinLoaded #body-wrapper, .inskinLoaded .hket-header-035, .inskinLoaded .header-wrapper {min-width: 300px;}';
        stylesCSS += '.inskinLoaded .sticky-header {z-index: 10 !important; max-width: calc(100% - 74px)}';
        stylesCSS += '.inskinLoaded .back-to-top-menu, .inskinLoaded .corner-btns-container {right: 75px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

// integration.on("layoutChange", function(e) {
//     $('.burger-menu-icon-btn').on('click', function() {
//         $(".inskinLoaded .hket-ui.page").addClass("opened");
//     });
//     $('.close-btn ').on('click', function() {
//         debugger;
//         $(".inskinLoaded .hket-ui.page").removeClass("opened");
//     });
// });


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

