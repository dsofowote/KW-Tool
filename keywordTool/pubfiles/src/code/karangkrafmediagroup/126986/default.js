integration.meta = {
	'sectionID' : '126986',
	'siteName' : 'Sinar Online - Mobile - (ASIA) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708071',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -71,
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#cssmenu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#cssmenu");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("body").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">'; 
			 stylesCSS += '.inskinLoaded .extra-menu #nav{top : 0px;}';
			 stylesCSS += '</style>' 
		$('head').append(stylesCSS);	
	}
});

integration.on('adServed', function(e) {
	$("#inskinanchor").css({
		"position" : "relative",
		"top" : "46px"
	});
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
      $("#inskinanchor").remove();
});