integration.meta = {
	'sectionID' : '128134',
	'siteName' : 'NFL.com - Smartphone - (Asia) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '980498',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded [data-container-id*="home-page"] {overflow-x:hidden;}';
		stylesCSS += '.inskinLoaded {overflow:visible;}';
		stylesCSS += '.inskinLoaded [aria-live*="polite"] {position:relative;left:-20px;}';
		stylesCSS += '.inskinLoaded #page-footer [aria-live*="polite"] {position:relative;left:0px;}';
		stylesCSS += '.inskinLoaded [role*="radiogroup"] {max-width:}';
		stylesCSS += '.inskinLoaded .winners-widget {overflow-x: hidden;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	console.log("test");
	
	var homePage = $(".nfl-mobile").length;
	console.log(homePage);
	if (homePage >= 1) {
		$(".ism-frame").parent().css({
			"top" : "96px"
		});
	} else {
		$(".ism-frame").parent().css({
			"top" : "48px"
		});
	}

});

integration.on('layoutChange', function(e) {

});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

