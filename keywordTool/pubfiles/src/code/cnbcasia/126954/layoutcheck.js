//Used to adjust the SRT value based on the type of article page we're served on.
integration.custom.wideArticle = document.getElementById('page_story_listicle');
if (integration.custom.wideArticle != null || integration.custom.wideArticle != undefined) {
	integration.custom.res = 1410;
} else {
	integration.custom.res = 1260;
}