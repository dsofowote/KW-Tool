integration.meta = {
   'sectionID' : '126921',
   'siteName' : 'JMen - Smartphone - (HK)',
   'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707653',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.laychange();
    $(window).on('resize', function(){
            integration.custom.laychange();
    });
    $('#header').css({
	  "position" : "fixed",
	  "top" : "0",
	  "width" : "100% !important"
    });
});

integration.custom.laychange = function (){
    var wwidth = $(window).width();
	var wheight = $(window).height();
	var windowWidth = $(window).width();
	var bodyWidth = $('body').width();
    var fullWidth =  bodyWidth + integration.custom.PageSkinSidePanel;    
	if (wwidth > wheight) {
		$('head').append('<style>#header{position: fixed; top: 0; width: 100% !important;}</style>');
		$('#page > div.sticky-wrapper').css({
		  "height" : "0"
	    });		
	    $('body').css({
		   "margin-top" : "80px"
	    });
	} else {
		$('head').append('<style>#header{position: fixed; top: 0; width: 100% !important;}</style>');
		$('#page > div.sticky-wrapper').css({
		  "height" : "0"
	    });
		$('body').css({
		   "margin-top" : "72px"
	    });
	}
	var headerHeight = $('#header').height();
	   $('body').css({
		  "min-width" : "auto",
		  "margin-top" : headerHeight
	   });
	   $('.region-overlay .menu__link').css({
		  "margin" : "0 20px" 
	   });
	   $('.region-overlay .menu__link.sign-in').css({
		  "padding" : "50px 25px" 
	   });
	   $('#page > div.sticky-wrapper').css({
		  "height" : "0"
	   });
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/117295781/InSkin_JMENplus(Tablet_Mobile)\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n";
};