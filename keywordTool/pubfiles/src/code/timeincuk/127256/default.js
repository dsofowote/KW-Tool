integration.meta = {
	'sectionID' : '127256',
	'siteName' : 'Entertainment Weekly - Desktop - (UK)',
	'platform' : 'desktop'
};



integration.testParams = {
	'desktop_resolution' : [1660]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707894',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1400,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		bin
		if ($("#site-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#site-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -50,
            });
        }

		$("#site-header").css({
			"margin-bottom"	: "0px"
		});

		$("body").css({
			"overflow" : "visible"
		});
		$("#site-footer").css({
			"min-width" : "1400px",
			"margin" : "0 auto"
		});

	}
});

integration.on("layoutChange", function(e){
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	integration.custom.floatingButtons();
	$(window).resize(function(){
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var sideWidth = (width - 1660)/2;
		$(".jumpstart-sticky-inner").css({
			"right" : sideWidth + integration.custom.PageSkinRightPanel + "px"
		});
};

integration.on('adServed', function(e) {
	$("#_evh-link").css("z-index", "60000");
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "-1"
	});
});
/* Passback Tag */
window.ISMPassback = function() {
   return inskinPassback();
};
