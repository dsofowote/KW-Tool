integration.meta = {
	'sectionID' : '127519',
	'siteName' : 'Female - (Creative Approval) - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '734575',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded div.issue > a > img{width: 100%; height: auto;} .inskinLoaded .ad-zone{margin-left: -5px !important;}';
		stylesCSS += 'body.inskinLoaded{padding-right: 0px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("a.next").trigger("click");
});
