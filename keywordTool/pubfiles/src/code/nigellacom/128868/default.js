integration.meta = {
    'sectionID' : '128868',
    'siteName' : 'Nigella - Tablet - (INT)',
    'platform' : 'tablet'
};

function setWindow() {
return currentWindow.top;
}

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1069594',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#footer").css({
  			"max-width" : "1200px",
  			"margin" : "0 auto"
  		});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".page-container, #footer").css({
        			"left" : "-152px",
        		});
        }
    }
});
