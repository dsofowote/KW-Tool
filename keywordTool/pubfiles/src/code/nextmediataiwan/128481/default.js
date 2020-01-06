integration.meta = {
    'sectionID' : '128481',
    'siteName' : 'NextMag Taiwan   - Smartphone - ( TW )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1017389',
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
        var width = $(window).width();
        $('body').addClass('inskinLoaded');
        if (width < 395 ) {
          var stylesCSS = '<style type="text/css">';
          stylesCSS += '.inskinLoaded .fb_iframe_widget, .inskinLoaded aside.bill-board.fluid {left: -10px;}';
          stylesCSS += ".inskinLoaded #leaderboard > div[id^='google_ads_iframe'] {margin-left: -20px;}";
          stylesCSS += ".inskinLoaded .mbtm > div[id^='google_ads_iframe'] {margin-left: -10px !important;}";
          stylesCSS += '</style>'
        }
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='div-gpt-ad-1534228135813-0' style='height:1px; width:1px;'>\n<script>\ngoogletag.cmd.push(function() { googletag.display('div-gpt-ad-1534228135813-0'); });\n<\\script>\n</div>";
};
