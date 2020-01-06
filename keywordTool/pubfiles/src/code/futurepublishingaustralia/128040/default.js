integration.meta = {
	'sectionID' : '128040',
	'siteName' : 'Music Radar - Smartphone - (AU) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '971040',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_ScrollAdjustment" : -60
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -40
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .sponsored-post *{max-width: 100%;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var wwidth = $(window).width();
	var cwidth = wwidth - integration.custom.FrameSideRight;
	$("head").append("<style>.inskinLoaded .read-more-container > *, .inskinLoaded #sidebar > section *{max-width: " + cwidth + "px;}</style>");
	$("head").append("<style>.inskinLoaded #sidebar > section i{margin-right: 3px;}</style>");
	$("head").append("<style>.inskinLoaded .primary-nav{width: " + wwidth + "px;}</style>");
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});
