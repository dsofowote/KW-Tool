integration.meta = {
	'sectionID' : '126350',
	'siteName' : 'Sports Network - Smartphone - (UK)',
	'platform' : 'smartphone'
};



function setWindow() {
	return currentWindow.top;
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707673',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_GetContentHeightVersion' : 2,
	'plr_FastInit' : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true
};
integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #mainpage > .ui-footer-fixed{height:0px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$("head").append("<style>.inskinLoaded #mainpage, .inskinLoaded .mainpage{width:calc(100% - " + integration.custom.FrameSideRight + "px);margin-top:" + integration.custom.FrameTop + "px;}</style>");
	$("head").append("<style>.inskinLoaded [data-role='footer']{display:none;}</style>");
	$("head").append("<style>.inskinLoaded #header, .inskinLoaded #contentcontainer{width:calc(100% - " + integration.custom.FrameSideRight + "px);}</style>");
});

integration.on('adServed', function(e) {
	var hheight = $(".site-header").outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : hheight
	});
	$(".ism-frame .ism-frame-inner").css({
		"overflow" : "visible"
	});

});
integration.on("adClose", function(e) {
	 $("body").removeClass("inskinLoaded");
	 //$("#inskinanchor").remove();
});
