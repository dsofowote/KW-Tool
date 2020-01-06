integration.meta = {
	'sectionID' : '126231',
	'siteName' : 'Belfast Telegraph - Tablet - (UK & IE)',
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '681666',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	'plr_PageScanExclude' : ' .w103, .w4 , .w29, #footer, .single, .trc_related_container '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

			$("#inner").css({
				"margin-left" : "0px"
			});
			$("nav.persistent").css({
				"margin-left" : "0px",
				"left" : "20px"
			});
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame-unit").css({
		"margin-bottom" : "0px"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- begin Undertone Ad Tag for INT3093  -  Mediaforce - KM &amp; BT -->\n\n<script type='text/javascript'>\n\n \n\ndocument.MAX_ct0 ='INSERT_CLICKURL_HERE';\n\n \n\nvar ut_ju = ('https:'==document.location.protocol?'https:':'http:') + \"//ads.undertone.com/dj\"; \n\nut=new Object();\n\nut.pid=3093;\n\nut.domain='%%SITE%%';\n\nut.tagid=162;\n\n<\\script>\n\n<script type=\"text/javascript\" src=\"//cdn.undertone.com/js/ajs.js\"><\\script>\n\n<!-- end Undertone Ad Tag for Mediaforce - KM &amp; BT-->";
};

