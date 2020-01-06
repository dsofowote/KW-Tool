integration.meta = {
   'sectionID' : '127094',
   'siteName' : 'Time Out Dubai - Smartphone - (MENA)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707944',
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
	   var headerHeight = $('.navbar-top').height();
	   if ($("header").length == 1) {
           $("<div id='inskinanchor'></div>").insertAfter("header");
           integration.base.setCfg({
               plr_AnchorParent: "#inskinanchor",
               plr_PageHeightAdjustment: -160
           });
       }
	   $('#inskinanchor').css({
           "margin-top": headerHeight
       });
	   $('.content-page .sticky-anchor').css({
           "margin-top": "0"
       });
	   // Scroll adjustment to fire only after 80px from top
	   $(window).scroll(function() {
           var docScroll = $(window).scrollTop();
           if (docScroll > 80) {
               integration.base.setCfg({
                   "plr_StartScrollOnAnchor": true,
                   "plr_ScrollAdjustment": -116
               });
           } else {
               integration.base.setCfg({
                   "plr_StartScrollOnAnchor": true,
                   "plr_ScrollAdjustment": 0
               });
           }
       });
   }
});
