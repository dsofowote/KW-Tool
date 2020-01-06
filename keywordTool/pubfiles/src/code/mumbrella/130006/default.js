integration.meta = {
    'sectionID' : '130006',
    'siteName' : 'Mumbrella - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1099391',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#main").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#main");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",

            });
        }
        $('body').css({'display':'initial'});
        $('#primaryBillboard').css({'display':'none'});
        $('.footer-banner').css({'max-width':'1030px','margin':'0 auto'});
        $('.dropbox').css({'max-width':'1030px','margin':'0 auto', 'right':'0'});
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('#main').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
                        plr_PageHeightAdjustment : -headHeight,
				})
});
