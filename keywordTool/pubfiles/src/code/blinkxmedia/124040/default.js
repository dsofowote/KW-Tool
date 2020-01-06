integration.meta = {
	"sectionID" : "124040",
	"siteName" : "Carpages.co.uk",
	"publisher" : "blinkx",
	"platform" : "desktop"
};

integration.testParams = {
  "desktop_resolution": [1270]
};

integration.params = {
	
	"srv_SectionID" : "124040",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1010,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_FrameTop" : 90,
	"plr_FrameSide" : 130,
	"plr_FrameBottom" : 90,
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "leader, mpu, mpu2, banner",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#wrap-header').css({
			'marginTop' : '10px'
		});
		$('#feedback').hide();
		$('#wrap-footer').css({
			'width' : '1010px',
			'margin' : '12px auto 0px'
		});
		$('head').append('<style>#navigation ul li { padding: 2px; }</style>');
	}
});
