integration.meta = {
	'sectionID' : '128108',
	'siteName' : 'Wheels - Smartphone- (AU) ',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '977222',
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
		if ($("#pageHead").length == 1) {
			var headHeight = $(".masthead").outerHeight();
			$("<div id='inskinanchor'></div>").insertAfter("#pageHead");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
			$("#inskinanchor").css({
				"top" : headHeight,
				"position" : "relative"
			});
		}

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .shareIcon{padding-left: 10px;}';
		stylesCSS += '.inskinLoaded .dfpAdvert{margin-left: -5px;}';
		stylesCSS += '.inskinLoaded .primaryNavigation:after{height: 0px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
	$("html").css({
		"padding" : "0"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n\n   googletag.pubads().definePassback(\"/13534306/Wheels\", [728, 90]).display();\n\n<\\script>";
};
