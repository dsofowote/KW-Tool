integration.meta = {
   'sectionID' : '125833',
   'siteName' : 'SundayMore - Desktop',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
   'desktop_resolution' : [1530]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707543',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1270,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
    if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
    
    }  
   
   }
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function(){
		integration.custom.InSkinTopNav();
	});
	$("#mobile-menu").css({
		"margin-top" : integration.custom.FrameTop 
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	var headHeight = $(".header-container").height();
	if(height < (headHeight + integration.custom.FrameTop)) {
		$("#header > .row-holder.sticky").css({
			"position" : "absolute",
			"top" : headHeight,
			"transition" : "none",
			"-webkit-transition" : "none"
		});
	} else {
		$("#header > .row-holder.sticky").css({
			"position" : "fixed",
			"top" : "0px",
			"transition" : "none",
			"-webkit-transition" : "none"
		});
	}
}
