integration.meta = {
    'sectionID' : '128750',
    'siteName' : 'Apple Daily - (PageLead Only) - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1033937',
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
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .cookies-container{top: auto; bottom: 0; z-index: 9999;}';
        stylesCSS += '.inskinLoaded #gotop{z-index: 9998;}';
        stylesCSS += '.inskinLoaded #div-GDPR-message{padding-bottom: 0px;}';
        //stylesCSS += '.inskinLoaded .article-scroll-adbanner-placeholder{display:none}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
