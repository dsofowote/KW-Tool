integration.meta = {
    'sectionID' : '129272',
    'siteName' : 'Autocar - Desktop - ( INT )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1254]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1070024',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 994,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.block-hcm-external-blocks-leaderboard-extra').css({'display':'none'});
    }
});

window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/8527/Automotive_Passbacks/Autocar_Passback', [970, 250]).display();</script>";
};
