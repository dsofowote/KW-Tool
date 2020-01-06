integration.meta = {
    'sectionID' : '129512',
    'siteName' : 'Johnston Press RON - (NEW LAYOUT) Tablet - ( UK ) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1085421',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 982,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        $("body > footer").css({
            "padding-bottom": "0px"
        });
        $("#header, footer").css({
            "max-width": "982px",
            margin: "0 auto"
        });
        $("#ensNotifyBanner").parent().css({
            "max-width": "982px",
            margin: "0 auto"
        });
        $("footer").css({
            "float": "none"
        });
        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            integration.base.setCfg({
                plr_PageAlignment: "left"
            });
            $("head").append("<style> body {width : 992px;} </style>")
        }
    }
});
integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index": "1002"
    })
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s)t{d=w.document;w.ggpid=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}t(top,13429));<\\script>";
};
