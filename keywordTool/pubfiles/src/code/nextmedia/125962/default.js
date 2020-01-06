integration.meta = {
   'sectionID' : '125962',
   'siteName' : 'Apple Daily - Desktop - (INT)',
   'platform' : 'desktop'
};




integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706696',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_PageHeightAdjustment' : -127,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_AnchorParent" : ".container",
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".container").css({
			"padding-top" : "0"
		});
		$(".content").css({
			"padding-top" : "10px"
		});
		$("#adHeaderTop").css({
			"margin-top" : "10px"
		});
		$(".HeadBanner").css({
			"display" : "none"
		});
	}
});

integration.on("layoutChange", function(e) {
	$(".ism-frame").parent().css({
		"left" : "-10px"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-3513878437385321\";\n/* AdX - Headbanner - 970x90 - InSkin Passback */\ngoogle_ad_slot = \"2856484807\";\ngoogle_ad_width = 970;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};