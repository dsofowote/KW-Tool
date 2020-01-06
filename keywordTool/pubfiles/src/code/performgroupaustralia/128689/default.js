integration.meta = {
	'sectionID' : '128689',
	'siteName' : '	Sporting News - (Pagelead) - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1030058',
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
		var hHeight = $('.widget-header').height();
		if ($("#widget-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#widget-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -1
			});
		}
		$('#inskinanchor').css({
			"margin-top" : "58px"
		});
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #header-placeholder{display: none !important;}';
		stylesCSS += '.inskinLoaded, .inskinLoaded body{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded .noscroll .widget-header{z-index: 99999 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.base.setCfg({
			'plr_FixedTop' : true,
			'plr_EnableSwipe' : true
		});
	}
});

integration.on("layoutChange", function(e) {
	var hHeight = $('.widget-header').height();
	$(window).scroll(function() {
		if ($(".ism-frame:first").css("position") === "fixed") {
			$('#inskinanchor').css({
				"top" : "58px"
			});
			$('.is-collapsed').css({
				"display" : "block"
			});
		} else {
			$('#inskinanchor').css({
				"top" : "0"
			});
			$('.is-collapsed').css({
				"display" : "none"
			});
		}
	});
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "999"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\nwindow.frameElement.width=event.size[0];\nwindow.frameElement.height=event.size[1];\n});\n  googletag.pubads().definePassback('/67970281/DISPLAY_OWNED_PASSBACKS_GBL/SportingNews_Responsive/ROS/Top_Banner', [320, 50]).setTargeting('Display_Passback', ['InSkin']).display();\n<\\script>";
};

