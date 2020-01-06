integration.meta = {
   'sectionID' : '126880',
   'siteName' : 'Young Parents - Desktop - (SG) ',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708133',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1060,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	$('.searchbox.style-icon .hidden-form-search').css({
	  "top" : integration.custom.PageSkinTopPanel
   });
	integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 2060 || integration.custom.isSuperWide) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1060)/2; /* content width divided by 2 */
        $(".simple-ad-widget-area").css({
            "right" : sideWidth + 10
        });

        $('head').append('<style type="text/css">.simple-ad-widget-area {right: ' + (sideWidth + 10) + 'px !important;}</style>');
    } else {
    	$('head').append('<style type="text/css">.simple-ad-widget-area {right: 100px !important;}</style>');
    }
    if (width < 1500 || integration.custom.isSuperWide) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1060)/2; /* content width divided by 2 */
        $(".simple-ad-widget-area").css({
            "right" : sideWidth + 10
        });

        $('head').append('<style type="text/css">#ts-back-to-top {right: ' + (sideWidth + 10) + 'px !important;}</style>');
    } else {
    	$('head').append('<style type="text/css">#ts-back-to-top {right: 20px !important;}</style>');
    }
}




integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   /*$('body').css({
		  "background" : "none" 
	   });
	   $('head').append('<style>#bodyStyle {margin: 0 auto !important;}</style>');*/
	   $('footer#footer').css({
		  "position" : "relative" 
	   });
	   $('.searchbox.style-icon .hidden-form-search').css({
		  "max-width" : "1060px",
		  "margin" : "0 auto",
		  "left" : "0",
		  "right" : "0",
		  "padding" : "15%"
	   });
	   
   }
});

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "1000000"
    });
});