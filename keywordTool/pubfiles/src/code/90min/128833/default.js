integration.meta = {
	'sectionID' : '128833',
	'siteName' : 'FortniteIntel - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1281]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1037182',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1021,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$('#td-outer-wrap').css({
			"width" : "1021px",
			"margin" : "0 auto"
		});
		$('body .td-make-full').css({
			"padding-left" : "10px"
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
    if (width < 1440 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 984)/2; /* content width divided by 2 */
        $(".td-scroll-up").css({
            "right" : sideWidth
        });
    } else {
        $(".td-scroll-up").css({
            "right" : "5px"
        });
    }
}