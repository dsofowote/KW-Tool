integration.meta = {
    'sectionID' : '129594',
    'siteName' : 'Motorsport - (Article Pages) - Desktop - (FR) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085915',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.ms-hapb-top{display: none !important;}</style>");
		var headHeight = $(".ms-topbox").height();
		if ($(".ms-topbox").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".ms-topbox");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : 0
			});
		}
		$("#center").css({
			"max-width" : "1000px"
		});
		$(".ms-footer, .ms-page-content").css({
			"max-width" : "1000px",
			"margin" : "auto"
		});
		$("div[data-role='page'], .root").css({
			"overflow" : "visible"
		});
		$("head").append("<style>#related_page:after{height: 0 !important;}</style>");
		$("body").removeClass("ms-fullwidth-layout");
	}
});

integration.on('adServed', function(e) {
	var headHeight = $(".ms-topbox").outerHeight();
	$(".ism-frame").parent().css({
		"position" : "relative",
    "z-index" : "3"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.ismResize();
	$(window).on("resize", integration.custom.ismResize);
});

integration.custom.ismResize = function() {
	var shareLeft = ($(window).width() - 1000) / 2;
	$("#center_shares_block").css({
		"left" : shareLeft
	});
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 970;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};
