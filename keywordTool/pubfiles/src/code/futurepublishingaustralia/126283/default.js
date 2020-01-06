integration.meta = {
   'sectionID' : '126283',
   'siteName' : 'T3 - Tablet - (AU)',
   
   'platform' : 'tablet',
   'restrictions' : ''
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '713124',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$(".container").css({
				"margin-left" : "0px",
				"width" : "976px"
			});
			
			$("#content").css({
				"margin-left" : "0px"
			});
			$('head').append('<style type="text/css">body > div.placeholder {margin:0 !important;}</style>');
			$("#wrapper").css({
				"margin-left" : "10px"
			});
			$("#future_company_footer, #takeover-container-4, #overlay-container-5").css({
				"margin-left" : "0px",
				"width" : "970px"
			});
			$("header").css({
				"margin-left" : "0px"
			});
			$("#fp_cookieMessageContainer").css({
				"left" : "21px",
				"margin-left" : "0px"
			});

			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$('#document-footer').css({
				"width" : "1024px",
				"bottom" : "0px"
			});
		}else{
			$(".primary-nav").css({
				"margin-left" : "-20px",
				"width" : "calc(100% + 20px)",
				"width" : "-moz-calc(100% + 20px)",
				"width" : "-webkit-calc(100% + 20px)"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$("#InSkinFrameLeft_myTabletSkin").css({
		"z-index" : "3"
	});
	$("#InSkinFrameRight_myTabletSkin").css({
		"z-index" : "3"
	});
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
	$("body").css({
		"background-image" : "none",
		"background-color" : "white"
	});
});


/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">    googletag.pubads().definePassback(\n    \"/8644/Passback_T3/InskinAu\", [1, 1]).display();\n<\\script>";
};