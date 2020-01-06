integration.meta = {
   'sectionID' : '126061',
   'siteName' : 'IB Times - Tablet - International',
   
   'platform' : 'tablet',
   'restrictions' : 'iOS 7+ only (responsive)'
};


//

integration.testParams = {
};

integration.telemetry.setup({
	'url': true
});

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '707711',
   'plr_PageAlignment' : 'center',
   'plr_Responsive' : true,
   'plr_Fluid' : true,
   //'plr_PageWidthAdjustment' : -124,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("head").append("<style> #navi-wrap{position: relative !important;} #backtotop{ display: none !important;} </style>");
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $("head").append("<style> html{padding-left: 0 !important;}</style>");
      }
   }
});

/* Passback Tag */
/*window.ISMPassback = function() {
   return "<script type='text/javascript' src='http://www.googletagservices.com/tag/js/gpt.js'>\n\t\tgoogletag.pubads().definePassback('133596308/ibtimes.co.uk/passback/inskin', [[1,1]]).display();\n\t<\\script>";
};
*/
