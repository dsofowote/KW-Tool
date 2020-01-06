integration.meta = {
	'sectionID' : '126153',
	'siteName' : '90min tablet UK',
	
	'platform' : 'tablet',
	'restrictions' : ''
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	
	
	'mf_siteId' : '706827',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1312,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("#site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		$("body > .site-footer").css({
			"position" : "relative",
			"height" : "initial",
			"float" : "none",
			"max-width" : "1312px",
			"margin-left" : "auto",
			"margin-right" : "auto"
		});
		$("head").append("<style> #site-header { position : relative !important; } </style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#site-header").css({
				"width" : "initial",
				"margin-left" : "-20px"
			});
			$(".page-wrap").css({
				"margin-left" : "0px"
			});
		}
		var siteHeaderOffset = $("#site-header").offset();
		var pageHeightAdjustment = 0 - siteHeaderHeight - siteHeaderOffset.top;
		integration.base.setCfg({
			plr_PageHeightAdjustment : pageHeightAdjustment
		});
	}
});
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9"
	});
	$(".next-post-button").css({
		"z-index" : "8"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- Beginning PassBack for Ad unit 90-min/Passback/Tablet/Outofpage ### size: [[1,1]] -->\n\t<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n\t\tgoogletag.pubads().definePassback('175840252/90-min/Passback/Tablet/Outofpage', [[1,1]]).setTargeting('Passback',['InSkin']).display();\n\t<\\script>\n<!-- End Passback -->";
};