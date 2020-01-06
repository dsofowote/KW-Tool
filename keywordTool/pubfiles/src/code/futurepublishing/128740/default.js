integration.meta = {
    'sectionID' : '128740',
    'siteName' : 'Live Science - Desktop - (UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1033645',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".primary-nav").outerHeight();
        if ($(".primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight,
                plr_ScrollAdjustment: -headHeight
			});
        }
        $("#widgetArea0, #document-footer").css({"margin": "0 auto", "max-width": "1020px"});
        $(".slot-leaderboard, .slot-lightbox1").css({"display": "none"});
        $("head").append("<style> #widgetArea0 .loaded .wdyn-navbar-wrapper:after {background: unset !important;}</style>");
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_LiveScience/Inskin\", [728, 90]).display();\n<\\script>";
};
