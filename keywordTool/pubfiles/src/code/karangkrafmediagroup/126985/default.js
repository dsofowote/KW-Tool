integration.meta = {
   'sectionID' : '126985',
   'siteName' : 'Sinar Online - Desktop - (ASIA)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707819',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1054,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	//'plr_PageHeightAdjustment' : -100
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		
		$(".footer, .xtra, #slider-main, .bg-pink").css({
			"max-width" : "1054px",
			"margin" : "0 auto"
		});
		
		$(".xtra").css({
			"position" : "relative"
		});
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
	}
});
 
 
 integration.on('adServed', function(e) {
     var headHeight = $(".header").outerHeight();
     $(".ism-frame").parent().css({
         "top" : headHeight
     });
 });