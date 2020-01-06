integration.meta = {
	'sectionID' : '125905',
	'siteName' : 'Alphr',

	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706507',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1230,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	//'plr_AnchorParent' : '#page',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#InSkinBrowser0 .close:before {content : none;}.main-menu ul.menu li a:after{transition: none;}</style>");
		$("#snap-content").css({
			"max-width" : "1230px",
			"margin" : "0 auto"
		});
		$("#header-group-inner").css({
			"max-width" : "1230px"
		});
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
	}
});


integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	integration.custom.floatingButtons();
$(window).resize(function() {
		integration.custom.floatingButtons();
});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#header-group-inner").css({
			"top" : newheight
		});
	} else {
		$("#header-group-inner").css({
			"top" : "0px"
		});
	}
};
integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1570 || integration.custom.isSuper) {
        var sideWidth = (width - 1230)/2;
				$("head").append("<style>#feedbackify .fby-tab-r{right: " + sideWidth +"px !important;}</style>");
    } else {
			$("head").append("<style>#feedbackify .fby-tab-r{right: 0px !important;}</style>");
    }
}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\nvar ayads_impressioncount='%%CACHEBUSTER%%';\n<\\script><script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=3541\"><\\script>";
};
