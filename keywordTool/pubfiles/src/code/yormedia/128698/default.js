integration.meta = {
    'sectionID' : '128698',
    'siteName' : 'The List - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1290]
};

//for escaping iframe
function setWindow() {
    return currentWindow.top;
  }

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1030900',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.between-slides').css({
        "max-width" : "1030px",
        "margin" : "0 auto"
      });
    }
});

integration.on("adServed", function(e) {
    var headHeight = $("#header").height();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/124312541/Inskin_TheList_Desktop_Passback_1x3', [1, 3]).display();\n<\\script>";
};