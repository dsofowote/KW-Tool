integration.meta = {
    'sectionID' : '129141',
    'siteName' : 'WAZ - Tablet - ( AT CH DE )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058453',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : true,
    'plr_ConsentString' : 'BOevd0nOevd0nAKABBENBxoAAAAiCAJgAUABYAFQALgAZABAADIAIgATgCEA',
    'plr_FastInit' : true,
    'plr_URLKeywords' : 1
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.page-wrapper').css({
                'margin-left': '0'
            });
        }
    }
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\nif (typeof parent.fd_inskin_create_passback !== 'undefined') {\nparent.fd_inskin_create_passback();\n}\n<\\script>";
};
