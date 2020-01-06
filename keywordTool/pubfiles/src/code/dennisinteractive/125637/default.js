integration.meta = {
   'sectionID' : '125637',
   'siteName' : 'Womens Fitness',
   
   'platform' : 'desktop',
   'restrictions' : ''
};




integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '681722',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_PageHeightAdjustment' : -10,
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\nvar ayads_impressioncount='%%CACHEBUSTER%%';\n<\\script><script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=3671\"><\\script>\n";
};
