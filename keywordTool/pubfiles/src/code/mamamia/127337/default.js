integration.meta = {
    'sectionID' : '127337',
    'siteName' : 'MamaMia - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '713125',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			$(".full-width").css({"max-width" : "1000px", "margin" : "auto", "left" : "unset", "right" : "unset"});
			$(".leaderboard-main-ad").css({"top" : "290px"});
			$("#__nuxt").css({"margin-top" : "30px"});
			$("#leaderboard_pos1").css({"display" : "none"});
			window.unloadPageskin = function() {
			            try {
			                integration.destroy();
			            } catch (e) {
			            }
			        };
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
    if (width > 1280 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1000)/2; /* content width divided by 2 */
        $('head').append('<style type="text/css">#embedvideo-b0VeW6sQ, #close-video-completely-button {right :'+ (sideWidth+20) +'px !important;}</style>');
    }
}

integration.on("adServed", function(e) {
	var headHeight = $(".nav-full").outerHeight();
	$(".ism-frame").parent().css({"z-index" : "999999", "top": headHeight});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight,
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/112925372/Inskins_Passback_970x250', [970, 250]).setTargeting('Partner', ['inskin']).display();\n<\\script>";
};
