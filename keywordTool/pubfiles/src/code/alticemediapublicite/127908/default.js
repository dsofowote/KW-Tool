integration.meta = {
	'sectionID' : '127908',
	'siteName' : 'I24 News - Desktop - ( FR )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1627]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '919967',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1367,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_GetContentHeightVersion' : 2,
	'plr_EnableActiveResize' : false
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* We need to add everything with classes so we can remove the CSS when PageSkin is unloaded */
		$("body").addClass("pageSkinDisplayed");
		integration.custom.specialCSS = "<style>";
		integration.custom.specialCSS += ".pageSkinDisplayed #main-wrapper, .pageSkinDisplayed footer, .pageSkinDisplayed .wrapper_article_navigation_scroll {max-width : 1367px;margin:0 auto;} ";
		integration.custom.specialCSS += ".pageSkinDisplayed footer {float:none} ";
		//integration.custom.specialCSS += ".ism-frame < div{top :" + headHeight + "px; webkit-transition:ease,0.3s; transition:ease,0.3s;} ";
		integration.custom.specialCSS += "</style>";
		
	}
});

integration.on('adServed', function(e) {	
	//Move pageskin when side nav opens
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var headHeight = $(".wrapper_header_main").outerHeight();
	var menuWidth = $(".wrapper_submenu").width();
	var menuToggle = true;
	
	$("head").append(integration.custom.specialCSS);
	
	$(".ism-frame").parent().css({
		"top" : headHeight,
		"webkit-transition" : "ease,0.3s",
		"transition" : "ease,0.3s"
	});
	
	$(".header_burger").click(function() {
		if (menuToggle) {
			$(".ism-frame").parent().css({
				"left" : menuWidth
			});
			menuToggle = false;
		}
	});

	$(".menu-overlay").click(function() {
		if ( menuToggle = true) {
			$(".ism-frame").parent().css({
				"left" : "0px"
			});
			menuToggle = true;
		}
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
		//integration.telemetry.recordCustom('PageSkin unloaded');
	}
}

integration.on('layoutChange', function(e) {
	//Push Video Box within pageskin
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - (1367 + integration.custom.FrameSideRight);
	var sides = 60 + (contentWidth / 2);
	
	$("head").append("<style>.pageSkinDisplayed .encart_video{left: " + sides + "px !important;}</style>");
	
});
