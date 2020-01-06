integration.meta = {
  "sectionID": "125256",
  "siteName": "Hoy",
  "publisher": "vocento",
  "platform": "desktop"
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
  "desktop_resolution": [0]
};

integration.params = {
	'mf_siteId' : '706493',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1050,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": "publiTop, roba"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.InSkinNavTopValue = parseInt($("#navbar").css("top"));
		$("#navbar").css({
			"top" : (integration.custom.InSkinNavTopValue + 100) + "px"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinNavTopValue = integration.custom.PageSkinTopPanel + integration.custom.InSkinNavTopValue;
	$("head").append("<style>#navbar {max-width : 1050px;} #navbar.inSkinHeader {position: absolute !important; top: " + integration.custom.InSkinNavTopValue + "px !important;}</style>");
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	$(".ism-frame").parent().css({
		"z-index" : "1005"
	});
});

integration.custom.InSkinTopNav = function() {
	var height = window.InSkin.$(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel + 110) {
		$("#navbar").addClass("inSkinHeader");
	} else {
		$("#navbar").removeClass("inSkinHeader");
	}
}
