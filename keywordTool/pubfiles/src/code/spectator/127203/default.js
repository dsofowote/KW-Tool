integration.meta = {
   'sectionID' : '127203',
   'siteName' : 'Spectator-Smartphone- UK   (ID: 125063 ) ',
   'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '707474',
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
	   var wwidth = $(window).width();
	   if (wwidth < 360) {
		   $('.masthead__logo-link').css({
			  "width" : "138px" 
		   });
		   $('head').append('<style type="text/css">.masthead__logo-link {width: 117px !important; height: 35px;}</style>');
	   }
   }
});

/* Passback Tag 
window.ISMPassback = function() {
   return "<!--JavaScript Tag // Tag for network 903: The Spectator Ltd // Website: Passback Tags - Spectator // Page: InSkin // Placement: 320x50 (6407288) // created at: Feb 16, 2017 5:15:33 PM-->\n<script language=\"javascript\"><!--\ndocument.write('<scr'+'ipt language=\"javascript1.1\" src=\"https://adserver.adtech.de/addyn/3.0/903/6407288/0/3055/ADTECH;loc=100;target=_blank;grp=[group];misc='+new Date().getTime()+'\"></scri'+'pt>');\n//-->\n<\\script><noscript><a href=\"https://adserver.adtech.de/adlink/3.0/903/6407288/0/3055/ADTECH;loc=300;grp=[group]\" target=\"_blank\"><img src=\"https://adserver.adtech.de/adserv/3.0/903/6407288/0/3055/ADTECH;loc=300;grp=[group]\" border=\"0\" width=\"320\" height=\"50\"></a></noscript>\n<!-- End of JavaScript Tag -->";
};*/

/* Passback Tag 
window.ISMPassback = function() {
   return "<!--JavaScript Tag // Tag for network 903: The Spectator Ltd // Website: Passback Tags - Spectator // Page: InSkin // Placement: 320x50 (6407288) // created at: Feb 16, 2017 5:15:33 PM--> \n<script language=\"javascript\">\ndocument.write('<scr' + 'ipt language=\"javascript1.1\" src=\"https://adserver.adtech.de/addyn/3.0/903/6407288/0/3055/ADTECH;loc=100;target=_blank;grp=[group];misc=' + new Date().getTime() + '\"></scri' + 'pt>');\n<\\script>\n<noscript><a href=\"https://adserver.adtech.de/adlink/3.0/903/6407288/0/3055/ADTECH;loc=300;grp=[group]\" target=\"_blank\"><img src=\"https://adserver.adtech.de/adserv/3.0/903/6407288/0/3055/ADTECH;loc=300;grp=[group]\" border=\"0\" width=\"320\" height=\"50\"></a></noscript><!-- End of JavaScript Tag -->";
};*/

/* Passback Tag working 
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\ndocument.write(\"<script language=\\\"javascript\\\">document.write(\\\"CHRISS\\\");<\\script>\");\n<\\script>";
};*/

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\ndocument.write(\"<script type=\\\"text/javascript\\\">document.write(\\\"<!--JavaScript Tag // Tag for network 903: The Spectator Ltd // Website: Passback Tags - Spectator // Page: InSkin // Placement: 320x50 (6407288) // created at: Feb 16, 2017 5:15:33 PM--> <scr\\\" + \\\"ipt language=\\\\\\\"javascript\\\\\\\">document.write('<scr' + 'ipt language=\\\\\\\"javascript1.1\\\\\\\"src=\\\\\\\"https://adserver.adtech.de/addyn/3.0/903/6407288/0/3055/ADTECH;loc=100;target=_blank;grp=[group];misc=' + new Date().getTime() + '\\\\\\\"></scri' + 'pt>');</scr\\\" + \\\"ipt><noscript><a href=\\\\\\\"https://adserver.adtech.de/adlink/3.0/903/6407288/0/3055/ADTECH;loc=300;grp=[group]\\\\\\\" target=\\\\\\\"_blank\\\\\\\"><img src=\\\\\\\"https://adserver.adtech.de/adserv/3.0/903/6407288/0/3055/ADTECH;loc=300;grp=[group]\\\\\\\" border=\\\\\\\"0\\\\\\\" width=\\\\\\\"320\\\\\\\" height=\\\\\\\"50\\\\\\\"></a></noscript><!-- End of JavaScript Tag -->\\\");<\\script>\");\n<\\script>";
};