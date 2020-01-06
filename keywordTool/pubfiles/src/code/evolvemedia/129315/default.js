integration.meta = {
    'sectionID' : '129315',
    'siteName' : ' Wrestlezone - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072256',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#js-site-navigation').css({'z-index': '5'});
      if ($("#js-site-navigation").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#js-site-navigation");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
    }
});

integration.on("adServed", function(e) {
   var headerHeight = $("header").outerHeight();
       $(".ism-anchor").css({"top" :headerHeight });
       integration.base.setCfg({
           plr_PageHeightAdjustment : -headerHeight,
         })
});
