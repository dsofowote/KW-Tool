integration.meta = {
   'sectionID' : '127274',
   'siteName' : '8Days - Desktop - (Asia)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1390]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707983',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1130,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('.section--white-dark, footer').css({
		  "max-width" : "1130px",
		  "margin" : "0 auto"
	   });

	   $('head').append('<style type="text/css">.fixed-menu {max-width: 1130px;margin: 0 auto;}</style>');
     $('head').append('<style type="text/css">#snow, #snow1, .box-header-answer.xmas {width: 1130px;}</style>');
   }
});
