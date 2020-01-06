integration.meta = {
	"sectionID" : "124560",
	"siteName" : "TeamTalk",
	"publisher" : "sky",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1280]
};

integration.params = {

  'mf_siteId': '681904',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1020,
	"plr_PageAlignment" : "center",
	"plr_URLKeywords" : 1,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "tt-banner, mpu, tt-nav"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('.tt-banner, .tt-search').hide();
		$('.tt-header').css({
			'min-height' : '50px'
		});
		$(".advert--leaderboard").hide();
	}
});

integration.on("adServed", function(e) {
	$('body').css({
		'background-image' : 'none'
	});
	$('head').append('<style>.base-ad-mpu {height: auto !important;}</style>');
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!--  Begin Rubicon Project Tag -->\n<!--  Site: Sky UK Team Talk - RTB Only   Zone: PC ROS   Size: Leaderboard  -->\n\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = '7908';\nrp_site      = '18350';\nrp_zonesize  = '54714-2';\nrp_adtype    = 'js';\nrp_smartfile = '[SMART FILE URL]';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/7908.js\"><\\script>\n<!--  End Rubicon Project Tag -->";
};
