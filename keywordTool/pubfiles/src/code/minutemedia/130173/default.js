integration.meta = {
    'sectionID' : '130173',
    'siteName' : 'Big Lead - Tablet - (US) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105254',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('footer').css({'max-width':'1200px', 'margin':'0 auto'});

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('main, footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

        }
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('.header_131kpxx-o_O-surfaceStyle_1n2j1nv').height() + $('.header_188mriv').height();
      $(".ism-anchor").css({"top" : headHeight});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight
	})
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit '90-min/Passback/1x1secondary' ### Size: [[1,1]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/90-min/Passback/1x1secondary', [[1,1]])\n.setTargeting('Passback', ['InSkin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();<\\script><!-- End -->";
};
