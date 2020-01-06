integration.meta = {
	'sectionID' : '128849',
	'siteName' : 'TheLooper - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
	'mf_siteId' : '1037618',
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
		$("head").append("<style>#content{width: 66% !important; padding: 0 !important;} #sidebar{padding-left: 10px !important; top: " + TotalHeight + "px;}</style>");
		$('#sidebar').css({
			"top" : TotalHeight
		});
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
		$("#featured").css({
			"max-width" : "1200px",
			"margin" : "0 auto"
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#main, #footer").css({
				"max-width" : "1200px",
				"margin" : "0"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/124312541/Inskin_Looper_Tablet_Passback_1x3', [1, 3]).display();<\\script>";
};
