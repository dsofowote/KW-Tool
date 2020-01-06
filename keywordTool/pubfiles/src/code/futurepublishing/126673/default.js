integration.meta = {
	'sectionID' : '126673',
	'siteName' : 'PC Gamer - Smartphone - (UK) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '707677',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
  'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	    try {
            window.dfp.applying('inskin');
        } catch(e) {
        }
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">'
      stylesCSS += '.inskinLoaded .button-search{top: 40px; right: ' + integration.custom.FrameSideRight + 'px;}';
      stylesCSS += '.inskinLoaded .moreLatest-0-0{width: inherit; margin-left: 0;}';
      stylesCSS += '.inskinLoaded .imagePlaceholder-0-8{min-height: 0;}';
      stylesCSS += '.inskinLoaded .imagePlaceholder-0-8{min-height: 0;}';
			stylesCSS += '.inskinLoaded div.stickyContainer, .inskinLoaded .mobile-leaderboard-320-50{height: 0 !important;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on('adServed', function(e) {
		var socialiteWidth = $(".socialite-widget").width();
		$("head").append("<style>.inskinLoaded .dfp-mpu{left:-20px;}</style>");
		$("head").append("<style>.inskinLoaded .slotify-floatable{left: 0px !important;}</style>");
		$("head").append("<style>.inskinLoaded [data-name~='sponsored1']{position: relative; left: 35px; z-index: 1;}</style>");
		$("head").append("<style>.inskinLoaded [data-name*='mpu']{left: -20px; position: relative;}</style>");
		$("head").append("<style>.inskinLoaded .socialite-widget-ul{width: " + (socialiteWidth + 15) + "px;}</style>");
});

integration.on('layoutChange', function(e) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.FrameTop = e.data.plr_FrameTop;
		var menuitemsWrapperWidth = $(".menuitems").parent().width();
    integration.custom.laychange();
		$(window).on('resize', function() {
	        integration.custom.laychange();
	   });

    $("head").append("<style>.inskinLoaded .search-box{margin-top: " + integration.custom.FrameTop + "px;}</style>");
		$("head").append("<style>.inskinLoaded .button-search{top: " + integration.custom.FrameTop + "px;}</style>");
		$("head").append("<style>.inskinLoaded .primary-nav .menuitems{margin-top: " + integration.custom.FrameTop + "px; width: " + menuitemsWrapperWidth + "px;}</style>");
});

integration.custom.laychange = function() {
		var fwidth = $(window).width();
    var cons = fwidth - integration.custom.FrameSideRight;
    $("head").append("<style>.inskinLoaded #main{max-width: " + cons + "px; margin-left: 0px;}</style>");
    $("head").append("<style>.inskinLoaded ul.nav-list.component-loaded{max-width: " + cons + "px; margin-left: 0px;}</style>");
    $("head").append("<style>.inskinLoaded form.search-box{max-width: " + (cons - 10) + "px; right: 80px;}</style>");
}

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_PC_Gamer/Inskin\", [320, 50]).display();\n<\\script>";
};
