integration.meta = {
	'sectionID' : '127279',
	'siteName' : 'E!Online - Desktop - AU',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706948',
	'plr_PageAlignment' : 'center',
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_ContentW' : 1280,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#HFooter').css({
			'padding-bottom' : '0px'
		});
		$('.nav__extender').css({
			'display' : 'none'
		});
		$('#Header_BannerBlock').css({
			'display' : 'none'
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-9162676083297313\";\n/* EOL Intl Desktop 728x90 */\ngoogle_ad_slot = \"4185601187\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};