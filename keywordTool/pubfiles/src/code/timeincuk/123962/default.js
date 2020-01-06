integration.meta = {
	'sectionID' : '123962',
	'siteName' : 'Celebs Now - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '681688',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1320,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "navigation",
	"plr_HideElementsByClass" : "advert",
	"plr_FastInit" : true
};

//Passback Tag
window.ISMPassback = function() {
	return inskinPassback();
};
