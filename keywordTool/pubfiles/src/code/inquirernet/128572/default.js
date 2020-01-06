integration.meta = {
	'sectionID' : '128572',
	'siteName' : 'Inquirer.net - Smartphone - ( PH )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1023893',
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
		var headHeight = $(".header2").height();
		if ($(".header2").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header2");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded div[id^="tg_side"]{margin: 0 !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"><\\script>\n<!-- Inskin_Responsive_Passbacks -->\n<ins class=\"adsbygoogle\"\n    style=\"display:block\"\n    data-ad-client=\"ca-pub-3470805887229135\"\n    data-ad-slot=\"6944761384\"\n    data-ad-format=\"auto\"\n    data-full-width-responsive=\"true\"></ins>\n<script>\n(adsbygoogle = window.adsbygoogle || []).push({});\n<\\script>";
};
