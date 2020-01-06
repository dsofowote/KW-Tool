integration.meta = {
	'sectionID' : '128361',
	'siteName' : 'Computertotaal  - Desktop - ( NL )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1005988',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var navHeight = $(".nav-site").height();
		if ($(".nav-site").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".nav-site");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -navHeight,
				plr_ScrollAdjustment : -navHeight
			});
		}
		$("footer").css({"margin": "0 auto", "max-width": "980px"});
		$("#banner--0").hide();
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade id='glade-aslot-1'\n\n      data-ad-unit-path='/116488029/Computertotaal.nl_Retour_INSKIN'\n\n      width='728' height='90'\n\n      data-click-url='%%CLICK_URL_UNESC%%'></div>\n\n<script async src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};