integration.meta = {
	'sectionID' : '126883',
	'siteName' : 'Men\'s Health - (CREATIVE APPROVAL) - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707462',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body #header").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("body #header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded {padding-right: 0 !important; margin-top: 0 !important;}'; // Needed to prevent interstitial to break the layout.
		stylesCSS += '.inskinLoaded div#wrapper{overflow: visible !important; margin-top: 0 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var highlighted = $('div.highlights-item').width();
	var WindowWidth = $(window).width();
	var CalcWidth = WindowWidth - integration.custom.FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += 'body.inskinLoaded .bx-viewport #anchor-carousel li{width: 100% !important;}';
	stylesCSS += 'body.inskinLoaded .bx-viewport #events-promos-carousel li{width: 100% !important;}';
	stylesCSS += 'body.inskinLoaded div.hmpg-highlights-section{padding: 0 !important;}';
	stylesCSS += 'body.inskinLoaded .bx-viewport ul li{width: ' + (CalcWidth / 2) + 'px !important; margin-right: 3px !important;}';
	stylesCSS += 'body.inskinLoaded .bx-viewport #post-gallery-slider li{width: 100% !important;}';
	stylesCSS += 'body.inskinLoaded .more-stories-section{width: calc(100% + 40px) !important; margin-left: -20px;}';
	stylesCSS += 'body.inskinLoaded .bx-viewport div div{width: ' + (CalcWidth / 2) + 'px !important; margin-right: 3px !important;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		jQuery('.bx-next').trigger("click");
	}, 1000);
	$('.inskinLoaded .bx-wrapper').parent().css({
		"padding" : "0"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		jQuery('.bx-next').trigger("click");
	}, 1000);
});
