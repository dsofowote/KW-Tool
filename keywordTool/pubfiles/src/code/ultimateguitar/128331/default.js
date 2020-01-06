integration.meta = {
   'sectionID' : '128331',
   'siteName' : ' Ultimate Guitar - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '1003873',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1280,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});

integration.on('adServed', function(e){
	$("head").append("<script>window.top.postMessage('InSkinSucces', '*');</script>");
});
