integration.meta = {
	'sectionID' : '125673',
	'siteName' : 'Fussballeuropa',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706550',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	//'plr_FramePositionCSS' : 'border-right:866px transparent solid;margin:0 auto;'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#page").append("<div style='clear: both'></div>");
		$("#page").css({
			"margin" : "0"
		});
		
		$("html").css({
			"background" : "#ddd"
		});
		$("head").append("<style>.content{margin:0 auto !important;float:none;}</style>")
		$("head").append("<style>.sb-active, #sb-site, .sb-slide{z-index:10;}")
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
    if (width < 1300) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 980)/2; /* content width divided by 2 */
        $(".scrollToTop").css({
            "right" : sideWidth + 20
        });
    } else {
        $(".scrollToTop").css({
            "right" : "10px"
        });
    }
}
