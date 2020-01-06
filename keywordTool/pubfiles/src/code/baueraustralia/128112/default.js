integration.meta = {
   'sectionID' : '128112',
   'siteName' : '4x4 Australia - Smartphone- (AU)',
   'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
   'mf_siteId' : '977226',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded .advert-leaderboard__bottom-close{display: none;}';
    stylesCSS += '.inskinLoaded .primaryNavigation:after {background: none;}';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);

    if ($("body > header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("body > header");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_PageHeightAdjustment : -56,
                });
            }

    var headHeight = $(".masthead").height();
    $("#inskinanchor").css({
    		"top" : headHeight + 6,
    		"position" : "relative"
    	});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var newValue = ".inskinLoaded .shareContent {width:" + contentWidth + "px; display:flex; justify-content:start;}";
	//newValue += ".inskinLoaded .shareContent {}";
	document.getElementById("inskinStyles").innerHTML = newValue;
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
  $("html").css({
		"padding" : "0px"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/13534306/4x4australia\", [320, 50]).display();\n<\\script>";
};
