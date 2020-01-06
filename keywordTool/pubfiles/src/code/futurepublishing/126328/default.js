integration.meta = {
	'sectionID' : '126328',
	'siteName' : 'Techradar - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708062',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_StartScrollOnAnchor' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		try {
			window.dfp.applying('inskin');
		} catch(e) {
		}
		if ($("body > .primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .primary-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -60,
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .dfp-mpu{left: -20px;}';
		stylesCSS += '.inskinLoaded .popular-box{padding-left: 0px;}';
		stylesCSS += '.inskinLoaded #reviewsSearch .autocomplete {width: 100% !important;}';
		stylesCSS += '.inskinLoaded #content .popular-box{padding-left: 0px;}';
		stylesCSS += '.inskinLoaded div.stickyContainer, .inskinLoaded .mobile-leaderboard-320-50{height: 0 !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .primary-nav{width: calc(100% + ' + integration.custom.FrameSideRight + 'px);}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var cont = wwidth - integration.custom.FrameSideRight;
	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .menuitems.container.full{max-width: ' + cont + 'px;}';
	stylesCSS += '.inskinLoaded.inskinLess .pt-table{zoom: 0.7;}';
	stylesCSS += 'inskinLoaded.inskinGreater .pt-table{zoom: 0.8;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
	if (wwidth < 321) {
		$("body").addClass("inskinLess");
		$("body").removeClass("inskinGreater");
	} else if (wwidth > 374) {
		$("body").removeClass("inskinLess");
		$("body").addClass("inskinGreater");
	}
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("body").removeClass("inskinLess");
	$("body").removeClass("inskinGreater");
	$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_TechRadar/Inskin\", [320, 50]).display();\n<\\script>";
};
