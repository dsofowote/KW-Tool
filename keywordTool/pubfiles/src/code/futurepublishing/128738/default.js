integration.meta = {
    'sectionID' : '128738',
    'siteName' : 'Tom\'s Hardware - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1348]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1041750',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1088,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		$(".fixed-anchor").css({
			"right" : sideWidth - 45
		});
		$("head").append("<style>.page.header-container{box-shadow: none !important; border: none !important;} .shopsavvy-header .shopsavvy-header-items{max-width: 1080px !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_TomsHardwareUS/Inskin\", [728, 90]).display();<\\script>";
};
