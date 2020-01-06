// Integration META information:
integration.meta = {
    'siteName': 'Header Bidding Test Site',
    'platform': 'desktop',
    'restrictions': ''
  };
  
  integration.params = {
    'mf_siteId' : '1059494',
    'srv_SectionID': '000000',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_ContentW': 1010,
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_Multiwin' : false
  };

  integration.on('adServed', function(){
    $("#form-configurations").css({
      "max-width" : "1000px",
      "margin" : "0 auto"
    })
    $(".ism-frame").parent().css({
      "z-index" : "1"
    });
  });
  