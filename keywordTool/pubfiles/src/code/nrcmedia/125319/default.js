integration.meta = {
	'sectionID' : '125319',
	'siteName' : 'NRC - Tablet - (NL)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1012440',
	'plr_PageAlignment' : 'center',
	'plr_Responsive' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_ScaleElement" : "#inskinDiv"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var bodyContent = $("body > :not(.inskinanchor, .nav-sidebar)");
		$("body").append("<div id='inskinDiv' class='ism'></div>");
		$(bodyContent).appendTo("#inskinDiv");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
			$("head").append("<style>body{margin: 0 !important;} .nmt-layout__main{width: 100% !important;}</style>");
		}
		$("head").append("<style>body{min-height: 100%;} #inskinDiv, html{height: 100% !important;} body{overflow: hidden !important;} div[data-state='active']{visibility: visible !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).scroll(function() {
		// Detect when the user has scroll all the way down and refresh the max-height of the body and the footer for extra content loading.
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
			integration.custom.floatingButtons();
		}
	});
});

integration.custom.floatingButtons = function() {
	var frameClass = document.getElementsByClassName("ism-frame");
	var frameTop = frameClass[0].getBoundingClientRect();
	var frameRight = frameClass[1].getBoundingClientRect();
	var frameBottom = frameClass[2].getBoundingClientRect();
	var scaledDiv = document.getElementById("inskinDiv");
	var final = scaledDiv.getBoundingClientRect();
	var scaledCont = final.height;
	var scaledDoc = final.height + frameTop.height + frameBottom.height;
	$("html, body").css({
		"max-height" : scaledDoc
	});
}

