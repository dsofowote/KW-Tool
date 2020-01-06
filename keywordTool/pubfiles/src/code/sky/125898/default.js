integration.meta = {
    'sectionID' : '125898',
    'siteName' : 'MTV - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '707478',
    'plr_PageAlignment' : 'center',
    'plr_Responsive' : true,
    'plr_Fluid' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		
		integration._addPixel();
		
		if ($("#page-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#page-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -80,
            });
        }
		
		$('#inskinanchor').css({
			'margin-top' : '80px'
		});
		
		$("html").addClass("inskinLoaded");
		$("head").append("<style>html.inskinLoaded {overflow-x: visible;}</style>");
		$("head").append("<style>.inskinLoaded body > div.page{overflow: visible;}</style>");
		$("head").append("<style>.inskinLoaded #page-footer, .inskinLoaded #page-content{max-width: 980px; margin: 0 auto;}</style>");
		$("head").append("<style>.inskinLoaded .post-header{margin-top: 20px !important;}</style>");
		
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});

			$('.vimn-subject-submenu, .page-footer-inner, #page-content > div.panel-pane.pane-page-content > div').css({
				'width' : '980px'
			});
			
			$('#page-content, #page-footer').css({
				'margin-top' : '0px', 
				'margin-left' : '0px'
			});
		}

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.ismSlideMenu();
	$("#trigger, .page_overlay").on("click", function() {
		integration.custom.ismSlideMenu();
	});
});

integration.custom.ismSlideMenu = function() {
	setTimeout(function() {
		if ($("body").hasClass("slide_opened")) {
			integration.base.hideAd();
			$("body").removeClass("inskinLoaded");
		} else {
			integration.base.showAd();
			$("body").addClass("inskinLoaded");
		}
	}, 200);
}
