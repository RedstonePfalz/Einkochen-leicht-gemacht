document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log("App ready");
    document.addEventListener("backbutton", onBackButtonPress, false);
}


