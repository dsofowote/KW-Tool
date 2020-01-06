integration.meta = {
   'sectionID' : '128420',
   'siteName' : 'Low Yat - Desktop - ( MY )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1011353',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1230,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var headerHeight = $(".subheader.fixed").height();
     var width = $(window).width();
     var sideWidth = (width - 1230)/2 + 3;
     integration.base.setCfg({
         plr_ScrollAdjustment : headerHeight
     });
     $("body").css({
         "background" : "#f5f5f5"
     });
     $("#footer, #subfooter").css({
         "width" : "1230px",
         "margin" : "0 auto"
     });
     $("#scroll_totop").css({
         "right" : sideWidth
     });
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "21"
    });
});
