integration.meta = {
	'sectionID' : '127319',
	'siteName' : 'Homes To Love - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707626',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.header__inner').height();
		var extraNavHeight = $('.uniheader').height();
		var TotalHeight = headerHeight + extraNavHeight;
		if ($("div.header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("div.header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$('.default-template').css({
			"overflow-x" : "visible"
		});
		$("head").append("<style>.section__heading{padding-top: 10px !important;} .header{position: fixed; top: 0 !important;}</style>");
		$("head").append("<style>.default-template--homepage .header:not(.header--expanded){margin-top: 0 !important;} .uniheader{top: -" + extraNavHeight + "px !important;}</style>");
		if ($(".uniheader").length == 1) {
			$('#inskinanchor').css({
				"position" : "relative",
				"margin-top" : TotalHeight
			});
			integration.base.setCfg({
				"plr_PageHeightAdjustment" : -TotalHeight,
				"plr_ScrollAdjustment" : -extraNavHeight
			});
		} else {
			$('#inskinanchor').css({
				"position" : "relative",
				"margin-top" : headerHeight
			});
			integration.base.setCfg({
				"plr_PageHeightAdjustment" : -headerHeight
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n\n   googletag.pubads().definePassback(\"/13534306/homestolove\", [728, 90]).display();\n\n<\\script>";
};
