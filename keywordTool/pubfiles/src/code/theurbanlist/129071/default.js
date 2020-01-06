integration.meta = {
    'sectionID' : '129071',
    'siteName' : 'The Urban List - Desktop - ( AU NZ )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047521',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1110,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("head").append("<style> .row {max-width: 105rem !important}</style>");
      $(".primary-footer").css({
        "float": "none"
      });

    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1999|| integration.custom.isSuper) {
        var sideWidth = (width - 1080)/2;
        $("head").append("<style> .openshare-list {left : "+ (sideWidth-15) +"px!important; z-index : 1; top : 55%!important}</style>");
    }
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback-728x90'>\n  <script>\n     window.googletag = window.googletag || {cmd: []};\n       googletag.cmd.push(function() {\n         googletag\n           .defineSlot('/21801723200/TUL/passback', [728, 90], 'gpt-passback-728x90')\n           .addService(googletag.pubads())\n\t\t   .setTargeting('pos', '1')\n\t\t   .setTargeting('passback', 'inskin');\n         googletag.pubads().set('page_url', window.location.href);\n         googletag.enableServices();\n         googletag.display('gpt-passback-728x90');\n     });\n  <\\script>\n</div>";
};

