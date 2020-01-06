integration.meta = {
   'sectionID' : '126615',
   'siteName' : 'BDU Media - Desktop - (NL)',
   'platform' : 'desktop'
};

integration.async = false;

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];


integration.params = {
	'mf_siteId' : '707576',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_ServePassbackInIframe' : false
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\n\n\n    document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=241844&w=1800&h=1000&ic='\n+ (window.tokuslid_ic_1800x1000 || '') + '&sb='\n+ (window.tokuslid_sb_1800x1000 || '') + '&gd='\n+ (window.tokuslid_gd_1800x1000 || '') +  '\">'\n+ '</scr' + 'ipt>');\n\n\n<\\script>\n";
};
