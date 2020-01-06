integration.meta = {
	'sectionID' : '128324',
	'siteName' : ' Archant Regionals - Desktop - (UK) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1270]
};

integration.flaggedTests = [];


integration.channelHome = [];

function setWindow() {
	return currentWindow.top;
  }

integration.params = {
	'mf_siteId' : '1003506',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			"overflow" : "visible"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggpid=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,'13077'));<\\script>";
};
