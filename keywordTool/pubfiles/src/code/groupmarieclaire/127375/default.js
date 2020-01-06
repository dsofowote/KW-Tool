integration.meta = {
   'sectionID' : '127375',
   'site' : 'Marie Claire Idees - Smartphone- (FR)',
   'product' : 'PageSkin Edge on smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/MARIE_CLAIRE_IDEES/RG_MOBILE/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};