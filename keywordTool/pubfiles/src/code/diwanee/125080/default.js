integration.meta = {
  "sectionID": "125080",
  "siteName": "Yasmina",
  "publisher": "diwanee",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 1028,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#region-promoted, #region-menu, #region-footer-wrapper, #region-popup-wrapper, #region-copy-wrapper").css({
      "max-width" : "1028px",
      "margin" : "0 auto"
    });
    $("#region-header").css({
      "margin-left" : "-514px",
      "left" : "50%",
      "max-width" : "1028px"
    });
    $("html, body").css({
      "overflow-x" : "visible"
    });
    $("body").css({
      "padding-top" : "0px"
    });
    $("#region-promoted").css({
      "margin-top" : "40px"
    });
  }
});

integration.on("layoutChange", function(e) {
  integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
  $(".ism-frame").parent().css({
    "z-index": "3500"
  });
  integration.custom.InSkinTopNav();
  $(document).scroll(function() {
    integration.custom.InSkinTopNav();
  });
  integration.custom.BackToTopButton();
  $(window).resize(function() {
    integration.custom.BackToTopButton();
  });
  try {
    jQuery(window).trigger("resize");
  } catch (e) {}
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#region-header").css({
			"margin-top" : newheight
		});
	} else {
		$("#region-header").css({
			"margin-top" : "0px"
		});
	}
}
integration.custom.BackToTopButton = function() {
	$("#toTop").css({
		"z-index" : "4000000"
	});
	var width = $(window).width();
	if (width < 1028) {
		$("#region-header").css({
			"max-width" : "auto",
			"left" : "0",
			"margin-left" : "0"
		});
	} else {
		$("#region-header").css({
			"margin-left" : "-514px",
			"left" : "50%",
			"max-width" : "1028px"
		});
	}
}

