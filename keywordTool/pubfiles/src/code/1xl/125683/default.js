integration.meta = {
   'sectionID' : '125683',
   'siteName' : 'Newsquest RON - (RON) - Desktop - ( UK )',
   'platform' : 'desktop'
};

function setWindow() {
	return currentWindow.top;
}

integration.disableTelemetry = true;

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681729',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 0,
	"plr_FastInit" : true,
	'plr_PageScanExclude' : ' #redesign-header, .article-row-container-right, .taboola-block, #mostFullBlock '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#takeover > header").length == 1) {
                    $("<div id='inskinanchor'></div>").insertAfter("#takeover > header");
                    integration.base.setCfg({
                        plr_AnchorParent : "#inskinanchor",
                        plr_PageHeightAdjustment : -190
                    });
		}
		$('.dfp-top-ad-container').css({
			"display" : "none"
		});
		$("#main").css({
			"margin-top" : "0px"
		});
		$("footer").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
		$("#redesign-header, #redesign-header nav.primary-nav").css({
			"margin-bottom" : "0"
		});
		if (integration.params.version) {
		} else {
			var URL = window.location.href;
			integration.telemetry.recordCustom(URL);
		}
		$("#nqcontainer").css({
			"margin-top" : "0px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggpid=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,13429));<\\script>";
};