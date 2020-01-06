integration.meta = {
    'sectionID': '129263',
    'siteName': 'Soya Cincau - Smartphone - ( MY )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1069340',
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


integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        var windowWidth = $(window).width();
        var headHeight = $(".nav-secondary").outerHeight() + $(".site-header").outerHeight() + $("#hero-posts").outerHeight();
        if ($(".nav-secondary").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".nav-secondary");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight,
                plr_ScrollAdjustment: -headHeight
            });
        }

        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'html.inskinLoaded{overflow: visible;}';
        stylesCSS += '.inskinLoaded .search-form{margin-left: visible;}';
        stylesCSS += '.inskinLoaded .search-form-input {margin-left: ' + integration.custom.FrameSideRight + 'px;}';
        stylesCSS += '.inskinLoaded .pushit{position: relative;}';
        stylesCSS += '.inskinLoaded #content .loop-link h2{width: 60% !important;}';
        stylesCSS += '.inskinLoaded .site-header, .inskinLoaded #hero-posts, .inskinLoaded .nav-secondary {min-width:' + windowWidth + 'px}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function (e) {
    $('html').removeClass('inskinLoaded');
});