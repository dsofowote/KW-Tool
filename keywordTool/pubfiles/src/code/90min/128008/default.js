integration.meta = {
	'sectionID' : '128008',
	'siteName' : 'Floor 8 - Desktop - ( UK ES US )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965951',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		$("footer").css({
			"max-width" : "1200px",
			"margin" : "0 auto"
		});
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				// plr_PageHeightAdjustment : -54
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
        var sideWidth = (width - 1200)/2; /* content width divided by 2 */
        $("._3zEEtS_0KXn3fBbZiqO5nS").css({
            "right" : sideWidth
        });
    } else {
        $("._3zEEtS_0KXn3fBbZiqO5nS").css({
            "right" : "10px"
        });
    }
}

integration.on("adServed", function(e) {
	var headHeight = $('header').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -headHeight
				})
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'Floor8.com/Passback/970x250' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/Floor8.com/Passback/970x250', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script><!-- End -->";
};
