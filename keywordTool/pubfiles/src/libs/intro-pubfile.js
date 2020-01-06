  // window and document:
  var window;
  try { window = setWindow(); } catch (e) { window = parentWindow; }
  var document = window.document;

  // namespaces:
  var ISM = window.InSkin || (window.InSkin = {}),
      ns = ISM.PublisherCode || (ISM.PublisherCode = {}),
      LIB = {},
      tests = ns.tests || (ns.tests = {}),
      util,
      $,
      kwFilters = ns.kwFilters || (ns.kwFilters = {}),
      kwLists = ns.kwLists || (ns.kwLists = []);

  // script ID, used to identify this Publisher Script:
  var SCRIPT_ID = '{{SCRIPT_ID}}';

  // date and time this file was built, used as cachebuster:
  var BUILD_DATETIME = '{{BUILD_DATETIME}}';

  // this is where we keep track of what Publisher Scripts were loaded:
  if (!ns.loadedPublisherScripts) {
    ns.loadedPublisherScripts = {};
  }

  currentWindow.ismWindow = window;
