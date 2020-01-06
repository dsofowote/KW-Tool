integration.meta = {
    'sectionID' : '128508',
    'siteName' : 'Fox Sports Asia - Desktop - ( Asia )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1450]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1019665',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1190,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#masthead").height();
      if ($("#masthead").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#masthead");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        $("head").append("<style>#secondary-nav{margin:0 auto!important;}</style>");
        $("#secondary-nav").css({
      		"width" : "1190px"
      	});
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<div data-glade data-ad-unit-path=\"/21694412970/passback_desktop\" height=\"90\" width=\"728\" data-json='{\"targeting\":{\"pagetype\":[\"homepage\"]}}'></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};

