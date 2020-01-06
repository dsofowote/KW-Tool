integration.meta = {
	"sectionID" : "124725",
	"siteName" : "S�dwest Aktiv",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707228',
	"plr_UseCreativeSettings" : true,
	'plr_PageAlignment' : 'custom',
	'plr_FramePositionCSS' : 'left: -80px; margin: 0 auto;',
	'plr_ContentW' : 1240,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#header-navigation').css({
        'max-width' : '1240px'
      });
			$('#parent-adbox-superbanner').css({
				'padding-top' : '10px'
			});
    }
});
