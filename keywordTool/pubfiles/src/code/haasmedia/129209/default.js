integration.meta = {
    'sectionID' : '129209',
    'siteName' : 'Mannheim24 - Desktop - (AT CH DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1344]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1063920',
    'plr_PageAlignment' : 'left',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".id-SiteBEEPWrap").css({"margin": 0});
      $(".id-SiteSkWrap").css({"display": "none"});
      $("#PSAInnerWrapper").css({"left": "11px", "margin": "0"});
      $("#PSAPositionWrapper").css({"padding-top": "0"});

    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.rightSide();
    $(window).resize(function() {
        integration.custom.rightSide();
    });

    integration.custom.bottomNav();
    $( document ).scroll(function() {
        integration.custom.bottomNav();
    });

});

integration.custom.rightSide = function() {
    var width = $(window).width();
    if (width > 1344 || integration.custom.isSuper) {
        var sideWidth = (width - 1154);
        $("#sw_corner_video").css({
            "right" : sideWidth
        });
    }
}

integration.custom.bottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = integration.custom.PageSkinBottomPanel;
        $("#sw_corner_video").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#sw_corner_video").css({
            "margin-bottom" : "0"
        });
    }
}


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5176/idan.ludwigshafen24.de', [160, 600]).setTargeting('placement', ['Skyscraper']).display();\n<\\script>";
};
