integration.meta = {
	'sectionID' : '126668',
	'siteName' : 'Il Gazzettino - Smartphone - (IT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707690',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("html").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html .inskinLoaded {max-width:100%; width:100%; padding:0 !important;overflow-x:visible;}';
		stylesCSS += '.inskinLoaded body{overflow-x:visible;}';
		stylesCSS += '.inskinLoaded .share_content{z-index:-1;}';
		stylesCSS += '.inskinLoaded .inner_container{z-index:5;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		$('#openmenu').click(function() {
			$(".ism-frame").parent().css({
				"z-index" : "0"
			});
		});
	}
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

