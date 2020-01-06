integration.meta = {
   'sectionID' : '127978',
   'siteName' : 'http://culturainquieta.com/es/ - Desktop - ( ES )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '962197',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$('.rstboxes .rstbox.rstbox_bottom-right').css({
   		"right" : "23%",
   		"bottom" : "10%"
   	});
   	$('.megabanner').css({
   		"display" : "none"
   	});
   }
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});
