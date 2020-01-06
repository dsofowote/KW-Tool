integration.meta = {
	'sectionID' : '128059',
	'siteName' : 'Trinity Mirror regionals - Desktop - ( INT exc. UK )',
	'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '972619',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1240,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 80,
	"plr_URLKeywords" : 2
};

/* -- START -- Moving eBay creative on scroll */

integration.on("layoutChange", function(e) {
	try {
		var advertID = integration.params.plr_CachedISAPResponse.PageSkinAd.CampaignID;
	} catch(e) {

	}
	if (advertID === 128047) {
		$("head").append("<style>#inskinanchor.ismClass  div.ism-frame:nth-child(even){padding-top:80px;}</style>");
		var docScroll;
		$(window).scroll(function() {
			docScroll = $(window).scrollTop();
			//console.log(docScroll);
			if (docScroll > 118) {
				$('#inskinanchor').addClass('ismClass');
			} else {
				$('#inskinanchor').removeClass('ismClass');
			}
		});
	}
});

/* -- END -- Moving eBay creative on scroll */

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		$('head').append('<style type="text/css">body {margin-top:113px !important;}</style>');

		$(".mod-pancakes section").css({
			"max-width" : "1240px",
			"margin" : "0 auto"
		});

		if ($(".mod-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".mod-header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : 0,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 80
			});
		}
		$("head").append("<style>.mod-pancakes{padding-top: 0 !important;}</style>");
		$("body > footer").css({
			"max-width" : "1240px",
			"margin" : "0 auto"
		});
		$(".top-slot").hide();
		$(".mod-header>.primary").css({
			"z-index" : "6"
		});
		$('#wraparound-ad-top, #wraparound-ad-right, #wraparound-ad-left').hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]])\n .setClickUrl('%%CLICK_URL_UNESC%%')\n .display();\n <\\script>";
};

