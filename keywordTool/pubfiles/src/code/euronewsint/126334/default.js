integration.meta = {
	'sectionID' : '126334',
	'siteName' : 'Euronews - Desktop - (INT ex UK) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1600]
};

integration.params = {
	'mf_siteId' : '713701',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 1,
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSide = e.data.plr_FrameSide;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("body").css({
			'background-color' : '#fff'
		});
		$('.base-leaderboard').css({
			'height' : '0px'
		});
		var headerHeight = $("#js-header-sticky").height();
		var navHeight = $("#js-header").height();
		if ($("#enw-main-content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#enw-main-content");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -navHeight
			});
		}
		$('#enw-main-content > div.breadcrumbs__scroll, #enw-main-content, .enw-block-fluid, footer.enw-footer').css({
			'width' : '1280px',
			'margin' : '0 auto'
		});

		$("head").append("<style>.mailmunch-scrollbox{left: " + (integration.custom.FrameSide * 2.5) + "px !important; z-index: 99 !important;} .enw-btn--back-to-top.is-visible{right: " + (integration.custom.FrameSide * 2.5) + "px !important;}</style>");
		$("head").append("<style>.media__article-reading.stick{z-index: 99999 !important; } #enw-main-content{z-index: inherit !important;}</style>");

	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "999"
	});
	$("#js-header-sticky").css({
		"z-index" : "9999"
	});

});

integration.on('layoutChange', function(e) {
	integration.custom.InSkinScrollingPanels();
	$(document).scroll(function() {
		integration.custom.InSkinScrollingPanels();
	});
});

integration.custom.InSkinScrollingPanels = function() {
	var headerHeight = $("#js-header-sticky").height();
	if ($(".media__article-reading.stick").length == 1) {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : headerHeight + 42
		});
	} else {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : headerHeight
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/6458/Passback_tag/Inskin\" height=\"90\" width=\"728\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n";
};

