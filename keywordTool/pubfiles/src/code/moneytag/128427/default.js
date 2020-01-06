integration.meta = {
   'sectionID' : '128427',
   'siteName' : ' Challenges - Smartphone - (FR)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1012310',
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
      $('html').addClass('inskinLoaded');
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      var cwidth = $(window).width() - integration.custom.FrameSideRight;
      var stylesCSS = '<style type="text/css">';
      stylesCSS += 'html.inskinLoaded {max-width: ' + cwidth + 'px; overflow-x: visible;}';
      stylesCSS += '.inskinLoaded body{max-width: ' + cwidth + 'px; min-width: unset;}';
      stylesCSS += '.inskinLoaded .pub-container-haut{display: none !important;}';
      stylesCSS += '</style>';
      $('head').append(stylesCSS);
   }
});

integration.on('adClose', function(e) {
   $('html').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div>\n\n \n\n<script type='text/javascript'>\n\n(function(){\n\np=function(e,t){\n\nt=t||{};var n=document.createElement('script');\n\nvar r='https:'==window.location.protocol?'https://':'http://';\n\nn.setAttribute('data-cfasync',false);\n\nn.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed();\n\nn.type='text/javascript';n.async='true';\n\nn.onload=n.onreadystatechange=function(){\n\nvar n=this.readyState;if(n&&n!='complete'&&n!='loaded')return;\n\ntry{top.AKSdk.init(e,t);top.AKSdk.call_action('default_read_article' ); }catch(r){}\n\n};\n\ntry{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){};\n\n};\n\np({\"desktop\":\"LCg3dz1ja7OZtQywm6uyGw==\",\"mobile\":\"LCg3dz1ja7OZtQywm6uyGw==\"},{});\n\n})()\n\n<\\script>";
};