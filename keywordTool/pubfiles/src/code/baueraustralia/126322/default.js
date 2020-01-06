integration.meta = {
   'sectionID' : '126322',
   'siteName' : 'Gourmet Traveller - Desktop - (AU)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706795',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('.header').css({'max-width':'1024px', 'margin':'0 auto', 'left':'0px', 'right':'0px'});
     $('.sticky-block').css({'display':'none'});

   }
});

// integration.on("layoutChange", function(e) {
//     integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
//     integration.custom.InSkinTopNav();
//     $( document ).scroll(function() {
//         integration.custom.InSkinTopNav();
//     });
// });
//
// integration.custom.InSkinTopNav = function() {
//     var height = $(document).scrollTop();
//     var newheight = integration.custom.PageSkinTopPanel - height;
//     if( newheight > 0 ){
//
//         $(".header").css({
//             "top" : newheight + "px"
//         });
//     }else{
//         $(".topBar").css({
//             "top" : "0"
//         });
//     }
// }
