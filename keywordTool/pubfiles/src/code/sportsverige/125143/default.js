integration.meta = {
    'sectionID': '125143',
    'siteName': 'Fotbolldirekt - Desktop - (SE)',
    'platform': 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution': [0]
};

integration.params = {
    'mf_siteId': '707479',
    "plr_ContentType": "PAGESKINEXPRESS",
    "plr_PageAlignment": "center",
    "plr_UseCreativeSettings": true,
    "plr_ContentW": 1000,
    "plr_UseFullVersion": true,
    "plr_HideElementsByID": "commercial-banner,commercial-third,breakingburner-iframe,videospelare-posts",
    "plr_HideElementsByClass": "player-body,article-banner"
};

integration.on("adCallResult", function(e) {
    $('.main_header, #site-wrapper').css({
        'width': '1000px',
        'min-width': '1000px',
        'margin': '0 auto'
    });
    $('.top_navigation_wrapper, .main_navigation_wrapper, .bottom_navigation_wrapper').css({
        'width': '100%',
        'padding': '0'
    });
    $('#page').css({
        'float': 'none'
    });
    $('#menu-item-232916 > a').css({
        'margin-right': '8px'
    });

    /* Add a spacer pixel to the bottom of the content (for content using float positioning) */
    integration._addPixel();
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!--  Begin Rubicon Project Tag -->\n<!--  Site: Fotbolldirekt - RTB only   Zone: 980x240   Size: Double Panorama  -->\n<!--  PLACEMENT: Above the Fold  -->\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = '10708';\nrp_site      = '24246';\nrp_zonesize  = '120410-78';\nrp_adtype    = 'js';\nrp_smartfile = '[SMART FILE URL]';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/10708.js\"><\\script>\n<!--  End Rubicon Project Tag -->";
};