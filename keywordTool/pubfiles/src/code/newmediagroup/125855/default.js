integration.meta = {
	'sectionID' : '125855',
	'siteName' : 'Sundaykiss',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }
  
integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707384',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".container").css({
			"margin-top" : "0px"
		});
		
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
});

integration.on("layoutChange", function(e){
	$(".ism-frame").parent().css({
		"z-index" : "9999996"
	});
	$(".copyright-wrap").css({
		"margin" : "0 auto 50px"
	});
});
