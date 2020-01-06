integration.meta = {
   'sectionID' : '127372',
   'site' : 'Avantages - Smartphone - (FR)',
   'product' : 'PageSkin Edge on smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var headerHeight = $('#page .header').height();
	   $('body').css({
		    "margin-top" : headerHeight
		});
	   $('#sasLay').hide();
	   $('#body').css({
		    "margin-top" : "0"
		});
	   $('#page, #page .hpune a.thumbnail:first-child, #page .hpune a.thumbnail:first-child .img, #page .hpune a.thumbnail:first-child .img img').css({
		  "width" : "100%",
		  "height" : "auto"
	   });
	   $('#page .small a.thumbnail').css({
		   "width" : "47%",
		   "height" : "auto"
		});
	   $('#page .small a.thumbnail .img, #page .small a.thumbnail .img img').css({
		   "width" : "100%",
		   "height" : "auto"
		});
	   
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/AVANTAGES/RG_MOBILE/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};