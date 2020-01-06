integration.meta = {
    'sectionID' : '129435',
    'siteName' : 'Gumtree - (Article Pages) - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1560]
};

integration.flaggedTests = [];


function setWindow() {
    return currentWindow.top;
  }


integration.params = {
    'mf_siteId' : '1077453',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true,

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".header, .footer, .header__leaderboard-ad").css({
          "width" : "1300px",
          "margin" : "0 auto"
      });
      $(".header__leaderboard-ad").css({
          "left" : "0",
          "right" : "0"
      });
      window.onunload = function() {
      try {
        window.parent.unloadPageskin();
      } catch (e) {

      }
    }
    }
});
