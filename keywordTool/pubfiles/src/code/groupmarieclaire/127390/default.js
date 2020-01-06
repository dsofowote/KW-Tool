integration.meta = {
	'sectionID' : '127390',
	'siteName' : 'Tête à modeler - Desktop - FR',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '731269',
	'plr_PageAlignment' : 'center',
	'plr_ContentW': 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			var width = $(window).width();
			var sideWidth = (width - 1170) / 2;
			$("header, footer").css({"width":"1170px", "margin": "0 auto", "left":"0" , "right":"0"});
			$(".ad-banner").css({"display":"none"});
			$(".nav-wrapper").css({	"left" : sideWidth});
			$('.h-waves, .f-waves').css({'display':'none'});
			$('body').append('<style>#background{padding-top:0px !important; background: #fff !important}</style>');
			$('body').append('<style>body{background: #fff !important}</style>');
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('header').outerHeight();
			integration.base.setCfg({
        plr_ScrollAdjustment : -headHeight,
				plr_PageHeightAdjustment : -headHeight
			});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div><script type='text/javascript'> (function(){ p=function(e,t){ t=t||{};var n=document.createElement('script'); var r='https:'==window.location.protocol?'https://':'http://'; n.setAttribute('data-cfasync',false); n.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed(); n.type='text/javascript';n.async='true'; n.onload=n.onreadystatechange=function(){ var n=this.readyState;if(n&&n!='complete'&&n!='loaded')return; try{top.AKSdk.init(e,t); top.AKSdk.call_action('default_suit' ); top.AKSdk.call_action('default_suit_rub' ); top.AKSdk.call_action('default_suit_hp' ); }catch(r){} }; try{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){}; }; p({\"desktop\":\"yxmy2qpOcA8Xeudo8G8apg==\"},{}); })() <\\script>";
};