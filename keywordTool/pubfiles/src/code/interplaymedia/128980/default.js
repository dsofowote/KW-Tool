integration.meta = {
    'sectionID' : '128980',
    'siteName' : 'Homesales - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044410',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1270,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".navbar").height();
      var searchHeight = $(".mb15").height();
      console.log(searchHeight);
      $('.main-wrapper, .footer, .propcalc-header, #content,').css({	"max-width": "1260px", 'margin': '0 auto'	});
      $('#header').css({	'margin': 'auto', 'padding': '0px'	});
      $('.search-container').css({	'background-position': '74% top'	});
      $('.search-fixed').css({	'width': '1260px', 'margin': '0 auto'	});


      if ($(".main-wrapper").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore(".main-wrapper");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight ,
            });
        }

        $('#inskinanchor').css({	'margin-top': headHeight	});

    }
});
