integration.meta = {
    'sectionID' : '126672',
    'siteName' : 'Fantagazzetta - Smartphone - (IT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [360]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707187',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#topbar").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#topbar");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -50,
            });
        }
        var navHeight = $('nav').height();

        $('#inskinanchor').css({
            "margin-top" : navHeight
        });

        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded {height: auto;}';
        stylesCSS += '.inskinLoaded ol.breadcrumb{padding: 0 !important;}';
        stylesCSS += '.inskinLoaded .container.main.st-content-inner.conttop{margin-top: 0;}';
        stylesCSS += '.inskinLoaded #topbar{z-index: 2002;}';
        stylesCSS += '.inskinLoaded #adv_LdbMastheadPush{display: none !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "2001"
    });

    integration.custom.PageSkinSidePanel = e.data.plr_FrameSideRight;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    var windowWidth = $(window).width();
    var windowWidth2 = windowWidth - integration.custom.PageSkinSidePanel;

    $("head").append("<style>.inskinLoaded #toTop{right: " + (integration.custom.PageSkinSidePanel + 10) + "px;}</style>");

    integration.custom.ismResize();
    $(window).on('resize', function() {
        integration.custom.ismResize();
    });

    windowHeight = $(window).height();
    $("head").append("<style>.inskinLoaded #menu-3{height: " + (windowHeight + 200) + "px;}</style>");

    $("#st-trigger-effects").on("click", function() {
        setTimeout(function() {
            integration.custom.ismLockHeight();
        }, 500);
    });
});

integration.custom.ismResize = function() {
    var windowWidth = $(window).width();
    var windowWidth2 = windowWidth - integration.custom.PageSkinSidePanel;
    $("head").append("<style>.inskinLoaded .ssk-sticky{width: " + windowWidth2 + "px;}</style>");
}

// For restricting height of side nav when open
integration.custom.ismLockHeight = function() {
    if ($("#st-container").hasClass("st-menu-open") == true) {
        $("head").append("<style>body.inskinLoaded{height: 100%;}</style>");
    } else {
        $("head").append("<style>body.inskinLoaded{height: auto;}</style>");
    }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
});
