integration.meta = {
    'sectionID' : '128954',
    'siteName' : 'Motorsport - ((ARTICLE PAGES)) - Desktop - ( INT )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1043281',
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
		var headHeight = $(".eHeader.rtprime").height() + $(".eHeader-1").height();
		if ($(".eHeader.rtprime").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".eHeader.rtprime");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment : 0
			});
		}
		
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});
		$("#center").css({
			"max-width" : "1000px"
		});
		$("#footer, .ms-page-content").css({
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
		"top" : headHeight,
		"position" : "relative"
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
    return "<!-- Headway Digital DS_SMTSPORT_Ani_OUTS_WW_$3.8_007733_motorsport.com-->\n<script async id=\"aniviewJS775985688\" src=\"https://play.aniview.com/59a5603f28a0611e9360c113/5b213d8428a061681e037ed3/motorsport.com_DT_OS_1.js\"><\\script>\n";
};
