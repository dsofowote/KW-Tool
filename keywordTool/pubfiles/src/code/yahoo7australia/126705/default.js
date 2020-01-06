integration.meta = {
    'sectionID': '126705',
    'siteName': 'Yahoo AU - (SSL Creative Approval) - Smartphone - (AU)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
    'mf_siteId': '707707',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('init', function(e) {
    integration.custom.checkOrientation();
});

integration.on('ready', function(e) {
    integration.custom.checkOrientation();
});


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    var navheight = $(".universal-header").height();
    stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded .universal-header-hamburger-menu{top: calc(' + navheight + 'px + ' + integration.custom.PageSkinTopPanel + 'px) !important;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
    $(window).on('resize', function() {
        integration.custom.checkOrientation();
    });

});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index": "23"
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});