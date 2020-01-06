integration.meta = {
    'sectionID' : '129503',
    'siteName' : 'Braunschweiger Zeitung (Funke Portfolio) - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1082774',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').append('<style>#socialbar_fwid1{left:590px !important}</style>');

    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\n\n    if (typeof parent.fd_inskin_create_passback !== 'undefined') {\n\n        parent.fd_inskin_create_passback();\n\n    }\n\n<\\script>";
};
