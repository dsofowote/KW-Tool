integration.meta = {
	'sectionID' : '127370',
	'siteName' : 'Vital - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '715467',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_FastInit" : true,
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 80
};
integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -80
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .content{padding-top:0px;}';
		stylesCSS += '.inskinLoaded .container{padding:0px;}';
		stylesCSS += '.inskinLoaded .slick-dots{top:calc(40vw - 28px);}';
		//closing the leaderboard
		stylesCSS += '#ad-mobile-presenter{display:none !important;}';
		stylesCSS += '.inskinLoaded .header{z-index:20;}';
		stylesCSS += '.inskinLoaded .content-header__image{width: 100% !important; margin-left: 0 !important;}';
		stylesCSS += '.inskinLoaded .advertising__item--mobile-middle, .inskinLoaded .advertising__item--mobile-presenter, .inskinLoaded .advertising__item--mobile-rec{width: 100% !important; margin-left: 0 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		$("#inskinanchor").css({
			"margin-top" : "80px"
		});
	}
});
integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded #top-slider-1{width:100%;}</style>");
});
integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});
