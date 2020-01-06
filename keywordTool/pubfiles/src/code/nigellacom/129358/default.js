integration.meta = {
    'sectionID': '129358',
    'siteName': 'BFI - DESKTOP - (UK)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1330]
};

//for escaping iframe
function setWindow() {
    return currentWindow.top;
}

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1073934',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1070,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $("#page_top, #sliding-popup, .footer").css({
            "width": "1000px",
            "margin": "0 auto"
        });
        $("#sliding-popup, .footer").css({
            "left": "0",
            "right": "0"
        });
        $(".social_sidebar").css({
            "margin-left": "-499px"
        });
        $("body>.footer").css({
            "position": "relative"
        });
        $("html").css({
            "background": "none"
        });
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/28748\"><\\script>";
};