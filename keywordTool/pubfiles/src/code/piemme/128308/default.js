integration.meta = {
   'sectionID' : '128308',
   'siteName' : 'Fantagazzetta - Tablet - (IT) ',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1001727',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
         /* Pageskin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#topbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#topbar");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$("footer").css({
			"max-width" : "1080px",
			"margin" : "0 auto"
		});
	}
});

integration.on('adServed', function(e) {
	var hh = $("#topbar").outerHeight();
	$(".ism-frame").parent().css({
		"top" : hh
	});
});
