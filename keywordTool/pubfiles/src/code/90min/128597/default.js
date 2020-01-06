integration.meta = {
    'sectionID' : '128597',
    'siteName' : 'Dexerto - Smartphone - ( UK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1025311',
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
        var stylesCSS = '<style type="text/css">';
        //stylesCSS += '.inskinLoaded .jw-flag-small-player.{right:100px}';
        stylesCSS += '.inskinLoaded .js-hiraku-offcanvas{z-index:20}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);

        $(".jwplayer").parent().css({
            "box-shadow" : "initial",
            "-webkit-box-shadow" : "initial",
            "z-index" : "15"
        });
    }
});

integration.on('adServed', function(e){

})

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/175840252/MMPlus/Dexerto/Passback/Mobile/320x50', [[320,50]])\n                    .setTargeting('Passback', ['InSkin'])\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n                    .display();\n<\\script>";
};
