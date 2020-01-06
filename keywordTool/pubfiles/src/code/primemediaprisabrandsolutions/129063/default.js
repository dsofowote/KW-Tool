integration.meta = {
    'sectionID' : '129063',
    'siteName' : 'El Viajero - Desktop - (ES)  ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047222',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('body').append('<style>.cabecera{max-width:1000px !important ; margin: 0 auto; right: 0}</style>');
      $('body').append('<style>.seccion{max-width:1000px !important ; margin: 0 auto; right: 0}</style>');
      $('#contenedor').css({"max-width": "1000px"})
    }
});

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
    if (width < 1917 || integration.custom.isSuper) {
        var sideWidth = (width - 1000)/2;
        $("body").append("<style> #boton_subir{right: " + sideWidth + "px !important}</style>");
    } else {
        $("body").append("<style> #boton_subir{right: " + sideWidth + "px !important}</style>");
    }
}

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    var width = $(window).width();
    var headHeight = $(".cabecera").height();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight - headHeight;
        var sideWidth = (width - 1000)/2;
        $("#boton_subir").css({
            "margin-bottom" : footermargin + "px",
        });
    } else {
        $("#boton_subir").css({
            "margin-bottom" : "0",
        });
    }
}
