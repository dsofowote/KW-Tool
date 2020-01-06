integration.meta = {
   'sectionID' : '128196',
   'siteName' : 'CNG  - Tablet - ( UK )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '988191',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1002,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_ScrollAdjustment' : 46
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
         $("#cn-wrapper").css({
           "margin-left" : "0"
         });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- begin Undertone Ad Tag for INT3699  -  Mediaforce - Cumbria News Group -->\n\n<script type='text/javascript'>\n\n \n\ndocument.MAX_ct0 ='INSERT_CLICKURL_HERE';\n\n \n\nvar ut_ju = ('https:'==document.location.protocol?'https:':'http:') + \"//ads.undertone.com/dj\"; \n\nut=new Object();\n\nut.pid=3699;\n\nut.domain='%%SITE%%';\n\nut.tagid=158;\n\n<\\script>\n\n<script type=\"text/javascript\" src=\"//cdn.undertone.com/js/ajs.js\"><\\script>\n\n<!-- end Undertone Ad Tag for Mediaforce - Cumbria News Group-->\n\n ";
};
