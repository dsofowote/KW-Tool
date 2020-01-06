integration.meta = {
	'sectionID' : '127975',
	'siteName' : 'Hardware Zone MY - (Creative Approval) - Smartphone - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '961595',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true,
	"plr_ScrollAdjustment" : 60
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		var headerHeight = $(".nav-mobile").height();
		if ($("body #canvas").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("body #canvas");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -60,
			});
		}
		$('body').css({
			"position" : "relative",
			"padding" : "0"
		});
		$('#inskinanchor').css({
			"margin-top" : headerHeight
		});
		$("head").append('<style>#back_to_top.on{right: 23% !important;} .ads-mobile-leaderboard-bar{width: calc(100% - 74px) !important;} #canvas{min-width: 300px !important;} .nav-header:before{display: none !important;}</style>');

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style id="inskinStyles" type="text/css">';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function() {
	$(document).on("scroll", function() {
		//Checks layout & if sticky nav is present
		var headerCheck = $("body.is-navSticky_show .nav-header").length;
		var navHeight = $("#nav-mb-main").outerHeight();
		var newValue = 'body.inskinLoaded{padding-right:0px !important}';
		var forumPage = $(".bodywrapping").length;

		if (headerCheck == 1 && forumPage == 0) {
			integration.base.setCfg({
				plr_ScrollAdjustment : 60
			});
		} else {
			integration.base.setCfg({
				plr_ScrollAdjustment : 0
			});
		}

		document.getElementById("inskinStyles").innerHTML = newValue;
	});

});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});
