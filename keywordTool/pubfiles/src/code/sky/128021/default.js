integration.meta = {
	'sectionID' : '128021',
	'siteName' : 'Sky Sports Homepage - (Creative Approval) - Desktop - (UK)  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '968788',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_PageScanExclude' : ' .site-header, .site-footer, .site-layout-secondary__col2, .ob-widget-section, .OUTBRAIN '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('advert--site-takeover');
		$("head").append("<style>.site-header__col1:before{display:none;}</style>");
		$("head").append("<style>.sdc-site-au__leaderboard, .sdc-site-au__takeover{display: none !important;}</style>");
		$("head").append("<style>.sdc-site-cookie-notice{width: 1000px !important; margin: 0 auto !important; left: 0 !important; right: 0 !important; z-index: 4 !important;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSide = e.data.plr_FrameSide;
	var bodyWidth = 1000 + integration.custom.FrameSide + integration.custom.FrameSideRight;
	$('body').css({
		"width" : bodyWidth,
		"margin" : "0 auto"
	});
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000000"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>top.document.getElementById('takeover').style.display = 'none';<\\script>";
};
