integration.meta = {
    'sectionID' : '125639',
    'siteName' : 'Sporting News - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1496]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706686',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1236,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0,
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
    $(".main-content").css({"padding-top": "0px"});
    $(".ad-top-banner").css({"display": "none"});
    $(".footer").css({"max-width": "1236px", "margin": "auto"});
    $(".widget-footer").css({"width": "1236px", "margin": "0 auto"});
	}
});

integration.on("adServed", function(e) {
    var headHeight = $("header").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});


/* Passback Tag */
window.ISMPassback = function() {
	return "<!-- PubMatic ad tag (Javascript) : AU_sportingnew_728x90_ATF | http://www.sportingnews.com/AU | 728 x 90 Leaderboard-728X90 -->\n<script type=\"text/javascript\">\n                                var pubId=57248;\n                                var siteId=60984;\n                                var kadId=128755;\n                                var kadwidth=728;\n                                var kadheight=90;\n                                var kadtype=1;\n                                var kadpageurl=\"%%SITE%%\";\n                                var kadpubclkurl ='%%CLICK_URL_UNESC%%';\n<\\script>\n<script type=\"text/javascript\" src=\"http://ads.pubmatic.com/AdServer/js/showad.js\"><\\script>";
};
