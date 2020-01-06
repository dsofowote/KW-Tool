integration.meta = {
   'sectionID' : '127181',
   'siteName' : 'India Times - Desktop- (INT ex ASIA, UK, MENA)  ',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707449',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1110,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_StartScrollOnAnchor' : true,
   'plr_ScrollAdjustment' : 62
};

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});
integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1430) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1100) / 2; /* content width divided by 2 */
        $("#back-top").css({
            "right": sideWidth + 15
        });
    } else {
        $("#back-top").css({
            "right": "15px"
        });
    }
}

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    	var forTopHeight = $('.forTop').height();
    	var stickHeaderHeight = $('.stick-header').height();
    	var combinedHeaderHeight = forTopHeight + stickHeaderHeight;
        if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -combinedHeaderHeight
            });
        }
        $("#inskinanchor").css({
            "margin-top": "0"
        });
        $(".last-container, .footer-container, .copyright-container").css({
            "max-width": "1110px",
            "margin": "0 auto"
        });
        $(".footer-container").css({
            "padding-left": "10px"
        });
    }
});