integration.meta = {
    'sectionID' : '129479',
    'siteName' : ' Finanzwelt - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1080201',
    'plr_PageAlignment' : 'left',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinFrameSide = e.data.plr_FrameSide;
      $('.td-menu-background, #flashcontent_o, #flashcontent_r, #Ads_BA_BS').css({'display':'none'});
      $('.td-container-wrap').css({'width':'1074px'});
      $('.td-affix, .td-header-menu-wrap').css({'left':integration.custom.PageSkinFrameSide});
      $('.td-sub-footer-container').css({'width':'1120px'});
      $('.td-main-page-wrap').css({'padding-left':'2%'});

    }
});
