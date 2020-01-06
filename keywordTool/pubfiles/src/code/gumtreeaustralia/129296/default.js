integration.meta = {
    'sectionID' : '129296',
    'siteName' : 'Gumtree - (Article Pages) - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
    'mf_siteId' : '1071017',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1290,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".page").css({"margin-left": "0"});
            $(".header, .footer").css({"max-width": "1290px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
