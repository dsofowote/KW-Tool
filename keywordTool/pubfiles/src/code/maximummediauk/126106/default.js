integration.meta = {
   'sectionID' : '126106',
   'siteName' : 'Joe - Desktop - (UK)',
   'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706857',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
  	'plr_FastInit' : true,
  	"plr_ConsentTimeout" : 3
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
    var headHeight = $('.header').outerHeight();
    if ($("body > .header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body > .header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -65,
            });
        }

    // $("#inskinanchor").css({
    // 		"top" : headHeight,
    // 		"position" : "relative"
    // 	});

		$("div.sticky-spacer").css({
			"height" : "0px",
			"max-height" : "0px",
			"min-height" : "0px"
		});
		$(".footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto",
			"position" : "relative"
		});
		$("body").css({
			"margin-bottom" : "0px"
		});
		$("head").append("<style>#div-gpt-top_page{min-height: 0 !important; height: 0 !important;}</style>");
		$(".main-wrapper > .top-space").css({
			"margin-top" : "0"
		});
	}
});

integration.on('layoutChange', function(e){
	$(".ism-anchor").css({
		"z-index" : "99"
	});
  $('head').append('<style type="text/css">.ism-frame:nth-of-type(1), .ism-frame:nth-of-type(2), .ism-frame:nth-of-type(4) {top : 65px !important;}</style>');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=19669\"><\\script>";
};
