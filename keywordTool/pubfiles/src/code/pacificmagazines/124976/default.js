integration.meta = {
   'sectionID' : '124976',
   'siteName' : 'InStyle AU',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1210,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#sb-site").css({
   		"max-width" : "1200px",
   		"margin" : "0 auto"
   	});
   	$("body").css({
   		"overflow-x" : "visible"
   	});
   	$("head").append("<style>.fixed-menu{max-width: 1200px; width: 100%;} #sb-site{max-width: 1200px; margin: 0 auto;}</style>");
   	$("#gutter-left, #gutter-right").hide();
   }
});
