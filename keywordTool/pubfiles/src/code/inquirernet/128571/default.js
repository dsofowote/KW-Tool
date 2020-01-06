integration.meta = {
    'sectionID' : '128571',
    'siteName' : 'Inquirer.net - Desktop - ( PH )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1023892',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_InitOnFocus' : true,
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinFrameSide = e.data.plr_FrameSide;
      var sideWidth = ($(window).width() - 1000)/2;
      $(".header").css({
        "width" : "1000px",
        "margin" : "0 auto",
        "left" : "0",
        "right" : "0",
      });
      $("footer, #foot_copy, #opinion_section, #opinion_lbl, #new_opinion_slide, #most_shared_wrap, #channel-banner").css({
        "width" : "1000px",
        "margin" : "0 auto"
      });
      $("footer section ul li").css({
        "padding-left" : "5px"
      });
      $("#blogo").css({
        "margin-top" : "0px",
        "top" : "20px"
      });
      $(".swiper-button-prev, .swiper-button-next").css({
        "top" : "74px"
      });
      $('#main_nav').css({'padding-top':'80px'});
      $('.mobilenav').css({'left': sideWidth})

    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
   integration.custom.InSkinTopNav();
   $( document ).scroll(function() {
       integration.custom.InSkinTopNav();
   });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $(".header").css({
            "top" : newheight
        });
        $(".mobilenav").css({
            "top" : newheight +50
        })
    }else{
        $(".header").css({
            "top" : "0px"
        });
        $(".mobilenav").css({
            "top" : "50px"
        });
    }
};

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $(".qni-cookmsg .mainbox").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".qni-cookmsg .mainbox").css({
            "margin-bottom" : "0"
        });
    }
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"><\\script>\n<!-- Inskin_Responsive_Passbacks -->\n<ins class=\"adsbygoogle\"\n    style=\"display:block\"\n    data-ad-client=\"ca-pub-3470805887229135\"\n    data-ad-slot=\"6944761384\"\n    data-ad-format=\"auto\"\n    data-full-width-responsive=\"true\"></ins>\n<script>\n(adsbygoogle = window.adsbygoogle || []).push({});\n<\\script>";
};
