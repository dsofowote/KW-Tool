integration.meta = {
	"sectionID" : "125332",
	"siteName" : "Jolie",
	"publisher" : "Stroeer",
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
	'mf_siteId' : '707344',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1290,
	"plr_PageAlignment" : "center",
	"plr_PageHeightAdjustment" : "-135",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "Column_Dbl_Rectangle",
	'plr_BarneyThresholdClicks' : 2,
	'plr_BarneyThresholdRate' : 1,
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		/*if ($(".wrap__center").length == 1) {
		 $("<div id='inskinanchor'></div>").insertAfter("#header");
		 integration.base.setCfg({
		 "plr_AnchorParent" : "#inskinanchor",
		 "plr_StartScrollOnAnchor" :  true
		 });
		 $("footer").css({
		 "margin" : "0 auto",
		 "padding" : "20px 0px"
		 });
		 }*/
		$(".wrap__right").css({
			"z-index" : "0",
			"width" : "0px"
		});
		$("#wrap").css({
			"left" : "0px"
		});
		/* publisher asked us to allow the header image to be displayed. Originally this was hidden as it was cauing a white space above the navigation
		 $(".wrap__top").css({
		 "min-height" : "0px"
		 });*/
		$(".main-footer").css({
			"max-width" : "1280px",
			"margin" : "0 auto",
			"padding" : "0"
		});
		//$("head").append("<style> @media screen and (min-width: 768px) {.body--burger-active #content, .body--burger-active .inskinanchor { margin-left : 130px;}} </style>");
		$("#page").append("<div style='height: 110px;' id='inskinbottom'></div>");
		$(".billboard").css({
			"margin" : "0",
			"height" : "0"
		});

		$("#div-gpt-ad-topbanner, #div-gpt-ad-banner, .billboard").css({
			"height" : "0"
		});
		$("head").append("<style>.cc_banner{max-width: 1280px !important; margin: 0 auto;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	FrameSideRight = e.data.plr_FrameSideRight;
	$('.burger__trigger, *').click(function() {
		setTimeout(function(){
		if ($('body').hasClass("body--burger-active")) {
			$("#wrap, .inskinanchor").css({
				"left" : FrameSideRight + 20
			});
		} else {
			$("#wrap, .inskinanchor").css({
				"left" : "0px"
			});
		}
		}, 100);
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 750) {/* screen size of when button starts overlapping PageSkin */
		integration.base.setCfg({
			plr_PageHeightAdjustment : "0"
		});
	} else {
		integration.base.setCfg({
			plr_PageHeightAdjustment : "-135px"
		});
	}
}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
	$(".ism-frame").parent().addClass("inskinanchor");
}); 