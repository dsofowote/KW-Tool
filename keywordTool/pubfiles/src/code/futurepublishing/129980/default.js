integration.meta = {
    'sectionID' : '129980',
    'siteName' : 'Top Ten Reviews - Desktop - (UK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1098951',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".primary-nav, #document-footer").css({"margin": "0 auto", "max-width": "970px"});
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_Toptenreviews/Inskin\", [728, 90]).display();<\\script>";
};
