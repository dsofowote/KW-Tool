integration.meta = {
    'sectionID' : '129661',
    'siteName' : 'Techradar - Tablet - (SG)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086270',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 972,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
  	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
  	"plr_HideElementsByClass" : "advertBlock"
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".primary-nav, #document-footer, #main, .slot-lightbox1").css({
          "max-width" : "970px",
          "margin-left" : "auto",
          "margin-right" : "auto"
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".primary-nav, #document-footer, #main, .slot-lightbox1, .slot-leaderboard").css({
              "margin-left" : "0"
            });
        }
    }
});
