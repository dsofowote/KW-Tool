integration.meta = {
    'sectionID' : '129216',
    'siteName' : 'LoveMoney.com - Desktop - ( US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1310]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1065117',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1050,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".header, .footer").css({
  			"max-width" : "1050px",
  			"margin" : "0 auto"
  		});
    }
});

integration.on("layoutChange", function(e) {
   integration.custom.floatingButtons();
   $(window).resize(function() {
       integration.custom.floatingButtons();
   });
       integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
       integration.custom.InSkinBottomNav();
       $( document ).scroll(function() {
           integration.custom.InSkinBottomNav();
       });
});


integration.custom.floatingButtons = function() {
   var width = $(window).width();
   if (width >1460 || integration.custom.isSuper) {
       var sideWidth = (width - 1050)/2;
       $("#tbl-next-up").css({
           "right" : sideWidth,
       });
       $("#tbl-next-up").css({
             "right": sideWidth
         });
   }
}
