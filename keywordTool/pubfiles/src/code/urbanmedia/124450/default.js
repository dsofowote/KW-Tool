integration.meta = {
	"sectionID" : "124450",
	"siteName" : "Tagesspiegel",
	"publisher" : "urbanmedia",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706211',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "centre",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_URLKeywords" : 2,
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true,
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 45
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".ts-page-wrapper .ts-stage-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".ts-page-wrapper .ts-stage-wrapper .ts-stage");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -45
			});
		}
		top.document.getElementsByTagName('html')[0].className += " ts-centered-small";
		$("#urban-leaderboard").css({
			"height" : "0"
		});
	}
});
integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();

	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 4400) {
		var sideWidth = (width - 1200) / 2;
		$("head").append("<style> .ts-up-button{top: 631px; left: auto !important; right: calc(" + sideWidth + "px + 102px) !important;}</style>");
	} else {
		$(".ts-up-button").css({
			"right" : "10px"
		});
	}
}
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});

