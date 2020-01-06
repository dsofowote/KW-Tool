integration.meta = {
   'sectionID' : '128413',
   'siteName' : 'CARI BM infonet - Desktop - ( MY )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1010890',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1020,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var h1Height = $("#w1").height();
     var h2Height = $("#fixedtop1").height();
     var h3Height = $("#fixedtop").height();
     var headerHeight = h2Height + h3Height + 15;
     var footerHeight = $("#ft").height();
     var pageHeightAdj = footerHeight - h1Height - h2Height - h3Height + 90;
     var width = $(window).width();
     var sideWidth = (width - 1020)/2;
     if ($("#wp").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#wp");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : pageHeightAdj
            });
        }

      $("head").append("<style>body > #ft{width:1020px !important; left: 0; right:0; margin-left: auto; margin-right: auto;}</style>");
      $("head").append("<style>div#fixedtop{box-shadow: none !important;}</style>");
      $("head").append("<style>#scrolltop{right:" + sideWidth + "px !important;}</style>");
      $("head").append("<style>.menulist{left:" + sideWidth + "px !important;}</style>");
      $("head").append("<style>.vmenuclose{left:" + (sideWidth + 170) + "px !important;}</style>");
      $("div.menulist, .vmenuclose").css({
          "z-index" : "11"
      });
      if ($(".b1title").length > 0){
        integration.base.setCfg({
            plr_ScrollAdjustment : -headerHeight
        });
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
        $(".menulist, .vmenuclose").css({
            "margin-top" : newheight
        });
    }else{
        $(".menulist, .vmenuclose").css({
            "margin-top" : "0px"
        });
    }
}
