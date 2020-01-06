integration.meta = {
    'sectionID': '127381',
    'siteName': 'Motorsport - Tablet - ( INT )',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '716909',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_ForceFrameBottom': 0,
    'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".ms-hapb-top").css({ "display": "none" });
        $("body").removeClass("ms-fullwidth-layout");
        if ($(".ms-topbox").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".ms-topbox");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_ScrollAdjustment: -65,
                plr_PageHeightAdjustment: -110
            });
        }
        $(".ms-footer").css({ "margin": "0 auto", "max-width": "1024px" });
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".ms-page-content").css({ "max-width": "1024px" });
            $(".ms-footer").css({ "margin-left": "0" });
            $(".ms-event-strip-widget, .ms-topbox").css({ "margin-left": "-20px" });
            $(".root").css({ "overflow": "visible" });
            integration.base.setCfg({ 'plr_PageAlignment': 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};