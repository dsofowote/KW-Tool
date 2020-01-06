integration.meta = {
    'sectionID' : '124705',
    'siteName' : 'MÃ¼nsterland Zeitung - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707321',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1016,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			var headHeight = $(".WcmsHeader").outerHeight();
	    if ($(".WcmsHeader").length == 1) {
	               $("<div id='inskinanchor'></div>").insertAfter(".WcmsHeader");
	               integration.base.setCfg({
	                   plr_AnchorParent : "#inskinanchor",
	                   plr_PageHeightAdjustment : -headHeight
	               });
	           }
    }
});
