integration.meta = {
	'sectionID' : '125017',
	'siteName' : 'Petit Chef - Desktop - (IT)',
	'platform' : 'desktop'
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706701',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1005,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});

integration.on('layoutChange', function(e) {
	var headerHeight = $("#header-sticky").height() + $("#rd-sticky").height();
	$(window).scroll(function() {
		if ($("#header-sticky").length == 1 && $(window).scrollTop() > 0) {
			integration.base.setCfg({
				plr_ScrollAdjustment : headerHeight
			});
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=4032\"><\\script><script type=\"text/javascript\"> var ismi = window.frameElement; ismi.style.width=\"1px\"; ismi.style.height=\"1px\";<\\script>";
};