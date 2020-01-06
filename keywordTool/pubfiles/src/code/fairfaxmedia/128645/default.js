integration.meta = {
    'sectionID' : '128645',
    'siteName' : 'Drive - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028297',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      setTimeout(function() {
          window.dispatchEvent(new Event('resize'));
      }, 250);
      integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
      integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
      var width = $(window).width();
      var contentWidth = $(window).width() - integration.custom.PageSkinRightPanel;
      var scrollAdjHeight = $(".homePageHeroMobile").height() - $(".outerNav").height();
      var headHeight = $(".outerNav").outerHeight() + $(".breadcrumb").outerHeight();
      integration.base.setCfg({
          plr_ScrollAdjustment : -scrollAdjHeight,
          plr_PageHeightAdjustment : -20
      });
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .item.slick-slide.slick-current{width: calc( ' + contentWidth + 'px - 41px) !important;}';
        stylesCSS += '.inskinLoaded button.enquiryButton#chat-float, .inskinLoaded #designstudio-minimize{right: ' + (integration.custom.PageSkinRightPanel + 10) +'px!important;}';
        stylesCSS += '.inskinLoaded .homeList3 .img, .inskinLoaded .homeList3 .items, .inskinLoaded .homeList1 .items {max-width: ' + (contentWidth + 35) + 'px;}';
        stylesCSS += 'body.inskinLoaded.index .homePageHeroMobile {width: ' + contentWidth + 'px; top: ' + (integration.custom.PageSkinTopPanel + 50) + 'px;}';
        if ($(".homePageHeroMobile").length > 0) {
              stylesCSS += 'body.inskinLoaded {border-top: 60px solid #fff;}';
              stylesCSS += '.inskinLoaded .item.slick-slide.slick-current{width: calc( ' + contentWidth + 'px - 41px) !important;}';
              stylesCSS += 'body.inskinLoaded.index .homePageHeroMobile {width: ' + contentWidth + 'px; top: ' + (integration.custom.PageSkinTopPanel + 50) + 'px;}';
              stylesCSS += '.inskinLoaded .mobileOuter {margin-top: 85px;}';
          } else {
              stylesCSS += 'body.inskinLoaded {border-top: ' + headHeight + 'px solid #fff;}';
              stylesCSS += '.inskinLoaded .mobileOuter {margin-top: 25px;}';
          }
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on("adServed", function(e) {
  var headHeight = $("#navigation").height();
  var homeBannerHeight = $(".homePageHeroMobile").height() - $("#navigation").height();
  if ($(".homePageHeroMobile").length > 0) {
        $(".ism-frame").parent().css({
            "top" : -homeBannerHeight
        });
        integration.base.setCfg({
            plr_PageHeightAdjustment : homeBannerHeight - 20,
            plr_ScrollAdjustment : 0
        });
    } else if ($(".nav2").length > 0) {
      var head2Height = $(".nav2").height();
      $(".ism-frame").parent().css({
          "top" : head2Height
      });
    } else {
        $(".ism-frame").parent().css({
            "top" : "0px"
        });
        integration.base.setCfg({
            plr_ScrollAdjustment : 0
        });
    }
});

integration.on("layoutChange", function(e) {
        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        }, 250);
      	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
      	var stylesCSS = '<style id="inskinStyles" type="text/css">';
      	stylesCSS += '</style>'
      	$('head').append(stylesCSS);
      	integration.custom.InSkinBottomNav();
      	$(document).scroll(function() {
      		integration.custom.InSkinBottomNav();
      	});
});


integration.custom.InSkinBottomNav = function() {
      	var docheight = $(document).height();
      	var winheight = $(window).height();
      	var scrolltop = $(document).scrollTop();
      	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
      		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
      		var newStyles = ".inskinLoaded button.enquiryButton#chat-float, .inskinLoaded #designstudio-minimize{margin-bottom:" + footermargin + "px !important;}";
      	} else {
      		var newStyles = ".inskinLoaded button.enquiryButton#chat-float, .inskinLoaded #designstudio-minimize{margin-bottom:0px !important;}";
      	}
      	document.getElementById("inskinStyles").innerHTML = newStyles
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 250);
});
