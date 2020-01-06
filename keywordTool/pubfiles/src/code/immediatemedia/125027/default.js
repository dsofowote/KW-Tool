integration.meta = {
   'sectionID' : '125027',
   'siteName' : 'Cycling News - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '681719',
   "plr_UseCreativeSettings" : true,
   "plr_ContentW" : 1000,
   "plr_ContentType" : "PAGESKINEXPRESS",
   "plr_PageAlignment" : "center",
   "plr_UseFullVersion" : true,
   "plr_HideElementsByID" : "bannerad, eyeDiv, mpu, mpu2, minibanner1_container",
   "plr_HideElementsByClass" : "adbutton, intext-safe",
   "plr_URLKeywords" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.global-banner{display: none !important;} .global-header{margin-top: 0 !important;}</style>");
		$('body').addClass('ad-inskin-active');
		$('body').css({
			'background-image' : 'none'
		});
		$('.masthead').css({
			'marginTop' : '10px'
		});
		$('#future_company_footer').css({
			'width' : '1000px',
			'margin' : '0 auto'
		});
		$("head").append("<style>tr:nth-of-type(odd){background : none;}</style>")
	}
});
