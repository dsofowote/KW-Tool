integration.meta = {
    'sectionID' : '127081',
    'siteName' : 'BDU Media - Smartphone - (NL)',
    'platform' : 'smartphone'
};

integration.async = false;

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707067',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ServePassbackInIframe' : false
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var wWidth = $(window).width();
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .region-sidebar-a, .inskinLoaded .region-sidebar-c{width: 100%; min-width: initial;}';
        stylesCSS += '.inskinLoaded .region-header-b li a{padding-right: 4px; padding-left: 1px;}';
        stylesCSS += '.inskinLoaded .region-top-banner{display: none;}';
        stylesCSS += 'body.inskinLoaded{overflow-x: visible !important;}';
        stylesCSS += '.inskinLoaded h1, .inskinLoaded h3 > a{word-wrap: break-word;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    $("head").append("<style>.inskinLoaded #mkdf-back-to-top{right: " + (integration.custom.PageSkinRightPanel + 5) + "px; bottom: " + (integration.custom.PageSkinBottomPanel + 5) + "px;}</style>");

    integration.custom.ismResize();
    $(window).on("resize", function() {
        integration.custom.ismResize();
    });
});

integration.custom.ismResize = function() {
    var cwidth = $(window).width() - integration.custom.PageSkinRightPanel;
    $("head").append("<style>.inskinLoaded .mkdf-mobile-header-inner{width: " + cwidth + "px !important;}</style>");
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 300);
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 300);
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">\n\n\n    document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=245101&w=320&h=240&ic='\n+ (window.tokuslid_ic_320x240 || '') + '&sb='\n+ (window.tokuslid_sb_320x240 || '') + '&gd='\n+ (window.tokuslid_gd_320x240 || '') +  '\">'\n+ '</scr' + 'ipt>');\n\n\n<\\script>\n";
};
