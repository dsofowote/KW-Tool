integration.meta = {
    'sectionID' : '128473',
    'siteName' : 'One2Car - Smartphone - ( TH )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1022289',
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

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $("html").addClass("inskinLoaded");
        var hHeight = $(".header").height();
        if ($(".header").length == 1 && $(".header").css("position") === "relative") {
            $("<div id='inskinanchor'></div>").insertAfter(".header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -hHeight,
                plr_ScrollAdjustment: -hHeight
            });
            var stylesCSS = '<style type="text/css">';
            stylesCSS += ".inskinLoaded .header{width: calc(100% + " + integration.custom.FrameSideRight + "px) !important;}";
            stylesCSS += "</style>";
            $("head").append(stylesCSS)
        }
        var stylesCSS = '<style type="text/css">';
        stylesCSS += ".inskinLoaded .hero__ad-item{background-position: 43% 50% !important;}";
        stylesCSS += ".inskinLoaded #intercom-container .intercom-launcher-discovery-frame, .inskinLoaded #intercom-container .intercom-launcher-frame, .inskinLoaded #intercom-container .intercom-notifications-frame, .inskinLoaded #intercom-container .intercom-launcher-badge-frame{right: " + integration.custom.FrameSideRight + "px !important;}";
        stylesCSS += ".inskinLoaded .element-sticky-bottom{width: calc(100% - " + integration.custom.FrameSideRight + "px) !important;}";
        stylesCSS += "@media only screen and (max-width: 375px) {.inskinLoaded .theme--listing main .container, .inskinLoaded .theme--news main .container{padding-left: 10px !important; padding-right: 10px !important;}}";
        stylesCSS += "@media only screen and (max-width: 375px) {.inskinLoaded .ad_unit--20, .inskinLoaded .ad_unit--10{margin-left: -20px !important;} .inskinLoaded .theme--listing .ad_unit--20, .inskinLoaded .ad_unit--10{margin-left: -10px !important;}}";
        stylesCSS += "@media only screen and (max-width: 375px) {.inskinLoaded .theme--news .ad_unit--20, .inskinLoaded .ad_unit--10{margin-left: -10px !important;}}";
        stylesCSS += "</style>";
        $("head").append(stylesCSS)
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
        $(".inskinLoaded #intercom-container .intercom-launcher-discovery-frame, .inskinLoaded #intercom-container .intercom-launcher-frame, .inskinLoaded #intercom-container .intercom-notifications-frame, .inskinLoaded #intercom-container .intercom-launcher-badge-frame, .inskinLoaded .scroll-to-top__icon").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".inskinLoaded #intercom-container .intercom-launcher-discovery-frame, .inskinLoaded #intercom-container .intercom-launcher-frame, .inskinLoaded #intercom-container .intercom-notifications-frame, .inskinLoaded #intercom-container .intercom-launcher-badge-frame, .inskinLoaded .scroll-to-top__icon").css({
            "margin-bottom" : "0"
        });
    }
}

integration.on("adServed", function(e) {
    setTimeout(function() {
        window.dispatchEvent(new Event("resize"))
    }, 250)
});

integration.on("adClose", function(e) {
    $("html").removeClass("inskinLoaded");
    setTimeout(function() {
        window.dispatchEvent(new Event("resize"))
    }, 250)
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-1204518857076539\";\n/* Passback_Inskin_TH */\ngoogle_ad_slot = \"9430207720\";\ngoogle_ad_width = 320;\ngoogle_ad_height = 50;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
