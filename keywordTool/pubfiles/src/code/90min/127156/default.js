integration.meta = {
   'sectionID' : '127156',
   'siteName' : '90 min - Smartphone - (INT ex UK)',
   'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707958',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_ShowCloseButton' : true,
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('#site-header').height() + $('.mobile-nav-main-wrapper').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});



/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/175840252/90-min/Passback/1x1secondary', [[1,1]])\n.setTargeting('Passback', ['Inskin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>";
};