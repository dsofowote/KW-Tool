integration.meta = {
    'sectionID' : '129733',
    'siteName' : 'New Ideal - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087165',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1245,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".Header").outerHeight();
        var adjst;
        if (headHeight > 45 ) {
            adjst = headHeight - 45;
        } else {
            adjst = 0;
        };
        if ($(".Header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".Header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : - headHeight,
				plr_ScrollAdjustment : -adjst
			});
		}
        $(".Footer, #InfiniteScroll-Container, #PageBody").css({"margin": "0 auto", "max-width": "1242px"});
        $(".PageWrap").css({"overflow-x": "visible"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".Footer, #InfiniteScroll-Container, #PageBody").css({"margin-left": "0px"});
            $(".Header").css({"margin-left": "-20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/60035833/PAC/New_Idea)', [[1,1]])\n  .setTargeting('passback', ['inskin'])\n  .setTargeting('position', ['2'])\n  .setTargeting('pagenumber', ['1'])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n  <\\script>";
};