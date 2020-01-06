integration.meta = {
    'sectionID' : '130182',
    'siteName' : 'Gourmet Traveller - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105490',
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
        stylesCSS += '.inskinLoaded .header--pinned {top: 200px !important}';
        stylesCSS += '.inskinLoaded .ism-anchor {z-index: 2}';
        stylesCSS += '.inskinLoaded .header {z-index: 1}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('pagelead:layoutChange', function (e) {
    var scrolltop = $(document).scrollTop();
    if (scrolltop > 200) {
      $('head').append('<style type="text/css">.inskinLoaded .header--pinned {top: 0px !important}</style>');
    }

    $(document).scroll(function() {
        scrolltop = $(document).scrollTop();
        var headerTop = 200 - scrolltop;
        if (headerTop > 0) {
            $('head').append('<style type="text/css">.inskinLoaded .header--pinned {position: absolute !important}</style>');
        } else {
            $('head').append('<style type="text/css">.inskinLoaded .header--pinned {position: fixed !important; top: 0px !important}</style>');
        }
        if ($(".header-wrapper--hidden").length == 0 && (headerTop < 0)) {
            $('head').append('<style type="text/css">.ism-close, .ism-indicator {top: 105px !important}</style>');
        } else {
            $('head').append('<style type="text/css">.ism-close, .ism-indicator {top: 0px !important}</style>');
        }
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});