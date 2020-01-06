integration.meta = {
    'sectionID' : '129140',
    'siteName' : 'WAZ - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058452',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
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
    }
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\nif (typeof parent.fd_inskin_create_passback !== 'undefined') {\nparent.fd_inskin_create_passback();\n}\n<\\script>";
};
