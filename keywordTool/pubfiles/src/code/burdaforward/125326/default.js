integration.meta = {
	"sectionID" : "125326",
	"siteName" : "Bunte",
	"publisher" : "tomorrow",
	"platform" : "tablet"
};

integration.telemetry.setup({
   'url': true,
   'ad-served': true,
   'base-ready': true,
   'ad-call-response': true,
   'ad-call': true,
   'failed-test': true,
   'impression': true,
   'custom': true
});

integration.testParams = {};

integration.params = {
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		$('#ad_skyscraper').css('width', 'auto');
		$('#page').css({
			'min-width' : '1000px',
			'width' : '1020px',
			'margin' : '0 auto',
			'overflow' : 'hidden'
		});
		$('#bg-assets-container').css({
			'min-width' : '1000px',
			'width' : '1000px',
			'margin-left' : '-500px',
			'left' : '50%'
		});
		//$('head').append("<style>#navigation-container{position:absolute !important;}</style>");
		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

			$('#footer, #page').css({
				'margin-left' : '0px'
			});
			$("#footer").css({
				"max-width" : "1020px"
			});

			$('#bg-assets-container').css({
				'margin-left' : '0px',
				'left' : '0%'
			});

			integration.base.setCfg({
				plr_PageAlignment : 'left'

			});

		}

	}
});
