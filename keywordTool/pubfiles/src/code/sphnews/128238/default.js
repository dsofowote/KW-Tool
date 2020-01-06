integration.meta = {
	'sectionID' : '128238',
	'siteName' : 'Zaobao - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1595]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '993646',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('#js-header-desktop').height() ;
		var navheight = $('#js-topnavbar-tertiary').height();
		$(".avt-leaderboard").css({"display": "none"});
		$("head").append("<style> html {overflow-y: visible !important;}</style>");
		$('.main, footer, #js-header-desktop, .wrap').css({'max-width':'1320px', 'margin':'0 auto'});
		$('#block-block-54').css({'display':'none'});
		// if ($("#js-header-desktop").length == 1) {
        //     $("<div id='inskinanchor'></div>").insertAfter("#js-header-desktop");
        //     integration.base.setCfg({
        //         plr_AnchorParent : "#inskinanchor",
		// 		plr_PageHeightAdjustment : -20,
		// 		plr_ScrollAdjustment: 190
        //     });
		// };

		// var topLinkRight = (($(window).width() - 1335) / 2) + 10;
		// $("head").append("<style>#top-link-block.affix {right: " + topLinkRight +"px; bottom: 11% !important;}</style>");

	}
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.InSkinBottomNav();
        $( document ).scroll(function() {
            integration.custom.InSkinBottomNav();
        });
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();

    if (width > 1535 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1320)/2; /* content width divided by 2 */
		integration.custom.PageSkinFrameBottom = e.data.plr_FrameBottom;
		$("head").append("<style> #shy-ladies-box{right: " + sideWidth + "px !important}</style>");
		$("head").append("<style> #block-block-68.tour{left: " + sideWidth + "px !important; bottom: " + integration.custom.PageSkinFrameBottom + "px !important}</style>");

    } else {
		$("head").append("<style> #shy-ladies-box{right: 0px !important}</style>");
		$("head").append("<style> #block-block-68.tour{left: 10px !important; bottom: 20px !important}</style>");
    }
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};