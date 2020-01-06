integration.meta = {
   'sectionID' : '128057',
   'siteName' : 'Dotabuff - Desktop - (Asia)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1232]
};
function setWindow() {
    return currentWindow.top;
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '971966',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 976,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $(".container-outer, .clips-layout").css({
       "width" : "976px",
       "margin" : "0 auto"
     });
     $(".clips-layout>._content>._inner").css({
       "padding" : "0px"
     });
   };
});
integration.on('adServed', function(e) {
	inskinAccept();

});
/* Passback Tag */
window.ISMPassback = function() {
	return inskinReject();
};
