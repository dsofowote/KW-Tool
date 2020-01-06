integration.meta = {
   'sectionID' : '127208',
   'siteName' : 'Petit Chef - Smartphone -(IT)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708002',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	
	$('#fb-sticky').css({
	  "max-width" : "calc(100% - " + integration.custom.FrameSideRight + "px)"
    });
	$('.scroll-top').css({
	  "right" : integration.custom.FrameSideRight + 20
    });	
});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var headerHeight = $('.navbar-default').height();
	   $('body').css({
		  "margin-top" : headerHeight
	   });
	   $('head').append('<style type="text/css">body {padding: 0 !important;}</style>');
	   $('#page').css({
		  "padding-top" : "10px"
	   });	   
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "1000"
    });
});