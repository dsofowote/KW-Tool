integration.meta = {
    'sectionID' : '129735',
    'siteName' : 'New Idea - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087167',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($(".Header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".Header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : - 43
			});
		}
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-close {margin-top: 0px}';
        stylesCSS += '.inskinLoaded .PageWrap {overflow-x: visible}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index" : "99"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/60035833/PAC/New_Idea', [[320,50]])\n  .setTargeting('passback', ['inskin'])\n  .setTargeting('position', ['1'])\n  .setTargeting('pagenumber', ['1'])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n  <\\script>";
};