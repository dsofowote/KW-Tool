integration.meta = {
    'sectionID' : '127701',
    'siteName' : 'Emotion - Smartphone - (DE)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '831110',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageHeightAdjustment' : -77
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        if ($("header.l-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header.l-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
            });
        }
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .pane-title{word-break: break-all;}';
        stylesCSS += '.inskinLoaded .node--full .links li{margin-right: 0.1em;}';
        stylesCSS += '.inskinLoaded .emo-article-region--wrapper .emo-article-region--content-main{padding: 0 1%;;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('adServed', function(e) {
    var headHeight = $(".l-header").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 300);
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.laychange();
    $(window).on('resize', function() {
        integration.custom.laychange();
    });
});

integration.custom.laychange = function() {
    var windowWidth = $(window).width();
    var contentWidth = windowWidth - integration.custom.FrameSideRight;
    $("head").append("<style>.inskinLoaded .article-list--short-teaser{max-width: " + contentWidth + "px;}</style>");
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 300);
});
