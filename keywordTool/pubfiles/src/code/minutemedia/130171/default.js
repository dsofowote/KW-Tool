integration.meta = {
    'sectionID' : '130171',
    'siteName' : ' Big Lead - Desktop - (US)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1105253',
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
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/90-min/Passback/970x250', [[970,250],[728,90],[970,90]])\n.setTargeting('Passback', ['InSkin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();<\\script>";
};
