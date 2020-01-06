integration.meta = {
    'sectionID' : '129597',
    'siteName' : 'Motorsport - Smartphone - (FR) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085918',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.ms-hapb-top{display: none !important;}</style>");
		var headerHeight = $('.ms-topbox-header').outerHeight();
		if ($(".ms-topbox-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".ms-topbox-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight
			});
		}
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded, .inskinLoaded .ms-footer--stick{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded .ms-page-content, .inskinLoaded .root{overflow: visible !important;}';
		stylesCSS += 'html{padding: 0 !important;}';
		stylesCSS += '.inskinLoaded #layout_header_spacer{height: 0 !important;}';
		stylesCSS += '.inskinLoaded .ms-item-layout-nowrap [class*=ms-item--]{min-width: 1px !important;}';
		stylesCSS += '.inskinLoaded {position: relative; top: ' + headerHeight + 'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.base.setCfg({
			'plr_FixedTop' : true,
			'plr_EnableSwipe' : true
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 320;\ngoogle_ad_height = 100;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};