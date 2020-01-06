integration.meta = {
    'sectionID' : '128636',
    'siteName' : 'Ajel - (Desktop) - (KSA)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027926',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1190,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>body{overflow-x: visible !important;}</style>");
		$("head").append("<style> .page-wrapper {width: 1190px !important;}</style>");
		$("head").append("<style> .auto-container {max-width: 100% !important;}</style>");
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
  console.log(width);
    if (width < 1542 || integration.custom.isSuper) {
        var sideWidth = (width - 1190)/2;
        $(".foxpush_blocked_box_left").css({
            "margin-left" : sideWidth + 15
        });
    } else {
      $(".foxpush_blocked_box_left").css({
          "margin-left" : 0
      });
    }
}
