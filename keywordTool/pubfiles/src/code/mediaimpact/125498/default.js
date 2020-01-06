integration.meta = {
  "sectionID": "125498",
  "siteName": "Welt",
  "publisher": "axelspringer",
  "platform": "tablet"
};

integration.telemetry.setup({       
   'url': true,             
   'ad-served': true,        
   'base-ready': true,      
   'ad-call-response': true, 
   'ad-call': true,          
   'failed-test': true,      
   'impression': true,
   'plr_FastInit': true,  
   'custom': true           
});

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706428',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 970,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  "plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	   if (e.data.hasSkin) {
		   
		   $('head').append('<style type="text/css">body > * {width:970px !important; margin: 0 auto !important;}</style>');
		   $('head').append('<style type="text/css">#top {margin-left: 0px !important;}</style>');
		   
	      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
	   	   $('head').append('<style type="text/css">.c-page-header__fixed--is-sticky {margin-left: -140px !important;}</style>');
	    	  
	         /* PageSkin Edge specific changes */
	         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
	         window.$("#viewport").css({
	        "margin-left": "0px"
	      });
	      }
	   }
	});