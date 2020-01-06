integration.meta = {
    'sectionID': '128894',
    'siteName': 'Pop Sugar - Smartphone - ( AU )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1040959',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_ForceFrameBottom': 0
};


integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '#mobile-swipe-banner, #banner-placeholder{display:none}';
        stylesCSS += '.inskinLoaded{margin-top: 0px !important;}';
        stylesCSS += '.inskinLoaded #m-shared-nav-outer, .inskinLoaded .preview-field.preview-field-text, .inskinLoaded #m-shared-nav-content{z-index: auto !important;}';
        stylesCSS += '.inskinLoaded .vhub-mixed .preview-field:not(.preview-field-text).vhub-mixed-right{z-index: auto !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.custom.headHeight = $("header .site-header").outerHeight();
        integration.custom.socialHeight = $(".meta__social").outerHeight();
        if ($(".meta__social").css("z-index") === "101"){
			integration.custom.pl_initState = integration.custom.socialHeight;
		} else {
			integration.custom.pl_initState = integration.custom.headHeight;
		}
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('layoutChange', function (e) {
    integration.custom.pl_behaviour = "element state";
    integration.custom.pl_classTrigger = ".meta__social";
    integration.custom.elProperty = "display";
    integration.custom.elValue = "flex";

    var articlePage = $(".article-pagetype");
    if (articlePage) {
        integration.custom.pl_scrollState1 = integration.custom.socialHeight;
        integration.custom.pl_scrollState2 = integration.custom.headHeight;
    } else {
        integration.custom.pl_scrollState1 = 0;
        integration.custom.pl_scrollState2 = 0;
    }
});

integration.on('pagelead:layoutChange', function (e) {
    if (e.data.fixedTop == false) {
        integration.custom.pl_behaviour = "N/A";
        newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.headHeight + 'px !important;}.inskinLoaded .site-header--fixed{top:0px}';
        $("#inskinPL").html(newValue);
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame:nth-of-type(1)").css({"z-index" : "9"});
  });

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback'>\n<script>\n   window.googletag = window.googletag || {cmd: []};\n     googletag.cmd.push(function() {\n\n       googletag.defineSlot('/1027487/mobile-popsugar',[320,50] 'gpt-passback')\n         .addService(googletag.pubads());\n       googletag.pubads().setTargeting('Passback', ['true']);\ngoogletag.pubads().set('page_url', 'popsugar.com.au');\n\n       googletag.enableServices();\n       googletag.display('gpt-passback');\n   });\n<\\script>\n</div>";
};