integration.meta = {
    'sectionID' : '129236',
    'siteName' : 'RTL - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1568]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1067016',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1248,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#footer').css({
  			"max-width" : "1248px",
  			"margin" : "0 auto"
  		});
      $('#dmofooter_1').css({
  			"display" : "none"
  		});
      $('.immense-7').css({
  			"margin-left" : "80px",
  		});
    }
});
