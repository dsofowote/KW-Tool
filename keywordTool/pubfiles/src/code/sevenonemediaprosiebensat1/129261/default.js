integration.meta = {
    'sectionID': '129261',
    'siteName': 'Omeda - Smartphone - ( AT CH DE )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1069338',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.FrameBottom = e.data.plr_FrameBottom;
        stylesCSS += '.inskinLoaded .on-top-banner{display: none}';
        stylesCSS += '.inskinLoaded .on-back-to-top {right: ' + integration.custom.FrameSideRight + 'px !important; bottom:' + integration.custom.FrameBottom + 'px !important}';
        stylesCSS += '.inskinLoaded .on-open-article-toc-footer {bottom:134px !important}';
        stylesCSS += '.inskinLoaded #on-outer-wrapper {overflow:visible}';
        stylesCSS += '.inskinLoaded main {padding-top:15px}'
        stylesCSS += '</style>'
        $('head').append(stylesCSS);

        if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor"
            });
        }
    }


    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on("adServed", function (e) {
    var headHeight = $('header').height();
    $(".ism-frame").parent().css({
        "top": headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment: -headHeight
    });
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});