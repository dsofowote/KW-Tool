integration.meta = {
	"sectionID" : "126072",
	"siteName" : "The Lad Bible",
	"publisher" : "theladbible",
	"platform" : "tablet"
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706386',
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
	   $("html").addClass("skin__opt--three");
       $('header, section, footer').css({
     	  "max-width" : "1024px",
     	  "margin" : "0 auto"
        });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('body').css({
        	 "overflow-x" : "visible"
         });
         $('header, section, footer').css({
	    	"margin" : "0"
	     });
      }
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback('/8493129/Passback_TLB_Landscape_1',[[728, 90], [970, 250]]).setTargeting(\"passback\", \"Inskin-TLB-ROW-Tablet-LL1\").display();\n<\\script>";
};