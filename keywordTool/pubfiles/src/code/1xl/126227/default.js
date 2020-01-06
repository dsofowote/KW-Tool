integration.meta = {
	'sectionID' : '126227',
	'siteName' : 'Iconic News - Tablet - (IE)',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706934',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 992,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$(".cookieOptIn, .header, .main-content, .footer").css({
			"max-width" : "992px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".footer").css({
			"padding-bottom" : "0"
		});
		$(".container-fluid").css({
			"max-width" : "992px"
		});
		$(".container").css({
			"width" : "100%"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".cookieOptIn, .header, .main-content, .footer").css({
				"margin-left" : "0px"
			});
			$(".container-fluid").css({
				"max-width" : "992px",
				"margin-left" : "0px"
			});
			$(".container").css({
				"width" : "100%"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000000000"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\"> window._ttf = window.top._ttf || window._ttf || []; var inReadHere = false; for(var i = 0; i < _ttf.length; i++){ if(_ttf[i].format === 'inread'){ inReadHere = true; } } if(_ttf.length === 0 || !inReadHere){ window._ttf = window._ttf || []; _ttf.push({ pid : 58945 ,lang : \"en\" ,slot : '.testo_articolo .GN4_body > p' ,format : \"inread\" ,css : \"margin: 0px 0px 15px;\" }); (function (d) { var js, s = d.getElementsByTagName('script')[0]; js = d.createElement('script'); js.async = true; js.src = '//cdn.teads.tv/media/format.js'; s.parentNode.insertBefore(js, s); })(window.document); } <\\script>\n"
};
