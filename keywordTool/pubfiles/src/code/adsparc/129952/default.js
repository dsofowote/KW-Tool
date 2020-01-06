integration.meta = {
    'sectionID' : '129952',
    'siteName' : 'Zee5 - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

function setWindow() {
    return currentWindow.top;
}

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098926',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1235,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
			});
        }
        $("html").css({"overflow-x": "visible"});
        $('head').append('<style type="text/css"> body {overflow: visible !important}</style>');
        $(".top-ad").css({"display": "none"});
        $(".wrapper").css({"margin": "0 auto", "max-width": "1235px"});
        $(".mega-menu").css({"position": "fixed", "z-index": "9", "max-width": "1235px"});

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".row > .container, #header").css({"margin-left": "20px", "width": "1235px"});
            $("header > .container").css({"margin-left": "0px", "width": "1210px"});
            // $("#header").css({"margin-left": "-20px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
