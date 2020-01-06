integration.meta = {
	'sectionID' : '127029',
	'siteName' : 'Xpose - Smartphone - (IE)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708106',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
    'plr_Responsive': true,
    "plr_ShowCloseButton": true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".navbar");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -40
			});
		}
		var navbarHeight = $(".navbar").height();
		$("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #wrapper{padding: 0;}';
        stylesCSS += '.inskinLoaded {overflow-x: hidden;}';
        stylesCSS += '.inskinLoaded .article_text{max-width: 100%;}';
        stylesCSS += '.inskinLoaded .static_ad, .mpu{display: none;}';
        stylesCSS += '.inskinLoaded #inskinanchor{margin-top: ' + navbarHeight + 'px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
    $("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/49077797/InSkin_Passback\" height=\"50\" width=\"320\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};