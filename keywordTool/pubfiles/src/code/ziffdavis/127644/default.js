integration.meta = {
   'sectionID' : '127644',
   'siteName' : 'Everyday Health - Desktop - INT',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1310]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '771853',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1050,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	$('.header-container .eh-header.affix, .affix').css({
		"top" : integration.custom.PageSkinTopPanel
	});
  $('.menu.modal, .search.eh-overlay-33.modal').css({
    "position" : "absolute",
    "max-width" : "1050px",
    "width" : "100%",
    "margin" : "0 auto",
    "left" : "0",
    "right" : "0",
    "top" : integration.custom.PageSkinTopPanel + 70
  });
  $('.search-wrapper').css({
    "position" : "absolute",
    "max-width" : "1050px",
    "margin" : "0 auto",
    "left" : "0",
    "right" : "0",
    "top" : "70px"
  });
	$(window).scroll(function(){
        if($(window).scrollTop() > $('.ism-frame').parent().height()){
        	$('.header-container .eh-header.affix, .affix, .menu.modal, .search.eh-overlay-33.modal').css({
            	"position" : "fixed",
            	"max-width" : "1050px",
        		  "width" : "100%",
        		  "margin" : "0 auto",
        		  "left" : "0",
        		  "right" : "0"
        	});
          $('.header-container .eh-header.affix, .affix').css({
              "top" : "0"
          });
          $('.menu.modal, .search.eh-overlay-33.modal').css({
              "top" : "70px"
          });
        } else {
        	$('.header-container .eh-header.affix, .affix, .menu.modal, .search.eh-overlay-33.modal').css({
        	  "position" : "absolute",
        	  "max-width" : "1050px",
      		  "width" : "100%",
      		  "margin" : "0 auto",
      		  "left" : "0",
      		  "right" : "0",
      		  "top" : integration.custom.PageSkinTopPanel
        	});
        }
   });

});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('.header-container .eh-header.affix, .affix').css({
		    "position" : "absolute",
      	  "max-width" : "1050px",
  		  "width" : "100%",
  		  "margin" : "0 auto",
  		  "left" : "0",
  		  "right" : "0"
		});
	   $('.eh-container, .eh-footer').css({
		  "max-width" : "1050px",
		  "width" : "100%",
		  "margin" : "0 auto"
	   });
	   $('.hp-everyday-solutuions').css({
		  "max-width" : "1012px",
		  "width" : "100%",
		  "margin" : "0 auto"
	   });
   }
});
