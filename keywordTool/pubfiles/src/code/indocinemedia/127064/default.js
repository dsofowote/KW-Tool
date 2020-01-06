integration.meta = {
   'sectionID' : '127064',
   'siteName' : ' Robb Report - Mobile - (VN) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707599',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('head').append('<style type="text/css">.top-menu:not(.stuck) {width:100% !important;}</style>');
	   
	   $('.footer .container .wrapper .subscription .left p').css({
		  'margin-left' : '5px' 
	   });	   
	   
	   $('.footer .container .wrapper .subscription .right p').css({
		  'margin-right' : '5px' 
	   });
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;   
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    
    var ismMenuCSS = '<style type="text/css">.top-menu.stuck {width: calc(100% - '; 
    ismMenuCSS += integration.custom.PageSkinRightPanel; 
    ismMenuCSS += 'px) !important} </style>'; 
    $('head').append(ismMenuCSS);
    
    $('.back-to-top').css({
    	'right' : integration.custom.PageSkinRightPanel + 20 + 'px'
    });
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
    	$('.back-to-top').css({
    		'bottom' : integration.custom.PageSkinBottomPanel + 20 + 'px'
    	});
    } else {
    	$('.back-to-top').css({
    		'bottom' : '20px'
    	});
    }
}

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "999"
    });
});