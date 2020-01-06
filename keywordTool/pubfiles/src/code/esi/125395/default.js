integration.meta = {
	"sectionID" : "125395",
	"siteName" : "The Independent INT",
	"publisher" : "independent",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {

	'mf_siteId' : '706387',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_FastInit' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_URLKeywords': 2,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
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

		//Iterates through AMP ad slots to find leaderboard and collapse it (Intended to be a temp solution, if still here please work with ESI to implement a class on their side)
		var a = $("amp-ad");
		for (var i = 0; i < a.length; i++) {
			var b = $("amp-ad:eq(" + i + ")");
			if (b.css('width') == "728px") {
				$(b).parent().addClass("inskinLead");
			}
		}
		var stylesCSS = '<style id="inskinLBStyles" type="text/css">';
		stylesCSS += 'amp-sticky-ad.inskinLead{display: inline-block !important;} ';
		stylesCSS += '.inskinLead .i-amphtml-sticky-ad-layout{visibility: visible !important;} ';
		stylesCSS += '.inskinLead .i-amphtml-hidden-by-media-query{display: inline-block !important;} ';
		stylesCSS += '</style>';
		$('body').append(stylesCSS);
		//Collapse code ENDS HERE
		
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
			$('#content, #content .region-content').css({
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

