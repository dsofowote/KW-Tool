integration.meta = {
    'sectionID' : '130019',
    'siteName' : 'Women\'s Health Australia  - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1099530',
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
        if ($(".Navbar").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".Navbar");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -45
			});
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .PageWrap {overflow-x: visible}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
    $('head').append('<style type="text/css"> .ism-anchor {top: 0px !important}</style>');
    $(document).scroll(function() {
        var scrolltop = $(document).scrollTop();
        if (scrolltop > 45) {
            $('head').append('<style type="text/css"> .ism-anchor {top: 45px !important}</style>');
        } else {
            $('head').append('<style type="text/css"> .ism-anchor {top: 0px !important}</style>');
        }
    });
    $(".ism-anchor").css({"z-index" : "998"});
    $(".ism-close").css({"margin-top": "0px"});
    $('.ism-close').on('click', function() {
        $(document).off('scroll');
    });

});

integration.on("pagelead:layoutChange", function(e) {
    $(document).scroll(function() {
        var scrolltop = $(document).scrollTop();
        $(".ism-close").css({"top": "45px"});
        $('head').append('<style type="text/css">.ism-indicator {top: 45px !important}</style>');
    });
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/60035833/PAC/womens_health', [[320,50]])\n.setTargeting('passback', ['inskin'])\n.setTargeting('position', ['1'])\n.setTargeting('pagenumber', ['1'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>";
};