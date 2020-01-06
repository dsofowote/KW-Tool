integration.meta = {
	'sectionID' : '128166',
	'siteName' : 'Accuweather - Smartphone - (INT)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '984157',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : 15,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #app-store-links li{float: none !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var bodyWidth = ($(window).width() - integration.custom.FrameSideRight);
	$("head").append("<style>.inskinLoaded .main-menu{right: " + integration.custom.FrameSideRight + "px !important;}</style>");
	$("head").append("<style>body.inskinLoaded{min-width: " + bodyWidth + "px !important;}</style>");
	$("head").append("<style>.inskinLoaded #app-store-links{max-width: " + bodyWidth + "px;}</style>");
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n\t\n\tvar aw_partner = 'ad2one_INSKIN';\n\t\n\t//web|mweb\n\tvar aw_platform = 'web';'mweb' \t\t\n\tvar aw_size = [320,50];[970,250];\t\t\n\t\n\t//web: top|top_right|bottom|bottom_right\n\t//mWeb: top|middle|bottom\n\tvar aw_slot = 'top';\t\t \t\n\t\t\t\t\t\t\t\t\t\n\t/*==================================\n\t\tNo need to alter below.\n\t*/\n\t//defaults\n\tvar awhb_bidder='0';\n\tvar awhb_pb='0.00';\n\tvar awhb_adid='0';\n\tvar awhb_size='0';\n\tvar awhb_fromCache='0';\n\tvar aw_url = 'https://www.accuweather.com';\n\t\n\ttry{\n\t\taw_url = window.top.location.href;\n\t\t\n\t\t//find the winner for the correct size\n\t\tvar aw_search_size = aw_size[0]+'x'+aw_size[1];\n\t\tvar aw_bids = window.top.pbjs.getBidResponsesForAdUnitCode(aw_slot);\n\t\tvar aw_high_bid = -1;\n\t\tvar aw_high_bidder = {};\n\t\tif(aw_bids){\n\t\t\tfor (var x in aw_bids.bids){\n\t\t\t\tif (aw_bids.bids[x].size == aw_search_size && aw_bids.bids[x].cpm > aw_high_bid){\n\t\t\t\t\taw_high_bid = aw_bids.bids[x].cpm;\n\t\t\t\t\taw_high_bidder = aw_bids.bids[x].adserverTargeting;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t\n\t\tif (aw_high_bidder){\n\t\t\tawhb_bidder = aw_high_bidder['hb_bidder'];\n\t\t\tawhb_pb = aw_high_bidder['hb_pb'];\n\t\t\tawhb_adid = aw_high_bidder['hb_adid'];\n\t\t\tawhb_size = aw_high_bidder['hb_size'];\n\t\t\tawhb_fromCache = aw_high_bidder['hb_fromCache'];\n\t\t}\n\t\t\n\t}catch(e){}\n\t\n\tgoogletag.pubads().definePassback( \"/6581/passbacks/\"+aw_platform+\"/\"+aw_slot, aw_size)\n\t\t.setTargeting(\"hb_bidder\", awhb_bidder)\n\t\t.setTargeting(\"hb_pb\", awhb_pb)\n\t\t.setTargeting(\"hb_adid\", awhb_adid)\n\t\t.setTargeting(\"hb_size\", awhb_size)\n\t\t.setTargeting(\"hb_fromCache\", awhb_fromCache)\n\t\t.setTargeting(\"pb\", [\"true\", aw_partner])\n\t\t.set(\"page_url\", aw_url)\n\t\t.display();\n<\\script>\n";
}; 