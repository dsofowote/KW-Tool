integration.meta = {
	'sectionID' : '127248',
	'siteName' : 'Now To Love - Desktop - (AU)',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707984',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true

};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -107
			});
		}
		$(".page").css({
			"overflow" : "initial"
		});
		$(".header-wrapper").css({
			"margin-bottom" : "0px"
		});
		$("#gpt-slot-0").hide();
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.moveTop();
	$(window).scroll(function() {
		integration.custom.moveTop();
	});
});

integration.custom.moveTop = function() {
	var uniHeight = $(".uniheader").outerHeight();
	var headerHeight = $(".header").outerHeight();
	var height = $(window).height();
	if ($(window).scrollTop() <= uniHeight) {
		$(".header").css({
			"position" : "inherit"
		});
		$(".ism-frame").parent().css({
			"margin-top" : "0px"
		});
	} else {
		$(".header").css({
			"position" : "fixed"
		});
		$(".ism-frame").parent().css({
			"margin-top" : headerHeight
		});

	}
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\ngoogletag.pubads().definePassback(\"/13534306/nowtolove\",[728, 90]).display();\n\n<\\script>";
};
