integration.meta = {
	'sectionID' : '129034',
	'siteName' : 'Blick - (Publisher Booking) - Smartphone - ( CH )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1045866',
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
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
		if ($(".vertical-container__header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".vertical-container__header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -60
			})
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += ".inskinLoaded {overflow: visible !important;}";
		stylesCSS += ".inskinLoaded .teaser-standard--mobile-mini-reduced .teaser__metadata{bottom: 0 !important;}";
		stylesCSS += "</style>";
		$("head").append(stylesCSS)
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

