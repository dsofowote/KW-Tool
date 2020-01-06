integration.meta = {
	'sectionID' : '128025',
	'siteName' : 'Over Sixty - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '969265',
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
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .mobi-nav-bar{z-index: 50;}';
		stylesCSS += '.inskinLoaded .pre-footer{padding-right: 5px; padding-left: 5px;}';
		stylesCSS += '.inskinLoaded #main-content-wrap{min-width: 280px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50
			});
		}

		$("#inskinanchor").css({
			"top" : "50px",
			"position" : "relative"
		});

		$(".page-heading-wrap .super-hero").css({
			"display" : "none"
		});

		$(".page-heading").css({
			"min-height" : "0"
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
	$(".page-heading-wrap .super-hero").css({
		"display" : "block"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\">\ngoogle_ad_client = \"ca-pub-8027655917349410\";\n/* Oversixty AdX Backup */\ngoogle_ad_slot = \"8584908748\";\ngoogle_ad_width = 320;\ngoogle_ad_height = 50;\ngoogle_page_url = \"http://www.oversixty.com.au\";\n\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
