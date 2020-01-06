integration.meta = {
    'sectionID' : '130174',
    'siteName' : 'Big Lead - Smartphone - (US)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105255',
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

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('.header_131kpxx-o_O-surfaceStyle_1n2j1nv').height() + $('.header_188mriv').height();
      $(".ism-anchor").css({"top" : headHeight});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight
	})
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit '90-min/Passback/1x1secondary' ### Size: [[1,1]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/90-min/Passback/1x1secondary', [[1,1]])\n.setTargeting('Passback', ['InSkin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();<\\script><!-- End -->";
};
