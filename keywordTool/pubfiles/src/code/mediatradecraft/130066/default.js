integration.meta = {
    'sectionID' : '130066',
    'siteName' : 'Just Jared - Tablet - (INT) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1050,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.on("layoutChange", function(e) {
            integration.custom.floatingButtons();
            $(window).resize(function() {
                integration.custom.floatingButtons();
            });
        });

        integration.custom.floatingButtons = function() {
            var width = $(window).width();
            if (width > 1260 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
                var sideWidth = (width - 1050)/2; /* content width divided by 2 */
                $('head').append('<style>.cnx-highlights-container{right:' + sideWidth  +'px !important }</style>');
                $('head').append('<style>#midL300outRail{left:' + sideWidth   +'px !important}</style>');
                $('head').append('<style>#topR300outRail{right:' + sideWidth  +'px !important}</style>');
            } else {
                $('head').append('<style>.cnx-highlights-container{right:20px !important}</style>');
                $('head').append('<style>#midL300outRail{left:10px !important}</style>');
                $('head').append('<style>#topR300outRail{right:20px !important}</style>');
            }
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#page, #footer').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});

            integration.on("layoutChange", function(e) {
                integration.custom.floatingButtons();
                $(window).resize(function() {
                    integration.custom.floatingButtons();
                });
            });

            integration.custom.floatingButtons = function() {
                var width = $(window).width();
                if (width > 1260 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
                    var sideWidth = (width - 1050)/3; /* content width divided by 2 */
                    $('head').append('<style>.cnx-highlights-container{right:300px !important }</style>');
                    $('head').append('<style>#midL300outRail{left:10px !important}</style>');
                    $('head').append('<style>#topR300outRail{right:300px !important}</style>');
                } else {
                    $('head').append('<style>.cnx-highlights-container{right:20px !important}</style>');
                    $('head').append('<style>#midL300outRail{left:10px !important}</style>');
                    $('head').append('<style>#topR300outRail{right:20px !important}</style>');
                }
            }
        }
    }
});


