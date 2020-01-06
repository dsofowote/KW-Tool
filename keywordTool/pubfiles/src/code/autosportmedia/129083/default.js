integration.meta = {
    'sectionID' : '129083',
    'siteName' : 'RideApart - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1049144',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1280,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("body").addClass("showAdSkin-desktop");
      $('.m1-header-main, .m1-bg-dark-gray').css({
          'max-width': '1280px',
          'margin': '0 auto'
      });
      $(".box-item-pre-left").css({"padding-left": "25px"});
      $('.m1-header-main').css({
          'left': '0',
          'right': '0'
      });
      if (e.data.productType === "PageSkinSuperwide" || e.data.productType === "PageSkinPlusSuperwide"){
        var width = $(window).width();
        var sideWidth = (width - 1280)/2;
        $("head").append('<style>#floating_share_box{left: ' + sideWidth + 'px !important;}</style>');
      }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 970;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};
