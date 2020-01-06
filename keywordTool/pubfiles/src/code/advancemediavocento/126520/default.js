integration.meta = {
   'sectionID' : '126520',
   'siteName' : 'Sport - Desktop - (ES) ',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707697',
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
		$(".content, .footer").css({
			"margin" : "0px auto",
			"max-width" : "1002px"
		});
		$("body").css({
			"overflow" : "visible"
		});
    $('.add').css({
        "display": "none"
    });
		var headerHeight = $(".bottom").height() + $(".middle").height();
		if ($(".header").length == 1) {
				$("<div id='inskinanchor'></div>").insertAfter(".header");
				integration.base.setCfg({
						plr_AnchorParent: "#inskinanchor",
						plr_ScrollAdjustment : -headerHeight,
				})
		}
	}
});
