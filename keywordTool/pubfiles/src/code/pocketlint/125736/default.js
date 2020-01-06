integration.meta = {
	'sectionID' : '125736',
	'siteName' : 'Pocket Lint',

	'platform' : 'tablet',
	'restrictions' : ''
};

function setWindow() {
	return currentWindow.top;
}




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681836',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 986,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '#container',
	'plr_PageHeightAdjustment' : -94,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/*$("body").css({
		 "padding-top" : "0"
		 });
		 $("head").append("<style>nav.main{position: relative !important;}</style>");*/
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes
			 integration.base.setCfg({
			 'plr_PageAlignment' : 'left'
			 });*/
			$("#container").css({
				"margin-left" : "20px"
			});
		}
	}
});
integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"left" : "-8px"
	});

});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=18530\"><\\script>";
};
