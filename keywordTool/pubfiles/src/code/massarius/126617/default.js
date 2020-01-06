integration.meta = {
   'sectionID' : '126617',
   'siteName' : 'AT5 - Tablet - (NL)',
   'platform' : 'tablet'
};

integration.async = false;

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707816',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_ServePassbackInIframe' : false
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('.widget-advertisement.top').css({
		  "padding-top" : "10px" 
	   });
	   $('.page-content').css({
			  "max-width" : "1010px" 
	   });
	   $('.page-content .content-column').css({
			  "max-width" : "600px" 
	   });
	   $('.push, footer, footer .inner-footer, header, nav').css({
			  "max-width" : "1024px",
			  "margin" : "0 auto"
	   });
	   $('.header-container .header-inner form').css({
			  "float" : "none"
	   });
	   $('.header-container .header-cto').css({
			  "margin-right" : "15%"
	   });
	   
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('.push, footer, footer .inner-footer, header, nav').css({
			  "max-width" : "1024px",
			  "margin-left" : "0px"
         });   
      };
	   
	   
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      };
   }
});


/**** Raise Z-index of PageSkin ****/
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "5"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">    document.write('<scr' + 'ipt src=\"https://ad.360yield.com/default?li=238196&w=970&h=250&ic='+ (window.tokuslid_ic_970x250 || '') + '&sb='+ (window.tokuslid_sb_970x250 || '') + '&gd='+ (window.tokuslid_gd_970x250 || '') +  '\">'+ '</scr' + 'ipt>');<\\script>";
};

