integration.meta = {
    'sectionID' : '129770',
    'siteName' : 'WorldofBuzz - Desktop - ( AU MY PH SG UK US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1088006',
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
      $('#res-img').css({'position':'relative', 'z-index':'10000001'});
      if ($("#mvp-main-body-wrap").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#mvp-main-body-wrap");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1460 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1190)/2- 10; /* content width divided by 2 */

        $(".the_champ_vertical_sharing ").css({
            "left" : sideWidth
        });
    } else {
        $(".the_champ_vertical_sharing ").css({
            "left" : "10px"
        });
    }
}

integration.on("adServed", function(e) {
	var headHeight = $('header').height() ;
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight,
            plr_ScrollAdjustment : "-550px"
				})
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\nvar sublime = sublime || {};\nsublime.pixelImpression = '%%VIEW_URL_ESC%%';\nsublime.pixelClick = '%%CLICK_URL_ESC%%';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=24132\"><\\script>";
};
