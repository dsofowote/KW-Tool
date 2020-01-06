integration.meta = {
	'sectionID' : '126939',
	'siteName' : 'Times of India - Desktop - (ASIA) ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '707764',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1011,
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
		$('#container, #navigation, #header, #footer, .sticky, .ad728, .article_divider').css({
			"max-width" : "1011px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});

		$('head').append('<style type="text/css">div.leftsocial.sticky {max-width:1011px; margin-left: 0;}</style>');
		$('head').append('<style type="text/css">div.leftsocial {max-width:1011px; margin-left: 0;}</style>');
		var width = $(window).width();
		var sideWidth = (width - 1011)/2; /* content width divided by 2 */
        $("#gaanaplayer").css({
            "right" : sideWidth + 10
        });
        $('head').append('<style type="text/css">.article-social.sticky {position:fixed !important;}</style>');
        $("#articlelist").css({
            "max-width" : "1011px"
        });
        var width = $("#container").width();
        $(".top_articlelist").css({
            "max-width" : "1011px",
            "left" : "50%",
            "transform" : "translateX(-50%)"
        });
        $(".ent_red_nav.homenav").css({
            "max-width" : "1011px"
        });
	}


});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100000"
    });
});

integration.on("layoutChange", function(e) {
    integration.custom.resizeArticleList();
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.resizeArticleList();
        integration.custom.floatingButtons();
    });
});

integration.custom.resizeArticleList = function() {
    if ($(window).width < 1005) {
        var width = $(window).width();
    } else {
        var width = $("#container").width();
    }
    $(".top_articlelist").css({
        "left" : "50%",
        "transform" : "translateX(-50%)"
    });
}

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1390 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1011)/2; /* content width divided by 2 */
        $("div.leftsocial.sticky, div.leftsocial").css({
            "left" : (sideWidth + 20) + "!important"
        });
    } else {
        $("div.leftsocial.sticky, div.leftsocial").css({
            "left" : "10px !important"
        });
    }
}
