integration.meta = {
    'sectionID' : '126597',
    'siteName' : ' Essential Baby - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1256]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028286',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 996,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".navigation").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".navigation");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -182,
				'plr_StartScrollOnAnchor' : true,
				'plr_ScrollAdjustment' : 50
			});
			$('.outer-wrap, .footer').css({
				"width" : "996px",
				"margin" : "0 auto"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "  <script type=\"text/javascript\">\n    <!--\n    google_ad_client = \"ca-pub-8027655917349410\";\n    /* AdX InSkin PageSkin Passback - Essential Baby */\n    google_ad_slot = \"InSkinPB-EssentialBaby\";\n    google_ad_width = 728;\n    google_ad_height = 90;\n    //-->\n  <\\script>\n  <script type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n  <\\script>";
};
