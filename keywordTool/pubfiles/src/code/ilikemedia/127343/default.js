integration.meta = {
	'sectionID' : '127343',
	'siteName' : 'Livestrong - Desktop - (INT ex US )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.channelHome = ['/recipes/', '/cat/sports-and-fitness/', '/cat/health/', '/cat/sports-and-fitness/', '/workouts/'];

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '713131',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',

	"plr_PageScanExclude" : "#rcp-slider, .related_content_rail__list, .content_card_deck__row, .js-fb-comments, .editor_pick, script",
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#footer, #privacy-policy").css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		$("head").append("<style>header{max-width: 1020px !important;margin: 0 auto !important;}</style>");
		$("head").append("<style>.top_header--fixed{left:0px;right:0px} .article_body{top:10px !important;}</style>");
		$("head").append("<style>body > div.container.article_body.js-article_body{margin-top: 0 !important;}</style>");
		$("head").append("<style>.container--homepage{margin: auto; width: 1020px;}</style>");



		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}

		$(".container.container--hubpage").css({
			"max-width" : "1020px",
			"margin" : "auto"
		});
	}
});


integration.on("adServed", function(e) {
    var frames = $(".ism-frame");
    var panelWidth = $(frames[1]).width();
    if (parseInt(panelWidth) > 160){
      integration.custom.isSuper = true;
    }
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
    $(".ism-frame").parent().css({
        "z-index" : "990001"
    });
});


integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	setTimeout(function() {
		$(".slick-next.slick-arrow").trigger("click");
	}, 100);
	integration.custom.InSkinTopNav();
	$( document ).scroll(function() {
			integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $(".social_share_container").css({
						"z-index" : "1000000",
            "margin-top" : newheight
        });
    }else{
        $(".social_share_container").css({
						"z-index" : "1000000",
            "margin-top" : "0px"
        });
    }
}

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1380 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1020) / 2;
		$(".social_share_container").css({
			"left" : sideWidth + 10
		});
		$(".qc-cmp-persistent-link, .jwplayer__container.jwplayer__container--sticky").css({
			"right" : sideWidth + 10
		});

	} else {
		$(".social_share_container").css({
			"left" : "0px"
		});
		$(".qc-cmp-persistent-link, .jwplayer__container.jwplayer__container--sticky").css({
			"right" : "0px"
		});
	}
}
