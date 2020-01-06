integration.meta = {
   'sectionID' : '125835',
   'siteName' : 'SundayMore - Smartphone - ( HK )',
   'platform' : 'smartphone'
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
   'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '982592',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     setTimeout(function() {
         window.dispatchEvent(new Event('resize'));
     }, 250);
     var headHeight = $(".post-header").height();

      $('html').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded{padding: 0 74px 0 0 !important;}';
      stylesCSS += '.inskinLoaded #page{margin-top:' + headHeight + 'px!important;}';
      stylesCSS += '.inskinLoaded .ism-close{top:' + headHeight + 'px!important;}';
      stylesCSS += '.inskinLoaded .ism-frame{margin-top:' + headHeight + 'px!important;}';
      stylesCSS += '.inskinLoaded .post-article{padding-left: 0px!important;}';
      stylesCSS += '.inskinLoaded .footer_fixed.footer_show{z-index: 4!important;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on('layoutChange', function(e) {
  integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
  integration.custom.ww = $(window).width();
  integration.custom.cw = integration.custom.ww - integration.custom.PageSkinRightPanel;
  var stylesCSS = '<style type="text/css">';
  stylesCSS += '.inskinLoaded .footer_fixed{width: ' + integration.custom.cw + 'px!important;}';
  stylesCSS += '</style>'
  $('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
   $('html').removeClass('inskinLoaded');
   setTimeout(function() {
       window.dispatchEvent(new Event('resize'));
   }, 250);
});
