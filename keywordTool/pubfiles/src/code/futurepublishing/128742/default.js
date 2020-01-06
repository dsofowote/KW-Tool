integration.meta = {
    'sectionID' : '128742',
    'siteName' : 'Space - Desktop - (UK) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1033647',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#document-footer, .primary-nav').css({'max-width':'1000px','margin':'0 auto'});

    }
});

integration.on('adServed', function(e) {
    $(".ism-frame").parent().css({"z-index":"10000"});
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_Space/Inskin\", [728, 90]).display();<\\script>";
};
