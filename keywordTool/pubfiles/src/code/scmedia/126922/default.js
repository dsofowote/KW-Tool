integration.meta = {
    'sectionID': '126922',
    'siteName': 'Jessica - Smartphone - (HK)',
    'platform': 'smartphone'
};




integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707188',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_PageHeightAdjustment': 20,
    'plr_URLKeywords': 2
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("body > #navigation").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body > #navigation");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -10,
            });
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    $('html').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded , .inskinLoaded body, .inskinLoaded #page{height: auto !important; min-width: calc(100% - ' + integration.custom.FrameSideRight + 'px);}  .inskinLoaded #header.sticky + #main{padding-top: 0;} .inskinLoaded #inskinanchor{margin-top: 55px;}';
    stylesCSS += '.inskinLoaded body.menu-on{min-width: calc(100% + ' + integration.custom.FrameSideRight + 'px);} .inskinLoaded body.menu-on #header{position: absolute; top: -95px;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
});

integration.on('adServed', function(e) {
    window.dispatchEvent(new Event('resize'));
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 100);
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<div data-glade data-ad-unit-path=\"/117295781/InSkin_JESSICA(Tablet_Mobile)\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n";
}