integration.meta = {
	'sectionID': '126293',
	'siteName': 'Golf Magic - Tablet - (UK)',
	'platform': 'tablet'
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '707130',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 990,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_FastInit': true
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$('.header.js-header').css({
			'max-width': '960px',
			'margin': 'auto',
			'margin-top': '-9px',
		});

		$('.footer').css({
			'max-width': '960px',
			'margin': 'auto',
			'display': 'block',
			'margin-bottom': '-9px'
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment': 'left'
			});
			$("#main").css({
				"max-width": "980px"
			});
			integration.custom.EdgeSkin = true;
		}
		console.log("inskinop");
	}
});

integration.on('adServed', function () {
	console.log("inskinop2");
		var headHeight = $(".menu-bottom").outerHeight();
		if (integration.custom.EdgeSkin) {
			$(".ism-anchor, #main").css({
				"margin-top": headHeight
			});
		} else {
			$(".ism-anchor, #main").css({
				"top": headHeight
			});
		}
	});
	
	/* Passback Tag */
	window.ISMPassback = function () {
		return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/122227034/Golf_Magic',[[1,1]]).setClickUrl('%%CLICK_URL_UNESC%%').display(); <\\script>";
	};