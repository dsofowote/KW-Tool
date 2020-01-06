integration.meta = {
    'sectionID' : '129598',
    'siteName' : 'Motorsport - (Article Pages) - Tablet - (FR)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085919',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
  	'plr_ServePassbackInIframe' : true
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.ms-hapb-top{display: none !important;}</style>");
		var headHeight = $(".ms-topbox").height();
		if ($(".ms-topbox").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".ms-topbox");
			integration.base.setCfg({
				plr_AnchorParent: "#inskinanchor",
				plr_PageHeightAdjustment: -headHeight,
				plr_ScrollAdjustment: 0
			});
		}

		$("#center").css({
			"max-width": "1024px"
		});
		$("#footer, .ms-page-content, .ms-footer").css({
			"max-width": "1024px",
			"margin": "auto"
		});
		$("div[data-role='page'], .root").css({
			"overflow": "visible"
		});
		$("head").append("<style>#related_page:after{height: 0 !important;}</style>");
        $("body").removeClass("ms-fullwidth-layout");

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment': 'left'
			});
			$(".ms-page-content, .ms-footer").css({
				"margin": "0px"
			});
			$(".ms-footer").css({
				"margin-left": "20px"
			});
		}
	}
});

integration.on('layoutChange', function (e) {
	integration.custom.ismResize();
	$(window).on("resize", integration.custom.ismResize);
});

integration.on('adServed', function (e) {
	var headHeight = $(".ms-topbox-header").outerHeight();
	$(".ism-frame").parent().css({
		"top": headHeight,
		"position": "relative"
	});
});

integration.custom.ismResize = function () {
	var shareLeft = ($(window).width() - 1024) / 2;
	$("#center_shares_block").css({
		"left": shareLeft
	});
}


/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};
