integration.meta = {
	'sectionID' : '126352',
	'siteName' : 'Golf Magic - Smartphone - (UK)',
	'platform' : 'smartphone'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706900',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_GetContentHeightVersion' : 2,
	'plr_FastInit' : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("html").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">';
			 stylesCSS += 'html .inskinLoaded {overflow:visible !important;}';
			 stylesCSS += '.inskinLoaded .header .branding .login{top:33px;right:3px;}';
			 stylesCSS += '.inskinLoaded {}';
			 stylesCSS += '</style>';
		$('head').append(stylesCSS);

		if ($(".node-type-article").length < 1){
			integration.base.setCfg({
				plr_GetContentHeightVersion: 1
			});
		}
	}
});
integration.on("adClose", function(e) {
	 $("body").removeClass("inskinLoaded");
	 //$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/19007\"><\\script>";
};
