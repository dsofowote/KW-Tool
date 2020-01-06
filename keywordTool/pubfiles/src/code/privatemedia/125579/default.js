integration.meta = {
   'sectionID' : '125579',
   'siteName' : 'The Mandarin',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1100,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adServed', function(e) {
	$(".site-wrapper").css({
		"max-width" : "1100px"
	});
	$("head").append("<style> .sticky-nav{max-width:1100px; margin: 0 auto; z-index:102;}</style>");
	$(".ism-frame").parent().css({
		"z-index" : "101"
	});
	$("#at4m-dock, .at4m-dock-toggle, .at4-share-btn").hide();
});