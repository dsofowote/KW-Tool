integration.meta = {
    'sectionID' : '128869',
    'siteName' : 'Inews - Desktop - (UK) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
    'mf_siteId' : '1039012',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0,
    'plr_PageScanExclude' : ' #nav-container, .footer, #ht-menu, #article__meta__mostpopular, #sidebar ',
    'plr_FastInit' : true,
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if ($("#header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("#header");
        integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor"
        });
}

      $('.slab--leaderboard, .content-wrap, .footer').css({
        "width" : "980px",
        "margin" : "0 auto"
      });
    }
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w, t, d, s) {d = w.document;w.ggv2id = t;s = d.createElement('script');s.async = true;s.src = 'https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top, 'il0ktxf8'));<\\script>";
};
