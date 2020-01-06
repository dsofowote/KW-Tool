integration.meta = {
	'sectionID' : '128824',
	'siteName' : 'Plastic Hub Daily - Desktop - (HK)',
	'platform' : 'desktop'
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
	'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1036000',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1240,
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
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1600 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("#onesignal-bell-container").css({
			"right" : sideWidth - 120
		});
	} else {
		$("#onesignal-bell-container").css({
			"right" : "0px"
		});
	}
}
