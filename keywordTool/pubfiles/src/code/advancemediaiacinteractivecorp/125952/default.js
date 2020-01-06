integration.meta = {
	'sectionID' : '125952',
	'siteName' : 'The Daily Beast',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1145,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel(); 
		
		$("head").append("<style>footer.footer {position: relative !important;</style>}");
		$(".progressbar-wrapper").css({
			"padding-left" : "256px"
		});
		
		$(".nav, .top-section, .top-story").css({
			"max-width" : "1145px",
			"margin-right" : "auto",
			"margin-left" : "auto"
		});
		$("body").css({
			"margin-top" : "0"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

/**** Constrain Top Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	integration.custom.InSkinWidth();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	$(window).resize(function(){
		integration.custom.InSkinWidth();
	});
	var navheight = $(".homenav, .nav").height();
	$(".top-section, .top-story").css({
		"margin-top" : navheight
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".homenav, .nav").css({
			"margin-top" : newheight
		});
	} else {
		$(".homenav, .nav").css({
			"margin-top" : "0px"
		});
	}
}

integration.custom.InSkinWidth = function() {
	var width = $(window).width()
	if (width > 1145) {
		$(".homenav, .footer").css({
			"max-width" : "1145px",
			"margin-left" : "-572.5px",
			"left" : "50%"
		});
	} else {
		$(".homenav, .footer").css({
			"max-width" : "1145px",
			"margin-left" : "0px",
			"left" : "0"
		});
	}
}
