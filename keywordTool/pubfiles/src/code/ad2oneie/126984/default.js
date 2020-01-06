integration.meta = {
   'sectionID' : '126984',
   'siteName' : 'Goss - Smartphone - (IE) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707920',
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
   	$(".td-post-sharing a").css({
		   "margin-bottom" : "10px"
	   });
	   $(".td-scroll-up-visible").css({
		   "min-width" : "calc(100% - 74px)"
	   });
   }
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function(){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var fixed = $(".td-scroll-up").hasClass('td-scroll-up-visible');
	console.log(fixed, "is fixe?");
	if (fixed){
		$(".td-scroll-up-visible").css({
			"max-width" : contentWidth
		});
	}
	$("head").append("<style>.td-scroll-up-visible {max-width:" + contentWidth + "px}</style>");
}
