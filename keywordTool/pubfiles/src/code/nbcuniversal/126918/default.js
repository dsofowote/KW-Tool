integration.meta = {
    'sectionID' : '126918',
    'siteName' : 'E!onlne - Smartphone - UK',
    'platform' : 'smartphone'
};




integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707913',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_URLKeywords' : 2,
    "plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#pageHeader").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#pageHeader");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -50,
            });
        }
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">'
        stylesCSS += 'html.inskinLoaded {background-color: #252525;}';
        stylesCSS += '.inskinLoaded body{background-color: #ffffff; min-width: 300px;}';
        stylesCSS += '.inskinLoaded #mps-mboxad-sst-1{display: none;}';
        stylesCSS += '.inskinLoaded #mainNav{max-width: 450px;}';
        stylesCSS += '.inskinLoaded .topfour.clear.clearfix.topfour--short{margin-top: 5px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        
        $(".mps-ad.mps-mbanner").hide();
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "33"
    });
});

integration.on('adClose', function(e) {
      $('html').removeClass('inskinLoaded');
      $("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/4295/eonline.mobile.uk', [300, 250]).display();\n<\\script>";
};
