integration.meta = {
   'sectionID' : '128063',
   'siteName' : 'The Evening Standard - Smartphone - (ASIA)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '972684',
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
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded {}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body .full-menu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body .full-menu");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -10,
			});
		}
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded body.full-menu-visible #inskinanchor{display: none;}';//This must be done in order to see the full menu without Pageskin showing at the bottom
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
		
		var testDiv = "<div class='inskinbox'></div>";
		$('body').append(testDiv);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .full-menu{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});