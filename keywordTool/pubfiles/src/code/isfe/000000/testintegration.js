// Integration META information:
integration.meta = {
  'siteName': 'ISFE Test',
  'platform': 'desktop',
  'restrictions': ''
};

integration.params = {
  'srv_SectionID': '000000',
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_ContentW': 960,
  'plr_UseCreativeSettings': true,
  'plr_Offline': true
};

integration.on('adServed', function() {
  html = '<html><head></head><body>' + this.params.adm + '</body></html>';

  var iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.height = '1px';
  iframe.style.width = '1px';
  iframe.style.left = '-10px';
  iframe.style.top = '-10px';

  document.body.appendChild(iframe);
  iframe.contentWindow.document.open('text/html', 'replace');
  iframe.contentWindow.document.write(html);
  iframe.contentWindow.document.close();
});
