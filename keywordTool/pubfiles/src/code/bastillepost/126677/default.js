integration.meta = {
	'sectionID' : '126677',
	'siteName' : 'Bastillepost - Desktop - (HK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1530]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708087',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1270,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType === "PageSkinSuperwide" || e.data.productType === "PageSkinPlusSuperwide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("#main, #footer").css({
			"max-width" : "1270px",
			"margin" : "0 auto",
			"right" : "0",
			"left" : "0"
		});
	}
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1670 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 984)/2; /* content width divided by 2 */
        $(".scroll-top-wrapper").css({
            "right" : sideWidth - 100
        });
    } else {
        $(".scroll-top-wrapper").css({
            "right" : "20px"
        });
    }
}
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
