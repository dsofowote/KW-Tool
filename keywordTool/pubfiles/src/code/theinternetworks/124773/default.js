integration.meta = {
    'sectionID': '124773',
    'siteName': 'AVForums - Desktop - (UK)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1460]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1020890',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".p-footer").css({ "width": "1200px", "margin": "0 auto" });
        if ($(".p-body").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore(".p-body");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -126,
                plr_ScrollAdjustment: -90
            });
        }
        $(".m2n-ads-slot.adHeader").css({"display": "none"});
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/8833889/Header', [970, 250]).display();\n\n<\\script>";
};