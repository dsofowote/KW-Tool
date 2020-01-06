integration.meta = {
   'sectionID' : '126469',
   'siteName' : 'WhatsonTV (Competitions) - Desktop - (UK) ',
   'platform' : 'desktop'
};





integration.testParams = {
   'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1100,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : 'leaderboard,mpu',
   'plr_HideElementsByClass' : 'pane-wotv-blocks-wotv-brightcove-home, sky_container, views-field-field-image'
};


integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        $('.RubiconTAP').css({
            'height' : '0px'
        });
        $('body').css({
            'background-image' : 'none'
        });
        $('#wrapper, footer').css({
            'max-width' : '1100px'
        });
        $('#navbar').css({
            'width' : '1100px'
        });
        $('#navbar').css({
            'margin' : '0 auto'
        });
        $('.pane-wotv-blocks-wotv-brightcove-home').css({
            'z-index' : '1'
        });
        /* Stops the site from jumping down when the PageSkin loads after previously unloading */
        $("body").css({
            "margin-top" : "0px"
        });
    }
});

integration.on("adServed", function(e) {
    integration.custom.refreshWait();
});
integration.custom.refreshWait = function() {
    try {
        if (window.ipcTags.type == "gallery") {
            setTimeout(integration.custom.refreshGallery, 60 * 1000);
        }
    } catch(e) {
    }
    
}

integration.custom.refreshGallery = function() {
    refreshcount = 0;
    refreshcount++;
    integration.base.unloadAd();
    /* Stops the site from jumping up when the PageSkin unloads */
    $("body").css({
        "margin-top" : "100px"
    });
    integration.base.makeAdCall({});
    integration.telemetry.recordCustom('refresh_' + refreshcount);
}

/* Passback Tag */
window.ISMPassback = function() {
   return "\t\n<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback('/18711560/whatsontv', [[728, 90]])\n.display();\n<\\script>";
};




