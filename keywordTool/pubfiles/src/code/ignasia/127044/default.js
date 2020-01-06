integration.meta = {
	'sectionID' : '127044',
	'siteName' : 'Ask Men - Mobile - (SEA) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707934',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var navheight = $(".headerDefault").height();

		if ($("#main").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -45
			});
		}
		
		$("body").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">'; 
			 stylesCSS += '.inskinLoaded #inskinanchor{margin-top:' + navheight + 'px}';
			 stylesCSS += '.inskinLoaded #main{padding-top:0px;}';
			 stylesCSS += '.inskinLoaded #headerOuter{top:0px;}';
			 stylesCSS += '</style>' 
		$('head').append(stylesCSS); 

	}
});

integration.on("adClose", function(e) {
$("body").removeClass("inskinLoaded");
});
