integration.meta = {
    'sectionID': '127574',
    'siteName': 'Netmoms - Tablet - (DE)',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '752053',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    "plr_StartScrollOnAnchor": true,
    "plr_ScrollAdjustment": 81,
    'plr_FastInit': true
};

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    $('.scrolltop').css({
        "right": integration.custom.FrameSideRight + 50
    });
});

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".siteHeader--fixed").css({"z-index": "99"});
        $('body, .site-wrapper').css({
            "overflow-x": "visible"
        });
        var headHeight = $(".siteHeader--fixed").outerHeight();
      if ($(".siteHeader--fixed").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".siteHeader--fixed");
        integration.base.setCfg({
          plr_AnchorParent: "#inskinanchor",
          pl_PageHeightAdjustment: -headHeight
        });
      }
        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            /* PageSkin Edge specific changes */
            $('main, .nmAd_BB-wr, footer').css({
                "max-width": "1040px"
            });
            $('.partner-bar, header').css({
                "margin-left": "-20px"
            });

            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
        }
    }
});

integration.on("adServed", function(e) {
  var headHeight = $(".siteHeader--fixed").outerHeight();
if ($(".siteHeader--fixed").length > 1) {
$(".ism-anchor").css({"top": "57px"});
}
    $(".ism-frame").parent().css({
        "z-index": "50"
    });
});
