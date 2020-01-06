integration.meta = {
    'sectionID' : '129584',
    'siteName' : 'Techradar - Tablet - (ASIA)',
    'platform' : 'tablet'
};

integration.telemetry.setup({
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
});

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1085483',
  'plr_PageAlignment' : 'center',
    'plr_ContentW': 972,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $(".primary-nav, #document-footer, #main, #dfp_advert_4, .dfp-leaderboard-container").css({
      "max-width": "970px",
      "margin-left": "auto",
      "margin-right": "auto"
    });

	$(".autocomplete").css({
		"width" : "0px"
	});
    // format the site for PageSkin Edge
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      $(".primary-nav, #document-footer, #main, #dfp_advert_4, .slot-leaderboard").css("margin-left", "0px");
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
      var windowWidth = $(window).width();
      $(".moat-skin-container-tracking").css({
        "width" : windowWidth
      });
    }
  }
});
