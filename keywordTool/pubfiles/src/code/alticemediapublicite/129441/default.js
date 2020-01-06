integration.meta = {
    'sectionID' : '129441',
    'siteName' : 'RMC Sport - Desktop - (FR)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1544]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077751',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1284,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('footer').css({'max-width':'1284px', 'margin':'0 auto'});
      $('.pubbanner').css({'display':'none'});
      $('body').append('<style>.content_full_size{max-width:1284px !important ; margin: 0 auto !important}</style>');

    }
});

integration.on("adServed", function(e) {
  var headHeight = $('header').height();
      $(".ism-anchor").css({"top" : headHeight});
			integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
				})
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://securite.01net.com/ac?out=js&nwid=13&siteid=50037&pgid=881588&fmtid=95&tgt=origine%3Dinskin&visit=s&gdpr_consent=[sas_gdpr_consent]&tmstp=[timestamp]\"><\\script>";
};
