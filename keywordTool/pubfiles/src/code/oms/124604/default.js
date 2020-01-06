integration.meta = {
	'sectionID': '124604',
	'siteName': 'Ruhr Nachrichten - Desktop - (DE)',
	'platform': 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '706765',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1080,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': ''
};

integration.on("adCallResult", function (e) {
	integration.custom.headHeight = $("header.WcmsHeader").outerHeight();
	$("#superbanner").hide();
	$("#main").css({
		"margin-top": "0px"
	});

	$("header.WcmsHeader").css({
		"position" : "fixed",
		"z-index" : "100000"
	});

	$("#m_wctrlWebsite").css({
		"margin-top" : integration.custom.headHeight
	});

	$(".WcmsFooter, .WcmsPageLogo").css({
		"max-width" : "1080px",
		"margin" : "0 auto"
	});

	/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
	integration._addPixel();
});

integration.on('adServed', function (e) {
	$('.ism-frame').parent().css({
		"z-index": "999",
		"top": integration.custom.headHeight,
		"position" : "relative"
	});
});