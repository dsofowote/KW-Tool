integration.meta = {
    'sectionID' : '129144',
    'siteName' : 'Der Westen - Tablet - ( AT CH DE )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058455',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : true,
    'plr_ConsentString' : 'BOevd0nOevd0nAKABBENBxoAAAAiCAJgAUABYAFQALgAZABAADIAIgATgCEA',
    'plr_URLKeywords' : 1,
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.on("layoutChange", function(e) {
          integration.custom.floatingButtons();
          $(window).resize(function() {
              integration.custom.floatingButtons();
          });
              integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
              integration.custom.InSkinBottomNav();
              $( document ).scroll(function() {
                  integration.custom.InSkinBottomNav();
              });
      });

      integration.custom.floatingButtons = function() {
        var width = $(window).width();
        if (width > 1200 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
          var sideWidth = (width - 960) / 2;
          $(".cleverpush-bell").css({
            "left" : sideWidth,
            "bottom": "100px"
        });
      } else {
        $(".cleverpush-bell").css({
          "left" : sideWidth,
          "bottom": "100px"
      });

    }
};

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.page').css({'left':'-152px'});
            integration.on("layoutChange", function(e) {
                integration.custom.floatingButtons();
                $(window).resize(function() {
                    integration.custom.floatingButtons();
                });
                    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
                    integration.custom.InSkinBottomNav();
                    $( document ).scroll(function() {
                        integration.custom.InSkinBottomNav();
                    });
            });

            integration.custom.floatingButtons = function() {
              var width = $(window).width();
              if (width > 1200 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
                var sideWidth = (width - 960) / 2;
                $(".cleverpush-bell").css({
                  "left" : "20px",
                  "bottom": "100px"
              });
            } else {
              $(".cleverpush-bell").css({
                "left" : "20px",
                "bottom": "100px"
            });

          }
      };
        }
    }
});


/* Passback Tag */
window.ISMPassback = function() {
  return "<script>\n\n    if (typeof parent.fd_inskin_create_passback !== 'undefined') {\n\n        parent.fd_inskin_create_passback();\n\n    }\n\n<\\script>";
};
