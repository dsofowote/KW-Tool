integration.meta = {
   'sectionID' : '126991',
   'siteName' : 'Euronews - (Publisher Bookings) - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707411',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1280,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_StartScrollOnAnchor' : true,
   'plr_ScrollAdjustment' : 60,
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("body").css({
            'background-color' : '#fff'
        });
        $('.base-leaderboard').css({
        	'height' : '0px'
        });        
        var headerHeight = $("body > header > div").height();        
        if ($("#enw-main-content").length == 1) {
            $("#enw-main-content").prepend("<div id='inskinanchor'></div>");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headerHeight,
            });
        }
        $('#enw-main-content > footer, #enw-main-content > div.breadcrumbs__scroll').css({
            'width' : '1280px',
            'margin' : '0 auto'
        });        
        $("head").append("<style>.media__article-reading.stick{width: 1280px; margin: 0 auto;}</style>");
        $("head").append("<style>.enw-block-fluid{width: 1280px; margin: 0 auto;}</style>");        
    }
});