integration.meta = {
    'sectionID' : '128594',
    'siteName' : 'Telerama - Smartphone - (FR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1025246',
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
        integration.custom.headHeight = $(".tr-header").outerHeight();
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .footer--container{position:relative;right:15px;}';
        stylesCSS += '.inskinLoaded .mm-page > div:not(#fb-root):not([id^="sas"]):not(.ym-counter):not(.no-padding){padding-top:0px;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adServed', function(e) {
    $(".ism-frame").parent().css({
        "margin-top" : integration.custom.headHeight
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

