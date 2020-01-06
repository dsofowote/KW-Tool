integration.meta = {
    'sectionID' : '128948',
    'siteName' : 'GQ - Smartphone - (FR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1043086',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .fTvXOS, .inskinLoaded [id^="StickyFiftyFiftyCol"], .inskinLoaded [id^="StickyFlexVerticalWrap"]{width: calc(' + contentWidth + 'px - 5vw) !important;}';
        stylesCSS += '.inskinLoaded .Udibx, .inskinLoaded [id^="ContentWrap"]{left: 0px; margin-left: 0px; padding: 0px; max-width: ' + contentWidth + 'px !important; z-index: 2000 !important;}';
        stylesCSS += '.inskinLoaded .kNDCYR{right: -60px; top: -135px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "2001"
    });
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
