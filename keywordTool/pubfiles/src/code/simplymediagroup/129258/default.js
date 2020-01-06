integration.meta = {
    'sectionID' : '129258',
    'siteName' : 'VisitLondon - Desktop (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1069335',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageScanExclude' : ' .footer, .header, .OUTBRAIN '
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('body, .main-navigation-links').css({'max-width':'1030px', 'margin':'0 auto'});
      $('.fireplace-spacer').css({'display':'none'});

    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/28367\"><\\script>";
};
