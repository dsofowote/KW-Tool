integration.meta = {
	'sectionID' : '128605',
	'siteName' : 'Female - (Unpub Until Approv - Pagelead) - Smartphone - ( SG )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1026022',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.floatingSkin();
		integration.custom.FrameTop = e.data.plr_FrameTop;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .sticky-header{top: ' + integration.custom.FrameTop + 'px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingSkin();
	$(window).scroll(function(event) {
		integration.custom.floatingSkin();
		return false;
	});
});

integration.custom.floatingSkin = function() {
	if ($(".ism-frame:first").css("position") === "fixed") {
		$('#top-nav-wrapper').addClass('sticky-header');
		setTimeout(function() {
			$('#top-nav-wrapper').removeClass('sticky-header');
		}, 5000);
		return false;
	}
};
