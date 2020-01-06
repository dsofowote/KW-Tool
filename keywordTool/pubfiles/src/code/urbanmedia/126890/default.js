integration.meta = {
	'sectionID' : '126890',
	'siteName' : 'Potsdamer Neueste Nachrichten - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707642',
	'plr_PageAlignment' : 'custom',
	'plr_FramePositionCSS' : 'left: -80px; margin: 0 auto;',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 1200)/2 + 80;
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("head").append('<style>.um-main-wrapper{margin: 10px auto 0 !important;} .um-dins-wrapper .um-bigsize{margin: 0 auto !important;}</style>');
		$("head").append('<style> #urban-sky-right, #urban-sky-left{display: none;} .ism-frame{z-index: 9999999999 !important;}</style>');
		$("head").append('<style>body{padding-top: 0px !important;}</style>');
		$(".ts-header, .ts-topics-list").css({
			"max-width" : "1200px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});

		$(".ts-feedback-btn").css({
			"right" : sideWidth
		});
		$(".ts-up-button").css({
			"margin-left" : "-96px"
		});
		if ($(window).scrollTop() == 0) {
			$(".ts-header").css({
				"left" : "-80px"
			});
		}
	}
});


integration.on("layoutChange", function(e) {
	var stylesCSS = '<style type="text/css" id="inskinStyles">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	$(window).scroll(function() {
		  if ($(".ts-header").hasClass("ts-is-sticky")) {
				 $(".ts-header").css({
					 "left" : "-159px",
					 "right" : "0px"
				 });
		  } else {
				$(".ts-header").css({
					"left" : "-80px"
				});
		  }
	});
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
}
