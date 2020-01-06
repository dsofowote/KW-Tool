integration.meta = {
   'sectionID' : '127489',
   'siteName' : 'Cruise Passenger - Desktop - (AU)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '727024',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1200,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

/** Move to-top-of-page button inside PageSkin when overlaps **/
integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});
integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 2300) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1200)/2; /* content width divided by 2 */
        $('head').append('<style type="text/css">.leadinModal-content {right: ' + (sideWidth + 10) + 'px !important;}</style>');
    } else {
    	$('head').append('<style type="text/css">.leadinModal-content {right:0 !important;}</style>');
    }
}

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('#cb-outer-container').css({
		  "max-width" : "1200px",
		  "margin" : "0 auto"
	   });
	   $('#cb-nav-bar .cb-nav-bar-wrap').css({
		  "z-index" : "3999999999"
	   });
	   $('.vc_row[data-vc-full-width]').css({
		  "width" : "100%",
		  "left" : "0",
		  "margin-left" : "0",
		  "margin-right" : "0"
	   });
	   var docScroll;
	   $(window).scroll(function(){
		   docScroll = $(window).scrollTop();
           if (docScroll >= 80) {
        	   integration.base.setCfg({
        		   "plr_StartScrollOnAnchor" : true,
            	   "plr_ScrollAdjustment" : 44,
               });
           } else {
        	   integration.base.setCfg({
        		   "plr_StartScrollOnAnchor" : true,
            	   "plr_ScrollAdjustment" : 0
               });
           }           
    	});
   }
});

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "2999999999"
    });
});