integration.meta = {
    "sectionID": "124990",
    "siteName": "MP Deluxe",
    "publisher": "mingpao",
    "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706381',
    "plr_UseCreativeSettings": true,
    "plr_UseFullVersion": true,
    "plr_ContentType": "PAGESKINEXPRESS",
    "plr_ContentW": 1000,
    "plr_PageAlignment": "center",
    "plr_HideElementsByID": "",
    "plr_HideElementsByClass": "",
    "plr_StartScrollOnAnchor": true,
    "plr_ScrollAdjustment": 0
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        /* Add a spacer pixel to the bottom of the content (for content using float positioning) */
        integration._addPixel();
        $("head").append("<style>div.ism-frame:nth-child(even){padding-top:0 !important;}</style>");
        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            $("#outer_wrapper").css({
                "margin-left": "0px"
            });

            integration.base.setCfg({
                plr_PageAlignment: "left"
            });
        }
    }
});