integration.meta = {
  "sectionID": "125302",
  "siteName": "Cosmopolitan.fr",
  "publisher": "groupemarieclaire",
  "platform": "desktop"
};

integration.testParams = {
  "desktop_resolution": [1360]
};

integration.params = {
  'mf_siteId': '707326',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1010,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": "advertising"
};

integration.on("adCallResult", function (e) {
  if (e.data.hasSkin) {
    var headHeight = $("header#header").outerHeight();
    if ($("header#header").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter("header#header");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor",
        plr_PageHeightAdjustment: -headHeight,
      });
    }

    $("#body, #footer").css({
      "width": "100%",
      "max-width": "1010px",
      "margin" : "0 auto"
    });
    $(".Menu-list").css({
      "white-space": "normal"
    });
    $(".SiteHeader-contentContainer").css({
      "right": "0"
    });
  }
});

integration.on("layoutChange", function (e) {
  integration.custom.floatingButtons();
  $(window).resize(function () {
    integration.custom.floatingButtons();
  });
});

integration.custom.floatingButtons = function () {
  var width = $(window).width();
  if (width > 1420) {
    var sideWidth = (width - 1010) / 2;
    $(".FacebookPopin").css({
      "right": sideWidth
    });
  } else {
    $(".FacebookPopin").css({
      "right": "0px"
    });
  }
}

/* Passback Tag */
window.ISMPassback = function() {
  return "<div id='akv-overlay'></div><script type='text/javascript'> (function(){ p=function(e,t){ t=t||{};var n=document.createElement('script'); var r='https:'==window.location.protocol?'https://':'http://'; n.setAttribute('data-cfasync',false); n.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed(); n.type='text/javascript';n.async='true'; n.onload=n.onreadystatechange=function(){ var n=this.readyState;if(n&&n!='complete'&&n!='loaded')return; try{top.AKSdk.init(e,t); top.AKSdk.call_action('default_suit_HP' ); top.AKSdk.call_action('default_suit_autres_pages' ); }catch(r){} }; try{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){}; }; p({\"desktop\":\"b32MGbFKNEewFtouSj9hyw==\"},{}); })() <\\script>";
};