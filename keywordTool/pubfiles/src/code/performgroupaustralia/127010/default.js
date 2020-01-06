integration.meta = {
	'sectionID' : '127010',
	'siteName' : 'NFL.com - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1245]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707412',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 985,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -220

};

function setWindow() {
    return currentWindow.top;
}

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		$("#hd").css({
			"margin-bottom" : "0px"
		});

		$("body").css({
			"overflow" : "visible"
		});
		$(".base.container, #page-footer").css({
			"max-width" : "985px",
			"margin" : "0 auto"
		});

		$("#page-footer ul.rsv-c0aa54bb li").css({
			"width" : "5%"
		});

		$("body").append("<style>.rmq-e42d7359, .rmq-82bdf44d, .rmq-4b621a01{max-width:1240px;margin:0 auto !important;}</style>");
		$("body").append("<style>.rmq-a944b75d{padding-top: 0px !important; margin-top: 200px !important;}</style>");
		$("body").append("<style>.rmq-e850e4f9{padding-top: 0px !important; margin-top: 152px !important;}</style>");
		$("body").append("<style>#page-top-ad{max-height: 90px !important; height: 90px !important; margin: 15px auto 15px !important;}</style>");

		$("body").css({
			"background-color" : "#EEE"
		});

		$("#team-sites-header-bar").css({
			"max-width" : "1000px",
			"margin" : "0px auto"
		});

		$('#page-top-ad').css({
			'height' : '0px',
			'max-height' : '0px'
		});
	}
});

integration.on("adServed", function(e) {
    var headHeight = $(".rsv-e9d8b705").outerHeight() + $(".links-container").outerHeight() + $(".secondary-navigation").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});


/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/67970281/display_thirdparty_gbl/nflcom_responsive', [728, 90]).setTargeting('Display_Passback', ['InSkin']).display();\n<\\script>";
};
