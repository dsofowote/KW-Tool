integration.meta = {
	'sectionID' : '126518',
	'siteName' : 'El Periodico - Desktop - (ES)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1262]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707886',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1002,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
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
		$('.add').css({'display':'none'});
		var headerHeight = $(".header").height();
		if ($(".header").length == 1) {
				$("<div id='inskinanchor'></div>").insertAfter(".header");
				integration.base.setCfg({
						plr_AnchorParent: "#inskinanchor",
						plr_ScrollAdjustment : -headerHeight,
				})
		}
	}
});
