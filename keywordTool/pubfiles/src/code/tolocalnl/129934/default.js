integration.meta = {
    'sectionID' : '129934',
    'siteName' : ' Westlanders - Desktop - (NL) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098065',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.menu, footer, #wnn').css({
        "max-width" : "980px",
        "margin" : "0 auto"
      });
      $('footer, #wnn').css({
        "left" : "0",
        "right" : "0"
      });
    }
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"//nl.ads.justpremium.com/adserve/js.php?zone=9360\"><\\script>";
};
