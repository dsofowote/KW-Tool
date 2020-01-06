integration.meta = {
    'sectionID' : '129774',
    'siteName' : 'Noodou  - Desktop - ( HK MY SG TW )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088010',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#header").height() + $("#res-img").height();
      var topHeight = $("#res-img").height();
      var width = $(window).width();
      var sideWidth = (width - 1200)/2;
      if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }
        console.log(headHeight);
        $("#mainContainer").css({
          "z-index" : "2"
        });
        $("#footer, .fixed-next-page.stuck").css({
          "max-width" : "1200px",
          "margin" : "0 auto"
        });
        $(".fixed-next-page.stuck").css({
          "left" : "0",
          "right" : "0"
        });

        if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
          integration.custom.isSuper = true;
          $('.the_champ_sharing_container').css({
            "left" : sideWidth
          });
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1650 || integration.custom.isSuper) {
        var sideWidth = (width - 1200)/2;
        $('.the_champ_sharing_container').css({
          "left" : sideWidth
        });
    } else {
      $('.the_champ_sharing_container').css({
        "left" : "-10px"
      });
    }
}

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100000000"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script>\nvar sublime = sublime || {};\nsublime.pixelImpression = '%%VIEW_URL_ESC%%';\nsublime.pixelClick = '%%CLICK_URL_ESC%%';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=24132\"><\\script>";
};
