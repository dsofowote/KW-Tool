integration.meta = {
   'sectionID' : '124643',
   'siteName' : 'HKEJ - Desktop - (HK)',
   'platform' : 'desktop'
};

// function setWindow() {
// 	return currentWindow.top;
// };

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.params = {
	'mf_siteId' : '707604',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 970,
	"plr_GetContentHeightVersion" : 2,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "ad-group",
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#hkej_wrapper_siteHeadWrap_2014, #hkej_sitemenu, #footerWrap_2014, .mdMHead').css({
			'max-width' : '970px',
			'margin' : '0 auto'
		});
		$('.hkej_navMenuWrap_2014, .hkej_navSubMenuWrap_2014').css({
			'max-width' : '970px',
			'margin' : '0 auto',
			'float' : 'none'
		});
		$('#top, .navMenuWrap, .navSubMenuWrap').css({
			'width' : '970',
			'position' : 'absolute',
			'left' : '50%',
			'margin-left' : '-485px'
		});
		$('.navMenuWrap').css({
			'margin-top' : '65px'
		});
		$('.navSubMenuWrap').css({
			'margin-top' : '90px'
		});
		//$('#contentWrap').css('margin-top','115px');
	}
});