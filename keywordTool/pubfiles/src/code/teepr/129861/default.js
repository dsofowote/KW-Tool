integration.meta = {
    'sectionID' : '129861',
    'siteName' : 'News18Nepal - Smartphone - (TW) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1093813',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var windowWidth = $(window).width();
        var contentWidth = windowWidth - integration.custom.FrameSideRight;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .row.clearfix.archive-news-content{display: block;}';
        stylesCSS += '.inskinLoaded .mid-post-ad-2{margin-left: -40px;}';
        stylesCSS += '.inskinLoaded #aswift_3_expand{max-width: ' + (contentWidth - 30) + 'px !important; display: block !important;}';
        stylesCSS += '.inskinLoaded .scroll-top{right: ' + integration.custom.FrameSideRight + 'px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #aswift_3_expand{max-width: ' + (contentWidth - 30) + 'px !important; display: block !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
