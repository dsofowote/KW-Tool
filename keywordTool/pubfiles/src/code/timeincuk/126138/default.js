integration.meta = {
   'sectionID' : '126138',
   'siteName' : 'WhatsonTV - Desktop - NON UK',

   'platform' : 'desktop',
   'restrictions' : ''
};




integration.testParams = {
		'desktop_resolution' : [0]
	};

integration.params = {
	'mf_siteId' : '706849',
		"plr_UseCreativeSettings" : true,
		"plr_ContentW" : 1320,
		"plr_ContentType" : "PAGESKINEXPRESS",
		"plr_PageAlignment" : "center",
		"plr_UseFullVersion" : true,
		"plr_HideElementsByID" : "leaderboard,mpu",
		"plr_HideElementsByClass" : ""
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {132
		$('.section-content').css({
			'display' : 'none'
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return inskinPassback();
};
