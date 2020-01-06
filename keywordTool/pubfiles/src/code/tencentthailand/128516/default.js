integration.meta = {
	'sectionID' : '128516',
	'siteName' : 'Sanook - Desktop - ( TH )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1410]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1020896',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
			$("body").removeClass("inskinLoaded");
			console.log("inskin unloaded");
		};
		$("head").append("<style>.JooxSectionTitle.jsx-1621565320:before{left: 0 !important;} .JooxSectionTitle.jsx-1621565320{padding-left: 110px !important;}</style>");
		$("head").append("<style>.isDesktop .StrickyButton.jsx-3023562445{right: calc(50% - 570px); z-index: 9 !important;}</style>");
		$("head").append("<style>.inskinLoaded .billboard{display: none !important;} .MainHeader{padding: 10px 0 20px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<a href=\"https://go.onelink.me/LiHG?pid=Sanook&c=VOOVdownload\" target=\"_blank\"><img src=\"https://img-as.fsanook.com/files/uploads/ads/dfp/20180814/o_1ckrd57odrb111h9l4mhre15png.jpg\" alt=\"Flower\"></a>";
};
