integration.meta = {
    'sectionID' : '128776',
    'siteName' : ' Executive Style - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034601',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 50
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".header-wrap").outerHeight() + $(".navigation").outerHeight();
      if ($(".navigation").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".navigation");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        $('.outer-wrap, .carousel--related-stories:before').css({
			      'max-width': '980px',
            'margin' : '0 auto'
		     });
        $("head").append("<style>.carousel--related-stories:before {max-width: 980px !important; margin: 0 auto;}</style>");
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\"><!--google_ad_client = \"ca-pub-8027655917349410\";/* AdX InSkin PageSkin Passback - ExecutiveStyle */google_ad_slot = \"InSkinPB-ExecStyle\"; google_ad_width = 728; google_ad_height = 90; //--><\\script><script type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\"><\\script>";
};
