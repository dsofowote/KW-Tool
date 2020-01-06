integration.meta = {
    'sectionID' : '129732',
    'siteName' : 'New Idea - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1505]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087164',
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
    }
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/60035833/PAC/New_Idea)', [[1,1]])\n  .setTargeting('passback', ['inskin'])\n  .setTargeting('position', ['2'])\n  .setTargeting('pagenumber', ['1'])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n  <\\script>";
};