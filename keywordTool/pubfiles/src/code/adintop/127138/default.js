integration.meta = {
   'sectionID' : '127138',
   'siteName' : 'Assayyarat (SSL)- Smartphone- (MENA)  ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706938',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_StartScrollOnAnchor" : true,
   "plr_ScrollAdjustment" : 52
};

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	  $('.share_article').css({
		    "width" : "calc(100% - " + integration.custom.FrameSideRight + "px)"
		});
});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var headerheight = $("header").height();
	   $('body').css({
		    "overflow-x" : "visible",
		    "margin-top" : headerheight
		});	   
	   $('#sb-site > div > div:nth-child(1)').css({
		    "display" : "none"
		});	   
	   $('.content, .post_view_title').css({
		    "margin-top" : "0px"
		});	   
	   $('header').css({
		    "left" : "0"
		});	   
	   $('#sb-site').css({
		    "z-index" : "10"
		});	   
	   $(window).scroll(function(){		   
		   var windowHeight = $(window).scrollTop() + $(window).height() - 40;
		   var docBottom = $(document).height() - 40;
		   if(windowHeight == docBottom) {
			   $('head').append("<style>.share_article{bottom: 40px;}</style>");
		   }else{
			   $('head').append("<style>.share_article{bottom: 0px;}</style>");
		   }
	   });	   
   }
});