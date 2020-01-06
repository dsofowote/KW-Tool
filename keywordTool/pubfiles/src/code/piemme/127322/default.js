integration.meta = {
   'sectionID' : '127322',
   'siteName' : 'Funweek - Desktop - (IT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708134',
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
    if (width < 2500) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1200)/2; /* content width divided by 2 */
        $('head').append('<style type="text/css">div.moved {left: auto !important; right: ' + (sideWidth + 10) + 'px !important;}</style>');
    } else {
    	$('head').append('<style type="text/css">div.moved {left: auto !important; right: 10px !important;}</style>');
    }
}

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('.slim-header, #main-header, #barra-social-fixed').css({
		  "max-width" : "1200px",
		  "margin" : "0 auto",
		  "left" : "0",
		  "right" : "0",
		  "position" : "relative"
	   });
	   $('head').append('<style type="text/css">#main-header {top: 0 !important;}</style>');
	   var docScroll;
	   $(window).scroll(function(){
		   docScroll = $(window).scrollTop();
           if (docScroll >= 145) {
        	   $('.slim-header, #main-header').css({
    			  "position" : "fixed"
    		   });
           } else {
        	   $('.slim-header, #main-header').css({
     			  "position" : "relative"
     		   });
           }           
    	});
	   $('head').append('<style type="text/css">#skin_leaderboard {margin-top: 10px !important;}</style>');
	   $('#main-header, #info-cookie').css({
		  "z-index" : "20001" 
	   });
   }
});

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "20000"
    });
});
