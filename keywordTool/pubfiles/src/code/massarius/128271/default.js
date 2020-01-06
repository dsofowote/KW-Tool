integration.meta = {
	'sectionID': '128271',
	'siteName': 'Ajax Showtime - Desktop - ( NL )',
	'platform': 'desktop'
};

integration.testParams = {
	'desktop_resolution': [1260]
};

integration.async = false;

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '996184',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1000,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_StartScrollOnAnchor': true,
	'plr_ServePassbackInIframe': false,
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		var headerHeight = $(".large_menu").height() + $(".small_menu").height() + $("body > header").height();
		if ($(".large_menu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				plr_PageHeightAdjustment: -headerHeight
			});
		}

	}
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<script id=\'inskinPB\'>\r\n\t\tvar pbiframe = window.frameElement;\r\n\t\tpbiframe.style.height = 0;\r\n\t<\/script>"
	//return "<script type=\"text/javascript\">\ndocument.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=304014&inskin=1&w=970&h=250&ic='\n+ (window.parent.tokuslid_ic_970x250 || '') + '&sb='\n+ (window.parent.tokuslid_sb_970x250 || '') + '&gd='\n+ (window.parent.tokuslid_gd_970x250 || '') +  '\">'\n+ '</scr' + 'ipt>');\n<\\script>";
};