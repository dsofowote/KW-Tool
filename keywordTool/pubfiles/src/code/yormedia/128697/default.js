integration.meta = {
    'sectionID' : '128697',
    'siteName' : 'Female First  - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1610]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1030899',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1350,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on("adServed", function(e) {
    var headHeight = $(".navbar-fixed-top").height();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/124312541/Female_First/Sublime_Femalef_Desktop_Passback_970x250', [970, 250]).display();\n\n<\\script>";
};

