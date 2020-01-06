integration.meta = {
  'sectionID': '125754',
  'siteName': 'AT5 - Desktop - (NL)',
  'platform': 'desktop'
};

integration.testParams = {
  'desktop_resolution': [1300]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '706385',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1080,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_ServePassbackInIframe' : false
};

integration.on('adCallResult', function (e) {
  if (e.data.hasSkin) {
    $(".nav-bar-submenu").css({
      "left": "0",
      "right": "0"
    });
    $(".nav-bar  , .nav-bar-submenu , .no-padding, .breakers-container, .footer, .specials, .recommended , .gallery-container ").css({
      "max-width": "1080px",
      "margin": "0 auto"
    });
    $(".footer__section, .footer__copyright").css({
      "padding-left": "20px",

    });
    window.unloadPageskin = function () {
      try {
        integration.destroy();
      } catch (e) {}
    };
  }
});

/* Passback Tag */
window.ISMPassback = function () {
  return "<script type=\"text/javascript\">\n   document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=182099&w=1800&h=1000&ic='\n+ (window.tokuslid_ic_1800x1000 || '') + '&sb='\n+ (window.tokuslid_sb_1800x1000 || '') + '&gd='\n+ (window.tokuslid_gd_1800x1000 || '') +  '\">'\n+ '</scr' + 'ipt>');\n<\\script>";
};