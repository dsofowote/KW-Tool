integration.meta = {
   'sectionID' : '126372',
   'siteName' : 'Metacritic - Desktop - (EMEA)',
   'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706997',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#site_layout").append("<div style='clear:both'></div>");
		$("#site_layout").css({
			"margin" : "0 auto",
			"max-width" : "990px"
		});
	}
});

window.ISMPassback = function() {
  return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-2679103605715789\";\n/* ATF - 728x90 */\ngoogle_ad_slot = \"6761856601\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};