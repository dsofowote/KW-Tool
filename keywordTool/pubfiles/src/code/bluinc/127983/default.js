integration.meta = {
	'sectionID' : '127983',
	'siteName' : 'CLEO MY - (Unpublished until approval) - Desktop - ( MY )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '978396',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#mainslide, #shopthelook2, footer, header.header, .thb_mega_menu_holder").css({
			"max-width" : "970px",
			"margin" : "0 auto"
		});
		$("head").append("<style>#shopthelook2{max-width:970px !important;} .header.fixed .header_top .progress {left:-5px}</style>");
	}
});
