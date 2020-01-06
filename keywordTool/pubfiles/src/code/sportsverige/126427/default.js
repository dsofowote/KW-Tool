integration.meta = {
   'sectionID' : '126427',
   'siteName' : 'Hockey Sverige - Desktop - (SE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706808',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#site-wrapper").css({
			"overflow-y" : "auto"
		});
		$("#page").css({
			"float" : "none"
		});
		$(".main-header, .navbar-default, #site-wrapper, .main_header").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$(".main_header").css({
			"min-width" : "1000px"
		});
		$(".banner-right").hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!--  Begin Rubicon Project Tag -->\n<!--  Site: Hockeysverige- only RTB   Zone: 980x240   Size: Double Panorama  -->\n<!--  PLACEMENT: Above the Fold;   -->\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = '10708';\nrp_site      = '24284';\nrp_zonesize  = '120424-78';\nrp_adtype    = 'js';\nrp_smartfile = '[SMART FILE URL]';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/10708.js\"><\\script>\n<!--  End Rubicon Project Tag -->";
};