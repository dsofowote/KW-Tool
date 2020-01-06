integration.meta = {
   'sectionID' : '127052',
   'siteName' : 'BiTES - Desktop - (SG)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707938',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1170,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
    
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	$('#offcanvas-sidebar-nav, .search-fullscreen-wrapper').css({
	  "top" : integration.custom.PageSkinTopPanel
   });
    
});
integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1540) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1170)/2; /* content width divided by 2 */
        $("#top-link").css({
            "right" : sideWidth + 40
        });
    } else {
        $("#top-link").css({
            "right" : sideWidth + 40
        });
    }
}

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var width = $(window).width();
	   var sideWidth = (width - 1170)/2;
	   $('#st-container, .owl-item, .search-fullscreen-wrapper').css({
		  "max-width" : "1170px",
		  "margin" : "0 auto"
	   });
	   $('#navbar').css({
		  "max-width" : "1170px"
	   });
	   /*$('.owl-item').css({
		  "width" : "100%"
	   });*/	
	   $('#offcanvas-sidebar-nav').css({
		  "left" : sideWidth
	   });
	   
   }
});
