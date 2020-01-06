integration.meta = {
    'sectionID' : '128649',
    'siteName' : 'Gempak - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029954',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
	}
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "9999"
    });
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = screen.width;
    if (width < 1540 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = parseInt( $("div.navGempak-cell").css("marginRight") );
        $(".sf-back-to-top").css({
            "right" : sideWidth + 10
        });
    } else {
        $(".sf-back-to-top").css({
            "right" : "20px"
        });
    }
};
