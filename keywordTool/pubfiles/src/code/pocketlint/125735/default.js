integration.meta = {
   'sectionID' : '125735',
   'siteName' : 'Pocket Lint - Desktop - (UK)',
   'platform' : 'desktop'
};

function setWindow() {
	return currentWindow.top;
}




integration.testParams = {
	'desktop_resolution' : [ 1246 ]
};

integration.flaggedTests = [];

integration.params = {
	
  'mf_siteId': '681745',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 986,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '#container',
	'plr_PageHeightAdjustment' : -94,
	'plr_FastInit' : true
};

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"left" : "-8px"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=18530\"><\\script>";
};