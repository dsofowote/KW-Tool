integration.meta = {
    'sectionID' : '130126',
    'siteName' : 'Football.fr - Desktop - (FR)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104544',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('footer').css({'max-width':'1000px','margin':'0 auto'});

        $("#header").removeClass("header-fixed");

        integration._addPixel();


    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1260 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1000)/2; /* content width divided by 2 */
        $("#sticker-video-popin").css({
            "left" : sideWidth
        });

    } else {
        $("#sticker-video-popin").css({
            "left" : "10px"
        });

    }
};

integration.on("adServed", function(e) {
	var headHeight = $('.header').height() -5;
      $(".ism-frame").parent().css({"z-index" : "10000"});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});



