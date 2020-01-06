integration.meta = {
  "sectionID": "123975",
  "siteName": "Russellgrant.com",
  "publisher": "astrointeractive",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [ 1220 ]
};

integration.params = {

  'mf_siteId': '681748',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 960,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "picad_resource_container",
  "plr_HideElementsByClass": "wrap-components-2col",
  "plr_UseFullVersion": true,
  'plr_ForceFrameBottom' : 0
};


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#pagewidth").css({
			"margin-top" : "10px"
		});
	}
});
