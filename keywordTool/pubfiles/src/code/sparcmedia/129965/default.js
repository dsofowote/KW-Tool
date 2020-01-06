integration.meta = {
    'sectionID' : '129965',
    'siteName' : 'Zee5 - (Publisher booking) - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1135,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        if ($(".headerInit").length == 1) {
  			$("<div id='inskinanchor'></div>").insertAfter(".headerInit");
  			integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor"
  			});
        }
        $(".carousel-image, .footerContainer").css({"width": "1135px", "margin" : "0 auto"});
        $(".headerInit").css({"z-index": "6"});
        $(".carousel-outer-container, .FirstContainer").css({"float": "none", "margin": "0 auto", "max-width": "1135px"});
        $(".FirstContainer").css({"width": "80%"});
        $(".carousel").css({"top": "70px"});
        $('head').append('<style type="text/css">.outer-list-container, .title1, .list-title, .footer {margin-left: 9.8% !important}</style>');
        window.unloadPageskin = function () {
    			try {
    				integration.destroy();
    			} catch (e) {}
    		};
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#body").css({"width": "1135px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"top" : "70px"});
    });;
