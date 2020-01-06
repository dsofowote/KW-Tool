integration.meta = {
  'sectionID': '128714',
  'siteName': 'FootballFancast - Tablet - (UK) ',
  'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId': '1032752',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 960,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var width = $(window).width();
     var sideWidth = (width - 960)/2;
     integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
     $(".full-width").css({"max-width":"960px", "margin":"0 auto"});
     $(".sf_tab").css({"margin-left":-sideWidth + 20});
     $(".article .insert").css({"margin":"20px 20px 20px 0px"});
     $(".article").css({"margin":"-70px 5px 0px 15px", "width":"calc(100% - 325px)"});
     $("head").append("<style>.sf_tab.in {left:0 ; margin-left:"+ sideWidth +";}</style>");
     $("head").append("<style>.wrapper.sf_in {left: 0; margin-left: 130px;}</style>");
     $('[src*="https://widgets.snack-projects.co.uk/tickers/5p0rtz/affiliateticker.html"]').wrap("<div class='frameWrapper'></div>");
     $("head").append("<style>.frameWrapper { z-index: 0!important; max-width:980px!important; position:fixed!important;}</style>");

     if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
       $(".full-width").css({"margin":"11px"});
       $(".sf_tab").css({"margin-left":"8px"});
       $("head").append("<style>.sf_tab.in {left:0;}</style>");
       $("head").append("<style>.wrapper.sf_in {left:0;}</style>");
       $(".wrapper").css({"margin-left": "0px"});

			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				"plr_PageAlignment": "left"
			});
		}
   }
   integration._addPixel();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s)\n{d=w.document;w.ggv2id=t;s=d.createElement('script');\ns.async=true;s.src='https://js.gumgum.com/services.js';\nd.getElementsByTagName('head')[0].appendChild(s);}\n(top,'e403796a'));<\\script>";
};
