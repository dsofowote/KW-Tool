integration.meta = {
    'sectionID' : '129948',
    'siteName' : 'Starts at 60 - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098922',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#starlord_navbar, #starlord_collection, #starlord_footer, #starlord_article").css({
        "width" : "1180px",
        "margin" : "0 auto"
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("#starlord_navbar, #starlord_collection, #starlord_footer, #starlord_article").css({
              "margin" : "0"
            });
        }
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('#starlord_navbar').height();
      $(".ism-anchor").css({"top" : headHeight});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight
	})
});


/* Passback Tag */
window.ISMPassback = function() {
  return "<script type='text/javascript'>\n(function() {\nvar e=document.createElement('div');e.innerHTML='';\ne.setAttribute('class','adleave87571521');e.setAttribute('adleave-slot','ADLEAVE-LxB-312362-1');\nvar c=(window.top.document.body||window.top.document.getElementsByTagName('body')[0]).children[0];c.parentNode.insertBefore(e,c);\nvar a=document.createElement('script');a.type='text/javascript';a.async=true;\na.src ='//www.adwidecenter.com/adlscript/showads.php?idpub=312362&tmp='+Math.floor(Math.random()*99999999999);\nvar sa=(window.top.document.head||window.top.document.getElementsByTagName('head')[0]).children[0];\nsa.parentNode.insertBefore(a,sa);\n})();\n<\\script>";
};
