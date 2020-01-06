integration.meta = {
    'sectionID' : '128493',
    'siteName' : 'Four Four Two SG - Smartphone - (ID SG TH MY)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1018314',
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
		stylesCSS += '#leaderboard{display: none !important;}';
		stylesCSS += 'body.inskinLoaded {overflow-x: visible;}';
		stylesCSS += '.inskinLoaded #header, .inskinLoaded #footer-wrapper{min-width: 0;}';
		stylesCSS += '.inskinLoaded .sidebars{margin-left: -8px; margin-right: -8px;}';
		stylesCSS += '.inskinLoaded .sidebars a{word-break: break-word;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		$("head").append("<style>.inskinLoaded .ismNavClosed{display: none;}</style>");
		$("#main-menu > .menu").addClass("ismNavClosed");
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1001"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	cwidth = $(window).width() - integration.custom.FrameSideRight;
	$("#menu-icon").on("touchstart", function() {
		integration.custom.ismNavOpen();
	});
	$("head").append("<style>.inskinLoaded #page{min-width: " + cwidth + "px;}</style>");
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 300);

});

integration.custom.ismNavOpen = function() {
	setTimeout(function() {
		if ($("#main-menu > .menu").hasClass("ismNavClosed")) {
			$("#main-menu > .menu").removeClass("ismNavClosed");
		} else {
			$("#main-menu > .menu").addClass("ismNavClosed");
		}
	}, 300);
}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#main-menu > .menu").removeClass("ismNavClosed");
	$('a.flex-next').trigger('click');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/8644/Passback_442/Inskin_Fox\", [320, 50]).display();\n<\\script>";
};

