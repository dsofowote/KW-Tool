integration.meta = {
    'sectionID' : '125906',
    'siteName' : 'Alphr - Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '707475',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 1
};

var headHeight;

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			headHeight = $("#header-group-inner").outerHeight();
			if ($(".page-header").length == 1) {
    		$("<div id='inskinanchor'></div>").insertAfter(".page-header");
    		integration.base.setCfg({
        	plr_AnchorParent: "#inskinanchor",
        	plr_PageHeightAdjustment: -headHeight
    		});
			}
			$(".page, #footer-wrapper, .dfp-tag-wrapper").css({"margin": "0 auto", "max-width": "1220px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".page-header").css({"margin-left": "-20px"});
						$(".page, #footer-wrapper, .dfp-tag-wrapper").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("adServed", function(e) {
	$(".ism-anchor").css({"z-index": "999"});
	$("#inskinanchor").css({"margin-top": headHeight});
});
