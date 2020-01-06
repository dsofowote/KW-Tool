integration.meta = {
	'sectionID' : '126946',
	'siteName' : ' Ajel - Desktop - (MENA)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707582',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style id='ismFloatingButtons'></style>");
		$(".wrapper").css({
			"max-width" : "980px",
			"margin" : "auto"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.floatingButtons();
	$(window).on("resize, scroll", function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var shareBarTop = "20%";
	var headerHeight = $(".wrapper > .header_top.hide_on_mobile").height() + $(".wrapper > .header").height() + $(".wrapper > .navigation").height() + $(".wrapper > .sub-navigation").height();
	if ((($(window).height() / 5) + $(document).scrollTop()) < integration.custom.FrameTop + headerHeight ) {
		console.log("now");
		shareBarTop = "" + (integration.custom.FrameTop + headerHeight) + "px";
	}
	var sideWidth = ($(window).width() - 980) / 2;
	var shareHeight = $("#at4-share").height()
	$("#ismFloatingButtons").html("#at4-share, .foxpush_blocked_box_left{left: " + sideWidth + "px; top: " + shareBarTop + "!important;}.foxpush_blocked_box_left{margin-top: " + shareHeight + "px;}");
};
