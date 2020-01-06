integration.meta = {
	'sectionID' : '124866',
	'siteName' : 'Vogue PageSkin',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.telemetry.setup({ 
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'custom': true
});

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707538',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -136	
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		$("#wrapper_pub").css({
			"position" : "static",
			"max-width" : "1024px"
		});
		$("#wrapper_pub > footer").css({
			"max-width" : "1024px",
			"margin-left" : "-512px",
			"left" : "50%"
		});
		$("body").css({
			"background" : "none"
		});
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("head").append("<style>#header { position: fixed !important}</style>");
		var headerHeight = $("#header").height();
		$("#inskinanchor").css({
			"padding-top" : headerHeight
		});
		integration.base.setCfg({
			'plr_ScrollAdjustment' : headerHeight,
			'plr_StartScrollOnAnchor' : true
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.InSkinTopNav();
	$(document).scroll(function(){
		integration.custom.InSkinTopNav();
	});
	integration.custom.floatingButtons();
	$(window).resize(function(){
		integration.custom.floatingButtons();
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});

integration.custom.InSkinTopNav = function() {
	var top = $(window).scrollTop();
	$("#header").css({
		"top" : -top
	});
};

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1700) {
		var sideWidth = (width - 1024)/2;
		$(".aside_promotion").css({
			"left" : sideWidth
		});
	} else {
		$(".aside_promotion").css({
			"left" : "10px"
		});
	}
}
