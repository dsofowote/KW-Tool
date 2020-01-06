integration.meta = {
	'sectionID' : '126353',
	'siteName' : 'Visordown - Smartphone - (UK)',
	'platform' : 'smartphone'
};




function setWindow() {
    return currentWindow.top;
}
integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706841',
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
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .vd-container{margin-left: -10px}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	integration.custom.ismorientation();
	$(window).on("resize", function() {
		integration.custom.ismorientation();
	});
});

integration.custom.ismorientation = function() {
	var winWidth = $(window).width() - integration.custom.PageSkinRightPanel - 1;
	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .vd-main-col, .inskinLoaded table{max-width: ' + (winWidth - 20) + 'px !important;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/19008\"><\\script> ";
};
