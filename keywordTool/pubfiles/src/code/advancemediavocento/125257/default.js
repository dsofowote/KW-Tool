integration.meta = {
  "sectionID": "125257",
  "siteName": "Hoy",
  "publisher": "vocento",
  "platform": "tablet"
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

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706413',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1050,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.InSkinNavTopValue = parseInt($("#navbar").css("top"));
		$("#navbar").css({
			"top" : integration.custom.InSkinNavTopValue + "px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$(".wrapper").css({
				"margin-left" : "5px"
			});
			$("#navbar").css({
				"max-width" : "1050px",
				"margin-left" : "0px"
			});
			integration.custom.isPageSkinEdge = true;
		} else {
			integration.custom.isPageSkinEdge = false;
		}
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
	if (integration.custom.isPageSkinEdge) {
		$("head").append("<style> #navbar.inSkinHeader {margin-left: 20px !important;}</style>");
	}
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel + 110) {
		$("#navbar").addClass("inSkinHeader");
	} else {
		$("#navbar").removeClass("inSkinHeader");
	}
}