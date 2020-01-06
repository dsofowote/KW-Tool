integration.meta = {
    'sectionID': '127325',
    'siteName': 'Les Numeriques - Smartphone- (FR)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707987',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_StartScrollOnAnchor': true,
    'plr_ScrollAdjustment': 48,
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        if ($("#comp-main-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#comp-main-header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -48
            });
        }

        /* Fit Social buttons inside the footer */

        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded > footer > div.footer-top > div, body.inskinLoaded > footer > div.footer-top > div > ul.socials{padding-right: 0px; padding-left: 0px;}';
        stylesCSS += '.inskinLoaded footer.footer-v5 .footer-bottom .partners-content a{padding: 0 1px 0 0;}';

        stylesCSS += '</style>'
        $('head').append(stylesCSS);

        var topicCommentsCSS = '<style type="text/css" id="ism-topic-comments"></style>';
        $('head').append(topicCommentsCSS);

        var bottomNavCSS = '<style type="text/css" id="ism-bottom-nav"></style>';
        $('head').append(bottomNavCSS);
    }
});

integration.on("layoutChange", function (e) {
    var headHeight = $("#comp-main-header").outerHeight();

    $("#inskinanchor").css({
        "margin-top": headHeight
    });

    integration.base.setCfg({
        "plr_PageHeightAdjustment": -headHeight
    });

    /* portrait layout is different than the landscape layout */
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;

    integration.custom.orientationChange();
    integration.custom.InSkinBottomNav();

    $("#topic-comments").addClass("ism-topic-comments");
    $("#socials > div, #to-the-top, #toky").addClass("ism-bottom-nav");

    $(document).scroll(function () {
        integration.custom.orientationChange();
        integration.custom.InSkinBottomNav();
    });

    $(window).on('resize', function () {
        integration.custom.orientationChange();
        integration.custom.InSkinBottomNav();
    });

    $('head').append('<style>.inskinLoaded #to-the-top {margin-right: ' + integration.custom.PageSkinRightPanel + 'px !important; margin-bottom: ' + (integration.custom.PageSkinBottomPanel + 10) + 'px;}</style>');

    $("head").append("<style>.inskinLoaded #socials > div{max-width: calc(100% - " + integration.custom.PageSkinRightPanel + "px);}</style>");
    $("head").append("<style>.inskinLoaded #toky{margin-right: " + integration.custom.PageSkinRightPanel + "px;}</style>");

});

integration.custom.orientationChange = function () {
    /* portrait layout is different than the landscape layout */
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    if (winWidth > winHeight) {
        $("#ism-topic-comments").html(".ism-topic-comments{padding-right: 10px; padding-left: 10px;}");
    } else {
        $("#ism-topic-comments").html(".ism-topic-comments{padding-right: 3px; padding-left: 3px;}");
    }
};

integration.custom.InSkinBottomNav = function () {
    /* constrain social bar in portrait mode inside PageSkin */
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
        $("#ism-bottom-nav").html(".ism-bottom-nav{margin-bottom: " + integration.custom.PageSkinBottomPanel + "px !important;}");
    } else {
        $("#ism-bottom-nav").html(".ism-bottom-nav{margin-bottom: 0;}");
    }
};

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
    $("#topic-comments").removeClass("ism-topic-comments");
    $("#socials > div, #to-the-top, #toky").removeClass("ism-bottom-nav");
});