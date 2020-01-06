integration.meta = {
    'sectionID' : '129418',
    'siteName' : 'NRL Australia - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1532]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077010',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1272,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#vue-draw-overview").height();
  		var navWidth = $(".navigation").width();
      var width = $(window).width();
      var sideWidth = (width - navWidth - 1272)/2;
      console.log($(".video__media-content").length);
      if ($("article").length == 1) {
        $("<div id='inskinanchor'></div>").insertBefore("article");
        integration.base.setCfg({
        plr_AnchorParent : "#inskinanchor",
        });
      }
      if ($("#vue-draw-overview").length == 1) {
  			$("<div id='inskinanchor'></div>").insertAfter("#vue-draw-overview");
  			integration.base.setCfg({
  			plr_AnchorParent : "#inskinanchor",
  			plr_PageHeightAdjustment : -headHeight,
  			plr_ScrollAdjustment : -headHeight
  			});
  		}
      if ($(".page-title").length == 1) {
        $("<div id='inskinanchor'></div>").insertBefore(".page-title");
        integration.base.setCfg({
        plr_AnchorParent : "#inskinanchor",
        plr_PageHeightAdjustment : -headHeight,
        plr_ScrollAdjustment : -headHeight
        });
      }
      if ($(".video__media-content").length == 1) {
        $("<div id='inskinanchor'></div>").insertBefore(".video__media-content");
        integration.base.setCfg({
        plr_AnchorParent : "#inskinanchor",
        plr_PageHeightAdjustment : -headHeight,
        plr_ScrollAdjustment : -headHeight
        });
      }
  		$("body").css({
  			"overflow-x" : "visible"
  		});
      $(".u-t-bg-color-tint-rm, .hero-wrap, .page-title").css({
      	"width" : "1272px",
        "margin" : "0 auto"
      });
      $(".hero.js-parallax.hero-size--default").css({
        "background-position-y" : "calc(250px)"
      });
      $('.usabilla_live_button_container').css({
       "right" : sideWidth
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    var stylesCSS = '<style id="inskinStyles" type="text/css">';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
    $( document ).scroll(function() {
      var height = $(document).scrollTop();
      var newheight = integration.custom.PageSkinTopPanel - height;
      var newStyles = ".hero{background-position-y: " + newheight + "px !important;}";
      document.getElementById("inskinStyles").innerHTML = newStyles
    });
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100000"
    });
});
