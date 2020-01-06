integration.meta = {
  "sectionID": "124736",
  "siteName": "Volksstimme",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706290',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 980,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": ""
};

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
	$("[id^=jotform-feedback]").css({
		"top" : 35 + integration.custom.PageSkinTopPanel
	});
	
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1340 || integration.custom.isSuperWide) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 980)/2; /* content width divided by 2 */
        $("[id^=jotform-feedback]").css({
            "left" : sideWidth
        });
    } else {
        $("[id^=jotform-feedback]").css({
            "left" : "0"
        });
    }
}

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
	        integration.custom.isSuperWide = true;
	    }
		$('#ph-wr-out').css({
			'padding' : "0",
			"margin" : "0 auto"
		});
		$('.ph-superwrapper').css({
			"margin-top" : "10px"
		});
	}  
});
