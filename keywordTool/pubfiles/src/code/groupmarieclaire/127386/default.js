integration.meta = {
	'sectionID' : '127386',
	'site' : 'Eureka Sant� - Smartphone - FR',
	'product' : 'PageSkin Edge on smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '721517',
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
			var hHeight = $('#menu-mobile').height();
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += 'body.inskinLoaded {margin-top: ' + hHeight + 'px;}';
			stylesCSS += '.inskinLoaded .site-frame{padding-top: 0px;}';
			stylesCSS += '.inskinLoaded .news.frame img{height: auto;}';
			stylesCSS += '.inskinLoaded #footer1 li.second, .inskinLoaded li.third, .inskinLoaded li.fourth{position: relative; right: -25px; border-right: 0px; width: 6%;}';
      stylesCSS += '.inskinLoaded #footer1 > li.first{margin-left: 15px; border-right: 0px;}';
			stylesCSS += '</style>'
      $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
