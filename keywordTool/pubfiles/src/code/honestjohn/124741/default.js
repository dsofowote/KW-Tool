integration.meta = {
   'sectionID' : '124741',
   'siteName' : 'Honest John - Tablet - (UK)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '707231',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1002,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true,
   'plr_PageScanExclude' : ' #main-nav, .links, #rightContent '
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("body").css({
    	"background-image" : "none"
    });

    /* format the site for PageSkin Edge */
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      $("#page_template").css({
      	"margin-left" : "1px"
      });
      $("#header_bar_inner").css({
      	"margin-left" : "1px"
      });
      integration.base.setCfg({
        plr_PageAlignment: "left"
      });
    }else{
    	$('head').append('<style type="text/css"> #page_template {margin:0 auto !important;}</style>');
    }
  }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script>\nwindow.top.postMessage({action:'passback',keyword:'inskin_passback'}, '*');\n<\\script>";
};
