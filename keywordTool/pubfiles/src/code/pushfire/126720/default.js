integration.meta = {
   'sectionID' : '126720',
   'siteName' : 'Virtualnights - Smartphone - (INT)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707169',
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
   	$("html").css({
		   "width" : "auto"
	   });
	   
	 $("#magazin-slider-left").css({
		 "left" : "0px"
	 });
	 
	 $("#magazin-slider-right").css({
		 "right" : "75px",
		 "z-index" : "1"
	 });
   }
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
	var pageheight = $(document).height();
	var winheight = $(window).height();
	var pagebotm = pageheight - winheight + 100;
	var wintop = $(window).scrollTop();
	$(window).bind('scroll', function() {
		if ($(window).scrollTop() >= pagebotm ) {
			$("#mobile-footer-shares").css({
			"bottom" : "40px",
			"transition" : "0.5s",
			"-moz-transition" : "0.5s",
			"-webkit-transition" : "0.5s",
			"-o-transition" : "0.5s"
		});
		} else {
			$("#mobile-footer-shares").css({
			"bottom" : "0px"
		});
		}
	});
	
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();

	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var fwidth = $(window).width();
	var cons = fwidth - integration.custom.FrameSideRight;
	console.log("window width", fwidth);
	console.log("content size", cons);

	$("#container, #headercontainer, #site-footer, #mobile-footer-shares").css({
		"max-width" : cons + "px"
	});
	
}