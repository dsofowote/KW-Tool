integration.meta = {
	'sectionID' : '129028',
	'siteName' : 'Fan Footy - Smartphone - ( AU )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1045589',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var hHeight = $("#nav-main-wrapper").outerHeight();
		var wWidth = $(window).width();
		var totalHeight = wWidth - integration.custom.FrameSideRight;
		if ($("#nav-main-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#nav-main-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -hHeight
			});
		}
		var hHeight = $('#nav-main-wrapper').outerHeight();
		$("head").append("<style>.clearfix {overflow: visible;} .clearfix::after{content: ''; clear: both; display: table;}</style>");
		$('body').addClass('inskinLoaded clearfix');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #inskinanchor{margin-top: ' + hHeight + 'px; position: relative;}';
		stylesCSS += '.inskinLoaded #top-spacer, .inskinLoaded #content-outer, .inskinLoaded #main-top, .inskinLoaded #ad-728, .inskinLoaded #ad-728-small{width: ' + totalHeight + 'px !important;}';
		stylesCSS += '.inskinLoaded .score-wrapper{padding: 10px 0 5px !important;}';
		stylesCSS += '.inskinLoaded #content-inner, .inskinLoaded #scoreboard-inner{padding: 10px 0 !important;}';
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

/* Passback Tag */
window.ISMPassback = function() {
    return "\"<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/135062774/fanfooty.scores', [1, 1]).display();\n<\\script>\"";
};