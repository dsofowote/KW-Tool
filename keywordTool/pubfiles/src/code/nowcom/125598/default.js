integration.meta = {
   'sectionID' : '125598',
   'siteName' : 'NOW.com',

   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706597',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true,
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#peek, #globalContainer, .headNavLine, #navBar-sticky-wrapper, .siteHeader, .pageSection, .homeLightGraySection, .footerSection").css({
   		"max-width" : "1000px",
   		"margin" : "0 auto",
   		"min-width" : "300px"
   	});
   	$("#container, #common_header").css({
   		"max-width" : "1000px",
   		"margin" : "0 auto",
   		"min-width" : "300px",
   		"min-width" : "1000px"
   	});
   	$("body").css({
		"background-color" : "#ffffff",
		"height" : "auto"
   	});
   }
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	InSkin.$( document ).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function(){
	var height = $(document).scrollTop();
	if( height < integration.custom.PageSkinTopPanel ){
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#layout-container").css({
			"margin-top" : newheight
		});
	}else{
		$("#layout-container").css({
			"margin-top" : "0px"
		});
	}

	if( height < integration.custom.PageSkinTopPanel + 158 ){
		$(".siteNavBar").css({
			"max-width" : "1000px",
			"margin-left" : "0px",
			"left" : "0",
			"min-width" : "1000px"
		});
	}else{
		$(".siteNavBar").css({
			"max-width" : "1000px",
			"margin-left" : "-500px",
			"left" : "50%",
			"min-width" : "1000px"
		});
	}
}
