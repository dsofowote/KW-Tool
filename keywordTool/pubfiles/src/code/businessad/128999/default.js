integration.meta = {
    'sectionID' : '128999',
    'siteName' : 'Der Aktionaer - Tablet - (DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044457',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#menu").height();
      $('#articles, #story-details, #most-viewed, #story-newsletter, #da-depots, #follow-us, #mfooter, #nav-bar, #more-stories, #more-news, #story-subscription').css({"max-width": "974px", "padding-top":"0px"});
      if ($("#localnav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#localnav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight ,

            });
        }
      $('#inskinanchor').css({	'margin-top': headHeight	});


        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('#articles, #most-viewed, #story-newsletter, #da-depots, #follow-us, #mfooter, #story-details, #more-stories, #more-news, #story-subscription').css({"left": "-150px"});
            $('#nav-bar,#most-viewed, #story-newsletter, #da-depots, #follow-us, #mfooter').css({"margin": "0px"});
        }
    }
});
