integration.meta = {
    'sectionID' : '129330',
    'siteName' : 'Goal - Smartphone - DE',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1072375',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("html").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += "html, body.inskinLoaded{overflow:visible}";
		stylesCSS += ".inskinLoaded .body > iframe{width: 100%; height: auto;}";
		stylesCSS += ".inskinLoaded .layout-master{min-width: 100% !important;}";
		stylesCSS += ".inskinLoaded .widget-header{height: 0 !important;}";
		stylesCSS += "</style>";
		$("head").append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	var headHeight = $(".widget-header__wrapper").outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : headHeight
	});
	integration.base.setCfg({
		'plr_PageHeightAdjustment' : -headHeight
	});

});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var cont = wwidth - integration.custom.FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += ".inskinLoaded, .inskinLoaded body{overflow:visible}";
	stylesCSS += '.inskinLoaded .page-container, .inskinLoaded .main-content{max-width: ' + cont + 'px !important;}';
	stylesCSS += "</style>";
	$("head").append(stylesCSS)
}

integration.on("adClose", function(e) {
	$("html").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});
