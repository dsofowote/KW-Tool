integration.meta = {
   'sectionID' : '127108',
   'siteName' : 'Daily Mail - Desktop - Middle East',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707413',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 984,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageScanExclude' : '.nav-primary, .and-footer, .page-footer',
   "plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background" : "none"
		});
		$("#top.page-banner").css({
			"padding-top" : "0"
		});
		$(".banner-adverts").first().hide();
		$("#js-sky-right, #js-sky-left").hide();
		$("head").append("<style>.billboard_wrapper{display: none !important}</style>");
		$("html, body").css({
			"overflow" : "visible"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1540) {
		var sideWidth = (width - 984) / 2;
		$(".floating-buttons").css({
			"right" : sideWidth + 20
		});
	} else {
		$(".floating-buttons").css({
			"right" : "10px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/5765/dailymail.uk\" height=\"250\" width=\"970\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
