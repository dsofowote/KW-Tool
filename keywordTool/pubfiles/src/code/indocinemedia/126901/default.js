integration.meta = {
   'sectionID' : '126901',
   'siteName' : 'Robb Report - Desktop - (Asia) ',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1140,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {	   
	   $("<div id='inskinanchor'></div>").insertBefore("#page");
       integration.base.setCfg({
           plr_AnchorParent : "#inskinanchor",
           plr_PageHeightAdjustment : -115,
       });       
       $('#global-header-top, #global-header-top > div').css({
     	  "height" : "0",
     	  "padding-bottom" : "0"
       });	   
   }
});