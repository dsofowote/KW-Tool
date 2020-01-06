integration.meta = {
    'sectionID' : '128919',
    'siteName' : 'BDU Media  - Desktop - ( NL )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1042339',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1060,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"//nl.ads.justpremium.com/adserve/js.php?zone=54408\"><\\script>";
};