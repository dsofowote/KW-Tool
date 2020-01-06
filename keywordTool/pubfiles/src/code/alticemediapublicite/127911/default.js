integration.meta = {
	'sectionID' : '127911',
	'siteName' : 'I24 News - Smartphone - ( FR )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '924680',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* We need to add everything with classes so we can remove the CSS when PageSkin is unloaded */
		$("body").addClass("pageSkinDisplayed");
		var specialCSS = "<style>";
		specialCSS += ".pageSkinDisplayed #main-wrapper {margin-left: 30px;}";
		specialCSS += ".pageSkinDisplayed footer {float:none}";
		specialCSS += "</style>";
		$("head").append(specialCSS);
	}
});

integration.on("adServed", function(e) {
	var headHeight = $("header").outerHeight();
	$(".ism-frame").parent().css({
		"top" : headHeight
	});
	
	integration.custom.servedinskin = 1;
	if (integration.custom.clearinskin && integration.custom.clearinskin == 1) {
		window.clearInSkin();
	};
	try {
		window.inSkinServed();
	} catch(e) {
	}
});

window.clearInSkin = function() {
	integration.custom.clearinskin = 1;
	if (integration.custom.servedinskin && integration.custom.servedinskin == 1) {
		window.InSkin.$("body").removeClass("pageSkinDisplayed");
		integration.base.unloadAd();
		integration.telemetry.recordCustom('PageSkin unloaded');
	}
}

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function(){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function(){
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - (integration.custom.FrameSideRight + 30);	
	$("head").append("<style>.pageSkinDisplayed .main_wrapper{max-width :" + contentWidth + "px}</style>");
}
