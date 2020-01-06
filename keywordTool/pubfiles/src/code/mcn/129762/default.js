integration.meta = {
    'sectionID' : '129762',
    'siteName' : 'Sports TG - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087793',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#topadheader').css({'display':'none'});
        $('#site-wrap').css({'padding-top':'30px'});
        $('.stick-around').css({'top':'0px'});
        $('body').css({'display':'initial'});
        if ($(".stick-around").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".stick-around");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
            });
        }
    }

});

integration.on("adServed", function(e) {
	var headHeight = $('#globalnav').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});


