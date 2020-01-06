integration.meta = {
    'sectionID': '127691',
    'siteName': 'L\'express -Tablet- (FR)',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '781585',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    "plr_StartScrollOnAnchor": true,
    "plr_ScrollAdjustment": 64,
    "plr_FastInit" : true,
    'plr_URLKeywords' : 1
};

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    $('body').append('<style type="text/css">.scroll_to_top {right: ' + (integration.custom.FrameSideRight + 25) + 'px !important;left: auto !important;}</style>');
});

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: 0
            });
        }
        integration._addPixel();
        $('.two_items .partner, .two_items .service, .two_items .service li').css({
            "float": "none"
        });
        $('head').append('<style type="text/css">.block_module_event_kiosk.event_kiosk_surfooter:after {display: none;}</style>');
        $('html').css({
            "overflow-x": "visible"
        });
        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            /* Pageskin Edge specific changes */
            $('body, #page, .footer, .block_pub_mbtop').css({
                "margin": "0",
                "max-width": "1000px"
            });
            $('.block_pub_mbtop').css({
                "margin": "0",
                "margin-top": "10px"
            });
            $('#header').css({
                "margin-left": "-20px"
            });

            integration.base.setCfg({
                'plr_PageAlignment': 'left'
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://securite.01net.com/ac?out=js&nwid=13&siteid=291877&pgid=1074380&fmtid=95&tgt=origine%3Dinskin&visit=s&gdpr_consent=[sas_gdpr_consent]&tmstp=[timestamp]\"><\\script>";
};
