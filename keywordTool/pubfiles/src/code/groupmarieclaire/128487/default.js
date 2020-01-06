integration.meta = {
    'sectionID' : '128487',
    'siteName' : ' aujourdhui.com - Desktop - (FR) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1017793',
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
      var headHeight = $("#notification").height();
      var width = $(window).width();
      var sideWidth = (width - 1170)/2 + 10;
      if ($("#notification").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#notification");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }
        $("html").css({
            "overflow-x" : "hidden"
        });
        $(".navbar, .footer").css({
            "width" : "1170",
            "margin" : "0 auto"
        });
        $("head").append("<style>.ar_notif_panel{left: -" + sideWidth + "px !important;}</style>");
        $(".ar_notif_panel").css({
            "left" : -sideWidth
        });
    }
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
    $(".ar_notif_panel").css({
    "margin-bottom" : footermargin + "px"
});
	} else {
    $(".ar_notif_panel").css({
    "margin-bottom" : "0px"
    });
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div><script type='text/javascript'> (function(){ p=function(e,t){ t=t||{};var n=document.createElement('script'); var r='https:'==window.location.protocol?'https://':'http://'; n.setAttribute('data-cfasync',false); n.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed(); n.type='text/javascript';n.async='true'; n.onload=n.onreadystatechange=function(){ var n=this.readyState;if(n&&n!='complete'&&n!='loaded')return; try{top.AKSdk.init(e,t);top.AKSdk.call_action('default_read_article' ); }catch(r){} }; try{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){}; }; p({\"desktop\":\"XM2pOSxX0utDt0iogXELFw==\"},{}); })() <\\script>";
};