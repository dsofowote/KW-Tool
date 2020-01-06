
integration.meta = {
	'sectionID' : '126002',
	'siteName' : 'Mail Online - Desktop- (AU)',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1244]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706658',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 984,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	"plr_FastInit" : true,
	'plr_PageScanExclude' : ' .page-header, #footer, .page-footer, .and-footer, .linkro-wocc, .trc_related_container, #reader-comments, #infinite-list '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".billboard_wrapper, #billBoard").hide();
		$("body").css({
			"background" : "none"
		});
		$("#top.page-banner").css({
			"padding-top" : "0"
		});
		$("#js-sky-right, #js-sky-left").hide()
		$("body").css({
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
    return "<script type=\"text/javascript\"><!--\n\ngoogle_ad_client = \"ca-pub-4180835694166255\";\n\n/* DM - BILLBOARD T2 */\n\ngoogle_ad_slot = \"8684598673\";\n\ngoogle_ad_width = 728;\n\ngoogle_ad_height = 90;\n\n//-->\n\n<\\script>\n\n<script type=\"text/javascript\"\n\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n\n<\\script>";
};
