integration.meta = {
	'sectionID' : '126055',
	'siteName' : 'SportingLife - Desktop - UK',
	
	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1256]
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1016,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#container, #header, #banner").css({
			"max-width" : "1016px",
			"margin-left" : "auto",
			"left" : "0",
			"margin-right" : "auto",
			"right" : "0"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$("#header, #banner").css({
		"margin-top" : integration.custom.FrameTop
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

	
/* Passback Tag */
window.ISMPassback = function() {
	return "<iframe seamless=\"seamless\" style=\"width:0px;height:0px;border:none;position:absolute;\" src=\"//delivery.e.switchadhub.com/adserver/passback.html\"></iframe>";
};

