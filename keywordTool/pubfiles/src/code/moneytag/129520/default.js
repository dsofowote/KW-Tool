integration.meta = {
    'sectionID' : '129520',
    'siteName' : 'Cnews - Desktop - (FR) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085429',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $("header").outerHeight();
        var footHeight = $("footer").outerHeight();
        console.log(footHeight);
        if ($("header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                //plr_PageHeightAdjustment : -186,
                plr_ScrollAdjustment : -headHeight,
                plr_PageHeightAdjustment: -footHeight - headHeight
            });
        }
         //$("#footer-middle, footer").css({"z-index": "1"});
        $("#wrapper-front").css({"margin": "0 auto", "max-width": "960px", "float": "none"});
        $("#wrapper-site").css({"overflow": "visible"});
        // $("#letop-hp").css({"display": "none"});
    }
});

integration.on('adServed', function(){
    // $("#inskinanchor").css({
    //     "z-index" : "0",
    //     "position" : "relative"
    // });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/29355\"><\\script> ";
};