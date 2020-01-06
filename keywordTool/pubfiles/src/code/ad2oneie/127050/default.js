integration.meta = {
	'sectionID' : '127050',
	'siteName' : 'Nigella - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707468',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#footer").css({
			"max-width" : "1160px",
			"margin" : "0 auto"
		});
		$(".ad.billboard.from-desktop").css({
			"display" : "none"
		})
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().addClass("injected-advert");
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/3595/ngllad21/Nigella_InSkins_passbacks', [[1, 1], [970, 250]]).display();\n<\\script>\n \n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().defineOutOfPagePassback('/3595/ngllad21).display();\n<\\script>";
}; 