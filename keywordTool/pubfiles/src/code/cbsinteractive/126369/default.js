integration.meta = {
   'sectionID' : '126369',
   'siteName' : 'CBS News - Tablet - (EMEA)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '708116',
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
		if ($(".body-container > .site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".body-container > .site-header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -100
			});
		}
		$("head").append("<style>#dashboard, .site-header--is-sticky{max-width: 1000px; margin: 0 auto; left: 0; right: 0;}</style>");
		$('#videoContainer, .site-footer').css({
			'max-width' : '1000px',
			'margin' : 'auto',
		});
		$('.row.col-12.article-video-player').css({
			'margin-right' : '40px'
		});
		$(".body-container").css({
			"overflow" : "visible"
		});
		$("body").css({
			"margin-bottom" : "0"
		});
		$(".site-footer").css({
			"margin-bottom" : "140px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#mantle_skin").css({
				"max-width" : "1000px"
			});
			integration.custom.isEdge = true;	
		}
		
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSide = e.data.plr_FrameSide;
	if (integration.custom.isEdge) {
		$(".body-container > .site-header").css({
			"margin-left" : 0 - integration.custom.FrameSide
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});
