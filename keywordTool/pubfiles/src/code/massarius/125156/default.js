integration.meta = {
  "sectionID": "125156",
  "siteName": "DVHN",
  "publisher": "massarius",
  "platform": "desktop"
};

integration.async = false;

integration.testParams = {
  "desktop_resolution": [1500]
};

integration.params = {
	'mf_siteId' : '707369',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1240,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  "plr_FastInit" : true,
  'plr_ServePassbackInIframe' : false
};


integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
     $('.site__navigation').css({'max-width': '1240px', 'margin': '0 auto'});
  }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\n\n\n    document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=128359&w=1800&h=1000&ic='\n+ (window.tokuslid_ic_1800x1000 || '') + '&sb='\n+ (window.tokuslid_sb_1800x1000 || '') + '&gd='\n+ (window.tokuslid_gd_1800x1000 || '') +  '\">'\n+ '</scr' + 'ipt>');\n\n\n<\\script>\n";
};
