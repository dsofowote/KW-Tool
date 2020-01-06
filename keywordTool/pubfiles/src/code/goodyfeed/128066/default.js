integration.meta = {
	'sectionID' : '128066',
	'siteName' : 'Goody Feed - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '973480',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_ScrollAdjustment" : 50,
	"plr_StartScrollOnAnchor" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".sticky_social").length == 1) {
			var pageHeightAdjustment = -93;
		} else {
			var pageHeightAdjustment = -50;
		}
		if ($("header.container").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : pageHeightAdjustment
			});
		}

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .amp-ad-wrapper{margin-left: -17px;}';
		stylesCSS += '.inskinLoaded .backstretch{display: none;}';
		//stylesCSS += '.inskinLoaded .i-amphtml-layout-fixed{margin-left: -17px;}';
		
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var cwidth = $(window).width() - integration.custom.FrameSideRight;
	$("head").append("<style>.inskinLoaded .sticky_social{max-width: " + cwidth + "px;}</style>");
	$("head").append("<style>.inskinLoaded amp-anim{max-width: " + cwidth + "px; min-width: " + cwidth + "px; margin-left: -17px;}</style>");
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "11"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});
