integration.meta = {
	'sectionID' : '128895',
	'siteName' : 'Business Insider - Smartphone - ( AU )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1040960',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var headerHeight = $('#masthead').outerHeight();
		if ($(".ism-frame:first").css("position") === "fixed") {
			$(this).css({
				"top" : headerHeight
			});
		}
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '#adspot-320x50-pos1.top{display: none !important;}';
		stylesCSS += '.inskinLoaded{padding-top: ' + headerHeight + 'px !important; overflow: visible !important; min-height: 100%; height: auto!important;}';
		stylesCSS += 'html{min-height: 100%; height: auto!important;}';
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

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

integration.on("layoutChange", function(e) {
	$('.navbar-toggle').click(function() {
		if ($('div.navbar-collapse').hasClass('in')) {
			$('#snap-content').css({
				"z-index" : "99"
			});
		}
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1027487/mobile-businessinsider', [320, 50]).display();\n<\\script>";
};
