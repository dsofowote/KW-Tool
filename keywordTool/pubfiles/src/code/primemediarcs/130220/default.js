integration.meta = {
    'sectionID' : '130220',
    'siteName' : 'Gazetta - Desktop - (IT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1394]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1110986',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1134,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.bck-navbar-bannermenu').outerHeight();
        var headHeight1 = $('#l-header').outerHeight();
        $('#rcsad_TopLeft_container').css({'display':'none'});
        $('#l-footer').css({'max-width':'1134px','margin':'0 auto'});
        if ($("#l-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#l-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight1,
                plr_ScrollAdjustment: -headHeight
            });
        }
    }
});
