/* This dependency is used to disable User Matching on integrations where we do not want to run it */
integration.on('init',function(){
   integration.params.plr_EnableUserMatching = false;
});
