integration.meta = {
   'sectionID' : '127530',
   'siteName' : 'Tech Radar US - (Smartphone) - (US)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '734996',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* Collapse publishers leaderboard and MPU placements 
		$(".dfp-leaderboard-container").css({
			"height" : "0"
		});
		$("[id^=dfp_advert_], #dfp_advert_1-wrapper, #dfp_advert_2-wrapper").hide();
		$(".dfp-mpu").css({"display" : "none"}); */
		
		$("head").append("<style>.dfp-mpu{left:-20px;}</style>");
		$(".popular-box").css({
			"padding-left" : "0px"
		});
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		$(".primary-nav").css({
			"width" : "calc(100% + 75px)"
		});
		if ($("body > .primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .primary-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -60,
			});
		}
		$("head").append("<style> #reviewsSearch .autocomplete {width: 100% !important;} </style>");
		$("#content .popular-box").css({
			"padding-left" : "0px"
		});
		$("head").append("<style> body > div.stickyContainer {height: 0 !important;} </style>");
		/*$("body > div.stickyContainer").css({
			"height" : "0px !important"
		});*/		
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function(){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function () {
	var wwidth = $(window).width();
	var cont = wwidth - integration.custom.FrameSideRight;
	
	$(".menuitems.container.full").css({
		"max-width" : cont
	});
	
	if (wwidth < 321){
		$(".pt-table").css({
			"zoom" : "0.7"
		});
	} else if (wwidth > 374){
		$(".pt-table").css({
			"zoom" : "0.8"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_TechRadar/Inskin\", [320, 50]).display();\n<\\script>";
};