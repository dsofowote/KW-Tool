integration.meta = {
	'sectionID' : '127380',
	'siteName' : 'Motorsport - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1344]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '716908',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".ms-hapb-top").css({"display": "none"});
		$("body").removeClass("ms-fullwidth-layout");
		if ($(".ms-topbox").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".ms-topbox");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_ScrollAdjustment : -65
			});
		}
		$(".ms-footer").css({"margin": "0 auto", "max-width": "1024px"});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 970;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};
