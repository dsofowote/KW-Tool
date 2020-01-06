integration.meta = {
   'sectionID' : '128385',
   'siteName' : 'Liberation - Tablet - (FR)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1007962',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true,
   'plr_URLKeywords' : 1
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $(".title-nav-wrap").css({
       "padding-right" : "210px"
     });
     $("head").append("<style>.title-nav-wrap{padding-right:210px !important;}</style>");
      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
         $(".width-wrap").css({
           "margin-left" : "10px"
         });
         $(".pub-container").css({
           "width" : "1000px",
           "margin-left" : "10px"
         });
         $(".viewer-container").css({
           "margin-left" : "-20px"
         });
         $(".reader-nav").css({
           "right" : "60px"
         });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script type=\"text/javascript\" src=\"https://securite.01net.com/ac?out=js&nwid=13&siteid=291884&pgid=1074425&fmtid=95&tgt=origine%3Dinskin&visit=s&gdpr_consent=[sas_gdpr_consent]&tmstp=[timestamp]\"><\\script>\n";
};
