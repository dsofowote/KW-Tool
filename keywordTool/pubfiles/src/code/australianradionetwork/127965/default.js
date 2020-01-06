integration.meta = {
	'sectionID' : '127965',
	'siteName' : 'Pure Gold Classic Hits Network - Smartphone - (AU)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '957429',
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
		if ($("#main-body-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main-body-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -130
			});
		}
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #main-body-container {padding-top: 0px}';
        stylesCSS += '.inskinLoaded .row.row--mobile-no-gutters {display: none}';
        stylesCSS += '</style>'
		$('head').append(stylesCSS);
		window.unloadPageskin = function () {
			try {
				integration.destroy();
			} catch (e) {}
		};
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
	$("#inskinanchor").css({"margin-top": "130px"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
	return "\n<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-4261758103850511\";\n/* 320x50_Inskin_PureGold_Passback */\ngoogle_ad_slot = \"8448802405\";\ngoogle_ad_width = 320;\ngoogle_ad_height = 50;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
