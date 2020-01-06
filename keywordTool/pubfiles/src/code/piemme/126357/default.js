integration.meta = {
	'sectionID' : '126357',
	'siteName' : 'Il Mattino (Sports Section) - Desktop - (IT)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708085',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1054,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg",
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			'background-image' : 'none'
		});
		integration.custom.inskinTopNav();
		$("#nav-menu").css({
			'position' : 'relative'
		});
		$('head').append('<style> #nav-menu.inskin-nav{max-width: 955px; left: 50% !important; margin-left: -497.5px !important;} </style>');
		$(window).resize(function() {
			integration.custom.inskinTopNav();
		});
		$("#socialbar").css({
			"max-width" : "1166px",
			"margin" : "0 auto"
		});
	};
});

integration.custom.inskinTopNav = function() {
	var width = $(window).width();
	if (width < 1054) {
		$("#nav-menu").removeClass("inskin-nav");
	} else {
		$("#nav-menu").addClass("inskin-nav");
	}
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/38681514/Mattino/HomePage/Skin', [1, 1]).display();\n<\\script> ";
};
