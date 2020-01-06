integration.meta = {
	'sectionID' : '127556',
	'siteName' : 'Performance Drive - Smartphone- (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '748009',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -60,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {		
		$("body").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">'; 
			 stylesCSS += '.inskinLoaded .header-adds{margin-top: 0px;}';
			 stylesCSS += '.inskinLoaded .section-wrap, .inskinLoaded .mobile-wrap{width: 100%;}';
			 stylesCSS += '.inskinLoaded .arqam-widget-counter{width: calc(100% + 30px); margin-left: -15px;}';
			 stylesCSS += '.inskinLoaded .justified-image-grid{margin-left: -18px !important;}';
			 stylesCSS += '.inskinLoaded .justified-image-grid .jig-imageContainer{margin-right: 2px !important;}';
			 stylesCSS += '.inskinLoaded .adsbygoogle{margin-left: -73px; }';
			 
			 stylesCSS += '</style>' 
		$('head').append(stylesCSS); 
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"margin-top" : "60px"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.frameRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded #back-top{right: " + integration.custom.frameRight + "px;}</style>");
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});