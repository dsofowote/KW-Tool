integration.meta = {
	'sectionID' : '127600',
	'siteName' : 'Cosmopolitan - Smartphone - (DE)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '762744',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style type="text/css">.pageskinServed aside {min-width: 300px !important; margin-left: -5px !important;}</style>');
		// hides ad unit we are being served into
		$("#dikr-responsive-ads-ist").hide();
		
		$("body").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">'; 
			 stylesCSS += '.inskinLoaded .slidercontainer{width:auto}';
			 stylesCSS += '.inskinLoaded .adAnything{margin-left:0}';
			 stylesCSS += '.inskinLoaded #wrapper{min-width:300px}';
			 stylesCSS += '</style>' 
		$('head').append(stylesCSS); 	
	}
}); 

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function(){
	var windowWidth = $(window).width();
	var contentWidth = (windowWidth - integration.custom.FrameSideRight) - 20;
	
	$("head").append("<style>.inskinLoaded .slidercontainer, .inskinLoaded .slidesjs-container, .inskinLoaded .slidesjs-control{width: " + contentWidth + "px !important;}</style>");
	$("head").append("<style>.inskinLoaded aside{max-width: " + contentWidth + "px; min-width: 200px !important;}</style>");
}

integration.on('adClose', function(e) {
	$("body").removeClass("inskinLoaded");
});
