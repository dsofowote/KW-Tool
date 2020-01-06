integration.meta = {
   'sectionID' : '128169',
   'siteName' : 'ellahoy - Smartphone - ( ES )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '984319',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_StartScrollOnAnchor" : true
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headerHeight = $('#wrapSite > div.header-wrap').height();
        if ($("#wrapSite > div.header-wrap").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#wrapSite > div.header-wrap");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -51,
            });
        }

        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #wrapSite{overflow: visible;}';
        stylesCSS += '.inskinLoaded figure img.lazy{height: auto;}';
        stylesCSS += '.inskinLoaded #home-content .list-c6>ul>li img{height: auto;}';
        stylesCSS += '.inskinLoaded .shareMobileContHQ .nano-share.ns-mobile li a[class*="icon-"]{margin-right: 1px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);

        $("head").append("<style>.inskinLoaded #wrapSite > div.header-placeholder-no-class, .inskinLoaded #wrapSite > div:nth-child(3) {height: 0 !important;}</style>");
        $("head").append("<style>.inskinLoaded #highlight > div.rsOverflow.grab-cursor{width: 100% !important;}</style>");
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.TopPanel = e.data.plr_FrameTop;
    var windowWidth = $(window).width();
    var cwidth = windowWidth - integration.custom.FrameSideRight;

    $("head").append("<style>.inskinLoaded .sb-width-wide{width: calc(100% - " + integration.custom.FrameSideRight + "px);}</style>");
    $("head").append("<style>.inskinLoaded section#highlight article img{width: auto; height: auto; min-width: 0px; min-height: 0px;}</style>");
    $("head").append("<style>.inskinLoaded #wrapPage, .inskinLoaded .menuspeciale{margin-top: " + integration.custom.TopPanel + "px;}</style>");

    integration.custom.ismResize();
    $(window).on("resize", function() {
        integration.custom.ismResize();
    });
});

integration.custom.ismResize = function() {
    var windowWidth = $(window).width();
    $("head").append("<style>.inskinLoaded .header-wrap{width: " + windowWidth + "px !important;}</style>");
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
});
