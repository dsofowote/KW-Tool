integration.meta = {
	"sectionID": "124331",
	"siteName": "Hello Magazine",
	"publisher": "hello",
	"platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId': '681680',
	"plr_UseCreativeSettings": true,
	"plr_UseFullVersion": true,
	"plr_ContentType": "PAGESKINEXPRESS",
	"plr_ContentW": 1260,
	//"plr_Responsive" : "true",
	//"plr_Fluid" : "true",
	"plr_PageAlignment": "center",
	"plr_HideElementsByID": "",
	"plr_HideElementsByClass": "",
	'plr_FastInit': true,
	"plr_ConsentTimeout": 3,
	'plr_PageScanExclude' : ' .mainMenu, #mainfooter, #topBar, #secondaryBar '
};

integration.on("adCallResult", function (e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment: 'left'
			});
			$("#all").css({
				"max-width": "1240px"
			});
			$("body").css({
				"width": "auto"
			});
			$(".shareBar .news-share").css({
				"margin": "0"
			});
			$("head").append('<style>.menu-left-open{margin-left: 380px !important;}</style>');
		}
		$(".shareBar .news-share").css({
			"width": "1240px",
			"left": "0",
			"right": "0",
			"margin": "0 auto",
			"z-index": "55"
		});
		$("head").append('<style>.menu-left-open{margin-left: 510px;}</style>');

	}
});
integration.on("adServed", function (e) {
	$(".ism-frame").parent().css({
		"z-index": "60"
	});
});


integration.on("layoutChange", function (e) {
	var headHeight = $("#topBar").height() + $("#secondaryBar").height();

	$(document).scroll(function(){
		if ($("body.scrollDown").length >= 1 ){
			console.log("no header");
			integration.base.setCfg({
				plr_ScrollAdjustment: -75
			});
		} else {
			console.log("header");
			integration.base.setCfg({
				plr_ScrollAdjustment: 25
			});
		}
	});

});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'><\\script>\n<div id='gpt-passback'>\n  <script>\n     window.googletag = window.googletag || {cmd: []};\n       googletag.cmd.push(function() {\n         googletag\n           .defineSlot('/87824813/Hellomagazine/passback/inskin', [728, 200], 'gpt-passback')\n           .addService(googletag.pubads())\n           .setTargeting('position', 'megabanner')\n           .setTargeting('place', 'ATF')\n         googletag.pubads().set('page_url', 'www.hellomagazine.com');\n         googletag.enableServices();\n         googletag.display('gpt-passback');\n     });\n  <\\script>\n</div>";
};