integration.meta = {
    'sectionID' : '129504',
    'siteName' : 'Reviersport (Funke Portfolio) - Desktop - (DE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1082775',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\n\n    if (typeof parent.fd_inskin_create_passback !== 'undefined') {\n\n        parent.fd_inskin_create_passback();\n\n    }\n\n<\\script>";
};

