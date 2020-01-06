integration.meta = {
	'sectionID' : '127660',
	'siteName' : 'Kino - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '778088',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("html").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html.inskinLoaded {overflow:visible;}';
		stylesCSS += '.inskinLoaded body{overflow:visible;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

	}
});
integration.on("adClose", function(e) {
	$("html").removeClass("inskinLoaded");
	//$("#inskinanchor").remove();
});

