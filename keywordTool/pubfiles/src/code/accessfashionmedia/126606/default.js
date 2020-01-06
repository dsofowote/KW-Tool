integration.meta = {
   'sectionID' : '126606',
   'siteName' : 'Access Runway - Desktop - (INT)',
   'platform' : 'desktop'
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

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('body > div.wrapper > div.footer-box > div > table').css({
		  'max-width' : '1090px'
	   });
	   $('body > div.wrapper > div.footer-box, body > header.header.hidden-sm').css({
		  'max-width' : '1100px', 
		  'margin' : '0 auto'
	   });
   }
});
