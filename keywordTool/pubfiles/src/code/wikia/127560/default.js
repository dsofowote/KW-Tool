integration.meta = {
   'sectionID' : '127560',
   'siteName' : 'Fandom - Smartphone - (ASIA)',
   'platform' : 'smartphone'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '748386',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
  if ($("#ember321 > div.page-wrapper").length == 1) {
    $("<div id='inskinanchor'></div>").insertBefore("#ember321 > div.page-wrapper");
    integration.base.setCfg({
      "plr_AnchorParent" : "#inskinanchor",
      "plr_PageHeightAdjustment" : -55
    });
  }

});

integration.on('adClose', function(e) {
   $('body').remove('inskinanchor');
});
