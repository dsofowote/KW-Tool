integration.meta = {
	'sectionID' : '126950',
	'siteName' : ' Navbharat Times- Desktop - (ASIA)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '707916',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 50,
	'plr_URLKeywords' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		treatments = function(treat) {
			return treat == "Superwide";
		}
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$(".globalnav").css({
			"margin-left" : "10px"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var wwidth = $(window).width();
	var sides = (wwidth - 1000) / 2;
	var widget = 0 - integration.custom.FrameSideRight;

	if (integration.custom.isSuper) {
		$("#social_share_left").css({
			"display" : "none"
		});
		var rowcss = "<style>#loginsave{right:"
		rowcss += sides;
		rowcss += "px !important;}</style>"
		$("head").append(rowcss);
	} else {
		$("#social_share_left").css({
			"margin-left" : widget
		});
		$("head").append("<style>#loginsave{right:0px !important}</style>");
	}
});
