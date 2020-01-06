integration.meta = {
   'sectionID' : '127454',
   'siteName' : 'Pocket Lint - Desktop - (US)',
   'platform' : 'desktop'
};

function setWindow() {
	return currentWindow.top;
}




integration.testParams = {
	'desktop_resolution' : [1238]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '725467',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 986,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '#container',
	'plr_PageHeightAdjustment' : -94
};

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"left" : "-8px"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=18531\"><\\script>";
};