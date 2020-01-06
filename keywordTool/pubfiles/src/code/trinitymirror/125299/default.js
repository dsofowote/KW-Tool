integration.meta = {
  "sectionID": "125299",
  "siteName": "Mirror Get Reading",
  "publisher": "mirror",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706471',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1034,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  "plr_URLKeywords" : ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $('main, footer, #div-gpt-ad-bottom-slot, #div-gpt-ad-top-slot').css({
	    "max-width" : "1024px",
	    "margin" : "0 auto"
	});
    $('footer').css({
	    "padding" : "20px"
	});    
    
    $('head').append('<style type="text/css">body {margin-top: 103px;}</style>');
    $('#div-gpt-ad-top-slot').css({
	    "margin-top" : "10px"
	});
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
    	$('main, footer').css({
    	    "margin" : "0"
    	});
    	$('.mod-pancakes>.primary').css({
    	    "width" : "65%",
    	    "margin-left" : "0"
    	});
    	$('head').append('<style type="text/css">body {margin-top: 115px;}</style>');
    	$('.mod-pancakes>section>.pancake, #section-links, .social-links, #utility-links, .section-head').css({
    	    "width" : "100%"
    	});
    	$('.section-head').css({
    	    "padding-left" : "10px"
    	});
    	
    	$('footer').css({
    	    "padding" : "10px 5px"
    	});
	  integration.base.setCfg({
	    plr_PageAlignment: "left"
	  });      
    }
  }
});
