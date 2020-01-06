integration.meta = {
	"sectionID" : "125394",
	"siteName" : "The Independent INT",
	"publisher" : "independent",
	"platform" : "desktop"
};




integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.params = {
	'mf_siteId' : '706324',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_FastInit' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_URLKeywords' : 2,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 94,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('#masthead').height();
		$("head").append('<style>body{padding-top: ' + headerHeight + 'px !important;}</style>');
		$("#content .ad-leaderboard").hide();
	}
});

integration.on('adServed', function(e) {
	$('body').addClass('wrapped_by_ads');
	$("#mastfooter").css({
		"max-width" : "1000px",
		"margin" : "0 auto"
	});
	if ($("body > header").length == 1) {
		$("<div id='inskinanchor'></div>").insertAfter("body > header");
		integration.base.setCfg({
			plr_AnchorParent : "#inskinanchor"
		});
	} else {
		integration.base.setCfg({
			plr_AnchorParent : "#content"
		});
	}
	try {
		if ( typeof window.grid != 'undefined') {
			window.grid.recalculate();
		}
	} catch(e) {
	}
});
/* Fix for pushing down creative with StartScrollOnAnchor hiding top of creative under fixed nav */
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinPush();
	$(document).scroll(function() {
		integration.custom.InSkinPush();
	});
});
integration.custom.InSkinPush = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel + 80) {
		$(".ism-frame").parent().css({
			"top" : "0"
		});
	} else if (height < integration.custom.PageSkinTopPanel + 110) {
		var newheight = height - integration.custom.PageSkinTopPanel - 80;
		$(".ism-frame").parent().css({
			"top" : newheight
		});
	} else {
		$(".ism-frame").parent().css({
			"top" : "43px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/71347885/_main_independent_passback/in_ros/in_inskin', [728, 90]).display();\n<\\script>";
};
