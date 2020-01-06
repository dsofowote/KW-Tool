integration.meta = {
    'sectionID' : '129498',
    'siteName' : 'Hallo Eltern - Desktop - (DE)  ',
    'platform' : 'desktop'
};

//for escaping iframe
function setWindow() {
    return currentWindow.top;
  }

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1082497',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 840,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.slot-billboard, .slot-sky').css({'display':'none'});
    }
});
