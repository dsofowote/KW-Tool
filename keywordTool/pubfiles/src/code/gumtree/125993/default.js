integration.meta = {
   'sectionID': '125993',
   'siteName': 'Gumtree - Desktop - (UK)   ',
   'platform': 'desktop'
};

integration.testParams = {
   'desktop_resolution': [1580]
};

//for escaping iframe
function setWindow() {
   return currentWindow.top;
}

integration.flaggedTests = [];

integration.params = {
   'mf_siteId': '743886',
   'plr_PageAlignment': 'center',
   'plr_ContentW': 1320,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID': '',
   'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
   if (e.data.hasSkin) {
      
      if ($("header.header").length == 1) {
         $("<div id='inskinanchor'></div>").insertAfter("header.header");
         var headHeight = $("header.header").outerHeight();
         integration.base.setCfg({
            plr_AnchorParent: "#inskinanchor",
            plr_PageHeightAdjustment: -headHeight
         });
      }

      $('#top_takeover, footer, .grid-container, .container, .image-app-banner-footer, .footer-banner-container').css({
         "max-width": "1320px",
         "margin": "0 auto",
         "right" : "0px",
         "left" : "0px"
      });

      $("#top_takeover, #vipBanner").hide();
      $("#homeSideAd").hide();
      $(".home-side-ad").hide();
   }
});


/* Passback Tag */
window.ISMPassback = function () {
   return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-5105067122536534\";\n/* Passback_Inskin_Top */\ngoogle_ad_slot = \"Passback_Inskin_Top\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};