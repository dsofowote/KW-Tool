integration.meta = {
	'sectionID' : '126279',
	'siteName' : 'Visordown - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.params = {
	'mf_siteId' : '707645',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			"width" : "1000px",
			'margin' : '0 auto'
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('body').css({
				"width" : "1000px",
				'margin-left' : '20px'
			});
		}
		integration._addPixel();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'Visor_Down' ### Size: [[1,1]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\t  googletag.pubads().definePassback('/122227034/Visor_Down', [[1,1]]).setClickUrl('%%CLICK_URL_UNESC%%').display();\n<\\script>\n<!-- End -->";
};