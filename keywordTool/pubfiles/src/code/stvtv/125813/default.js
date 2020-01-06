integration.meta = {
	'sectionID' : '125813',
	'siteName' : 'STV.tv PageSkin - Desktop - (UK)',
	'platform' : 'desktop'
};



integration.testParams = {
	'desktop_resolution' : [1526]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706784',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1266,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body > div.global-page-container, div.ad-masthead.js-sticky').css({
			'max-width' : '1266px',
			'margin' : '0 auto'
		});
	}
});
window.ISMPassback = function() {
	return "<script>var myTargetingObject = JSON.parse(decodeURIComponent('" + integration.params.stv_Targeting + "')); document.write('<sc'+'ript src=\"https://www.googletagservices.com/tag/js/gpt.js\"></scr'+'ipt>');\ndocument.write('<scr'+'ipt>');\n  callback = function() {\n    googletag.pubads().definePassback('" + integration.params.stv_AdUnitID + "', [1, 1])\n   .setTargeting(\"pb\", \"inskin-noloop\")\n  .updateTargetingFromMap(myTargetingObject)\n    .display();\n  };\n\n  window.googletag = window.googletag || {};\n  googletag.cmd = googletag.cmd || [];\n  googletag.cmd.push(callback);\n\ndocument.write('</sc'+'ript>');<\\script>";
};
/*
 '" + integration.params.stv_AdUnitID + "'
 '" + integration.params.stv_Targeting + "'
 */
