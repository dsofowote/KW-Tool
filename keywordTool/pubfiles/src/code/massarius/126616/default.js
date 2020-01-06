integration.meta = {
	'sectionID' : '126616',
	'siteName' : 'BDU Media - Tablet - (NL)',
	'platform' : 'tablet'
};

integration.async = false;

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707428',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ServePassbackInIframe' : false
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".page-wrapper").css({
				"margin-left" : "-30px"
			});
			$("footer").css({
				"max-width" : "1000px"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\">\n\n\n    document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=237598&w=970&h=250&ic='\n+ (window.tokuslid_ic_970x250 || '') + '&sb='\n+ (window.tokuslid_sb_970x250 || '') + '&gd='\n+ (window.tokuslid_gd_970x250 || '') +  '\">'\n+ '</scr' + 'ipt>');\n\n\n<\\script>\n";
}; 