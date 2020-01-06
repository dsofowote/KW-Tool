integration.meta = {
    'sectionID' : '129215',
    'siteName' : 'The Urban List - (Creative App) (Pagelead) - Smartphone - ( AU NZ )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1064087',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded  #content-container{overflow: visible !important}';
        stylesCSS += '.inskinLoaded  .off-canvas-wrap{overflow: visible !important}';
        stylesCSS += '.inskinLoaded #content-container {height: auto!important; padding-bottom: 0px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);

    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var contentHeight = $('#content-container').outerHeight();
        $(".ism-frame").parent().css({"z-index" : "21"});
        $(".ism-frame:nth-of-type(3)").css({"bottom" : -contentHeight});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback-320x50'>\n  <script>\n     window.googletag = window.googletag || {cmd: []};\n       googletag.cmd.push(function() {\n         googletag\n           .defineSlot('/21801723200/TUL/passback', [320, 50], 'gpt-passback-320x50')\n           .addService(googletag.pubads())\n\t\t   .setTargeting('pos', '0')\n\t\t   .setTargeting('passback', 'inskin');\n         googletag.pubads().set('page_url', window.location.href);\n         googletag.enableServices();\n         googletag.display('gpt-passback-320x50');\n     });\n  <\\script>\n</div>";
};