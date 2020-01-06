integration.meta = {
	'sectionID' : '127699',
	'siteName' : ' Aljamila - Desktop - (MENA)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '831108',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#menu-panel").css({
			"z-index" : "10"
		});
		$("head").append("<style>#main-wrap{transition:none !important;}</style>");
		$("#mc_embed_signup_scroll > div:nth-child(2)").css({
			"display" : "none"
		});
		$("body").css({
			"overflow" : "visible"
		});
		
	}
});
integration.on('layoutChange', function(e) {
	$(".menu-icon").click(function() {
		integration.custom.isOpen = true;
		integration.custom.InskinOpen();
		console.log("buttonclick");
	});
	$("#mm-blocker, .mm-menu .mm-navbar .mm-btn:last-child.mm-close").click(function() {
		integration.custom.isOpen = false
		integration.custom.InskinOpen();
		console.log("bodyclick");
	});
});

integration.custom.InskinOpen = function() {
	if (integration.custom.isOpen) {
		$(".ism-frame").parent().css({
			"transform" : "translate(-440px,0)"
		});
	} else {
		$(".ism-frame").parent().css({
			"transform" : "none"
		});
	}
};

