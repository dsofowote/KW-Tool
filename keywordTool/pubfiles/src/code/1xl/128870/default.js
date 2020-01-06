integration.meta = {
    'sectionID' : '128870',
    'siteName' : 'Inews - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1039013',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1280,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0,
    'plr_PageScanExclude' : ' #hamburger-nav, .footer, .slab-related, .backfill '
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(' .slab--leaderboard, .content-wrap, .footer').css({
        "width" : "1280px",
        "margin" : "0 auto"
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.slab--leaderboard, .content-wrap, .footer').css({
              "margin" : "0"
            });
            $("head").append("<style>.header{left: 0 !important;}</style>");
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\n(function(w, t, d, s) {d = w.document;w.ggv2id = t;s = d.createElement('script');s.async = true;s.src = 'https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}\n(top, 'il0ktxf8'));\n<\\script>";
};
