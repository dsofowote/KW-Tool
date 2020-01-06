integration.meta = {
	'sectionID' : '126085',
	'siteName' : 'Apple Daily Taiwan - Desktop',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707875',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
     var headHeight = $("header").height();
		 var redHeight = $(".sp_talk_top").height();
     var navHeight = $(".ndgNav_scrollshow").height();
		 var headerHeight = headHeight + redHeight;
     var scrollpsHeight = headerHeight - navHeight;
     var width = $(window).width();
     var sideWidth = (width - 990)/2;
		 var url = $(location).attr('href');
		 var current_path = url.split('/');
     if ($(".soil").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore(".soil");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headerHeight,
                plr_ScrollAdjustment : -scrollpsHeight + 1
            });
        }
    $(".soil").css({
   		"padding-top" : "15px"
   	});
    $("header").css({
      "margin-bottom" : "0px"
    });
    $("#extras, .ndgFooter_corpfoot").css({
      "margin" : "0 auto",
      "width" : "990px"
    });
    $(".back-to-top-side").css({
        "right" : sideWidth,
				"z-index" : "1000"
    });
		if (jQuery.inArray('tw.video.appledaily.com', current_path)!='-1') {
			$("#inskinanchor").css({
				"margin-top" : "-44px"
			});
			integration.base.setCfg({
					plr_ScrollAdjustment : -scrollpsHeight + 45
			});
		} else {
			$("#inskinanchor").css({
				"margin-top" : "0px"
			});
			integration.base.setCfg({
					plr_ScrollAdjustment : -scrollpsHeight + 1
			});
		}
   }
});
