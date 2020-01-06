integration.meta = {
	'sectionID' : '126382',
	'siteName' : 'MTV AU - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -130,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$("#page-footer").css({
			"max-width" : "1230px",
			"margin" : "0 auto",
		});
		$(".page").css({
			"overflow" : "visible"
		});
		var $subnav = $(".panel-pane.pane-vimn-subject-submenu")
		$("header#page-header").append($subnav)

		$("body").css({
			"background" : "initial"
		});

		if ($("header#page-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header#page-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});
