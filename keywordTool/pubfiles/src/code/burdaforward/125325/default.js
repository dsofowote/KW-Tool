integration.meta = {
	"sectionID" : "125325",
	"siteName" : "Bunte",
	"publisher" : "tomorrow",
	"platform" : "desktop"
};

integration.telemetry.setup({       
   'url': true,             
   'ad-served': true,        
   'base-ready': true,      
   'ad-call-response': true, 
   'ad-call': true,          
   'failed-test': true,      
   'impression': true,       
   'custom': true           
});

integration.testParams = {
	"desktop_resolution" : [1320]
};

integration.params = {
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adServed", function(e) {
	$("#page, #footer").css({
		"max-width" : "980px",
		"margin" : "0 auto",
		"overflow" : "hidden"
	});
	$(".ism-frame").parent().css({
		"z-index" : "901"
	});
});

integration.on("layoutChange", function(e) {
	$("head").append("<style>#navigation-container{position:fixed !important;}</style>");
	window.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < PageSkinTopPanel) {
		var newheight = PageSkinTopPanel - height;
		$("#navigation-container").css({
			"margin-top" : newheight
		});
	} else {
		$("#navigation-container").css({
			"margin-top" : "0px"
		});
	}
}