integration.meta = {
    'sectionID' : '128454',
    'siteName' : 'Mthai - Tablet - ( TH )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1015204',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    	$("body").addClass("inskinanchor");
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("head").append("<style>.off-canvas-wrapper, #page, .off-canvas-content{margin: 0 !important;}</style>");
            //Styling for all of the different nav bars as they have different classes/id's
		$("head").append("<style>.inskinanchor div#site-menu.top-bar.show-for-large.sticky, .inskinanchor header#top-bar.top-bar.sticky.is-stuck, .inskinanchor #widemenu div.sticky{left: 20px !important; right: 100% !important;}</style>");
        }
        $('.off-canvas-wrapper, #page, .off-canvas-content').css({
			"max-width" : "1200px",
			"margin" : "0 auto",
			"overflow" : "visible"
		});
		
		//Styling for all of the different nav bars as they have different classes/id's
		$("head").append("<style>div#site-menu.top-bar.show-for-large.sticky, header#top-bar.top-bar.sticky.is-at-top, .inskinanchor div#site-menu.top-bar.show-for-large.sticky.is-anchored.is-at-top, div#site-menu.top-bar.show-for-large, #wapper-top-menu-bar, #widemenu div.sticky, .site-nav{max-width: 1200px !important; margin: 0 auto; left: 0 !important; right: 0;}</style>");
		$("head").append("<style>.site-social, .site-social-group{margin-right: 15px !important;}</style>");
	}

});

integration.on("adServed", function(e) {
	var marginRight = $(".off-canvas-content").css("marginRight");
	$("head").append('<style>div#site-menu.off-canvas.position-right.is-transition-push.is-open{right: ' + marginRight + ' !important;}</style>');
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$(window).scroll(function() {
		if ($(window).scrollTop() <= integration.custom.FrameTop) {
			$('div#site-menu.off-canvas.position-right.is-transition-push.is-open').css({
				"margin-top" : integration.custom.FrameTop
			});
		} else {
			$('div#site-menu.off-canvas.position-right.is-transition-push.is-open').css({
				"margin-top" : 0
			});
		}
	});
});
