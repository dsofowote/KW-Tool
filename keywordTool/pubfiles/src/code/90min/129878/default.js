integration.meta = {
    'sectionID' : '129878',
    'siteName' : 'Mental Floss - Smarpthone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094632',
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
        $('body').addClass('inskinLoaded');
        var wwidth = $(window).width();
        var headHeight = $(".main-header").outerHeight();
        if ($(".main-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".main-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #page, .inskinLoaded #in-page, .inskinLoaded .footer-section{float: none;}';
        stylesCSS += '.inskinLoaded .main-header{width: ' + wwidth + 'px;}';
        stylesCSS += '@media only screen and (max-width: 395px) {.inskinLoaded .article-body, .inskinLoaded .related-notch-section, .inskinLoaded .share-section, .inskinLoaded .subscribe-nl-section{margin-left: 10px; margin-right: 10px;}}';
      stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('#inskinanchor').remove();
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'mentalfloss.com/Passback/1x1' ### Size: [[1,1]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/mentalfloss.com/Passback/1x1', [[1,1]]) .setTargeting('Passback', ['InSkin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display(); <\\script>\n<!-- End -->";
};
