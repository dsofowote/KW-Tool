integration.meta = {
    'sectionID' : '130169',
    'siteName' : 'Europe1 - Desktop - INT',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1105199',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.nav-top').outerHeight();
        $("head").append("<style> .row-masthead, [id^='utif_e1_v2_home_fre_'], [id^='utif_e1_v2_sport_fre_'], #e1_v2_home_fre{width:0px !important; height:0px !important;}</style>");
        $('.bloc_launcher').css({'max-width':'1000px','margin':'0 auto'});
        $('.ellefre, .row-masthead').css({'display':'none'});
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment: headHeight
            });
        }
    }
});