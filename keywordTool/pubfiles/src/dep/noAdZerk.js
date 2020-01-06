/* This dependency is used to disable AdZerk on integrations where the publisher has a ads.txt file but has not included us in it */
integration.on('init',function(){
   integration.params.plr_AdProviders = ["ISAP"];
});
