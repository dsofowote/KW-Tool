integration.meta = {
    'sectionID' : '129537',
    'siteName' : 'Reviersport (Funke Portfolio) - Tablet - (DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085452',
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

        integration.custom.FrameSideLeft = e.data.plr_FrameSide;
        integration.custom.FrameBottom = e.data.plr_FrameBottom;
        $('#ad_top').css({'display':'none'});
        $('head').append('<style>.cleverpush-bell{left: '+ integration.custom.FrameSideLeft  +'px !important; bottom: '+  integration.custom.FrameBottom  +'px !important}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#spm-section-body').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\n\n    if (typeof parent.fd_inskin_create_passback !== 'undefined') {\n\n        parent.fd_inskin_create_passback();\n\n    }\n\n<\\script>";
};

