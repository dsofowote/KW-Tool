integration.meta = {
    'sectionID' : '128522',
    'siteName' : 'Estilo - Desktop - (ES)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1020897',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_StartScrollOnAnchor' : true,
    'plr_ScrollAdjustment' : 48,
    'plr_AdProviders' : "ISAP"
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.on("adCallResult", function(e) {
      	if (e.data.hasSkin) {
      		$("#principal").css({
      			"margin-top" : "10px"
      		});
      	}
      });
    }
});
