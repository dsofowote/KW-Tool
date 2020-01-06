integration.meta = {
	'sectionID' : '126847',
	'siteName' : 'Daily Mail - (Publisher Bookings) - Smartphone - (IE) ',
	'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708010',
	'plr_FluidAnchor' : true,
	/*'plr_Fluid' : true,*/
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_AnchorParent' : ".scrollable-content",
	'plr_ScrollElement' : '.scrollable-content',
	'plr_HideElementsByID' : 'swipeIndicator',
	"plr_StartScrollOnAnchor" : false,
	"plr_ScrollAdjustment" : 0,
	"plr_SwipeoutNavOffset" : 46,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>html{padding: 0 !important;}</style>");
		
		var specialCSS = '<style type="text/css"> @media screen and (max-width: 432px) {';
		specialCSS += '.scrollable-content .sjs-share-container > .mobile-sharing-tools {height : 75px;}}';
		specialCSS += '</style>';
		$('head').append(specialCSS);
		
		integration.custom.FrameTop = 0;
		
		integration.custom.heightDetection();
		
		$('#stickyBanner').css({
			'height' : '0px'
		});
		
		$(".social > ul").css({
			"padding-left" : "0"
		});
		$(".social .comments-count").css({
			"margin-right" : "0"
		});
		$(".social .email").css({
			"padding-left" : "0"
		});
		
		$("head").append("<style> #swipeIndicator.show{right: 74px;}</style>");
	
		$("#home > a.hp-swipe").css({
			"right" : "74px"
		});
		
		$(".scrollable-content").css({
			"padding-right" : "74px"
		});
	} 
});

integration.on('layoutChange', function(e) {
	
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	
	console.log('integration.custom.FrameBottom = ' + integration.custom.FrameBottom); 

	$("head").append("<style> #swipeIndicator.show{right: " + integration.custom.FrameSideRight + "px;}</style>");
	
	$("#home > a.hp-swipe").css({
		"right" : integration.custom.FrameSideRight + "px"
	});
	
	$(".scrollable-content").css({
		"padding-right" : integration.custom.FrameSideRight + "px"
	});
	
	integration.custom.heightDetection();
	
	setInterval(function(){
		integration.custom.heightDetection();
	}, 3000); 
	
	$(window).resize(function() {
		integration.custom.heightDetection();
	}); 
	
});


integration.custom.heightDetection = function(){
	var totalOuterHeight = 0;

	$(".scrollable-content > *").each(function(){
		if($(this).prop('nodeName')!='SCRIPT'){
			totalOuterHeight += $(this).outerHeight(true);
		}  //calculates the height of all elements inside scrollable content element except the scripts 
	});
	
	if($('body').hasClass('isHidden') == false){
		totalOuterHeight -= $('#mobile-content > header > nav').height(); 
	}	//adjust the height when the sticky nav bar is not hidden 

	integration.base.setCfg({
		'plr_ContentH' : totalOuterHeight - integration.custom.FrameTop + 40
	});
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<SCRIPT SRC=\"http://ib.adnxs.com/ttj?id=5620317&cb=%%CACHEBUSTER%%&pubclickenc=%%CLICK_URL_ESC%%\" TYPE=\"text/javascript\"><\\script>";
};