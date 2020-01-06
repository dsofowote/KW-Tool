integration.meta = {
    'sectionID' : '128477',
    'siteName' : 'Her Inspirasi - (Unpub Until Approv) - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1560]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1016754',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headerHeight = $("#header-container").innerHeight();
      if ($("#nav-container").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#nav-container");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headerHeight,
                plr_ScrollAdjustment : -353
            });
        }
      $("html").css({
      		"overflow-x" : "hidden"
    	});
      $("head").append("<style> #footer-container{width: 1300px !important; margin:0 auto !important;}</style>");
    }
});
