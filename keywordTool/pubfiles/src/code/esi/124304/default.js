integration.meta = {
	"sectionID" : "124304",
	"siteName" : "The Evening Standard",
	"publisher" : "eveningstd",
	"platform" : "tablet"
};




integration.testParams = {};

integration.channelHome = [
   '/news',
   '/news/crime',
   '/sport/football',
   '/news/london',
   '/showbiz',
   '/sport/football/chelsea',
   '/comment',
   '/news/politics',
   '/business',
   '/sport/football/tottenham'
];

integration.params = {
   'mf_siteId' : '681678',
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
	'plr_ScrollAdjustment' : 88

};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('wrapped_by_ads');
		$("#mastfooter").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch(e) {
			};
		};
		$("#content > .ad-leaderboard").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('#content').css({
				'margin-left' : '0px'
			});
			$("body").css({
				"width" : "initial"
			});
			$("#mastfooter").css({
				"max-width" : "1000px",
				"margin-left" : "0px"
			});
		}
		try {
			if ( typeof window.grid != 'undefined') {
				window.grid.recalculate();
			}
		} catch(e) {
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/71347885/_main_eveningstandard_passback/es_ros/es_inskin\" height=\"90\" width=\"728\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
