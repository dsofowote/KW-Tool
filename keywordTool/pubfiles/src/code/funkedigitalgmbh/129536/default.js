integration.meta = {
    'sectionID' : '129536',
    'siteName' : 'Braunschweiger Zeitung (Funke Portfolio) - Tablet- (DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085451',
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

        integration.custom.FrameSideLeft = e.data.plr_FrameSide;
        integration.custom.FrameBottom = e.data.plr_FrameBottom;
        $('.cleverpush-bell').css({'left': integration.custom.FrameSideLeft, 'bottom': integration.custom.FrameBottom  });
        $('head').append('<style>.socialbar.sticky{left: '+ integration.custom.FrameSideLeft  +'px !important}</style>');
        // $('#socialbar_fwid1').css({'left': '240px'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('.page-wrapper').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\n\n    if (typeof parent.fd_inskin_create_passback !== 'undefined') {\n\n        parent.fd_inskin_create_passback();\n\n    }\n\n<\\script>";
};
