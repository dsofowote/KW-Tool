integration.meta = {
	'sectionID' : '128022',
	'siteName' : ' Smart Parents - Smartphone - (SG) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '969030',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > div.page-wrap > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > div.page-wrap > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -54
			});
		}

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';

		stylesCSS += '.inskinLoaded .cards-wrap{margin-top: 34px!important; margin-bottom: 0px!important;}';
		stylesCSS += '.inskinLoaded #div-gpt-ad-oop, .inskinLoaded #div-gpt-ad-oop-small, .inskinLoaded .page-wrap > div:first-of-type > amp-ad{display: none;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
		$("head").append("<style> .page-wrap{margin-top:0px !important;}</style>");

		var headHeight = $("div.page-wrap > header").outerHeight();
		$("#inskinanchor").css({
			"top" : headHeight - 0,
			"position" : "relative"
		});

		$("head").append("<style>.inskinLoaded.primary button.ism-close{padding: 0px !important; background: none !important; background-image: url('https://cdn.inskinad.com/isfe/4.1/css/img/close_btn_v2.svg') !important; background-size: 20px 20px !important; background-repeat: no-repeat !important; background-position: 9px 5px !important;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	/*var closeTop = 54;
	$(".ism-close").css({
		"margin-top" : closeTop + 2
	});*/
	$("head").append("<style>.ism-close{margin-top: 56px !important;}</style>");
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});
