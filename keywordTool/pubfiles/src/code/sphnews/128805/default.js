integration.meta = {
    'sectionID' : '128805',
    'siteName' : 'Zaobao - Tablet - (SG)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1035570',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headerHeight = $("#crown").height();
      integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
      $("#brand, .content, #queen-command").css({
        "max-width" : "1040px",
        "margin" : "0 auto"
      });
      $(".container").css({
        "max-width" : "1040px"
      });
      $("#dfp-ad-skinning-wrapper").css({
        "display" : "none"
      });
      $(".avt-leaderboard").css({"display": "none"});
  		$("head").append("<style>#top-link-block.affix {right: " + (integration.custom.PageSkinRightPanel + 15) + "px; bottom:6% !important;}</style>");
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("head").append('<style>#brand, .container, .content{margin-left: 0px!important;} </style>');
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $("#queen-command").css({
            "margin-top" : newheight
        });
    }else{
        $("#queen-command").css({
            "margin-top" : "0px"
        });
    }
}

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "10001"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};