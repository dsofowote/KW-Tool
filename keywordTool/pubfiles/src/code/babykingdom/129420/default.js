integration.meta = {
    'sectionID' : '129420',
    'siteName' : 'Baby Kingdom - Desktop - (SG)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077012',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.ad-placeholder').css({'display':'none'});
    }
});

integration.on("adServed", function(e) {
  var headHeight = $('#header').height();
      $(".ism-anchor").css({"top" : headHeight});
			integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
				})
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"><\\script><!-- BK Super Banner --><ins class=\"adsbygoogle\" style=\"display:inline-block;width:728px;height:90px\" data-ad-client=\"ca-pub-8236361810901210\" data-ad-slot=\"1211741214\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\\script>";
};
