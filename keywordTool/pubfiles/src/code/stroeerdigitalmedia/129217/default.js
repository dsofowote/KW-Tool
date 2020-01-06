integration.meta = {
    'sectionID' : '129217',
    'siteName' : 'Autozeitung - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : []
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1065334',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit': true
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinFrameSide = e.data.plr_FrameSide;
        $('#wrapper').css({'left':'90px'});
      $(".wrapperFooter").css({
  			"max-width" : "970px",
  			"margin" : "0 auto"
  		});
    }
});
