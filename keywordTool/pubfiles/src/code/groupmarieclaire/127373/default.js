integration.meta = {
	'sectionID' : '127373',
	'siteName' : 'Magic Maman - Smartphone - (FR)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '717179',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FSR = e.data.plr_FrameSideRight;
		var windowWidth = $(window).width();
		var contentWidth = windowWidth - integration.custom.FSR;
		var content2 = (contentWidth / 2);
		integration.custom.headHeight = $("#header").outerHeight();

		$("<div id='inskinanchor'></div>").insertBefore("body > #header");
		integration.base.setCfg({
			plr_AnchorParent : "#inskinanchor",
			plr_PageHeightAdjustment : -integration.custom.headHeight
		});

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .BodyContent{max-width:' + (contentWidth - 20) + 'px;padding-left:10px;padding-right:10px;}';
		stylesCSS += '.inskinLoaded .PrenomTops-section{max-width:' + contentWidth + 'px;position:relative;right:20px;}';
		stylesCSS += '.inskinLoaded .PrenomTops-title{font-size:6vw}';
		stylesCSS += '.inskinLoaded .SiteHeader-container{height:0px}';
		stylesCSS += '.inskinLoaded .ArticleLink--small{max-width:' + (contentWidth - 20) + 'px;}';
		stylesCSS += '.inskinLoaded #inskinanchor{margin-top:' + integration.custom.headHeight + 'px}';
		stylesCSS += '.inskinLoaded .PageServices-item{max-width:' + (content2 - 35) + 'px;}';
		stylesCSS += '.inskinLoaded .TrackPeriodLinks-babyPeriod{padding:4px;}';
		stylesCSS += '.inskinLoaded .js-emailAddress{max-width:' + (contentWidth - 75) + 'px}';
		stylesCSS += '.inskinLoaded .NewsletterBox-form{max-width:' + contentWidth + 'px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src=\"//static.adserver.pm/position/MAGICMAMAN/RG_MOBILE/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};

