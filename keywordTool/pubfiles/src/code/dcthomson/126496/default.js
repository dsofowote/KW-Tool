integration.meta = {
	'sectionID' : '126496',
	'siteName' : 'The Courier - Desktop - (UK)',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707050',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body > main > section.editors-picks.feature, body > footer').css({
			'width' : '980px',
			'margin' : '0 auto'
		});
		$('html').css({
			'background' : 'none'
		});
		$('body > main > section.non-block.advertising').css({
			'display' : 'none'
		});
		$('.sharing-bar').css({
			'width' : '980px',
			'left' : '50%',
			'margin-left' : '-490px'
		});
		$('body > main > section.block.advertising').css({
			'height' : '0'
		});
		$('body > main > section.block.advertising, body > main > section.non-block.advertising').css({
			'display' : 'none'
		});
		$('head').append('<style type="text/css">.billboard, .billboard-ad, .block--advertising{ display:none !important;} </style>');
	}
});

/**** Raise Z-index of PageSkin ****/
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/courier-passbacks/courier-inskin-passbacks', [[300, 250], [970, 250], [2, 2]]).display();\n<\\script>";
};
