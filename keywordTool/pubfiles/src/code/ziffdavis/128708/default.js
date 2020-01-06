integration.meta = {
    'sectionID' : '128708',
    'siteName' : 'Ask Men - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1031981',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1080,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#headerOuter").height() + $("#quickMenu").height();
      if ($("#headerOuter").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#headerOuter");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
    $("#inskinanchor").css({
    		"top" : "86px",
    		"position" : "relative"
    	});
      $("#articleContainer").css({
          "position" : "relative"
        });
    }
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5691/askmen/remnant', [970, 250]).display();\n<\\script>";
};
