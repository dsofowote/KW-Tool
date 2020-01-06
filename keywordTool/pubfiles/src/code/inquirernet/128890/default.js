integration.meta = {
    'sectionID' : '128890',
    'siteName' : 'Inquirer.net - Tablet - ( AE AU CA JP PH SA SG US )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040685',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".header").css({
        "width" : "1000px",
        "margin" : "0 auto",
        "left" : "0",
        "right" : "0",
        "position" : "relative"
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
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".header, #main_nav, #inq_section>div, #opinion_section, footer").css({"margin-left":"0px"});
            $(".qni-cookmsg .mainbox").css({"margin-left":"30px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

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
