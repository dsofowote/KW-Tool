integration.meta = {
	"sectionID" : "124920",
	"siteName" : "TOnline",
	"publisher" : "interactivemedia",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '707389',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "custom",
	"plr_FramePositionCSS" : "margin: 0 auto; border-right: 310px solid transparent;",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "ifrid",
	"plr_HideElementsByClass" : "Tmc0v,Tww1,Thh4,Thpx600",
	"plr_URLKeywords" : 2,
	'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg",
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#vmsky, #vmsb").hide();
		$("#Tall").css({
			"margin-top" : "1px"
		});
		if ($("#Tall").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#Tall");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -66,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 0
			});
		}
		//$("#Tadspacehead").hide();

		$("head").append("<style>div#Tcb.sdgSlotContainer.sdgSlotName-banner{display: none !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	var headHeight = $('#Tfixdh').outerHeight();
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
	$("#inskinanchor").css({
		"margin-top" : headHeight
	});
});
