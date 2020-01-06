integration.meta = {
   'sectionID' : '126792',
   'siteName' : 'Daily Mail - (Publisher Bookings) - Smartphone - (UK)  ',
   'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '707139',
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
	"plr_URLKeywords" : 2,
	"plr_StartScrollOnAnchor" : false,
	"plr_ScrollAdjustment" : 0,
	"plr_SwipeoutNavOffset" : 46,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameTop = 0;

		integration.custom.heightDetection();

		$("head").append("<style>html{padding: 0 !important;}</style>");
		$("body").addClass("inskinLoaded");
		var specialCSS = '<style type="text/css"> @media screen and (max-width: 432px) {';
		specialCSS += '.inskinLoaded .scrollable-content .sjs-share-container > .mobile-sharing-tools {height : 75px;}';
		specialCSS += '.inskinLoaded #stickyBanner {height : 0px}';
		specialCSS += '.inskinLoaded .social > ul {padding-left : 0}';
		specialCSS += '.inskinLoaded .social .comments-count {margin-right : 0}';
		specialCSS += '.inskinLoaded .social .email {padding-left : 0}';
		specialCSS += '.inskinLoaded #swipeIndicator.show{right: 74px;}';
		specialCSS += '</style>';
		$('head').append(specialCSS);
		
		integration.custom.FrameTop = 0;
		integration.custom.heightDetection();	
	}
});

integration.on('layoutChange', function(e) {	
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	
	$("body").addClass("inskinLoaded");
		 var stylesCSS = '<style type="text/css">'; 
		 stylesCSS += '.inskinLoaded #swipeIndicator.show{right: ' + integration.custom.FrameSideRight + 'px;}';
		 stylesCSS += '.inskinLoaded #home > a.hp-swipe{right: ' + integration.custom.FrameSideRight + 'px;}';
		 stylesCSS += '.inskinLoaded .scrollable-content{padding-right: ' + integration.custom.FrameSideRight + 'px;}';
		 stylesCSS += '</style>' 
	$('head').append(stylesCSS); 

	integration.custom.heightDetection();

	setInterval(function() {
		integration.custom.heightDetection();
	}, 3000);

	$(window).resize(function() {
		integration.custom.heightDetection();
	});
});

integration.on("adClose", function(e) {
$("body").removeClass("inskinLoaded");
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