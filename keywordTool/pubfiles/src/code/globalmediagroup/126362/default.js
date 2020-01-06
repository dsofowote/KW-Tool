integration.meta = {
   'sectionID' : '126362',
   'siteName' : 'O Jogo - Desktop - (PT)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	
   	$(".gmg-remote-header-1, header, footer, #ctl00_ctl00_ContentMenu_menu1_navMenu, #ctl00_ContentMenu_menu1_navMenu, section.MainContent").css({
		   "max-width" : "980px",
		   "margin" : "auto",
		   "left" : "0",
		   "right" : "0"
	   });
   }
});
