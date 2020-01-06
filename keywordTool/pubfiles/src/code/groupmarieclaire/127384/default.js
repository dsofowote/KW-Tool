integration.meta = {
   'sectionID' : '127384',
   'siteName' : 'Eureka Santé -Desktop- FR',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '727646',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1020,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$(".site-frame").css({
		   "margin-top" : "10px"
      });
      $(".pxs-container").css({
         "margin" : "0 auto",
         "display" : "table"
	   });
   }
});


/* Passback Tag */
window.ISMPassback = function() {
   return "<div id='akv-overlay'></div><script type='text/javascript'> (function(){ p=function(e,t){ t=t||{};var n=document.createElement('script'); var r='https:'==window.location.protocol?'https://':'http://'; n.setAttribute('data-cfasync',false); n.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed(); n.type='text/javascript';n.async='true'; n.onload=n.onreadystatechange=function(){ var n=this.readyState;if(n&&n!='complete'&&n!='loaded')return; try{top.AKSdk.init(e,t);top.AKSdk.call_action('default_suit' ); }catch(r){} }; try{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){}; }; p({\"desktop\":\"BLLItt1ks7sT5r8ShvFglA==\",\"mobile\":\"BLLItt1ks7sT5r8ShvFglA==\"},{}); })() <\\script>";
};
