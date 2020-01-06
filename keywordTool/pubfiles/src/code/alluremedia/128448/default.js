integration.meta = {
	'sectionID' : '128448',
	'siteName' : 'Byrdie - Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1014001',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom': 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("header.navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.navbar");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : 0
			});
		}
		integration._addPixel();

		$(".top-slot-container").css({
			"display" : "none"
		});
		$("#main-container").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.owl-wrapper{width: 100% !important;max-width:1000px;margin:0 auto;} .owl-item{width: 14.25% !important;}</style>");
		$("head").append("<style>.homepage-widget.trending-products{padding-left: 0 !important;} .article-wrapper{float: none !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/1027487/byrdie', [-1, -1]).display();<\\script>";
};