integration.meta = {
   'sectionID' : '125814',
   'siteName' : 'STV.tv PageSkin - Tablet - (UK)',
   'platform' : 'tablet'
};



integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706762',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style type="text/css">.outer-container, .is-stickied, .is-locked, .ad-masthead {max-width: 960px !important; margin:0 auto;}</style>');
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("body").css({
				"width" : "auto"
			});
			$(".net-nav-inner, .site-nav-inner, .content, .global-page-container").css({
				"margin-left" : "3px"
			});
			$(".cookie-box").css({
				"margin-left" : "0"
			});
			$(".is-locked").css({
				"margin-left" : "0"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

window.ISMPassback = function() {
	return "<script>var myTargetingObject = JSON.parse(decodeURIComponent('" + integration.params.stv_Targeting + "')); document.write('<sc'+'ript src=\"https://www.googletagservices.com/tag/js/gpt.js\"></scr'+'ipt>');\ndocument.write('<scr'+'ipt>');\n  callback = function() {\n    googletag.pubads().definePassback('" + integration.params.stv_AdUnitID + "', [1, 1])\n    .setTargeting(\"pb\", \"inskin-noloop\")\n    .updateTargetingFromMap(myTargetingObject)\n    .display();\n  };\n\n  window.googletag = window.googletag || {};\n  googletag.cmd = googletag.cmd || [];\n  googletag.cmd.push(callback);\n\ndocument.write('</sc'+'ript>');<\\script>";
};
