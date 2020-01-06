integration.meta = {
   'sectionID' : '126973',
   'siteName' : 'Car Advice- Smartphone - (AU) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707186',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : -50,
   'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("header .ca-site-header").css({
		   "height" : "10px"
	   });
   }
});

integration.on('adServed', function(e) {
	var navheight = $('nav').outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : navheight
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function(){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function(){
	var wwidth = $(window).width();
	var cwidth = wwidth - integration.custom.FrameSideRight;
	$(".page-layout").css({
		"max-width" : cwidth
	});
	$(".p-wrapper ul li").css({
		"max-width" : cwidth - 15
	});
}
