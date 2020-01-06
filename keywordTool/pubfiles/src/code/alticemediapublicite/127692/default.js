integration.meta = {
	'sectionID' : '127692',
	'siteName' : 'L\'express - Smartphone - (  FR )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '781586',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">'; 
			 stylesCSS += 'html .inskinLoaded {overflow:visible;}'; 
			 stylesCSS += 'inskinLoaded body{overflow:visible;}';
			 stylesCSS += '.inskinLoaded .header_top_right{min-width:26%}';
			 stylesCSS += '</style>'; 
		$('html').append(stylesCSS); 
		
	}
});
integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded .scroll_to_top{right: " + integration.custom.FrameSideRight + "px !important;}</style>");
});
integration.on("adClose", function(e) {
	 $("body").removeClass("inskinLoaded");
});


