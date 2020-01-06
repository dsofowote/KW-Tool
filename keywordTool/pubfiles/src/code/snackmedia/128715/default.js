integration.meta = {
	'sectionID' : '128715',
	'siteName' : 'Football Fancast - Smartphone - ( UK )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1032753',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.inskinLoaded .article-inner{margin-left: 0px !important};</style>");
		$("head").append("<style>.inskinLoaded .article blockquote{margin-left: -20px !important};</style>");
		var headerHeight = $(".top-bar").outerHeight();
		var leftPanel = $(window).width() - integration.custom.FrameSideRight;
		integration.base.setCfg({
			"plr_ScrollAdjustment" : headerHeight,
			"plr_PageHeightAdjustment" : -headerHeight
		});

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .wrapper {min-width : ' + leftPanel + 'px !important};';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">ggv2id='qgzfjdet';<\\script><script type=\"text/javascript\" src=\"https://js.gumgum.com/services.js\"><\\script>";
};
