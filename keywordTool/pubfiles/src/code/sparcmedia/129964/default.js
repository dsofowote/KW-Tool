integration.meta = {
    'sectionID' : '129964',
    'siteName' : 'Zee5 - (Publisher booking) - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($(".headerInit").length == 1) {
  			$("<div id='inskinanchor'></div>").insertAfter(".headerInit");
  			integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor"
  			});
        }
        $(".carousel-image").css({"max-width": "1180px"});
        $(".carousel").css({"top": "70px"});
        $(".headerInit").css({"z-index": "6"});
        window.unloadPageskin = function () {
    			try {
    				integration.destroy();
    			} catch (e) {}
    		};
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"top" : "70px"});
});
