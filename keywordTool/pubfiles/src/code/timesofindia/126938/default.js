integration.meta = {
	'sectionID' : '126938',
	'siteName' : 'Times of India - Desktop - (MENA)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708013',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1031,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#container, #navigation, #header, #footer, .sticky, .ad728, .article_divider, #articlelist, .bottom-area').css({
			"max-width" : "1031px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$('head').append('<style type="text/css">div.leftsocial.sticky {max-width:1031px; margin: 0 auto; left: 385px; right: 0;margin-left: auto !important; z-index: 2147483648;}</style>');
		var width = $(window).width();
		var sideWidth = (width - 1011)/2; /* content width divided by 2 */
        $("#gaanaplayer").css({
            "right" : sideWidth + 10
        });
        $('head').append('<style type="text/css">.article-social.sticky {position:fixed !important;}</style>');
        $("head").append("<style>.icon_player {display:none;}</style>");
	}
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100000"
    });
});
