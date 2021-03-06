integration.meta = {
   'sectionID' : '125393',
   'siteName' : 'The Evening Standard - INT excl UK US',

   'platform' : 'tablet'
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '707713',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_FastInit' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_URLKeywords' : 2,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_ConsentTimeout" : 3
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#content .ad-leaderboard").hide();
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
		$('body').addClass('wrapped_by_ads');
		$("#mastfooter").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
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
