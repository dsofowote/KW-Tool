integration.meta = {
   'sectionID' : '128144',
   'siteName' : '9 News - (Pagescroll) - Smartphone - ( AU NZ )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
    'mf_siteId' : '982174',
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

integration.on('adServed', function(e) {
    
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});