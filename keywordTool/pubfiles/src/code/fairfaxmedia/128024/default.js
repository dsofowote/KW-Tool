integration.meta = {
	'sectionID' : '128024',
	'siteName' : 'Over Sixty - Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '969264',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : -0,
	/* Australian publishers need plr_ComscoreDevice set to desktop */
	'plr_ComscoreDevice' : 'desktop',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("footer, .pre-footer, header").css({
			"max-width" : "990px",
			"margin" : "auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\">\ngoogle_ad_client = \"ca-pub-8027655917349410\";\n/* Oversixty AdX Backup */\ngoogle_ad_slot = \"8584908748\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\ngoogle_page_url = \"http://www.oversixty.com.au\";\n\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
