integration.meta = {
   'sectionID' : '128104',
   'siteName' : 'Harper\'s Bazaar - (Creative Approval) - Desktop - ( SG )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '976461',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1080,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {

     if ($("#masthead").length == 1) {
                 $("<div id='inskinanchor'></div>").insertAfter("#masthead");
                 integration.base.setCfg({
                     plr_AnchorParent : "#inskinanchor",
                     plr_PageHeightAdjustment : -245
                 });
             }

      $("#submenu-wrapper, .nav-wrapper, .nav-wrapper.sticky").css({
        "width" : "1080px",
        "margin" : "auto",
        "left" : "0",
        "right" : "0"
      	});

      $(".footer").css({
        "width" : "1080px",
        "margin" : "0 auto"
      	});

   }
});


integration.on("layoutChange", function (e) {
    var frtop = e.data.plr_FrameTop;

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var aHeight = $("#ticker-bar").height();
      var bHeight = $(".logo-wrapper").height();
      var hheight = aHeight + bHeight;
      var scrollps = frtop + hheight;

      if (scroll < scrollps) {
          $("head").append("<style>.nav-wrapper.sticky {position:static !important}}</style>");
      } else {
          $("head").append("<style>.nav-wrapper.sticky {position:fixed !important}}</style>");
      }
    });
});
