integration.meta = {
	'sectionID' : '126916',
	'siteName' : 'The Roar- Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707905',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1188,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".po-nav-top__holder").outerHeight();
		if ($("header.po-nav-top").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.po-nav-top");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : headHeight
			});
		}
		$("#topbanner").css({
			"display" : "none !important"
		});
		$(".po-nav-top, .pa-footer-illustration, .pa-footer-illustration, .po-community-stats, .po-footer, .po-nav-sub, .pm-alert-bar").css({
			"width" : "1188px",
			"margin" : "0 auto"
		});
		$(".body__dark-theme").css({
			"background-color" : "white"
		});
		$("head").append("<style>#po_ad_newroar-desktop-header_0{display:none !important}}</style>");
	}
});

integration.on('layoutChange', function(e) {
	$("#newlivescores, #main").css({
		"margin-top" : "0px"
	});
});


/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/1005256/techly-billboard-1',  [728, 90]).set(\"page_url\", \"techly.com.au\").display();<\\script>";
};
