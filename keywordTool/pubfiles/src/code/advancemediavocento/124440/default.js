integration.meta = {
  "sectionID": "124440",
  "siteName": "ABC",
  "publisher": "vocento",
  "platform": "desktop"
};

integration.telemetry.setup({
   'url': true,
   'ad-served': true,
   'base-ready': true,
   'ad-call-response': true,
   'ad-call': true,
   'failed-test': true,
   'impression': true,
   'custom': true
});

integration.testParams = {
  "desktop_resolution": [0]
};

integration.params = {
	'mf_siteId' : '706194',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 990,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_HideElementsByClass": "robapaginas",
  "plr_HideElementsByID": "megabanner",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#megabanner-id, #megabanner_portada-id, .megabanner').css({
			'display' : 'none'
		});
		$(".es-noticia").css({
			"margin-top" : "0px"
		});
	}
});

integration.on("adServed", function(e) {
  // hide their own takeover divs to ensure ours are clickable
  $('#fondo-top, #fondo-izquierda, #fondo-derecha').hide();
  // The site's own function to remove floating tab
  try {
    Ocultar_div('desplegable-cope');
  } catch (e) {}
});

integration.on("layoutChange", function(e) {
  $(document).scroll(function() {
      if ($(".cabecera-sticky.visible").length == 1){
        integration.base.setCfg({
          plr_ScrollAdjustment : 42
        });
      } else {
        integration.base.setCfg({
          plr_ScrollAdjustment : 0
        });
      }
  });
});
