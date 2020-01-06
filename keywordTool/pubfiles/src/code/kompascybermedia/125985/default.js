integration.meta = {
   'sectionID' : '125985',
   'siteName' : 'Kompas.com - Desktop - (ID)',
   'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706649',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
	    integration._addPixel();
	    
        integration.base.setCfg({
            plr_PageHeightAdjustment : 35,
        });
	    
	    $(".htop, body > div.container > div.header").css({
	    	"width" : "1100px", 
	    	"margin" : "0 auto", 
	    	"left" : "0", 
	    	"right" : "0"
	    });
 	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

/**** Constrain Top Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".kcm-topbar").css({
			"margin-top" : newheight
		});
	} else {
		$(".kcm-topbar").css({
			"margin-top" : "0px"
		});
	}
}
