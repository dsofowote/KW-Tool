integration.meta = {
    'sectionID' : '129113',
    'siteName' : 'Apple Daily US -(Publisher Booking) - (Desktop) - (US)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055266',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    var headHeight = $('#header-container').height();
    $('#main-content').css({'margin-top':'0px'}); 
     if ($("#header-container").length == 1) {
     	$("<div id='inskinanchor'></div>").insertAfter("#header-container");
     	integration.base.setCfg({
     		plr_AnchorParent : "#inskinanchor",
     		plr_PageHeightAdjustment: -headHeight
     	});

     };
    }
});

integration.on("adServed", function(e) {
	var headerHeight = $('#header-container').height();
  $("#inskinanchor").css({
         "margin-top" : headerHeight
     });
});
