integration.meta = {
	"sectionID" : "123964",
	"siteName" : "Whatsontv.co.uk",
	"publisher" : "timeinc",
	"platform" : "desktop"
};




integration.testParams = {
	'desktop_resolution' : [1580]
};

integration.params = {

  'mf_siteId': '681679',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1320,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "leaderboard,mpu",
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	   if (e.data.hasSkin) {
			$('.section-content').css({
				'display' : 'none'
			});
	   }
	});

/* Passback Tag */
window.ISMPassback = function() {
   return inskinPassback();
};
