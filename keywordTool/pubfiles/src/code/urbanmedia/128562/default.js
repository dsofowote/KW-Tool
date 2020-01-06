integration.meta = {
    'sectionID' : '128562',
    'siteName' : 'Prinz.de - Desktop - DE',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1023467',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1080,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".navbar").css({
        "margin" : "0 auto",
        "width" : "1080px"
      });
      $("html body footer.footer").css({
        "position" : "initial"
      });
      $("html body").css({
        "margin-bottom" : "0px"
      });
    }
});
