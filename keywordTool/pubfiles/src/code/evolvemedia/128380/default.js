integration.meta = {
   'sectionID' : '128380',
   'siteName' : 'Mandatory - Smartphone - (UK)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '1007238',
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
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .search-form.js-search.expanded, .inskinLoaded .menu-sidebar.js-menu.expanded, .inskinLoaded .header{z-index: 10;}';
      var containerPadding = $(".container").css("padding-left");
      stylesCSS += '.inskinLoaded .widget_text.insticator-holder.widget_custom_html{margin-left: -' + containerPadding + ';}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
