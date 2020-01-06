integration.meta = {
   'sectionID' : '126542',
   'siteName' : 'The Press and Journal - Tablet - (UK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '707472',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_FastInit" : true
};
integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var headHeight = $("#sso-login-bar").outerHeight();
	  $('#piano-root, .content-view, header, #pandj-app').css({
		 "max-width" : "1024px",
		 "margin" : "0 auto",
		 "position" : "relative"
	  });
	  $('#navigation-fixed').css({
		 "max-width" : "1024px",
		 "margin" : "0 auto",
		 "left" : "0",
		 "right" : "0"
	  });
	  $(".site-header").css({
		  "top" : "1px"
	  });
    $(".full-screen").css({
      "top" : headHeight
    });
	  var topBarHeight = $('#sso-login-bar').outerHeight();
	  $("body").css({
		  "padding-top" : topBarHeight
	  });
	  ///// DELETE WHEN SIGNING OFF /////
	  $('#jobsinscotland-2').hide();

	  if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('#piano-root, .content-view, header, #pandj-app').css({
    		 "margin" : "0"
    	 });
       $('.site-content').css({
        "max-width" : "1024px",
        "margin" : "0"
       });
    	  $('#navigation-fixed').css({
    		 "max-width" : "1024px",
    		 "margin" : "0",
    		 "left" : "auto",
    		 "right" : "auto"
    	  });
      }
   }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/press-and-journal-passbacks/PJ-inskin_passbacks', [[300, 250], [970, 250], [2, 2]]).display();\n<\\script>";
};
