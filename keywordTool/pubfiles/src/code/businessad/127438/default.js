integration.meta = {
   'sectionID' : '127438',
   'siteName' : 'Der Aktionaer - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1640]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '721524',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1320,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $(".topBanner, #banner-top-container").css({"display": "none"});
     $("#page-footer").css({
       "max-width" : "1320px",
       "margin" : "0 auto"
     });
     $("html").css({
       "overflow" : "visible"
     });
   }
});
