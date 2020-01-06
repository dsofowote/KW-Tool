integration.meta = {
   'sectionID' : '127374',
   'siteName' : 'Marie Claire - Smartphone- FR',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '717181',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_StartScrollOnAnchor" : true,
   "plr_ScrollAdjustment" : 0
};

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$('body').append('<style type="text/css">#pulpix.px-sticky-widget-wrapper-mobile .px-sticky-widget, #pulpix > div, #pulpix.px-sticky-widget-wrapper-mobile .px-sticky-widget.px-sticky-widget-left {max-width: calc(100% - ' + (integration.custom.FrameSideRight + 10) + 'px) !important;}</style>');
	
	$('head').append('<style type="text/css">.NewsletterBox--footer .NewsletterBox-emailAddressField {width: 60% !important;}</style>');
});
integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -68 
			});
		}
		$(".BodyContent").css({
			"max-width" : "100%"
		});
		$(".SocialLinks--footer .SocialLinks-linkContainer").css({
			"margin-right" : "2px"
		});
		$(".SocialNetwork-services--primary .SocialNetwork-service").css({
			"width" : "14vw"
		});
		$(".SocialNetwork-services--primary").css({
			"width" : "50vw"
		});
		$(".SiteHeader-contentContainer, #RetractableMenu, .CookieNotification").css({
			"z-index" : "9999999"
		});
		var docScroll;
	   $(window).scroll(function(){
		   docScroll = $(window).scrollTop();
           if (docScroll >= 20) {
        	   integration.base.setCfg({
        		   "plr_StartScrollOnAnchor" : true,
            	   "plr_ScrollAdjustment" : 60,
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
integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "9999998"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/MARIECLAIRE/RG_MOBILE/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};