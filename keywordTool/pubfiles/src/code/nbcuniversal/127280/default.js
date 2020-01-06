integration.meta = {
    'sectionID': '127280',
    'siteName': 'E! Online - Smartphone- (ASIA)',
    'platform': 'smartphone'
};




integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707598',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_URLKeywords': 2
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#pageHeader").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#pageHeader");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -50,
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded{background-color: #ffffff; min-width: 300px;} .inskinLoaded #mainNav{max-width: 450px;}}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);

    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index": "33"
    });
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-9162676083297313\";\n/* EOL Intl Desktop 728x90 */\ngoogle_ad_slot = \"4185601187\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};