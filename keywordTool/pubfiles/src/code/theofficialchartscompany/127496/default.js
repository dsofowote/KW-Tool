integration.meta = {
	'sectionID' : '127496',
	'siteName' : 'The Official Charts Company - Desktop - (US)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '729041',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('pageskin-on');
		//$(".adspace-top").hide();
		try {
			adLayout.pageSkinCallback();
		} catch (e) {
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"//us.ads.justpremium.com/adserve/js.php?zone=68254\"><\\script>";
};
