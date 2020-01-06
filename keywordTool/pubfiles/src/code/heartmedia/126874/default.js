integration.meta = {
	'sectionID' : '126874',
	'siteName' : ' Luxuo - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707386',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1168,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -70,
	'plr_ScrollAdjustment' : 60
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#menu_outer_wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#menu_outer_wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("body").css({
			"overflow-x" : "visible"
		});

		$(".widget nav_menu-2.widget_nav_menu").css({
			"width" : "14%"
		});
		$("footer").css({
			"max-width" : "1178px",
			"margin" : "0 auto",
			"overflow" : "hidden"
		});
		$("#footer-container").css({
			"padding-left" : "25px"
		});
		$("head").append("<style>#menu_outer_wrapper {width:1168px !important; margin:0 auto !important; left:0;right:0;}</style>");
	}
});

integration.on("layoutChange", function(e){
	integration.custom.floatingButtons();
	$(window).resize(function(){
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 4400) {
		var sideWidth = (width - 1168)/2;
		$("#back_to_top").css({
			"right" : sideWidth
		});
	} else {
		$("#back_to_top").css({
			"right" : "10px"
		});
	}
}
