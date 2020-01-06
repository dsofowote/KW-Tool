integration.meta = {
	'sectionID' : '128848',
	'siteName' : 'TheLooper - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.channelHome = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
	'mf_siteId' : '1037617',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var hHeight = $('#header').height();
		integration.custom.FrameTop = e.data.plr_FrameTop;
		var TotalHeight = hHeight + integration.custom.FrameTop;
		$(".page-wrap").css({
			"max-width" : "1200px",
			"margin" : "0 auto"
		});
		$('#sidebar').css({
			"top" : TotalHeight
		});
		$("head").append("<style>#content{width: 66% !important; padding: 0 !important;} #sidebar{padding-left: 10px !important; top: " + TotalHeight + "px;}</style>");
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -60
			});
		}
		$("#inskinanchor").css({
			"top" : hHeight,
			"position" : "relative"
		});
	}
});

integration.on('layoutChange', function(e) {
	var hHeight = $('#header').height();
	integration.custom.FrameTop = e.data.plr_FrameTop;
	var TotalHeight = hHeight + integration.custom.FrameTop;
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0 || $(window).scrollTop() < TotalHeight) {
			$('#sidebar').css({
				"top" : TotalHeight
			});
		} else {
			$('#sidebar').css({
				"top" : "59px"
			});
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/124312541/Inskin_Looper_Desktop_Passback_1x3', [1, 3]).display();<\\script>";
};
