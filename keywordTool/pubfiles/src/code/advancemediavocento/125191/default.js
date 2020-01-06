integration.meta = {
	"sectionID" : "125191",
	"siteName" : "Vocento Regional Sites",
	"publisher" : "vocento",
	"platform" : "desktop"
};

integration.telemetry.setup({
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true
});

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706464',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1050,
	"plr_UseFullVersion" : true,
	"plr_FastInit" : true,
	"plr_HideElementsByID" : ""
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > .main-header > .navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .main-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50,
				plr_ScrollAdjustment : 40
			});
		}
		var headHeight = $("body > .main-header > nav").outerHeight();
		$("#inskinanchor").css({
			"position" : "relative"
		});
		$(".main-header").css({"margin-top": "0px"});
		$(".wrapper").css({"margin-top": "50px"});
		$("head").append("<style id='ismFloatingRight'></style>");
		$("head").append("<style id='ismFloatingLeft'></style>");
		$(".voc-multimedia-area, #pie").css({
			"max-width" : "1050px",
			"margin" : "auto"
		});
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
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
	var sideWidth = (width - 1050) / 2;
	$("#ismFloatingRight").html(".voc-articles-right.voc-active, .volver-mostrar.boton{right: " + sideWidth + "px !important;}");
	$("#ismFloatingLeft").html(".voc-articles-left.voc-active{left: " + sideWidth + "px !important;}");
}
