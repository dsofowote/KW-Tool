integration.meta = {
    'sectionID' : '125629',
    'siteName' : 'Autocar - (No Autos) - Desktop - ( AU BE FR SE UK US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '707277',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.autocar-header--middle').height();
        $('#footer').css({'max-width':'1000px','margin':'0 auto', 'float':'none'});
        $('body').css({'display':'initial'});
        if ($(".autocar-header--middle").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".autocar-header--middle");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight,

            });
        }
    }
});

window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/8527/Automotive_Passbacks/Autocar_Passback', [970, 250]).display();</script>>";
};
