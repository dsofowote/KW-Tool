integration.meta = {
    'sectionID': '127680',
    'siteName': ' Game FAQS - Desktop - (AU &amp; ASIA) ',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
    'mf_siteId': '781166',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1160,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    "plr_StartScrollOnAnchor" : true,
    "plr_ScrollAdjustment" : 0
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        if ($(".masthead").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".masthead");
            integration.base.setCfg({
                "plr_AnchorParent": "#inskinanchor",
                "plr_PageHeightAdjustment": -80
            });
        }
        $("#footer").css({
            "width": "1160px",
            "margin": "0 auto",
            "left": "0px",
            "right": "0px"
        });
    }
});
