integration.on('init',function(){
    if ('connection' in navigator) {
        if (navigator.connection.saveData) {
           integration.telemetry.recordCustom("Data Saver Enabled", 1);
        }
    }
 });