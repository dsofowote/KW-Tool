integration.meta = {
   'sectionID' : '128392',
   'siteName' : 'The Finder Singapore - (Unpub. until approv.) - Desktop - ( SG )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1008641',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1060,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_StartScrollOnAnchor' : true,
   'plr_PageHeightAdjustment' : -40,
   'plr_ScrollAdjustment' : -40
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var width = $(window).width();
     var sideWidth = (width - 1060)/2 + 30;
     $("#back-to-top").css({
         "z-index" : "4",
         "right" : sideWidth
     });
   }
});

integration.on("adServed", function(e) {
  var headHeight = $("#sph_network_banners").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
});
