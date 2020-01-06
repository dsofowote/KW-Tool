integration.meta = {
   'sectionID' : '126643',
   'siteName' : 'Journal Des Femmes - Desktop - (BE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706942',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1300,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});

integration.on('adCallResult', function(e) {
	   if (e.data.hasSkin) {
		   $("head").append("<style>#sidebar_follower{display:none}</style>");
		   $(".page").css({
		   	"overflow-x" : "hidden"
		   });
		   $("body").css({
		     "background-image": "none",
		     "padding-bottom": integration.base.getCfg("plr_FrameBottom").plr_FrameBottom + "px"
		   });
		   $(".ism-frame").css({
		   	"z-index" : "151"
		   });
		   $("#ba_x02").css({
		     "width": "1000px",
		     "margin": "0 auto"
		   });
		   $("header, footer").css({
		     "max-width": "1300px",
		     "margin": "0 auto"
		   });
		   $(".ccmcss_oic").css({
		     "z-index": "1"
		   });
	   }
	});

	/**** Raise Z-index of PageSkin ****/
	integration.on("adServed", function(e) {
		$(".ism-frame").parent().css({
			"z-index" : "11001"
		});
	});