integration.meta = {
	'sectionID' : '128735',
	'siteName' : 'Ag Trader - Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1033608',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
		$('body').css({
			"overflow" : "visible"
		});
		$('#topbar').css({
			"max-width" : "990px",
			"margin" : "0"
		});
		$('.main-wrap').css({
			"max-width" : "990px",
			"margin" : "0 auto"
		});
		$('footer').parent().css({
			"padding" : "0"
		});
		$('#buy-categories-dropdown-menu li > .container').css({
			"margin" : "0 auto",
			"width" : "990px"
		});
		$("head").append("<style>#topbar #topbar-right ul#buy-categories-dropdown-menu{left: -490px !important;}</style>");
	}
});
