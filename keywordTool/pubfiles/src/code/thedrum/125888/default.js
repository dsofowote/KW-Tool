integration.meta = {
   'sectionID' : '125888',
   'siteName' : 'The Drum',

   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706468',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1280,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $(".js-all-navigation.all_nav, .center.dark, .background__black, body > footer, #content, .megamenu.js-megamenu").css({
       "width" : "1280px",
       "margin" : "0 auto"
     })
   }
});
