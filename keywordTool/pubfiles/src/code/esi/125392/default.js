integration.meta = {
	'sectionID' : '125392',
	'siteName' : 'The Evening Standard - Desktop - INT excl UK US',

	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.params = {
	'mf_siteId' : '706734',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_FastInit' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_URLKeywords' : 2,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

document.inskin_displayed = false;

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#content .ad-leaderboard").hide();
		document.inskin_displayed = true;
	};
	$('head').append('<style type="text/css">.video-popout-wrap.sticky {width: 1000px;}</style>');
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
   return "<div data-glade data-ad-unit-path=\"/71347885/_main_eveningstandard_passback/es_ros/es_inskin\" height=\"90\" width=\"728\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
