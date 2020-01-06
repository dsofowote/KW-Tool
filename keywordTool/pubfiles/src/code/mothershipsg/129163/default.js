integration.meta = {
    'sectionID' : '129163',
    'siteName' : 'Mothership.sg - Tablet - ( SG )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1061010',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1036,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".content").css({"margin-left": "17px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("adServed", function(e) {
  var headHeight = $(".top-nav").outerHeight();
	$(".ism-frame").parent().css({"top" : headHeight});
  integration.base.setCfg({
    plr_PageHeightAdjustment : -headHeight,
  });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/80832119/inskin_desktop_passback', [[970, 90], [728, 90], [1, 1]]).display();\n<\\script>";
};