integration.meta = {
	'sectionID': '128553',
	'siteName': 'Teepr - Smartphone - ( HK MY TW )',
	'platform': 'smartphone'
};

integration.testParams = {
	'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1022930',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #move-to-top{right: ' + (integration.custom.FrameSideRight + 10) + 'px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function (e) {
	$("#pull, #page, .mobile-menu-active .main-container-wrap").on("click", function () {
		integration.custom.ismSlideMenu();
	});

});

integration.custom.ismSlideMenu = function () {
	setTimeout(function () {
		if ($("body").hasClass("mobile-menu-active")) {
			integration.base.hideAd();
			$('body').addClass('inskinLoaded');
			console.log("menu open");
		} else {
			integration.base.showAd();
			$('body').removeClass('inskinLoaded');
			console.log("menu closed");
		}
	}, 100);
}

integration.on('adClose', function (e) {
	$('body').removeClass('inskinLoaded');
	$("head").append("<style>html{overflow-x: auto !important;}</style>");
});
