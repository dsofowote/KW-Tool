integration.meta = {
	"sectionID" : "124288",
	"siteName" : "TV.com",
	"publisher" : "cbs",
	"platform" : "desktop"
};




integration.telemetry.setup({
	'keywords' : true,
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true,
	'window-load': true
});

integration.testParams = {
	'desktop_resolution' : [1246]
};

integration.params = {
	
	
  'mf_siteId': '681685',
	"plr_ClickURL" : "",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 986,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "ad, mpu_placeholder, bottom_leader",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		// your code here
		if ($("._bento").length) {
			integration.base.setCfg({
				'plr_ContentW' : 986
			});
			$('#header_bar, .tv_footer, .bottom_leader, .m.header').css({
				'width' : '986px',
				'margin' : '0 auto'
			});
			$("body").css({
				"padding-top" : "50px"
			});
			$(".m.tv_header_spacer").css({
				"height" : "0px"
			});
		} else {
			$('#header_bar, .tv_footer, .bottom_leader, .m.header').css({
				'width' : '1170px',
				'margin' : '0 auto'
			});
			$("body").css({
				"padding-top" : "50px"
			});
			$(".m.tv_header_spacer").css({
				"height" : "0px"
			});
		};
	}
});

window.ISMPassback = function() {
	return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-2679103605715789\";\n/* ATF - 728x90 */\ngoogle_ad_slot = \"6761856601\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
