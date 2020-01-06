integration.meta = {
	'sectionID' : '128467',
	'siteName' : 'Potsdamer Neueste Nachrichten - Tablet - (DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1016492',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1082,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_ScrollAdjustment" : -170,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style type="text/css"> .ts-stage-wrapper {max-width : 1070px !important; min-width: 1070px!important; padding-left: unset!important; padding-right: unset!important;}</style>');
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.um-grid-wrapper, .um-main-wrapper, .um-dins-wrapper{margin: 0 !important;}</style>");

		}

		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("head").append('<style>.urban-leaderboard, .um-main-wrapper{margin: 10px auto 0 !important;} .um-dins-wrapper{margin: 0 auto !important;}</style>');
		$("head").append('<style> #urban-sky-right, #urban-sky-left{display: none;} .ism-frame{z-index: 9999999999 !important;} .um-grid-wrapper, .um-dins-wrapper{width: 1082px !important; margin: 0 auto;}</style>');
	}
});

integration.on("layoutChange", function(e) {
	var stylesCSS = '<style type="text/css" id="inskinStyles">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	$(window).scroll(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1950 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		var newvalue = '.plista_widget_slide{right: ' + (sideWidth - 50) + 'px !important;}';
		document.getElementById('inskinStyles').innerHTML = newvalue;

	} else {
		var newvalue = '.plista_widget_slide{right: 10px !important;}';
		document.getElementById('inskinStyles').innerHTML = newvalue;
	}
};
