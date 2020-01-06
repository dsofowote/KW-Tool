integration.meta = {
    'sectionID' : '128978',
    'siteName' : ' Zee News - Desktop - (MENA) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1576]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044274',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }
});


integration.on("adServed", function(e) {
  $("head").append("<style>.head-bottom.page-header.fixed:after, .head-bottom:after, .head-bottom.page-header.fixed:before, .head-bottom:before {width:auto!important}</style>");
  $("head").append("<style>header, footer, .page-header, .navbar-fixed-top, .red-navigation {max-width:1316px!important; margin:auto!important}</style>");
  $("head").append("<style>.clearfix:after {display:none!important}</style>");

});
