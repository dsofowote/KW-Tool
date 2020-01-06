integration.meta = {
   'sectionID' : '127399',
   'siteName' : 'Fanpiece - Desktop - (HK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1310]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '717454',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1050,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

/** Move to-top-of-page button inside PageSkin when overlaps **/
integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});
integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1500) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1050)/2; /* content width divided by 2 */
        $("#page-number, #fast-forward, #scrollUp").css({
            "left" : sideWidth + 20
        });
        $("#toggle-infinite-scroll").css({
            "left" : sideWidth + 11
        });
    } else {
        $("#page-number, #fast-forward, #scrollUp").css({
            "left" : "38px"
        });
        $("#toggle-infinite-scroll").css({
            "left" : "29px"
        });
    }
}

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var hHeight = $('#navigation-wrapper').height();
	   $('head').append('<style type="text/css">#navigation-wrapper {position: fixed;top: 0;}</style>');
	   $('body').css({
		    "margin-top" : hHeight
		});
	   $('div#highlight').parent().css({
		   "max-width" : "1043px",
		   "margin" : "0 auto",		    
		});
	   $('#footer, .magazine-navigation').css({
		   "max-width" : "1043px",
		   "margin" : "0 auto",		    
		});
   }
});
