integration.meta = {
   'sectionID' : '127497',
   'siteName' : 'The Official Charts Company - Tablet - (US)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '729042',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1100,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('pageskin-on');
		$(".adspace-top").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$("#container").css({
				"margin-left" : "0px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$("body").addClass("pageskin-on");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=22680\"><\\script> ";
};