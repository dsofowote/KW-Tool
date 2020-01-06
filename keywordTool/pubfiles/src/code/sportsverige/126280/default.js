integration.meta = {
   'sectionID' : '126280',
   'siteName' : 'Svenska Fans - Desktop - (SE)',
   
   'platform' : 'desktop',
   'restrictions' : ''
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707735',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 990,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#aspnetForm").css({
   		"max-width" : "990px"
   	});
   	$(".ad_top_banner").css({
   		"margin" : "0 auto"
   	});
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!--  Begin Rubicon Project Tag -->\n<!--  Site: Svenskafans   Zone: Svenskafans Panorama Topp_980x240   Size: Double Panorama  -->\n<!--  PLACEMENT: Above the Fold;   -->\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = '10708';\nrp_site      = '122446';\nrp_zonesize  = '577194-78';\nrp_adtype    = 'js';\nrp_smartfile = '[SMART FILE URL]';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/10708.js\"><\\script>\n<!--  End Rubicon Project Tag -->";
};