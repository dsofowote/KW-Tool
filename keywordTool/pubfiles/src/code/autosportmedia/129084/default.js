integration.meta = {
    'sectionID' : '129084',
    'siteName' : 'RideApart - Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1049145',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var leftPanel = e.data.plr_FrameSide;
      var topHeight = $(".m1-header-main").outerHeight();
      $('.root, .m1-header-main').css({
          'width': '1024px',
          'margin': '0 auto'
      });
      $('#page_skin_top').css({
          'height': topHeight
      });
      $("head").append('<style>#floating_share_box{left: ' + leftPanel + 'px !important;} </style>');
      $("head").append('<style>.showAdSkin-desktop .pageAdSkin .pageAdSkinUrl{background-image: none !important;} </style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.root, .m1-header-main').css({
                'margin-left': '0px'
            });
            $("head").append('<style>.sidebar.ie_transform{position: static !important;} </style>');
        }
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "20"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};
