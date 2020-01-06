integration.meta = {
	'sectionID' : '128028',
	'siteName' : 'The Independent - Tablet - (AU)',
	'platform' : 'tablet'
};



integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '970086',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_FastInit' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#content .ad-leaderboard").hide();
		$('body').addClass('wrapped_by_ads');
		$("#mastfooter").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

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

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('.section-content, .footer').css({
				'margin-left' : '0px'
			});
			$('.full-article').css({
				'width' : '1000px'
			});
			$("head").append("<style> body {margin-left: 20px !important;}</style>");





			$('#content, #content .region-content').css({
				'margin-left' : '0px'
			});
			$("body").css({
				"width" : "initial",
			});
			$("#mastfooter").css({
				"max-width" : "1000px",
				"margin-left" : "0px"
			});
		}
		try {
			if ( typeof window.Drupal.behaviors.grid != 'undefined') {
				window.Drupal.behaviors.grid.recalculate();
			}
		} catch(e) {
		}
	}
});
