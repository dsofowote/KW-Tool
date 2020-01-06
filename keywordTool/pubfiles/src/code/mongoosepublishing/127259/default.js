integration.meta = {
   'sectionID' : '127259',
   'siteName' : 'Timeout - Desktop - (SG)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1410]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707973',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1150,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	   if (e.data.hasSkin) {
		   $('head').append("<style>#header .sticky.fixed{position: relative;}</style>");
		   $('header').css({
			  "background-color" : "transparent"
		   });
		   $('#header .sticky.fixed, #main-container, #header > div.xs-hide.sm-block > div, .ad-header, #header > div.js-header-ad-wrapper.xs-z4 > div').css({
				  "margin" : "0 auto",
				  "max-width" : "1150px",
	  			  "width" : "100%",
	  			  "left" : "0",
	  			  "right" : "0"
		   });	   
		   $('.site-footer').css({
			   "max-width" : "1150px",
			   "margin" : "0 auto",
			   "padding-left" : "12px"
		   });
		   $('.site-footer__utilities, .site-footer .container').css({
			   "max-width" : "1130px"
		   });
		   
		   var navBar = $('#header .sticky.fixed').offset();
		   
		   $(window).scroll(function(){
		        if($(window).scrollTop() > $('.ism-frame').parent().height()){
		        	$('#header .sticky.fixed').css({
		        	  "position" : "fixed",
		        	  "top" : "0",
		        	  "left" : "0",
		        	  "right" : "0",
		  			  "margin" : "0 auto",
		  			  "max-width" : "1150px",
		  			  "width" : "100%"
		  	   });
		        } else {
		            $('#header .sticky.fixed').css('position','static');
		        }
		   });
	   }
	});


/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1026598/Time_Out_Singapore//pageskin', [1, 1]).display();\n<\\script>";
};
